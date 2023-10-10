import React from "react";

const onClick = (id) => {
    alert('on click ' + id)
}

const GameCircle = ({id, children}) => {
    console.log(id);

    return (
        <div onClick={() => onClick(id)}>
            {children}
        </div>
    )
}

export default GameCircle