import React, { Component } from 'react';
import '../Styles/Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = { titleVal: '', bodyVal: ''}
    this.updateBodyVal = this.updateBodyVal.bind(this);
    this.updateTitleVal = this.updateTitleVal.bind(this);
    this.submitCard = this.submitCard.bind(this);
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
    this.props.makeCard(this.state.titleVal, this.state.bodyVal);
    this.setState({
      titleVal: '',
      bodyVal: ''
    });
  }


  render() {
    return (
      <div className="Form">
        <input type="text" value={this.state.titleVal} onChange={this.updateTitleVal} placeholder="Title" autoFocus/>
        <input type="text" value={this.state.bodyVal} onChange={this.updateBodyVal} placeholder="Body"/>
        <button onClick={this.submitCard}>save</button>      
      </div>
    )
  }
}

export default Form;