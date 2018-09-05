import * as React from 'react';
import { default as NumberFormat } from 'react-number-format';

import '../App.css';

interface ICryptoProp {

    cryptoInfo: {}
    error: undefined
}

class CryptoInfo extends React.Component<ICryptoProp> {


    public render() {

        const crypto = this.props.cryptoInfo;
        const error = this.props.error;

        if (error !== undefined) {

            return (

                <div id="cryptoInfo-error">
                    {error}
                </div>
            )
        }

        if (crypto === undefined) {

            return (
                
                <div id="cryptoInfo-error">
                    Please enter a valid coin ID.
                </div>
            )
        }

        return (

            <div>
                {Object.keys(crypto).map((coinKey:string) => (
                    Object.keys(crypto[coinKey]).map((currencyKey:string) => (

                        <div id="cryptoInfo-list">
                            <span>
                                <b>{crypto[coinKey][currencyKey].FROMSYMBOL} </b>
                            </span>
                            <span className={(crypto[coinKey][currencyKey].CHANGEPCTDAY>0)?"price-up":"price-down"}>
                                <span>(</span>
                                <NumberFormat value={crypto[coinKey][currencyKey].CHANGEPCTDAY}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    decimalScale={2}
                                    prefix={(crypto[coinKey][currencyKey].CHANGEPCTDAY>0)?"+":""}
                                    suffix={'%'} />
                                <span>) </span>
                            </span>
                            <span>
                                <NumberFormat value={crypto[coinKey][currencyKey].PRICE}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    decimalScale={2}
                                    prefix={'$'}
                                    suffix={' USD'} />
                            </span>
                            <div id="cryptoInfo-detail">
                                <b>Market Capital</b>: <NumberFormat value={crypto[coinKey][currencyKey].MKTCAP}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    decimalScale={2}
                                    prefix={'$'}
                                    suffix={' USD'} /><br/>
                                <b>Volume</b>: <NumberFormat value={crypto[coinKey][currencyKey].TOTALVOLUME24HTO}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    decimalScale={2}
                                    prefix={'$'}
                                    suffix={' USD'} /><br/>
                            </div>
                        </div>
                    ))
                ))}
            </div>
        )
    }
}

export default CryptoInfo 