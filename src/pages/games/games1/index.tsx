'use client'
import Phaser from 'phaser'
import GameCanvas from '@/app/game_engine/GameCanvas'

const ListGames = () => {
  const preload = (scene: Phaser.Scene) => {
    scene.load.image('center-image', '/images/token.jpeg') // path dari public
  }

  const create = (scene: Phaser.Scene) => {
    const radius = Math.min(scene.scale.width, scene.scale.height) / 4
    let progress = 0
    let isRunning = false
    let hasClicked = false
    let isGameOver = false

    const getCenter = () => ({
      centerX: scene.scale.width / 2,
      centerY: scene.scale.height / 2 - radius / 2
    })

    const { centerX, centerY } = getCenter()

    const text = scene.add.text(centerX, centerY + radius + 50, 'Press Space or Button to Start', {
      fontSize: '18px',
      color: '#ffffff',
      wordWrap: { width: scene.scale.width - 40 },
      align: 'center',
    }).setOrigin(0.5)

    const image = scene.add.image(centerX, centerY, 'center-image')
      .setDisplaySize(radius * 2, radius * 2)
      .setOrigin(0.5)

    const maskShape = scene.make.graphics({ x: 0, y: 0 })
    const mask = maskShape.createGeometryMask()
    image.setMask(mask)

    const button = scene.add.text(centerX, centerY + radius + 100, '▶ Start', {
      fontSize: '22px',
      backgroundColor: '#333',
      color: '#fff',
      padding: { x: 20, y: 10 },
    }).setOrigin(0.5).setInteractive()

    const button_reset = scene.add.text(centerX, centerY + radius + 150, '🔄 Reset', {
      fontSize: '20px',
      backgroundColor: '#666',
      color: '#fff',
      padding: { x: 18, y: 8 },
    }).setOrigin(0.5).setInteractive().setVisible(false)

    const resetGame = () => {
      progress = 0
      hasClicked = false
      isRunning = false
      isGameOver = false
      text.setText('Press Space or Button to Start')
      maskShape.clear()
      button.setVisible(true)
      button.setText('▶ Start')
      button_reset.setVisible(false)
    }

    const startGame = () => {
      if (!isRunning && !isGameOver && !hasClicked) {
        progress = 0
        hasClicked = false
        isRunning = true
        isGameOver = false
        text.setText('Wait for full reveal...')
        button.setVisible(true)
        button_reset.setVisible(false)
        button.setText('Stop')
      } else if (isRunning && !hasClicked) {
        const rounded = Math.round(progress)
        if (rounded >= 359 && rounded <= 361) {
          text.setText('🎉 YOU WIN!')
        } else {
          text.setText(`❌ Missed! Progress: ${rounded}°`)
        }

        isRunning = false
        setTimeout(() => {
          isGameOver = true
          button.setVisible(false)
          button_reset.setVisible(true)
        }, 600)
      }
    }

    button.on('pointerdown', startGame)
    button_reset.on('pointerdown', resetGame)
    scene.input.keyboard?.on('keydown-SPACE', startGame)

    scene.events.on('update', () => {
      if (isRunning && progress < 360) {
        progress += 2
        maskShape.clear()
        maskShape.fillStyle(0xffffff)
        maskShape.slice(centerX, centerY, radius, Phaser.Math.DegToRad(0), Phaser.Math.DegToRad(progress), false)
        maskShape.fillPath()
      } else if (isRunning && progress >= 360 && !hasClicked) {
        text.setText('⏳ TOO LATE! You missed it.')
        isRunning = false
        isGameOver = true
        button.setVisible(false)
        button_reset.setVisible(true)
      }
    })

    // Responsive handling
    scene.scale.on('resize', () => {
      const { centerX, centerY } = getCenter()
      image.setPosition(centerX, centerY)
      text.setPosition(centerX, centerY + radius + 50)
      button.setPosition(centerX, centerY + radius + 100)
      button_reset.setPosition(centerX, centerY + radius + 150)
    })
  }

  return (
    <main style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      backgroundColor: '#111',
    }}>
      <GameCanvas
        preload={preload}
        create={create}
        backgroundColor="#1d1d1d"
        width="100%"
        height="100%"
      />
    </main>
  )
}

export default ListGames
