import React from "react";
import './ArrivalsCard.css';
export default function ArrivalsCard({children}){
    return(
        <div className="arrivalsCard">
            <div className="arrivalsCard_imgCon"></div>
            <div className="arrivalsCard_iconsCon">{children}</div>
        </div>
    )
}