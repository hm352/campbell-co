import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

console.log(images)

const imageParts = images.map((image) => 
    <img src={image}/>
);

//  Bootstrap, styled-component, animation example
const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.button`
  animation: 1s ${bounceAnimation};
`;

const StyledButton = styled(Button)`
  animation: ls ${bounceAnimation};
  background: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;



//  main app render function
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
      <BouncyDiv>
      </BouncyDiv>
      <Button infinte ></Button>
      <StyledButton></StyledButton>
      <div>
        {imageParts}
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
