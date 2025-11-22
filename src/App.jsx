import { useState } from "react";
import StoryBrowser from "./components/StoryBrowser";
import StoryReader from "./components/StoryReader";

export default function App() {
  const [story, setStory] = useState(null);
  return (
    <div>
      {!story && <StoryBrowser onSelect={setStory} />}
      {story && <StoryReader story={story} onBack={() => setStory(null)} />}
    </div>
  );
}