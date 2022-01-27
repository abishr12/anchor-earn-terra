import React from 'react';
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
  return (
    <div className="App">
      <TotalDeposit account={anchorEarn} />
      <Interest />
      <ExpectedInterest />
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
