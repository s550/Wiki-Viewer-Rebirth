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
      <form id="search-bar" onSubmit={this.termSubmit}>
        <input className="bar" placeholder="Enter Search Term" name="" value={this.state.term} onChange={this.onInputChange}/>
        <button type="submit" className="btn"><i className="fa fa-search"></i></button>
        {/* <input type="submit" id="schbtn" className="btn" value="Go!"/> */}
      </form>
    );
  }

  onInputChange(event){
    // sets the state to the current search term
    this.setState({term: event.target.value});

    // pulls qwicksearch from searchbar on app.js
    // this.props.onSearch(this.state.term);
    
  }

  termSubmit(e){
    e.preventDefault();
    console.log(this.state.term + " Was submitted");
    this.props.wikiSearch(this.state.term);
  }

}

export default SearchBar;
