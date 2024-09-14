import React from "react";
import './ArrivalsCard.css';
import Stars from '../Stars/';
export default function ArrivalsCard({children}){
    return(
        <div className="arrivalsCard">
            <div className="arrivalsCard_imgCon"></div>
            <div className="arrivalsCard_iconsCon">{children}</div>
            <div className="goodsName">Black chair</div>
            <div className="priceAndRating">
                <div className="price"><s>$20.00</s> $15.00</div>
                <Stars />
                </div>
                
        </div>
    )
}