import {React, useState } from "react"



const ComponentA=()=>{
    const [inputValue, setInputValue] = useState('');
    const [displayText, setDisplayText] = useState('');
  
    // Step 2: Handle input change
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    // Step 3: Handle button click
    const handleButtonClick = () => {
      setDisplayText(inputValue);
    };
  
    return (
      <div>
        {/* Step 4: Input field */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter some text"
        />
        {/* Step 5: Button */}
        <button onClick={handleButtonClick}>Display Text</button>
        {/* Step 6: Display text */}
        <p>Displayed Text: {displayText}</p>
      </div>
    );
  };
export default ComponentA;