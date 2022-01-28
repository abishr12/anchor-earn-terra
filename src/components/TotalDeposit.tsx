import { useState, useEffect } from "react";
import { Card } from "./Card"
import "./TotalDeposit.css"
import { AnchorEarn, CHAINS, NETWORKS, DENOMS } from "@anchor-protocol/anchor-earn";
import { Msg, MnemonicKey, Wallet, LCDClient } from "@terra-money/terra.js";
    
interface TotalDepositProps {
    account: AnchorEarn
}
export const TotalDeposit = ({ account }: TotalDepositProps) => {
    const [balance, setBalance] = useState("0")
    const [isDepositing, setIsDepositing] = useState(false);
    

    console.log('account', account)
    const fetchAccountBalance = async () => {
         const userBalance = await account.balance({
            currencies: [DENOMS.UST],
        });
        setBalance(userBalance.total_deposit_balance_in_ust)

        setIsDepositing(false)
    }


    useEffect(() => {
        fetchAccountBalance()
    }, [])


    return (
        <Card title="Total Deposit">
            <div className="depositDisplay">
                <div className="amount">{balance}</div>
                <div className="currency">UST</div>
            </div>
            <div className="actions">
                <button className="deposit" disabled={isDepositing} onClick={async () => {
                    setIsDepositing(true)
                    await account.deposit({
                        amount: '1',
                        currency: DENOMS.UST,
                      });

                     fetchAccountBalance()
                }}>
                    
                {isDepositing ? <div><i key="spinner" className="fas fa-spinner"/></div>: <div key="depositText">Deposit</div>} 
                </button>
                <button className="withdraw" onClick={() => console.log('Withdraw')} >Withdraw</button>
            </div>
        </Card>
    )
}