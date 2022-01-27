import React from 'react';
import "./Card.css";


export const Card = ({title, children}) => (
    <div className="card">
        <div>
            {title}
            <i className="info fas fa-info-circle"></i>
        </div>
        {children}
    </div>
);