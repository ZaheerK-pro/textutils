import '../App.css'
import React, {useState}  from 'react'

export default function TextForm(props) {
    //for convert text to uppercase
    const handleUpClick = () => {
        // console.log('Upeercase was Clicked ' + text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
        document.title = 'TextUtils - Clicked Uppercase'
        // setText({text})
    }
    // for convert text to lowercase
    const handleLwClick = () => {
        // console.log('lowercasee was Clicked ' + text);
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lovercase", "success")
        document.title = 'TextUtils - Clicked Lowercase'
        // setText({text})
    }
    // for clear text
    const handleClearText = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text cleared", "success")
        // setText({text})
    }
    const handleOnChange = (event) => {
        // console.log('On change');
        setText(event.target.value)
    }
    // for copy text
    const handleCopyText = () => {
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success")
        // text.setSelectionRange(0, 20);          for selected text 20 or many more
    }
    // for remove extra spaces
    const removeExSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space removed", "success")
    }
const [text, setText] = useState('Enter text here')
// setText = ("new text")
  return ( 
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <textarea className="form-control textarea" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'rgb(7 40 64)': 'white', color: props.mode === 'dark' ? 'white': 'black', fontWeight: 'bold'}} id="myBox" rows="12"></textarea>
    <button className="btn btn-p my-4 mr-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
    <button className="btn btn-p my-4 mx-2" onClick={handleLwClick}>Convert to lowercase</button>    
    <button className="btn btn-p my-4 mx-2" onClick={handleClearText}>Clear Text</button>    
    <button className="btn btn-p my-4 mx-2" onClick={handleCopyText}>Copy Text</button>    
    <button className="btn btn-p my-4 mx-2" onClick={removeExSpaces}>Remove Spaces</button>    
    </div>

    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(' ').filter((element) => {return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(' ').length-0.008} Minutes Read</p>
        <h2>Text Preveiw</h2>
        <p>{text.length>0?text: "Enter something in the above textbox to preview it here"}</p> 
    </div>
    </>
  )
  }