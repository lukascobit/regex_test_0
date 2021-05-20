import './App.css';
import React, {useState} from 'react';

function App() {

  const [input, setInput] = useState('');
  const [isExisting, setIsExisting] = useState('false');
  const [isLowercase, setIsLowercase] = useState('false');
  const [isNumbers, setIsNumbers] = useState('false');
  const [capitalWords, setCapitalWords] = useState('none found');
  const [specChars, setSpecChars] = useState('0');
  const [switchedWords, setSwitchedWords] = useState('0');


 
  function Changed(e){
    const regex = /[A-Z]/g;
    const lowercase = /[a-z]/g;
    const numbers = /[0-9]/g;
    const startsWithCapital = / ?([A-Z][\w+]*) ?/g
    const specialChars = /[\W]/g
    const switchWords = /\s(\w+)/g
    
    setInput(e.target.value);

    setIsExisting(regex.test(input).toString());
    setIsLowercase(lowercase.test(input).toString());
    setIsNumbers(numbers.test(input).toString());


    var match = startsWithCapital.exec(input);

    if(match) {
      const name = match[1];
      setCapitalWords(name);
    } else {
      setCapitalWords('none found');
    };

    if(input.match(specialChars)){
      setSpecChars(input.match(specialChars).length);
    } else {
      setSpecChars(0)
    };

    if(input.match(switchWords)){
      setSwitchedWords((input.match(switchWords).length+1).toString());
    };
    if(!input||input.length < 2){
      setSwitchedWords('0');
    };
  }
  
  return (
    <div className="App">
      <header>
        <h1 className="header">Regex test</h1>
      </header>
      <div>
        <textarea value={input} onChange={Changed} type="text"></textarea>

        <div className="questions">
          <div>
            Does this include uppercase?
            <h1> {isExisting} </h1>
          </div>
          <div>
            Does this include lowercase?
            <h1> {isLowercase} </h1>
          </div>
          <div>
            Does this include numbers?
            <h1> {isNumbers} </h1>
          </div>
          <div>
          The first word starting with capital letter is:
          <h1> {capitalWords} </h1>
          </div>
          <div>
            Number of special symbols:
            <h1>{specChars}</h1>
          </div>
          <div>
            Number of words:
            <h1>{switchedWords}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
