import React {useState} from 'react'
import logo from './logo.svg';
import './index.css';            //'./App.css';

          // From below 1st <p>, Edit <code>src/App.js</code> and save to reload.
//              <button className="btn btn-warning">Search</button>
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
          <img src={logo} className="App-logo" alt="logo" />
          <p> 
          </p>
          <form action="127.0.0.1:3000" method="GET">
              <div className="form-example">
                <label for="name">Enter your name: </label>
                <input type="text" name="name" id="name" required>
              </div>
          </form>          
      </header>
    </div>
  );
}

export default App;
