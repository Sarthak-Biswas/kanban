import React from 'react';
import { Circle } from 'react-feather';
import "./Card.css";

const Card = (props) => {
  return (
    <div className='card'>
        <div className='card_header'>
            <p>CAM-1</p>
        </div>
        <div className='card_body'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur asperiores autem at quaerat doloremque fuga nisi iste illum, alias assumenda.</p>
        </div>
        <div className='card_footer'>
            <span>
                Feature Request
            </span>
            <span>Cool</span>
            <span>Feature Request</span>
            <span>Feature Request</span>
            <span>Feature Request</span>
            <span>Feature Request</span>
        </div>
    </div>
  )
}

export default Card