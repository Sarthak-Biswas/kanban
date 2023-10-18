import React, {useState} from "react";
import "./Board.css";
import Card from "../Card/Card";
import { MoreHorizontal, Plus } from "react-feather";

const Board = (props) => {

    const [count, setCount] = useState(0)

  return (
    <div className='board'>
        <div className='header'>
            <p className='board_title'>
                {props.title} <span> 2</span>
            </p>
            <p className='board_edit'>
                <Plus />
                <MoreHorizontal />
            </p>
        </div>

        <div className='cards custom-scroll'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default Board