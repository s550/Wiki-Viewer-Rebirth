import React from 'react';
import SearchListItem from './searchlist'

const SearchResults = (props) =>{
  const Results = props.articles.map(article => {
    return(
      <SearchListItem key={article.pageid} article={article} />
    );
  });
  return  (
    <div className="container">
    <ul>
      {Results}
    </ul>
  </div>
  );
};

export default SearchResults;
