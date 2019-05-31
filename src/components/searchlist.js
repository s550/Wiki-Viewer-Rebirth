import React from 'react';
import MicrolinkCard from '@microlink/react';
const SearchList = ({article}) => {
  const Link = 'http://en.wikipedia.org/?curid=' + article.pageid;
  // Places a Microlink card inside a column and passes the url in using the Link constant
  return(
      <div className="column">
      <MicrolinkCard
        url={Link}
        size='large'
      
      
      />
      
      </div>
  );
}

export default SearchList;
