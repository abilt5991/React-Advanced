import React from 'react';


export default function Income() {
    
    const transactions = [
        {
            income : "$720",
            date : "1/12/22",
            id: 1
        },
        {
            income : "$420",
            date : "2/1/23",
            id: 2
        },
        {
            income : "$260",
            date : "14/2/23",
            id: 3
        },
        {
            income : "$700",
            date : "18/4/23",
            id: 4
        }
    ]
    
    const allTransactions = transactions.map((item)=>{
        return <div key={item.id} className="transaction">
                <h3>{item.income}</h3>
                <span>{item.date}</span>
                </div>
    })
        
    
    return (
        <div className="dashboard-container">
            <div className="dashboard-income">
                <h2>Your Income</h2>
                <p>In last <b>30 days</b></p>
                <h1>$2,260</h1>
            </div>
            <div className="transaction-container">
                <h3>Your Transactions ({transactions.length})</h3>
                {allTransactions}
            </div>
            
            
        </div>
    )
};