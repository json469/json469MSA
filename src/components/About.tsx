import * as React from 'react';

import '../App.css';

class About extends React.Component {

    public render() {

        return (

            <div id="about-div">
                Created by <a href='https://github.com/json469'>Jesse Son</a>(json469@aucklanduni.ac.nz) with 
                <a href='https://www.cryptocompare.com/api/#'> CryptoCompareAPI</a> and
                <a href='https://newsapi.org/'> NewsAPI</a>
            </div>
        )
    }
}

export default About