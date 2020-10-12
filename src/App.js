import React, {useState, useEffect} from 'react';
//components
import Selections from "./components/Selections";
//styles
import "./styles/app.css"
//data
import data from "./data.json"

function App() {
  const [selectionLists, setSelectionLists] = useState(data.selections)
  const [selection, setSelection] = useState({})
  const [node, setNode] = useState(1)

const handleNode=()=>{
  setNode(node+1);
}

  return (
    <div className="app">
      <header className="app-header">
        <h1>Which one will you choose?</h1>
      </header>
      <main className="app-main">
        <div className="selection-box">
          <Selections selection={selection}/>
        </div>
        <div className="selection-box">
          <Selections selection={selection}/>
        </div>
      </main>
      <footer className="app-footer"></footer>
    </div>
  );
}

export default App;
