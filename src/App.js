import React from 'react';
import './App.css';
import Drinks from './components/Drinks';
import DrinkForm from './components/DrinkForm';
import Button from 'react-bootstrap/Button';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';


//  main app render function
class App extends React.Component {
  render(){
    return (
      <div className="App">
      <header>
        <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
        />
        <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.1/build/pure-min.css" integrity="sha384-oAOxQR6DkCoMliIh8yFnu25d7Eq/PHS21PClpwjOTeU2jRSq11vu66rf90/cZr47" crossorigin="anonymous"/>
      </header>
          <DrinkForm></DrinkForm>
          <Drinks> </Drinks>
      </div>
    );
  }
}

export default App;
