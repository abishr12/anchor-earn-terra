import {useState, useEffect} from 'react';
import { Card } from "./Card"
import "./Interest.css"
import { AnchorEarn, CHAINS, NETWORKS, DENOMS } from "@anchor-protocol/anchor-earn";
import { Msg, MnemonicKey, Wallet, LCDClient } from "@terra-money/terra.js";

interface InterestProps {
    account: AnchorEarn
}

export const Interest = ({account}: InterestProps) => {
    const [interest, setInterest] = useState(0)


const fetchMarketInfo = async () => {
         const market = await account.market({
            currencies: [DENOMS.UST],
        });
        const apy = market.markets[0].APY
        console.log('apy', apy)
        // const num = apy * 100;
        // console.log('num', num)
        setInterest(parseFloat(apy) * 100)
    }


    useEffect(() => {
        fetchMarketInfo()
    }, [])
    console.log('interest', interest)
    return( 
    <Card title="Interest">
        
        <div className="display">
            <div className="apy">
                APY
            </div>
            <div className="interest">
                {interest.toFixed(2)}%
            </div>
        </div>
        
        </Card>)
}