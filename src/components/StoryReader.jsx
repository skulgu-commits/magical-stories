import { useState } from "react";
import { customizeStory } from "../api/customize";
import { generateAudio } from "../api/tts";
import Loader from "./Loader";

export default function StoryReader({ story, onBack }) {
  const [text, setText] = useState(story.text);
  const [audioURL, setAudioURL] = useState(null);
  const [loading, setLoading] = useState(false);

  async function customize() {
    const prompt = window.prompt("How to personalize?");
    if (!prompt) return;
    setLoading(true);
    const revised = await customizeStory(text, prompt);
    setText(revised);
    const audio = await generateAudio(revised);
    setAudioURL(URL.createObjectURL(audio));
    setLoading(false);
  }

  return (
    <div className='reader'>
      <button onClick={onBack}>Back</button>
      <h1>{story.title}</h1>
      <p className='story'>{text}</p>
      {loading && <Loader/>}
      <button onClick={customize}>Customize & Narrate</button>
      {audioURL && <audio controls src={audioURL}/>}
    </div>
  );
}