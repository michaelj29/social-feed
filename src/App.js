import './App.css';
import React, { useState, useEffect } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import NavBar from './Components/NavBar/NavBar';
import DisplayPost from './Components/DisplayPost/DisplayPost'

function App() {
// this is where all of my app level hooks will go
const [newThought, setNewThought] = useState([{name : 'Mikey Mike ', thought: 'Here is our first status that behaves like Tom from Myspace. I guess Im stuck here XD'}])

// this is where all of my app level functions will go
function addNewPost(entry) {
  let tempPost = [...newThought, entry]
  setNewThought(tempPost)
}

  return (
    <div className="App">
      <div>
        <NavBar sticky='top'/>
      </div>
      <div>
        <CreatePost setNewThought={addNewPost} />
      </div>
      <div>
        <DisplayPost userPost={newThought} />
      </div>
    </div>
  );
}

export default App;
