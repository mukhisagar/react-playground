import React, {useState} from "react";

export default function TextForm(props) {
  const handelUpClick =()=>{
    console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value)
  }

  const[text, setText] = useState('Enter text here');
  
  return (
    <div>
      <h1>{props.heading}- </h1>
      <div class="mb-3">
      <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
       <button className="btn btn-primary" onClick={handelUpClick}>Convert to UpperCase</button>
    </div>
  );
}