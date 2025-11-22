import OpenAI from "openai";
const client = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY });

export async function customizeStory(original, userPrompt) {
  const completion = await client.chat.completions.create({
    model: "gpt-5.1",
    messages: [
      { role: "system", content: "Rewrite story in gentle bedtime tone." },
      { role: "user", content: `Rewrite based on: ${userPrompt}. Story: ${original}` }
    ]
  });
  return completion.choices[0].message.content.trim();
}