import { NextRequest, NextResponse } from 'next/server';

// Fungsi untuk mensimulasikan respons AI
// Dalam implementasi nyata, Anda bisa mengintegrasikan dengan OpenAI, Claude, atau AI service lainnya
function generateAIResponse(message: string): string {
  const responses = {
    // Greeting responses
    halo: 'Halo! Ada yang bisa saya bantu?',
    hai: 'Hai! Senang bisa membantu Anda.',
    hi: 'Hi! Apa kabar? Ada yang ingin ditanyakan?',

    // Question responses
    'apa kabar': 'Saya baik-baik saja! Bagaimana dengan Anda?',
    'siapa kamu': 'Saya adalah AI assistant yang siap membantu Anda.',
    'nama kamu': 'Saya adalah AI assistant Richard95.',

    // Technical responses
    'cara kerja':
      'Saya menggunakan AI untuk memahami dan menjawab pertanyaan Anda.',
    teknologi: 'Saya dibuat menggunakan Next.js, TypeScript, dan Tailwind CSS.',
    fitur: 'Saya bisa menjawab berbagai pertanyaan dalam bahasa Indonesia.',

    // Time responses
    'jam berapa': `Sekarang jam ${new Date().toLocaleTimeString('id-ID')}.`,
    tanggal: `Hari ini tanggal ${new Date().toLocaleDateString('id-ID')}.`,
    waktu: `Waktu saat ini: ${new Date().toLocaleString('id-ID')}.`,

    // Help responses
    bantuan: 'Tanyakan apa saja! Saya akan berusaha membantu Anda.',
    help: 'Silakan ajukan pertanyaan dan saya akan menjawabnya.',
    'bisa apa':
      'Saya bisa menjawab pertanyaan umum, memberikan informasi, dan membantu Anda.',

    // Fun responses
    lucu: 'Mengapa programmer suka gelap? Karena mereka takut dengan bug! 😄',
    joke: 'Apa bedanya kode dan kopi? Kopi membuat kita terjaga, kode membuat kita tegang!',
    cerita:
      'Ada seorang programmer yang coding 24 jam non-stop. Ternyata dia lupa logout! 😂',
  };

  const lowerMessage = message.toLowerCase().trim();

  // Cek exact match
  if (responses[lowerMessage as keyof typeof responses]) {
    return responses[lowerMessage as keyof typeof responses];
  }

  // Cek partial match
  for (const [key, value] of Object.entries(responses)) {
    if (lowerMessage.includes(key)) {
      return value;
    }
  }

  // Respons berdasarkan kata kunci
  if (
    lowerMessage.includes('terima kasih') ||
    lowerMessage.includes('thanks')
  ) {
    return 'Sama-sama! Senang bisa membantu Anda.';
  }

  if (lowerMessage.includes('programming') || lowerMessage.includes('coding')) {
    return 'Programming itu seni memecahkan masalah dengan kode!';
  }

  if (lowerMessage.includes('javascript') || lowerMessage.includes('js')) {
    return 'JavaScript adalah bahasa yang powerful untuk web development!';
  }

  if (lowerMessage.includes('react') || lowerMessage.includes('nextjs')) {
    return 'React dan Next.js adalah tools yang hebat untuk membangun aplikasi web modern!';
  }

  if (
    lowerMessage.includes('ai') ||
    lowerMessage.includes('artificial intelligence')
  ) {
    return 'AI adalah teknologi yang mengubah dunia dan cara kita bekerja!';
  }

  if (lowerMessage.includes('belajar') || lowerMessage.includes('study')) {
    return 'Belajar itu proses yang tidak pernah berhenti. Keep learning!';
  }

  if (lowerMessage.includes('project') || lowerMessage.includes('proyek')) {
    return 'Setiap project dimulai dari ide kecil. Yang penting mulai dulu!';
  }

  // Default response
  const defaultResponses = [
    'Pertanyaan yang menarik! Bisa Anda perjelas maksudnya?',
    'Hmm, saya belum bisa menjawab itu. Coba tanyakan hal lain?',
    'Maaf, saya tidak yakin dengan jawaban yang tepat. Ada pertanyaan lain?',
    'Saya sedang belajar untuk menjawab pertanyaan seperti itu.',
    'Pertanyaan yang bagus! Sayangnya saya belum bisa menjawabnya dengan baik.',
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    // Validasi input
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Validasi panjang karakter
    if (message.length > 50) {
      return NextResponse.json(
        { error: 'Message cannot exceed 50 characters' },
        { status: 400 }
      );
    }

    // Trim message
    const trimmedMessage = message.trim();
    if (!trimmedMessage) {
      return NextResponse.json(
        { error: 'Message cannot be empty' },
        { status: 400 }
      );
    }

    // Generate AI response
    const response = generateAIResponse(trimmedMessage);

    // Simulate processing delay (optional)
    await new Promise((resolve) =>
      setTimeout(resolve, 500 + Math.random() * 1000)
    );

    return NextResponse.json({
      response,
      timestamp: new Date().toISOString(),
      messageLength: trimmedMessage.length,
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle GET request for health check
export async function GET() {
  return NextResponse.json({
    message: 'Chat API is running',
    maxCharacters: 50,
    supportedLanguage: 'Bahasa Indonesia',
    timestamp: new Date().toISOString(),
  });
}
