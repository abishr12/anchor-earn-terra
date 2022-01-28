import { useState, useEffect } from 'react';
import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';
import ReactDOM from 'react-dom';
import './style.css';
import { TotalDeposit, Interest, ExpectedInterest } from "./components";
import { AnchorEarn, CHAINS, NETWORKS, DENOMS } from "@anchor-protocol/anchor-earn";
import { Msg, MnemonicKey, Wallet, LCDClient } from "@terra-money/terra.js";

const account = new MnemonicKey({
      mnemonic:
        'kidney cannon silk dust tube flight trophy approve identify kind purse install proud kind pigeon bleak this clever mosquito change cash mango sample prepare',
    });
const anchorEarn = new AnchorEarn({
      chain: CHAINS.TERRA,
      network: NETWORKS.BOMBAY_12,
      privateKey: account.privateKey,
    });


function App() {
  const [balance, setBalance] = useState("0")
  const [interest, setInterest] = useState("")

  const fetchAccountBalance = async () => {
         const userBalance = await anchorEarn.balance({
            currencies: [DENOMS.UST],
        });
        setBalance(userBalance.total_deposit_balance_in_ust)

    }

    const fetchMarketInfo = async () => {
         const market = await anchorEarn.market({
            currencies: [DENOMS.UST],
        });
        const apy = market.markets[0].APY;
        setInterest(`${apy.substring(2,4)}.${apy.substring(4,6)}`);
    }


    useEffect(() => {
        fetchMarketInfo();
        fetchAccountBalance();
    }, []);

  return (
    <div className="App">
      <TotalDeposit 
      anchorEarn={anchorEarn} 
      balance={balance} setBalance={setBalance}
      fetchAccountBalance={fetchAccountBalance} />
      <Interest interest={interest} />
      <ExpectedInterest balance={balance} interest={interest}/>
    </div>
  );
}

getChainOptions().then((chainOptions) => {
  ReactDOM.render(
    <WalletProvider {...chainOptions}>
      <App />
    </WalletProvider>,
    document.getElementById('root'),
  );
});
