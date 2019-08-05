import React, { Component } from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import './App.css';
//import Messages from './Messages';
//import TheDate from './state/TheDate';

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <TheDate name="TheDate"/>
      </div>
    );
  }
}
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <HelloWorld />
        <h2>Bomb</h2>
        <Bomb />
        <h2>Roulette Gun</h2>
        <RouletteGun bulletInChamber={6} />
      </div>
    );
  }
}

export default App;