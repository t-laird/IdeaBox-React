import React, { Component } from 'react';
import '../Styles/Search.css';

class Search extends Component {
  constructor() {
    super ();
    this.state = {searchVal: ''}
    this.updateVal = this.updateVal.bind(this);
  }

  updateVal(e) {
    this.setState({
      searchVal: e.target.value
    });
    this.props.filterCards(e.target.value);
  }
  render (){
    return(
      <div className="Search">
        <input type="text" placeholder="Search" value={this.state.searchVal} onChange={this.updateVal} />    
      </div>
    )
  }
}

export default Search;