import axios from 'axios';
import * as React from 'react';
import './App.css';

import CryptoInfo from './components/CryptoInfo';
import Cryptos from './components/Cryptos';
import Search from './components/Search';

class App extends React.Component {

  public state = {

    cryptoInfo: {},
    cryptos: {},
    error: undefined
  }


  public getCoinInfo = async (e: any) => {


    e.preventDefault();
    
    const coinName = e.target.elements.coin.value.toUpperCase();

    if(coinName) {
      
      await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coinName}&tsyms=USD`)
      .then(res => {
        if(res.status >= 200) {
          const cryptoInfo = res.data.RAW;
          this.setState({cryptoInfo, error:undefined});
        } else {
          throw Error('FETCH ERROR');
        }
      })
      .catch(e = () => {
        this.setState({error: "Unexpected fetch error, please try again later."})
      })

    } else {
      this.setState({error: "Please enter a coin ID."})
    }
  }

  public async componentDidMount() {

    const fiftyCryptos = ["BTC","ETH","XRP","BCH","EOS","XLM","LTC","USDT","ADA","XMR","MIOTA","DASH","TRX","NEO","ETC","XEM","BNB","VET","XTZ","ZEC","OMG","DOGE","LSK","BCN","ONT","ZRX","QTUM","NANO","BTG","ICX","DCR","DGB","ZIL","BTS","MKR","XVG","STEEM","AE","SC","BAT","REP","WAVES","NPXS","BTM","WTC","BCD","HOT","STRAT","KMD","GNT"];

    await axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${fiftyCryptos.join(",")}&tsyms=USD`)
         .then(res => {
           const cryptos = res.data;
           this.setState({cryptos});
        });
  }

  public render() {

    return (
      
      <div className="App">
        <div id='div-crypto' className="Crypto">
          <Search getCoinInfo={this.getCoinInfo} />
          <CryptoInfo cryptoInfo={this.state.cryptoInfo} error={this.state.error}/>
          <Cryptos cryptos={this.state.cryptos} />
        </div>
      </div>
    );
  }
}

export default App;