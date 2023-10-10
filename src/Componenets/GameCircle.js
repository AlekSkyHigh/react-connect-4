import React from "react";

const onClick = () => {
    alert('on click')
}

const GameCircle = ({id, children}) => {
    console.log(id);

    return (
        <div onClick={onClick}>
            {children}
        </div>
    )
}

export default GameCircle