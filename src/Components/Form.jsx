import React, { Component } from 'react';
import '../Styles/Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = { titleVal: '', bodyVal: ''}
    this.updateBodyVal = this.updateBodyVal.bind(this);
    this.updateTitleVal = this.updateTitleVal.bind(this);
    this.submitCard = this.submitCard.bind(this);
    this.enterToSubmit = this.enterToSubmit.bind(this);
  }

  updateBodyVal(e) {
    this.setState({
      bodyVal: e.target.value
    });
  }
  updateTitleVal(e) {
    this.setState({
      titleVal: e.target.value
    });
  }

  submitCard() {
    if (this.state.titleVal !== '' && this.state.bodyVal !== ''){
      this.props.makeCard(this.state.titleVal, this.state.bodyVal);
      this.setState({
        titleVal: '',
        bodyVal: ''
      });
      this.nameInput.focus();
    }
  }

  enterToSubmit(e) {
    if (e.key === 'Enter') {
      this.submitCard();
    }
  }

  render() {
    return (
      <div className="Form">
        <input 
          type="text" 
          value={this.state.titleVal}  
          onChange={this.updateTitleVal} 
          onKeyDown={this.enterToSubmit} 
          placeholder="Title" 
          maxLength="40" 
          ref={(input) => { this.nameInput = input; }} 
          autoFocus/>
        <span className="charsLeft">{40 - this.state.titleVal.length}</span>
        <input type="text" value={this.state.bodyVal} onChange={this.updateBodyVal} onKeyDown={this.enterToSubmit} placeholder="Body"/>
        <span className="charsLeft">{40 - this.state.bodyVal.length}</span>
        <button onClick={this.submitCard}>save</button>      
      </div>
    )
  }
}

export default Form;