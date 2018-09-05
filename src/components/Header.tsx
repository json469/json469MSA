import * as React from 'react';

import {AppBar, Button, Toolbar, Typography} from '@material-ui/core/';
import {Link} from 'react-router-dom';

import '../App.css';

export const Header: React.StatelessComponent<{}> = () => {

    return (
        <div id="app-bar">
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="title">
                        <span id="app-bar-title">
                            CryptoCity
                        </span>
                        <Link to="/">
                            <Button size="large" color="primary" variant="text">Listing</Button>
                        </Link>
                        <Link to="/News">
                            <Button size="large" color="primary" variant="text">News</Button>
                        </Link>
                        <Link to="/About">
                            <Button size="large" color="primary" variant="text">About</Button>
                        </Link>
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
}

// add Powered by CryptoCompare and NewsAPI