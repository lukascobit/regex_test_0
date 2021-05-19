import './App.css';
import React, {useState} from 'react'

function App() {


  const [input,setInput] = useState('')
  const [isExisting,setIsExisting] = useState()

 
  function Changed(e){
    const regex = /d/g;
    setIsExisting(regex.test(input).toString())
    setInput(e.target.value)
  }
  

  return (
    <div className="App">
      <header>
        <h1 className="header">Regex</h1>
      </header>
      <div>
        <textarea value={input} onChange={Changed} type="text"></textarea>
        <h1>{input}</h1>

        <article>
          Does this include letter "d"? {isExisting}
        </article>
      </div>
    </div>
  );
}

export default App;
