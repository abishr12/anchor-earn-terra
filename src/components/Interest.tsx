import {useState, useEffect} from 'react';
import { Card } from "./Card"
import "./Interest.css"
import { AnchorEarn, CHAINS, NETWORKS, DENOMS } from "@anchor-protocol/anchor-earn";
import { Msg, MnemonicKey, Wallet, LCDClient } from "@terra-money/terra.js";

interface InterestProps {
    interest: string

}

export const Interest = ({interest}: InterestProps) => {


    return ( 
    <Card title="Interest">
        
        <div className="display">
            <div className="apy">
                APY
            </div>
            <div className="interest">
                {interest}%
            </div>
        </div>
        
        </Card>)
}