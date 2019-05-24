import React, {Component} from 'react';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      term: ''
    };
    this.termSubmit = this.termSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  render(){
    return(
      <form className="search-bar" onSubmit={this.termSubmit}>
        <input placeholder="Enter Search Term" name="" value={this.state.term} onChange={this.onInputChange}/>
        <input type="submit"/>
      </form>
    );
  }

  onInputChange(e){
    // sets the state to the current search term
    this.setState({term: e.target.value});

    // pulls qwicksearch from searchbar on app.js
    // this.props.onSearch(term);
    
  }

  termSubmit(e){
    e.preventDefault();
    console.log(this.state.term + " Was submitted");
  }

}

export default SearchBar;
