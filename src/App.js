import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/searchbar'
import RandoButton from './components/randobutton'
import SearchResults from './components/searchresults';
import 'bulma/css/bulma.css';
import WikiHeader from './components/wikiheader';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      articles: [],
      term: null,
      loading: false
    }
    // binding wikiSearch allows it to set the state of articles when updated through searchbar
    this.wikiSearch = this.wikiSearch.bind(this);
  }
// componentWillMount(){
//   this.wikiSearch('Wikipedia');
// }
// Function that takes a serch tearm for an arguement and passes it to an axios get request
wikiSearch(term){
  axios.get('https://secret-ocean-49799.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles='+ term +'&prop=revisions&rvlimit=10&rvprop=content&list=allpages&apfrom='+ term +'&aplimit=3&alprop=ids|title&format=json')
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
    // renders the completed app
    return (
      <div className="App">
      <WikiHeader/>
      <SearchBar wikiSearch={this.wikiSearch}/>
      <RandoButton />
      <SearchResults articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
