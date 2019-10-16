import React, {Component} from 'react';
import './App.css';
import CatCard from "./components/CatCard";
import cards from "./cards.json";

class App extends Component {
  state = {
    currentScore: 0,
    highScore: 0,
    cards: cards,
    clickedCards: []
  };

  

  render() {
    return (
      <div className="App">
        <header className="bg-dark text-white text-center">
          <h1>Memory Game</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <h4>
                Try to click on all the images without any repeats!
              </h4>
            </div>
            <div className="col-md-6 text-center">
              <h4>Current score: {this.state.currentScore}    High score: {this.state.highScore}</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10 float-center justify-content-center">
              {this.state.cards.map( card => (
                <CatCard
                image={card.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
