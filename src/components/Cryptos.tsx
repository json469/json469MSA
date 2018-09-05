import * as React from 'react';
import { default as NumberFormat } from 'react-number-format';

import CircularProgress from '@material-ui/core/CircularProgress';

interface ICryptoProp {

    cryptos: {}
    loading: boolean
}

class Cryptos extends React.Component<ICryptoProp> {

    public render() {

        if (this.props.loading) { return (<div id="loading-div"><CircularProgress thickness={5}/></div>) }

        return (

            <div>
                {Object.keys(this.props.cryptos).map((key:string) => (
                    <div id="crypto-list">
                        <span className="name-col">{key}</span>
                        <span className="price-col">
                            <NumberFormat value={this.props.cryptos[key].USD}
                                displayType={'text'}
                                thousandSeparator={true}
                                decimalScale={2}
                                prefix={'$'}
                                suffix={' USD'} />
                        </span>
                    </div>
                ))}
            </div>
        )
    }
}

export default Cryptos 