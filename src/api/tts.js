import OpenAI from "openai";
const client = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY });

export async function generateAudio(text) {
  const res = await client.audio.speech.create({
    model: "gpt-4o-mini-tts",
    voice: "verse",
    input: text,
    format: "wav"
  });
  const buffer = await res.arrayBuffer();
  return new Blob([buffer], { type: "audio/wav" });
}