import React from "react";



export default function About(props) {
  return (
    <div className="container" style={{color: props.mode === "light" ? "black" : "white"}}>
      <div className="card my-5" style={{backgroundColor: props.mode === "light" ? "white" : "#01284b", border: props.mode === "light" ? "1px solid #01284b" : "1px solid white"}}>
        <div className="card-header" style={{backgroundColor: props.mode === "light" ? "white" : "#01284b", borderBottom: props.mode === "light" ? "1px solid #01284b" : "1px solid white"}}>
          <h2>About Text-periment</h2>
        </div>
        <div className="card-body">
          <h5 className="card-text">
            Text-periment is a word counter and character counting utility where you can experiment with your text
            by performing different operations like changing uppercase to lowercase and lowercase to uppercase, removing extra spaces and then copy the text to use it anywhere.            
          </h5>
          <h5 className="mt-4">
          Functions : 
          </h5>
          <h6>
                1. Count number of words <br />
                2. Count number of characters <br />
                3. Change to UPPERCASE <br />
                4. Change to lowercase <br />
                5. Remove extra spaces <br />
                6. Clear the text <br />
                7. Copy the Text <br />
          </h6>
        </div>
      </div>
      <div className="card my-5" style={{backgroundColor: props.mode === "light" ? "white" : "#01284b", border: props.mode === "light" ? "1px solid #01284b" : "1px solid white"}}>
      <div className="card-header" style={{backgroundColor: props.mode === "light" ? "white" : "#01284b", borderBottom: props.mode === "light" ? "1px solid #01284b" : "1px solid white"}}>
          <h2>Founder</h2>
        </div>
        <div className="card-body" style={{backgroundColor: props.mode === "light" ? "white" : "#01284b"}}>
          <h5 className="card-text">
            Mr. Abhinav Upadhyay - 3rd Year B-Tech @ NIT Goa
          </h5>
        </div>
      </div>
      <div className="card my-5" style={{backgroundColor: props.mode === "light" ? "white" : "#01284b", border: props.mode === "light" ? "1px solid #01284b" : "1px solid white"}}>
      <div className="card-header" style={{backgroundColor: props.mode === "light" ? "white" : "#01284b", borderBottom: props.mode === "light" ? "1px solid #01284b" : "1px solid white"}}>
          <h2>Github Repository</h2>
        </div>
        <div className="card-body" style={{backgroundColor: props.mode === "light" ? "white" : "#01284b"}}>
          <h5 className="card-text">
          Find the code here : <a href="https://github.com/Abhi02-pro/Text-periment" target="_blank" rel="noopener noreferrer">https://github.com/Abhi02-pro/Text-periment</a>
          </h5>
        </div>
      </div>
    </div>
  );
}
