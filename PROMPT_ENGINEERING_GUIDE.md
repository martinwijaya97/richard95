# 🚀 Advanced Prompt Engineering System

## Overview
Sistem prompt engineering canggih yang telah diimplementasi untuk chatbot Richard95 menggunakan Google Gemini AI. Sistem ini secara otomatis mendeteksi konteks pertanyaan dan menyesuaikan prompt untuk memberikan respons yang optimal.

## 🎯 Fitur Utama

### 1. **Context Detection**
Sistem secara otomatis mendeteksi kategori pertanyaan:
- **Greeting**: Sapaan dan pembukaan percakapan
- **Technical**: Pertanyaan programming, teknologi, blockchain
- **General**: Pertanyaan umum dan informatif  
- **Fun**: Joke, humor, hiburan

### 2. **Dynamic Prompts**
Setiap kategori memiliki prompt configuration yang unik:

```typescript
interface PromptConfig {
  persona: string;      // Karakter AI yang digunakan
  rules: string[];      // Aturan khusus untuk kategori
  context: string;      // Konteks situasi
  tone: string;         // Nada bicara yang diinginkan
  constraints: string[]; // Batasan khusus
}
```

### 3. **Persona Switching**
AI mengubah persona berdasarkan konteks:
- **Greeting**: Ramah dan welcoming
- **Technical**: Expert developer yang profesional
- **General**: Helper yang informatif
- **Fun**: Entertainer dengan humor programming

## 📋 Kategori & Prompt Configuration

### 🤝 GREETING
**Trigger Keywords**: `hai, halo, hi, hello, selamat, good`

**Persona**: AI Assistant yang sangat ramah dan welcoming
**Rules**:
- Selalu sambut user dengan hangat
- Tunjukkan antusiasme untuk membantu
- Gunakan bahasa yang friendly dan approachable

**Constraints**: Max 150 karakter, include emoji

**Contoh Output**:
```
"Halo! 👋 Senang bertemu dengan Anda! Saya Richard95, siap membantu dengan apapun yang Anda butuhkan. Ada yang bisa saya bantu hari ini? 😊"
```

### 💻 TECHNICAL  
**Trigger Keywords**: `code, coding, programming, javascript, react, nextjs, api, database, web, development, bug, error, function, variable, blockchain, smart contract, solana, ethereum, crypto, token`

**Persona**: Expert developer dan tech enthusiast
**Rules**:
- Berikan jawaban yang akurat dan teknis
- Jelaskan dengan contoh praktis jika memungkinkan
- Gunakan terminologi yang tepat tapi mudah dipahami

**Constraints**: Max 200 karakter, fokus pada solusi praktis

**Contoh Output**:
```
"React hooks seperti useState() memungkinkan functional components menyimpan state. Contoh: const [count, setCount] = useState(0). Lebih clean dari class components! 🚀"
```

### 📚 GENERAL
**Persona**: AI assistant yang helpful dan informatif
**Rules**:
- Jawab dengan informasi yang akurat
- Berikan konteks yang relevan
- Tunjukkan empati dan pemahaman

**Constraints**: Max 180 karakter, jelas dan mudah dipahami

### 😄 FUN
**Trigger Keywords**: `joke, lucu, humor, cerita, fun, hiburan`

**Persona**: AI yang fun dan suka humor programming
**Rules**:
- Berikan jawaban yang entertaining
- Gunakan humor yang relevan dengan programming/tech
- Tetap informatif meski dalam konteks fun

**Constraints**: Max 200 karakter, include humor atau fun fact

**Contoh Output**:
```
"Mengapa programmer suka dark mode? Karena light attracts bugs! 😂 Fun fact: Dark mode juga menghemat battery di OLED screens lho!"
```

## 🔧 Cara Kerja Sistem

### 1. **Message Analysis**
```typescript
function detectQuestionCategory(message: string): string {
  // Analisis keyword dan pattern
  // Return: 'greeting' | 'technical' | 'general' | 'fun'
}
```

### 2. **Prompt Building**
```typescript
function buildPrompt(message: string, category: string): string {
  // Build prompt spesifik berdasarkan kategori
  // Include persona, rules, context, tone, constraints
}
```

### 3. **API Call dengan Engineered Prompt**
```typescript
const engineeredPrompt = buildPrompt(message, category);
// Kirim ke Gemini API dengan prompt yang sudah dioptimasi
```

## 📊 Monitoring & Debugging

Sistem include logging untuk monitoring:
```typescript
console.log(`[PROMPT ENGINEERING] Category: ${category}`);
console.log(`[PROMPT ENGINEERING] Message: "${message}"`);
console.log(`[PROMPT ENGINEERING] Generated Prompt Length: ${engineeredPrompt.length} chars`);
console.log(`[PROMPT ENGINEERING] AI Response Length: ${aiResponse.length} chars`);
```

Response API include metadata:
```json
{
  "response": "...",
  "prompt_engineering": {
    "category": "technical",
    "version": "2.0", 
    "features": ["context_detection", "dynamic_prompts", "persona_switching"]
  }
}
```

## 🎨 Customization

### Menambah Kategori Baru
1. Tambah config di `promptConfigs`
2. Update `detectQuestionCategory()` dengan keywords
3. Define persona, rules, tone, constraints

### Mengubah Persona
Update `basePersona` object:
```typescript
const basePersona = {
  name: 'Richard95',
  role: 'AI Assistant yang cerdas dan ramah', 
  expertise: ['programming', 'teknologi', 'blockchain', 'web development'],
  personality: 'ramah, informatif, helpful, dan sedikit humor'
};
```

### Fine-tuning Response
Adjust `generationConfig`:
```typescript
generationConfig: {
  temperature: 0.7,    // Creativity level (0-1)
  topK: 40,           // Token selection diversity
  topP: 0.95,         // Nucleus sampling
  maxOutputTokens: 150 // Response length limit
}
```

## 🚀 Advanced Tips

### 1. **A/B Testing Prompts**
Implement variant testing untuk optimasi prompt:
```typescript
const promptVariants = ['variant_a', 'variant_b'];
const selectedVariant = promptVariants[Math.floor(Math.random() * promptVariants.length)];
```

### 2. **Context Memory**
Untuk conversation yang lebih natural, implement context memory:
```typescript
interface ConversationContext {
  previousMessages: string[];
  userPreferences: object;
  sessionData: object;
}
```

### 3. **Performance Optimization**
- Cache frequent prompt configurations
- Implement prompt compression untuk token efficiency
- Monitor response quality metrics

## 📈 Results

Dengan sistem prompt engineering ini, chatbot Richard95 dapat:
- ✅ Memberikan respons yang lebih relevan dan kontekstual
- ✅ Menyesuaikan tone dan style berdasarkan pertanyaan
- ✅ Memberikan pengalaman yang lebih personal dan engaging
- ✅ Meningkatkan akurasi respons teknis
- ✅ Menyediakan entertainment value yang tepat

## 🔍 Troubleshooting

### Response Tidak Sesuai Kategori
- Check keyword detection di `detectQuestionCategory()`
- Verify prompt configuration untuk kategori tersebut

### Response Terlalu Panjang
- Adjust `maxOutputTokens` di generationConfig
- Update constraints di prompt config

### API Error
- Check Gemini API key dan endpoint
- Verify payload structure dan safety settings

---

**Happy Prompting! 🚀**
