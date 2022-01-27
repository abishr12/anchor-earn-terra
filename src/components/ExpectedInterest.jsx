import { Card } from "./Card"
import { useState } from "react";
import "./ExpectedInterest.css"


export const ExpectedInterest = () =>{
    
 const [interest, setInterest] = useState(0)
 const [value, setValue] = useState();

 const timePeriods = ['Year', 'Month', 'Week', 'Day'];

    return (
        <Card title="Expected Interest">
            <div className="depositDisplayEI">
                <div className="amount">{interest}</div>
                <div className="currency">UST</div>
            </div>
            <div className="timePeriod">
                {
                    timePeriods.map((period) => 
                    <button className="timePeriodSegment"key={period}>
                        {period}
                    </button>)
                }
            </div>
        </Card>
    )
}