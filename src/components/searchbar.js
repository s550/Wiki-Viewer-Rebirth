import React, {Component} from 'react';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      term: ''
    };

  }
  render(){
    return(
      <div className="search-bar">
        <input placeholder="Type to Search" name="" value={this.state.term} onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearch(term);
  }

}

export default SearchBar;
