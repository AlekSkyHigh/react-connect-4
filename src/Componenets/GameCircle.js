import React from "react";

import '../Game.css';

const onClick = (ev, id) => {
    alert('on click ' + id)
}

const GameCircle = ({ id, children }) => {

    return (
        <div className={`gameCircle ${id % 2 === 0 ? "odd" : "even"}`} onClick={(ev) => onClick(ev, id)}>
            {children}
        </div>
    )
}

export default GameCircle