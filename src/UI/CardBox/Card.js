import React from 'react';
import './Card.css' ;

const Card = (props) => {

    let classes = "ui-card minicard " + props.className ;

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card;
