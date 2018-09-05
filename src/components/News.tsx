import axios from 'axios';
import * as React from 'react';

import '../App.css';

import CircularProgress from '@material-ui/core/CircularProgress';

class News extends React.Component {

    public state = {

        loading: true,
        news: {}
    }

    public async componentWillMount() {

        await axios.get('https://newsapi.org/v2/top-headlines?q=crypto&apiKey=477befb9e1f344f290464430be05d39b')
        .then(res => {
          const news = res.data.articles;
          this.setState({loading:false, news});
       });
    }

    public render() {

        if (this.state.loading) { return (<div id="loading-div"><CircularProgress thickness={5}/></div>) }

        return (
            <div>
                {Object.keys(this.state.news).map((key:any) => (
                <div id="news-list">
                    <span className="news-header-row">
                        <a href={this.state.news[key].url}>{this.state.news[key].title}</a><br/>
                    </span>
                    <span className="news-body-row">
                        {this.state.news[key].description}<br/><br/>
                    </span>
                    <span className="news-body-row">
                        {(this.state.news[key].author) && <div>Author: {this.state.news[key].author}<br/></div>}
                        Date Published: {this.state.news[key].publishedAt}
                    </span>
                </div>
                ))}
            </div>
        );
    }
}

export default News