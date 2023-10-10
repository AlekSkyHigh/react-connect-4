import React from "react";

const onClick = (ev, id) => {
    alert('on click ' + id)
}

const GameCircle = ({id, color, children}) => {
    console.log(id);

    return (
        <div style={{ backgroundColor: color}} onClick={(ev) => onClick(ev, id)}>
            {children}
        </div>
    )
}

export default GameCircle