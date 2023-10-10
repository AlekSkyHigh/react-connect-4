import React from "react";

const onClick = (ev, id) => {
    alert('on click ' + id)
}

const GameCircle = ({ id, color, children }) => {

    const style = {
        backgroundColor: color,
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: '50%'
    }

    return (
        <div style={style} onClick={(ev) => onClick(ev, id)}>
            {children}
        </div>
    )
}

export default GameCircle