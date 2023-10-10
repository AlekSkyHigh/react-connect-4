import React from "react";

const onClick = () => {
    alert('on click')
}

const GameCircle = () => {
    return (
        <div onClick={onClick}>
            GameCircle
        </div>
    )
}

export default GameCircle