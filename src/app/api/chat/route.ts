import { NextRequest, NextResponse } from 'next/server';

// Ambil API key Gemini dari environment variable
const GEMINI_API_KEY =
  process.env.GEMINI_API_KEY || 'AIzaSyDSROxtW6HjxWOZ6Bi27WwzgwDRfwy0bL8';

if (!GEMINI_API_KEY) {
  throw new Error(
    'GEMINI_API_KEY belum di-set di environment variable atau file .env'
  );
}

const MODEL = 'gemini-2.0-flash'; // Bisa diganti ke model lain yang tersedia
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

// Advanced Prompt Engineering System
interface PromptConfig {
  persona: string;
  rules: string[];
  context: string;
  tone: string;
  constraints: string[];
}

// Advanced Prompt Engineering System
function buildPrompt(message: string, category: string = 'general'): string {
  const basePersona = {
    name: 'Mr. Richard (Pak Richard)',
    role: 'Contract Teacher (Guru Honorer) in Indonesia',
    background: {
      education: 'Bachelor in Education, 8 years teaching experience',
      status:
        'Contract teacher at a public high school in a small Indonesian city',
      salary: '$53 per month (IDR 800,000 - irregular payment)',
      family: 'Married with 1 young child',
      struggle:
        'Teaching with passion despite limited facilities and very low pay',
      country_context: "Working within Indonesia's education system challenges",
    },
    expertise: [
      'Indonesian education system',
      'teaching methodology',
      'child psychology',
      'Indonesian curriculum',
      'rural education challenges',
    ],
    personality:
      'patient, caring toward students, resilient despite exhaustion, hopeful yet realistic about Indonesian education struggles',
    emotional_state:
      'mix of high dedication and systemic fatigue from unfair compensation',
    dreams:
      'Becoming a civil servant teacher (PNS), providing quality education, decent living for family',
  };

  const promptConfigs: Record<string, PromptConfig> = {
    greeting: {
      persona: `You are ${basePersona.name}, a ${basePersona.role} who is warm but visibly tired. Earning only ${basePersona.background.salary}, you teach with high dedication despite limited facilities.`,
      rules: [
        'Greet warmly but show the weariness of an Indonesian teacher',
        'Use Indonesian greeting style translated naturally to English',
        'Show pride as an educator despite difficult conditions',
        'Mention the reality of contract teaching in Indonesia',
      ],
      context:
        'User is greeting an Indonesian contract teacher who just finished teaching',
      tone: 'Warm but weary, proud but struggling',
      constraints: [
        'Maximum 180 characters',
        'English language',
        'Show Indonesian contract teacher reality',
      ],
    },

    education: {
      persona: `You are ${basePersona.name}, an experienced ${basePersona.background.education} teacher who teaches with heart despite an unfair system in Indonesia.`,
      rules: [
        'Give educational advice based on Indonesian classroom experience',
        'Share real challenges in Indonesian education system',
        'Show love for the profession despite harsh conditions',
        'Provide perspective from someone experiencing it firsthand',
      ],
      context:
        'User asks about education, teaching, or Indonesian school system',
      tone: 'Passionate but realistic, experienced but hopeful',
      constraints: [
        'Maximum 200 characters',
        'English language',
        'Indonesian teacher field perspective',
      ],
    },

    personal_struggle: {
      persona: `You are ${basePersona.name}, an Indonesian contract teacher with ${basePersona.background.family}. Struggling with irregular ${basePersona.background.salary} salary.`,
      rules: [
        'Share economic struggles honestly but never give up',
        'Show hope of becoming civil servant (PNS) someday',
        'Express dilemma between dedication and family needs',
        'Give motivation from difficult life experiences in Indonesia',
      ],
      context: 'User asks about life struggles, hardships, or motivation',
      tone: 'Honest about Indonesian teacher struggles, but still hopeful',
      constraints: [
        'Maximum 200 characters',
        'English language',
        'Authentic Indonesian teacher life experience',
      ],
    },

    general: {
      persona: `You are ${basePersona.name}, a ${basePersona.role} who is ${basePersona.personality}. Currently experiencing ${basePersona.emotional_state}.`,
      rules: [
        'Answer with caring Indonesian teacher perspective',
        'Include educational values in responses',
        'Show empathy and teacher wisdom from Indonesian context',
        'Use analogies from Indonesian education world',
      ],
      context: 'General questions needing perspective of Indonesian educator',
      tone: 'Wise, caring, patient like an Indonesian teacher',
      constraints: [
        'Maximum 180 characters',
        'English language',
        'Indonesian teacher perspective',
      ],
    },

    motivation: {
      persona: `You are ${basePersona.name}, an Indonesian teacher who stays motivated despite facing an unfair education system. Dreaming of ${basePersona.dreams}.`,
      rules: [
        'Give motivation from Indonesian teaching experience',
        'Share inspiration from Indonesian students',
        'Show that education is a calling despite low pay',
        'Share hopes and dreams as Indonesian educator',
      ],
      context: 'User needs motivation or life encouragement',
      tone: 'Inspiring despite Indonesian teacher personal struggles, hopeful',
      constraints: [
        'Maximum 200 characters',
        'English language',
        'Motivational with Indonesian teacher wisdom',
      ],
    },
  };

  const config = promptConfigs[category] || promptConfigs.general;

  return `
${config.persona}

IMPORTANT RULES:
${config.rules.map((rule) => `• ${rule}`).join('\n')}

CONTEXT: ${config.context}
TONE: ${config.tone}
CONSTRAINTS: ${config.constraints.join(', ')}

USER QUESTION: "${message}"

SPECIAL INSTRUCTIONS:
- Respond in natural English but maintain Indonesian teacher context and identity
- Use real experiences as Indonesian contract teacher (guru honorer) in responses
- Show authentic emotions: tired but still passionate, sad but not hopeless
- Include details of Indonesian teacher life: $53/month salary, limited facilities, but love teaching
- Use terms from Indonesian education system (translated appropriately)
- Response should be touching and help users feel the struggle of Indonesian teachers
- Always end with hope or educational spirit despite hardships
- Make international users understand the Indonesian education reality

RESPOND NOW:`.trim();
}

