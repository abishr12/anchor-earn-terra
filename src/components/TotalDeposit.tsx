import { useState, useEffect } from "react";
import { Card } from "./Card"
import "./TotalDeposit.css"
import { AnchorEarn, CHAINS, NETWORKS, DENOMS } from "@anchor-protocol/anchor-earn";
import { Msg, MnemonicKey, Wallet, LCDClient } from "@terra-money/terra.js";
    
interface TotalDepositProps {
    anchorEarn: AnchorEarn,
    balance: string,
    setBalance: React.Dispatch<React.SetStateAction<string>>
    fetchAccountBalance: () => Promise<void>;
}
export const TotalDeposit = ({ anchorEarn , balance, setBalance, fetchAccountBalance}: TotalDepositProps) => {
    const [isDepositing, setIsDepositing] = useState(false);
    const [isWithdrawing, setIsWithdrawing] = useState(false);

    return (
        <Card title="Total Deposit">
            <div className="depositDisplay">
                <div className="amount">{balance}</div>
                <div className="currency">UST</div>
            </div>
            <div className="actions">
                <button className="deposit" disabled={isDepositing || isWithdrawing} onClick={async () => {
                    setIsDepositing(true)
                    await anchorEarn.deposit({
                        amount: '1',
                        currency: DENOMS.UST,
                      });

                     await fetchAccountBalance()
                     setIsDepositing(false)
                }}>
                    
                {isDepositing ? <div><i key="spinner" className="fas fa-spinner"/></div>: <div key="depositText">Deposit</div>} 
                </button>
                <button className="withdraw" disabled={isDepositing || isWithdrawing} onClick={async () => {
                    setIsWithdrawing(true)
                    await anchorEarn.withdraw({
                        amount: '1',
                        currency: DENOMS.UST,
                      });

                     await fetchAccountBalance()
                     setIsWithdrawing(false)
                }} >
                    {isWithdrawing ? <div><i key="spinner" className="fas fa-spinner"/></div>: <div key="withdrawText">Withdraw</div>} 
                </button>
            </div>
        </Card>
    )
}