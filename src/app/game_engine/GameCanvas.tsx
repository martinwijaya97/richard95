'use client'

import React, { useEffect, useRef } from 'react'
import Phaser from 'phaser'

type GameCanvasProps = {
  width?: number
  height?: number
  backgroundColor?: string
  create?: (scene: Phaser.Scene) => void
  preload?: (scene: Phaser.Scene) => void
  physicsConfig?: Phaser.Types.Core.PhysicsConfig
}

const GameCanvas: React.FC<GameCanvasProps> = ({
  width = 800,
  height = 600,
  backgroundColor = '#1d1d1d',
  create,
  preload,
  physicsConfig = {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
}) => {
  const gameRef = useRef<Phaser.Game | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return

    class MyScene extends Phaser.Scene {
      constructor() {
        super('MainScene')
      }

      preload() {
        preload?.(this)
      }

      create() {
        create?.(this)
      }
    }

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width,
      height,
      backgroundColor,
      parent: containerRef.current,
      scene: [MyScene],
      physics: physicsConfig,
    }

    if (!gameRef.current) {
      gameRef.current = new Phaser.Game(config)
    }

    return () => {
      gameRef.current?.destroy(true)
      gameRef.current = null
    }
  }, [width, height, backgroundColor, create, preload, physicsConfig])

  return <div ref={containerRef} />
}

export default GameCanvas
