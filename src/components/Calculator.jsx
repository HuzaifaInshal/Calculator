import React, { useState } from 'react'

const Calculator = () => {
  const [theme,setTheme]=useState(true)
  const [input, setInput] = useState('');
  const [immediate,setImmediate] = useState(false)
  const [result,setResult]=useState('')

  const handleInputChange = (event) => {
    if(immediate){
      if(event.target.innerText !== '+' && event.target.innerText !== '*' && event.target.innerText !== '-' && event.target.innerText !== '/' && event.target.innerText !== '.'){
        setInput('')
        setInput(event.target.innerText)
        setResult('')
      }
      else {
        setInput(result + event.target.innerText);
        setResult('')
      }
    }else{
      setInput(input + event.target.innerText);
      setResult('')
    }
    setImmediate(false)
  };

  const handleClear = () => {
    setInput('');
    setResult('');
    setImmediate(false)
  };

  const handleErase=()=>{
    setInput(input.slice(0, -1));
    setImmediate(false)
  }

  const handleCalculate = () => {
    setImmediate(true)
    setResult(eval(input).toString());
      if(isNaN(value)){
        setImmediate(false)
      }else{
        setImmediate(true)
      }
  };
  return (
    <>
    <div className="themeChange" onClick={()=>setTheme(!theme)}>Change theme</div>
    <div className='calc'>
      <div className={theme ? "calculator offwhitebg" : "calculator blackbg"}>
      <input
        type="text"
        value={input}
        onChange={() => {}}
        placeholder="Enter an expression"
        readOnly
      />
      <input
      className={theme ? "new screenwhite" : "new  screenbl"}
        type="text"
        value={result}
        onChange={() => {}}
        readOnly
      />
        <div className="panel">
          <div className={theme ? "key keywhite2" : "key keyblack2"} onClick={handleClear}>Ac</div>
          <div className={theme ? "key keywhite2" : "key keyblack2"} onClick={handleErase}>Er</div>
          <div className={theme ? "key keywhite3" : "key keyblack3"} onClick={handleInputChange}>/</div>
          <div className={theme ? "key keywhite3" : "key keyblack3"} onClick={handleInputChange}>*</div>
          <div className={theme ? "key keywhite1" : "key keyblack1"} onClick={handleInputChange}>1</div>
          <div className={theme ? "key keywhite1" : "key keyblack1"} onClick={handleInputChange}>2</div>
          <div className={theme ? "key keywhite1" : "key keyblack1"} onClick={handleInputChange}>3</div>
          <div className={theme ? "key keywhite3" : "key keyblack3"} onClick={handleInputChange}>-</div>
          <div className={theme ? "key keywhite1" : "key keyblack1"} onClick={handleInputChange}>4</div>
          <div className={theme ? "key keywhite1" : "key keyblack1"} onClick={handleInputChange}>5</div>
          <div className={theme ? "key keywhite1" : "key keyblack1"} onClick={handleInputChange}>6</div>
          <div className={theme ? "key keywhite3 spV" : "key keyblack3 spV"} onClick={handleInputChange}>+</div>
          <div className={theme ? "key keywhite1" : "key keyblack1"} onClick={handleInputChange}>7</div>
          <div className={theme ? "key keywhite1" : "key keyblack1"} onClick={handleInputChange}>8</div>
          <div className={theme ? "key keywhite1" : "key keyblack1"} onClick={handleInputChange}>9</div>
          <div className={theme ? "key keywhite1" : "key keyblack1"} onClick={handleInputChange}>.</div>
          <div className={theme ? "key keywhite1" : "key keyblack1"} onClick={handleInputChange}>0</div>
          <div className={theme ? "key keywhite4 spH" : "key keyblack4 spH"} onClick={handleCalculate}>=</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Calculator