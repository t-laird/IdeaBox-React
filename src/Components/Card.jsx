import React, { Component } from 'react';
import '../Styles/Card.css';

class Card extends Component{
  constructor(props) {
    super (props);
    this.updateBody = this.updateBody.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);

    this.state = {
      quality: props.info.quality
    }
  }

  updateTitle(e) {
    this.props.updateCard(this.props.info.id, e.target.innerHTML, 'title');
  }
  updateBody(e) {
    this.props.updateCard(this.props.info.id, e.target.innerHTML, 'body');
  }
  upvote(){
    let newQual;
    if (this.state.quality === 'swill'){
      newQual = 'plausible';
    }  else {
      newQual = 'genius';
    }
    this.setState({
      quality: newQual
    });

    this.props.updateCard(this.props.info.id, newQual, 'quality');
  }

  downvote(){
    let newQual;
    if (this.state.quality === 'genius'){
      newQual = 'plausible';
    }  else {
      newQual = 'swill';
    }
    this.setState({
      quality: newQual
    });

    this.props.updateCard(this.props.info.id, newQual, 'quality');    
  }

  deleteCard() {
    this.props.deleteIdea(this.props.info.id);
  }

  render() {
    console.log(this.state)
    let {title, body, quality, id} = this.props.info;
    return (
      <div className="Card" id={id}>
        <div className="top-line">
          <h2 className="title-text" contentEditable onInput={this.updateTitle}>{title}</h2>
          <div className="delete" onClick={this.deleteCard}></div>      
        </div>
        <h3 className="body-text" contentEditable onInput={this.updateBody}>{body}</h3>
        <div className="quality-section">
          <div className="vote-buttons">
            <div className="upvote" onClick={this.upvote}></div>
            <div className="downvote" onClick={this.downvote}></div>
          </div>
          <h5>quality: <span className="curr-quality">{this.state.quality}</span></h5>
        </div>
          <div className="divider"></div>     
      </div>
    )

  }
}

export default Card;