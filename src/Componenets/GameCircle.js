import React from "react";

import '../Game.css';

const onClick = (ev, id) => {
    alert('on click ' + id)
}

const GameCircle = ({ id, children }) => {

    return (
        <div className="gameCircle" style={id % 2 === 0 ? {backgroundColor: 'red'} : {backgroundColor: 'blue'}} onClick={(ev) => onClick(ev, id)}>
            {children}
        </div>
    )
}

export default GameCircle