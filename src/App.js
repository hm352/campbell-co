import React from 'react';
import logo from './logo.svg';
import './App.css';


function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

console.log(images[0])

const imageParts = images.map((image) => 
    <img src={image}/>
);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {imageParts}
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
