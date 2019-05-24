import React from 'react';
import MicrolinkCard from '@microlink/react';
const SearchList = ({article}) => {
  const Link = 'http://en.wikipedia.org/?curid=' + article.pageid;
  return(
    <div className="column">
      <div className="columns">
      <MicrolinkCard
        url={Link}
      
      
      
      />
      
      </div>
  </div>
  );
}

export default SearchList;
