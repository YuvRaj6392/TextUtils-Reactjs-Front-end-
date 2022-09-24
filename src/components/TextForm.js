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
<div className='container' style={{color:props.mode==='dark'? 'white':'black'}}>
    <h1  >{props.heading}</h1>
<div className="mb-3">
  <textarea value={text} style={{backgroundColor:props.mode==='light'? 'white':'#042743',color:props.mode==='dark'? 'white':'black'}} className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange} ></textarea>
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

    <div className='container my-5'  style={{color:props.mode==='dark'? 'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length-1} and {text.length} characters</p>
        <p>{0.008* text.split(" ").length } minutes to read the text </p>
        <p>Preview</p>
        <h2  >{text.length>0?text:'Enter your text to preview it here!'}</h2>
    </div>
    </>
  )
}
