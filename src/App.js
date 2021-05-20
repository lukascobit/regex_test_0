import './App.css';
import React, {useState} from 'react'

function App() {


  const [input, setInput] = useState('')
  const [isExisting, setIsExisting] = useState('false')
  const [isLowercase, setIsLowercase] = useState('false');
  const [isNumbers, setIsNumbers] = useState('false')
  const [capitalWords, setCapitalWords] = useState('')
  const [specChars, setSpecChars] = useState('')
  const [switchedWords, setSwitchedWords] = useState('')


 
  function Changed(e){
    const regex = /[A-Z]/g;
    const lowercase = /[a-z]/g;
    const numbers = /[0-9]/g;
    const startsWithCapital = / ?([A-Z][\w+]*) ?/g
    const specialChars = /[\W]/g
    const switchWords = /(\w+)\s(\w+)/
    
    setInput(e.target.value);

    setIsExisting(regex.test(input).toString());
    setIsLowercase(lowercase.test(input).toString());
    setIsNumbers(numbers.test(input).toString());


    var match = startsWithCapital.exec(input)

    if(match) {
      const name = match[1]
      setCapitalWords(name)
    } else {
      setCapitalWords('none found')
    }

    if(input.match(specialChars)){
      setSpecChars(input.match(specialChars).length);
    } else {
      setSpecChars(0)
    }


    setSwitchedWords(switchWords.test(input).toString())

  }
  
  return (
    <div className="App">
      <header>
        <h1 className="header">Regex test</h1>
      </header>
      <div>
        <textarea value={input} onChange={Changed} type="text"></textarea>

        <article className="questions">
          Does this include uppercase?
          <h1> {isExisting} </h1>
          Does this include lowercase?
          <h1> {isLowercase} </h1>
          Does this include numbers?
          <h1> {isNumbers} </h1>
          The first word starting with capital letter is:
          <h1> {capitalWords} </h1>
          Number of special symbols:
          <h1>{specChars}</h1>
          Is there more than 2 words?
          <h1>{switchedWords}</h1>
        </article>
      </div>
    </div>
  );
}

export default App;
