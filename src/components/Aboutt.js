import React, { useState } from "react";

export default function Aboutt() {
  const [myStyle, setmyStyle] = useState ({
    color: "black",
    backgroundColor: "white",
  });

  const [btntext, setBtnText] = useState("Enable Dark Mdoe")
  const toggleStyle = ()=> {
    if(myStyle.color === 'black'){
          setmyStyle ({
            color: "white",
            backgroundColor: "black",
            border: '1px solid white',
            borderRadius : '4px'
          })
          setBtnText("Enable Light Mdoe")
        }
    else {
      setmyStyle ({
        color: "black",
        backgroundColor: "white",
        border: '1px solid white',
        borderRadius : '4px'
        
      })
      setBtnText("Enable Dark Mdoe")
    }

  }

  return (
    <div className="container my-3" style={myStyle}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              About TextUtils
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body"><b>TextUtils</b> is a free application, where you can perform operations on
            text like Convert text into lowercase to Uppercase, and Remove extra spaces from the text lines, 
            and also you can copy this text from textbox to clipboard.
            here you can also see the actual word count and character count.
            this is helpful to perform whin you have big text data.

            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              About Team
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse" 
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              TextUtils open text editor : <br />
              Developer : <b>Zaheer Khan </b> <br />
              Tester : <b>Zaheer Khan </b>  <br />
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              More
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              To see all updates about <b>TextUtils</b> <br />
              please visit your social media handles <br />
              <a href="www.twitter.com">Twitter </a> <br />
              <a href="www.Instagram.com">Instagram </a> <br />
              <a href="www.facebook.com">Facebook </a>  <br />
              <a href="www.TextUtils.com">TextUtils</a> 
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btntext}
        </button>  */}
          <div className="form-check form-switch container my-3 ml-3">
    <input className="form-check-input" onClick={toggleStyle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btntext}</label>
  </div>
      </div>   
  );
}