import { useState } from "react";
import { Card } from "./Card"
import "./TotalDeposit.css"
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
    
export const TotalDeposit = () => {
    const [deposit, setDeposit] = useState(0)
    const [value, setValue] = useState();

    console.log('anchorEarn', anchorEarn)

    return (
        <Card title="Total Deposit">
            <div className="depositDisplay">
                <div className="amount">{deposit}</div>
                <div className="currency">UST</div>
            </div>
            <div className="actions">
                <button className="deposit" onClick={async () => {
                    const deposit = await anchorEarn.deposit({
                        amount: '0.01',
                        currency: DENOMS.UST,
                      });

                        console.log('deposit', deposit)
                }} >Deposit</button>
                <button className="withdraw" onClick={() => setDeposit(deposit - 10)} >Withdraw</button>
            </div>
        </Card>
    )
}