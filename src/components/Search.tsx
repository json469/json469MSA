import * as React from "react";

import '../App.css';

export interface IProps {

    getCoinInfo: any;
}

class Search extends React.Component<IProps> {

    public render() {
        
        return (

            <div id="search-div">
                <form onSubmit={this.props.getCoinInfo}>
                <div>
                    <input type="text" name="coin" placeholder="Search coins by ID 'btc'"/>
                    <button>Go</button>
                </div>
                </form>
            </div>
        );
    }
};

export default Search;