import React, {useState} from "react";

import '../Game.css';

import GameCircle from "./GameCircle"

const NO_CIRCLES = 16;
const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard = () => {

    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

    console.log(gameBoard);

    const initBoard = () => {
        const circles = [];

        for (let i = 0; i < NO_CIRCLES; i++) {
            circles.push(renderCircle(i));
        }

        return circles;
    };

    const circleClicked = (id) => {
        console.log('circled clicked:' + id);

        setGameBoard(prev => {
            return prev.map((circle, pos) => {
                if(pos === id) return currentPlayer;
                return circle;
            })
        })

        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

        console.log(gameBoard);
        console.log(currentPlayer);
    };

    const renderCircle = id => {
        return  <GameCircle id={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked} /> 
    }

    return (
        <div className="gameBoard">
            {initBoard()}
        </div>
    )
}

export default GameBoard;