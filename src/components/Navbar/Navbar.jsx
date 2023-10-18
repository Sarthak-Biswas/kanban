import React, {useState} from 'react';
import "./Navbar.css"
import Display from '../Display/Display';
import { Sliders, ChevronDown, X } from 'react-feather';

const Navbar = () => {
  const [pop, setPop] = useState('0');
  const [dropdown, setDropDown] = useState(false);

  const popupDisplay = () => {
    if(pop === '0')
      setPop('1')
    else
      setPop('0')

    setDropDown(!dropdown)
  }

  return (
    <>
    <button className='display_button' onClick={popupDisplay}>
        <div className='button_content'>

            {!dropdown && <Sliders className='slider'/>}
            {!dropdown && 'Display'}
            {!dropdown && <ChevronDown />}

            {dropdown && <X style={{'width': '16px', 'height': '16px', 'marginLeft' : '10px', 'marginRight' : '10px'}}/>}

        </div>
    </button>
    <div className='popup'>
        <Display scale={pop}/>
    </div>
    </>
  )
}

export default Navbar