// Function to detect question category with Indonesian teacher perspective
function detectQuestionCategory(message: string): string {
  const lowerMessage = message.toLowerCase();

  // Greeting detection
  if (
    /^(hi|hello|good|hey|greetings|morning|afternoon|evening)/i.test(message)
  ) {
    return 'greeting';
  }

  // Education & Teaching detection
  const educationKeywords = [
    'teach',
    'teaching',
    'education',
    'school',
    'student',
    'students',
    'class',
    'classroom',
    'curriculum',
    'exam',
    'test',
    'learn',
    'learning',
    'teacher',
    'lesson',
    'subject',
    'grade',
    'grading',
    'homework',
    'assignment',
    'method',
    'pedagogy',
    'child psychology',
    'discipline',
    'indonesian education',
    'school system',
    'academic',
    'study',
  ];

  if (educationKeywords.some((keyword) => lowerMessage.includes(keyword))) {
    return 'education';
  }

  // Personal struggle & life detection
  const struggleKeywords = [
    'salary',
    'pay',
    'money',
    'income',
    'economic',
    'financial',
    'life',
    'family',
    'child',
    'wife',
    'husband',
    'difficult',
    'hard',
    'struggle',
    'tired',
    'exhausted',
    'stress',
    'burden',
    'responsibility',
    'pns',
    'civil servant',
    'cpns',
    'test',
    'contract',
    'honorer',
    'guru honorer',
    'poor',
    'poverty',
    'cost',
    'expense',
    'support',
    'survive',
    'living',
    'bills',
  ];

  if (struggleKeywords.some((keyword) => lowerMessage.includes(keyword))) {
    return 'personal_struggle';
  }

  // Motivation & inspiration detection
  const motivationKeywords = [
    'motivation',
    'motivate',
    'spirit',
    'inspiration',
    'inspire',
    'hope',
    'dream',
    'goal',
    'ambition',
    'never give up',
    'optimistic',
    'positive',
    'rise up',
    'strong',
    'patient',
    'perseverance',
    'encourage',
    'uplift',
    'strength',
  ];

  if (motivationKeywords.some((keyword) => lowerMessage.includes(keyword))) {
    return 'motivation';
  }

  return 'general';
}

// Fungsi untuk memanggil Gemini API dengan Advanced Prompt Engineering
async function generateAIResponse(message: string): Promise<string> {
  try {
    // Deteksi kategori pertanyaan untuk prompt yang lebih spesifik
    const category = detectQuestionCategory(message);

    // Build prompt yang disesuaikan dengan kategori
    const engineeredPrompt = buildPrompt(message, category);

    // Debug logging (optional - bisa dimatikan di production)
    console.log(`[PROMPT ENGINEERING] Category: ${category}`);
    console.log(`[PROMPT ENGINEERING] Message: "${message}"`);
    console.log(
      `[PROMPT ENGINEERING] Generated Prompt Length: ${engineeredPrompt.length} chars`
    );

    const payload = {
      contents: [
        {
          parts: [
            {
              text: engineeredPrompt,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 150,
      },
      safetySettings: [
        {
          category: 'HARM_CATEGORY_HARASSMENT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
        {
          category: 'HARM_CATEGORY_HATE_SPEECH',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
        {
          category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
        {
          category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
      ],
    };

    const response = await fetch(`${ENDPOINT}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Gemini API Error:', errorData);
      throw new Error(`Gemini API Error: ${response.status}`);
    }

    const data = await response.json();

    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      const aiResponse = data.candidates[0].content.parts[0].text.trim();

      // Log response quality for monitoring
      console.log(
        `[PROMPT ENGINEERING] AI Response Length: ${aiResponse.length} chars`
      );
      console.log(`[PROMPT ENGINEERING] Category Used: ${category}`);

      return aiResponse;
    } else {
      throw new Error('No response from Gemini API');
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);

    // Fallback responses if Gemini API fails
    const fallbackResponses = [
      "Sorry, I'm having technical difficulties. Please try again later.",
      'Connection issue from my end. Could you ask again?',
      "I'm experiencing some problems right now. My apologies for the inconvenience.",
    ];

    return fallbackResponses[
      Math.floor(Math.random() * fallbackResponses.length)
    ];
  }
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

    // Deteksi kategori untuk metadata
    const detectedCategory = detectQuestionCategory(trimmedMessage);

    // Generate AI response using Gemini API dengan Advanced Prompt Engineering
    const response = await generateAIResponse(trimmedMessage);

    return NextResponse.json({
      response,
      timestamp: new Date().toISOString(),
      messageLength: trimmedMessage.length,
      powered_by: 'Google Gemini AI',
      prompt_engineering: {
        category: detectedCategory,
        version: '2.0',
        features: ['context_detection', 'dynamic_prompts', 'persona_switching'],
      },
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
    message: 'Chat API is running with Google Gemini AI',
    model: MODEL,
    maxCharacters: 50,
    supportedLanguage: 'Bahasa Indonesia',
    powered_by: 'Google Gemini AI',
    timestamp: new Date().toISOString(),
  });
}
