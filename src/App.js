import React, {Component} from 'react';
import './App.css';
import CatCard from "./components/CatCard";
import cards from "./cards.json";

class App extends Component {
  state = {
    currentScore: 0,
    highScore: 0,
    cards: cards
  };

  addScore = () => {
    this.setState({currentScore: this.state.currentScore + 1});
  };

  resetGame = () => {
    if (this.state.currentScore > this.state.highScore) {
      this.setState({highScore: this.state.currentScore})
    };
    this.state.cards.forEach(cards => {
      cards.count = 0;
    });
    this.setState({currentScore: 0});
  };

  checkArray = id => {
    console.log(this.state)
    this.state.cards.find((item, index) => {
      if (item.id === id) {
        if (cards[index].count === 0) {
          cards[index].count = 1;
          this.addScore();
          this.state.cards.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.resetGame();
        }
      }
      return false;
    });
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
                key={card.name}
                image={card.image}
                id={card.id}
                handleClick={this.checkArray}
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
