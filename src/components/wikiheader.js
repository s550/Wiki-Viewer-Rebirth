import React from 'react';

const WikiHeader = () => {
    return(
        <header>
            <h1 className="header"><span><i className="fab fa-wikipedia-w"></i></span>iki<span id="title">Viewer</span></h1>
            <h4 className="mini-heading">Wikipedia article search and link surfing tool</h4>
        </header>
    );
}

export default WikiHeader;