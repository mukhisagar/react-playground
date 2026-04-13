import React, {useState} from "react";

export default function TextForm(props) {
  const handelUpClick =()=>{
    console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to Upper Case", "success");
  }
    const handelLoClick =()=>{
    console.log("Uppercase was clicked", "success");
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to Lower Case", "success");
  }
  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value)
  }
    const handelSentenceClick = () => {
  if (!text) return;
  const newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  setText(newText);
  props.showAlert("Converted to Sentence", "success");
};

  const[text, setText] = useState('');
  
  return (
    <>
    <div style={{color: props.mode==='dark'?'white':'#102a52'}}>
      <h1>{props.heading}- </h1>
      <div className="mb-3">
      <textarea id="89" className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#102a52'}} rows="8"></textarea>
      </div>
       <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to UpperCase</button>
       <button className="btn btn-primary mx-2" onClick={handelLoClick}>Convert to LowerCase</button>
       <button className="btn btn-primary mx-2" onClick={handelSentenceClick}>Convert to SentenceCase</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#102a52'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length >0 ?text: "Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  );
}