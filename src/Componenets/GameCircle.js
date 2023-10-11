import React from "react";

import '../Game.css';

const GameCircle = ({ id, children, onCircleClicked }) => {

    return (
        <div className={`gameCircle ${id % 2 === 0 ? "odd" : "even"}`} onClick={(ev) => onCircleClicked(id)}>
            {children}
        </div>
    )
}

export default GameCircle