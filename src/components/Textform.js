import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.alert("Converted to UPPERCASE !", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.alert("Converted to lowercase !", "success");
    }

    const handleCleartext = ()=>{
        setText("");
        props.alert("Text cleared !", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleRemoveSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.alert("Extra spaces removed !", "success");
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.alert("Copied to clipboard !", "success");
    }

    const [text, setText] = useState("")

    return (
        <>  
            <div className="container mt-3 p-3" style={{color: props.mode === "light" ? "black" : "white"}}>
                <div className="mb-3">
                    <h3>{props.heading}</h3>
                    <textarea className="form-control" style={{backgroundColor: props.mode === "light" ? "white" : "#01284b", color: props.mode === "light" ? "black" : "white"}} value={text} onChange={handleOnChange} id="textBox" rows="8" autoFocus></textarea>                    
                </div>  
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Change to UPPERCASE</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Change to lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCleartext}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpace}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            </div>

            <div className="container mt-2 p-3" style={{color: props.mode === "light" ? "black" : "white"}}>
                <h3>Text Summary :</h3>
                <p>{text.split(/\s/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters
                <br/>
                {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes needed for reading the text</p>
                <h3 className="mt-4">Preview :</h3>
                <p>{text.length === 0 ? "Nothing to preview !" : text }</p>
            </div>
        </>
    )
}

