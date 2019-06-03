import React from 'react';

const WikiHeader = () => {
    return(
        <header>
            <h1 className="header"><span><i className="fab fa-wikipedia-w"></i></span>iki<span id="title">Viewer</span></h1>
            <h4 className="mini-heading">Getting lost "link-surfing" on Wikipedia has never been so easy surfs up...</h4>
        </header>
    );
}

export default WikiHeader;