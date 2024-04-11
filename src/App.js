// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
// import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Saurabh
    //     </a>
    //   </header>
    // </div>

    <>
    
    <Navbar title="Text-Tailor" aboutText="About"/>
    <div className="container my-3 py-3 ">
    <TextForm heading="Enter the text to analyze"/>

    {/* <About/> */}


<h4 className='credit my-3 py-3'>Made in India ~</h4>

    </div>
 
    </>

  );
}

export default App;
