import { Card } from "./Card"
import { useState, useEffect } from "react";
import "./ExpectedInterest.css"
import classNames from "classnames";

interface ExpectedInterestProps {
    balance: string,
    interest: string,

}

type perAnnumOptions = {
    [key: string]: number
}


export const ExpectedInterest = ({balance, interest}: ExpectedInterestProps) =>{
    
 const [timePeriod, setTimePeriod] = useState("Year");
 const [expectedInterest, setExpectedInterest] = useState("0");

 const timePeriods = ['Year', 'Month', 'Week', 'Day'];

 const perAnnum: perAnnumOptions = {
     'Year': 1,
     'Month': 12,
     'Week': 52,
     'Day': 356    
 }

    useEffect(() => {
        const calculatedInterest = parseFloat(interest);
        const calculatedBalance = parseFloat(balance);
        const calculatedTime = perAnnum[timePeriod];
        const calculatedExpectedInterest = (calculatedBalance * (calculatedInterest)/100)/calculatedTime;

        setExpectedInterest(calculatedExpectedInterest.toString());
    }, [balance, interest, timePeriod])

    return (
        <Card title="Expected Interest">
            <div className="depositDisplayEI">
                <div className="amount">{expectedInterest}</div>
                <div className="currency">UST</div>
            </div>
            <div className="timePeriod">
                {
                    timePeriods.map((period) => 
                    <button 
                        className={classNames("timePeriodSegment", {
                            'timePeriodSelected': timePeriod === period
                        })}
                        key={period}
                        onClick={()=>{setTimePeriod(period)}}>
                        {period}
                    </button>)
                }
            </div>
        </Card>
    )
}