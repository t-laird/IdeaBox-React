import React, { Component } from 'react';
import '../Styles/App.css';
import Form from './Form';
import Search from './Search';
import Card from './Card';

class App extends Component {
  constructor() {
    super();
    this.createCard = this.createCard.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.deleteIdea = this.deleteIdea.bind(this);
    this.filterCards = this.filterCards.bind(this);
    this.state = { 
      cards:      
        Object.keys(localStorage).filter( card => {
          return card.includes('reactidea');
        }).map( key => {
          return JSON.parse(localStorage[key])
      })
    };
  }

  createCard(title, body) {
    let newCard = {
      title: title,
      body: body,
      quality: 'swill',
      id: 'reactidea' + Date.now()
    };

    let currentCards = this.state.cards;
    currentCards.push(newCard);

    this.setState({
      cards: currentCards
    });

    localStorage.setItem(
      newCard.id,
      JSON.stringify(newCard)
    );    
  }

  updateCard(id, newVal, type) {
    let cardRefresh = JSON.parse(localStorage.getItem(id));
    cardRefresh[type] = newVal;
    localStorage.setItem(
      id,
      JSON.stringify(cardRefresh)
    );
  }

  deleteIdea(id) {
    this.setState({
      cards: this.state.cards.filter( card => {
        return card.id !== id
      })
    });
    localStorage.removeItem(id);
  }

  filterCards(input) {
    let originalCards = Object.keys(localStorage).filter( card => {
                          return card.includes('reactidea');
                        }).map( key => {
                          return JSON.parse(localStorage[key])
                        });
    let filteredCards = originalCards.filter(card => {
      return (
        card.title.toLowerCase().includes(input.toLowerCase()) ||
        card.body.toLowerCase().includes(input.toLowerCase()));
    });
    this.setState({
      cards: filteredCards
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header>
          <div className="title">
            <div className="react-icon"></div>
            <h1>
              idea<span>box</span>
            </h1>
          </div>
          <Form makeCard={this.createCard}/>
        </header>
          <Search filterCards={this.filterCards}/>
          <div className="card-container">
            {
              this.state.cards.map( card => {
              return <Card key={card.id} info={card} updateCard={this.updateCard} deleteIdea={this.deleteIdea} />
              })
            }
          </div>
      </div>
    );
  }
}

export default App;
