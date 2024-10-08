import { useState } from "react";
import CharacterPicture from "./components/CharacterPicture";
import CharacterText from "./components/CharacterText";
import Choices from "./components/Choices"
import Story from "./components/Story"
import './style/style.css'

function App() {

  const [story, setStory] = useState({})
  const [currentDot, setCurrentDot] = useState('start');

  const handleChoice = (nextNode) => {
    if (nextNode.action) {
      nextNode.action()
    }
    setCurrentDot(nextNode.next);
  };

  return (
    <div className="wrapper">
      <div className="mainContainer">
        <div className="characterSide">
          <CharacterPicture scene={story[currentDot]} />
          <CharacterText scene={story[currentDot]} />
        </div>
        <Choices scene={story[currentDot]} onChoice={handleChoice} />
        <Story setStory={setStory} /> {/* Doesnt render anything only story */}
      </div>
    </div>
  );
}

export default App;
