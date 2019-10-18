import React from "react";
import "./style.css";

function CatCard(props) {

    
    return(
        <div onClick={() => props.handleClick(props.id)} className="card float-left">
            <div className="card-body">
                <img className="card-img" alt={""} src= {props.image} />
            </div>
        </div>
    );
}

export default CatCard;