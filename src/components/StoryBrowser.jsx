import { storyData } from "../storyData";
export default function StoryBrowser({ onSelect }) {
  return (
    <div className='browser'>
      <h1>Magical Bedtime Stories</h1>
      <div className='grid'>
        {storyData.map(s=>(
          <div key={s.id} className='card' onClick={()=>onSelect(s)}>
            <h2>{s.title}</h2><p>Tap to begin</p>
          </div>
        ))}
      </div>
    </div>
  );
}