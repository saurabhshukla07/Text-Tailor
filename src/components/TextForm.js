import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("Upper Case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Lower Case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log('Lower Case was clicked'+ text);
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  // setText("hshshshs");

  return (
    <>
      <div className="container">
        {/* <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}
        <h1>{props.heading} </h1>
        <div className="mb-3">
          {/* <label for="myBox" class="form-label">Enter your text below</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn mx-2" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2> Your Text Summary </h2>
        <p className="toggledisco">
          {" "}
          {text.split(" ").length} Words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes take to read words </p>
        <h2> Preview </h2>
        <p>{text}</p>
      </div>
    </>
  );
}
