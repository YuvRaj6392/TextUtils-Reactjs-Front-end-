import React from 'react'
import  { useState } from 'react'
export default function TextForm(props) {
    const [text,setText]=useState("")
    const handleUpClick=(e)=>{
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLowClick=(e)=>{
        let newText=text.toLowerCase();
        setText(newText)
    }


    const handleOnChange=(e)=>{
            setText(e.target.value);
    }

    const handleClear=(e)=>{
        setText("")
    }

  return (
    <>
<div className='container'>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea value={text} className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange} ></textarea>
</div>
<button className="btn btn-primary" style={{margin:"10px"}} onClick={handleUpClick} >
    Convert to UpperCase
</button>
<button className="btn btn-primary" style={{margin:"10px"}} onClick={handleLowClick} >
    Convert to UpperCase
</button>
<button className="btn btn-primary" style={{margin:"10px"}} onClick={handleClear}>
    Clear
</button>
    </div>

    <div className='container my-2'>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length-1} and {text.length} characters</p>
        <p>{0.008* text.split(" ").length } minutes to read the text </p>
        <p>Preview</p>
        <h2>{text}</h2>
    </div>
    </>
  )
}
