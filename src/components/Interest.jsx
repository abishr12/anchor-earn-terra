import {useState} from 'react';
import { Card } from "./Card"
import "./Interest.css"

export const Interest = () => {
    const [interest, setInterest] = useState("19.37")
    return( 
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