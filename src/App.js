import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/searchbar'
import _ from 'lodash';
import RandoButton from './components/randobutton'
import SearchResults from './components/searchresults';
import 'bulma/css/bulma.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      articles: [],
      term: null,
      loading: false
    }

  }
componentWillMount(){
  // this.wikiSearch('Wikipedia');
}

wikiSearch(term){
  axios.get('https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles='+ term +'&prop=revisions&rvlimit=10&rvprop=content&list=allpages&apfrom='+ term +'&aplimit=5&alprop=ids|title&format=json')
    .then((response) => {
      console.log(response)
      this.setState({articles:response.data.query.allpages}, function(){
        console.log(this.state);
      });
    })
    .catch((err) =>{
      console.log(err)
    });
}



  render() {
    // const qwikSearch = _.debounce((term) => {this.wikiSearch(term)}, 300)


    return (
      <div className="App">
      <h1 className="header">Wikipedia Search</h1>
      <SearchBar/>
      <RandoButton />
      <SearchResults articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
