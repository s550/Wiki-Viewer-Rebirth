import React from 'react';

const SearchList = ({article}) => {
  const Link = 'http://en.wikipedia.org/?curid=' + article.pageid;
  return(
    <div>
    <li className="content">
      <a href={Link} target="blank">{article.title}</a>
    </li>
  </div>
  );
}

export default SearchList;
