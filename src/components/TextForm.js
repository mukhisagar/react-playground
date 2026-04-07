import React, {useState} from "react";

export default function TextForm(props) {
  const handelUpClick =()=>{
    console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
  }
    const handelLoClick =()=>{
    console.log("Uppercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value)
  }

  const[text, setText] = useState('Enter text here');
  
  return (
    <>
    <div>
      <h1>{props.heading}- </h1>
      <div class="mb-3">
      <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
       <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to UpperCase</button>
       <button className="btn btn-primary mx-2" onClick={handelLoClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-3">
      <h1> Your trxt summary</h1>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} {text.length}</p>
      <p>{0.008 * text.split(" ").length}Minutes read</p>
      <p>{text}</p>
    </div>
    </>
  );
}