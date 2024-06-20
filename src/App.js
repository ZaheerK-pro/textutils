import React from "react";
import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import Aboutt from './components/Aboutt.js'
import Service from './components/Service.js'
import PropTypes from 'prop-types'
import { useState } from 'react';
import Alert from './components/Alert.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

    let [mode, setMode] = useState('light'); //whether dark mode enabled or not
    let [text, setText] = useState("Enable Dark Mdoe") //whether dark mode enabled or not
    let [alert, setAlert] = useState(null)
    let showAlert = (message, type) => {
      setAlert ({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1000);
    }
    const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      setText("Enable Light Mdoe")
      document.body.style.backgroundColor = "#001626"
      document.body.style.color = "white"
      showAlert("Dark mode has been enabled", "success" )
      document.title = 'TextUtils - Dark mode'
    }
    else {
      setMode('light')
      setText("Enable Dark Mdoe")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("Light mode has been enabled", "success" )
      document.title = 'TextUtils - Light mode'
    }
  }

  return (
    <>
    <Router>
{/* <Navbar title="TextUtils"HomeP="Home" mode={mode} toggleMode={toggleMode} text={text} setText={setText}/> */}
<Navbar title="TextUtils" aboutText="About" serviceText="services" HomeP="Home" mode={mode} toggleMode={toggleMode} text={text} setText={setText}/>
{/* <Navbar/> */}

<Alert alert={alert} />
<div className="container my-3">
<Switch>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Add Text Here" mode={mode}/>
         </Route>
          
          <Route exact path="/Service">
            <Service  />
          </Route>

          <Route exact path="/Aboutt">
            <Aboutt />
          </Route>
</Switch> 
</div>
</Router> 
   {/* <Aboutt /> */}


    {/* div classNameName="App">
      <header classNameName="App-header">
        <div classNameName="container">
          <ul>
            <li><a href="/">Home </a></li>
            <li><a href="/">Service </a></li>
            <li><a href="/">About </a></li>
            <li><a href="/">Conatct </a></li>
            <input placeholder='Search here ' type="text" name="search" id="search" />
            <button classNameName="btn">Search</button>
          </ul>
        </div>
        
        <div classNameName="box-item">
        <div classNameName="box"><h1>Education</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. nostrum.lorem5
          this is a new technologu whuch is available to make them
        </p>
        <a href="/">read more</a></div>
        <div classNameName="box"><h1>Employement</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. nostrum.lorem5
          this is a new technologu whuch is available to make them
        </p>
        <a href="/">read more</a></div>
        <div classNameName="box"><h1>Earth</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. nostrum.lorem5
          this is a new technologu whuch is available to make them
        </p>
        <a href="/">read more</a></div>
        <div classNameName="box"><h1>Sports</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. nostrum.lorem5
          this is a new technologu whuch is available to make them
        </p>
        <a href="/">read more</a></div>
        </div>       
      </header> 
    </div> */}
    </>
  );
}

export default App;

// if we are taking a title without string like numbers then we will get error in thee console
// isRequired for compulsary we have to write otherwise we will ger error
Navbar.propTypes = {title:PropTypes.string.isRequired,
                    HomeP: PropTypes.string.isRequired,
                    serviceText: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired  }

// if we are not passing any value then what will display then we can use alternative text to disply info like this 
// Navbar.defaultProps = {
//   title : "Set title here",
//   HomeP : "Set Homep here",
//   serviceText : "Set serviceText here",
//   aboutText : "Set AboutText here"
// }

