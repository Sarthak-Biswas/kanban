import React, {useState} from 'react'
import "./Display.css"
import { ChevronDown } from 'react-feather'
import { useGlobalContext } from '../../context/appcontext'

const Display = (props) => {

  const {group, updateGroup, order, updateOrder} = useGlobalContext();
  const [groupToggle, setGroupToggle] = useState('0');
  const [orderToggle, setOrderToggle] = useState('0');

  const toggleGroup = () => {
    if(groupToggle === '0') {
      setGroupToggle('1');
      setOrderToggle('0')
    }
    else
      setGroupToggle('0');
  }

  const toggleOrder = () => {
    if(orderToggle === '0') {
      setOrderToggle('1');
      setGroupToggle('0')
    }
    else
      setOrderToggle('0');
  }

  const setGroup = (event) => {
    const btnID = event.target.id;
    updateGroup(btnID)
    setGroupToggle('0');
  }

  const setOrder = (event) => {
    const btnID = event.target.id;
    updateOrder(btnID)
    setOrderToggle('0');
  }

  return (
    <div className='display_box' style={{'scale': props.scale}}>
        <div className='group'>
            <span>Grouping</span> <span><button onClick={toggleGroup}>{group} <ChevronDown /></button></span>

            <div className='group_dropdown' style={{'scale': groupToggle}}>
              <button id='Status' onClick={setGroup}>Status</button>
              <button id='User' onClick={setGroup}>User</button>
              <button id='Priority' onClick={setGroup}>Priority</button>
            </div>

        </div>
        <div className='order'>
            <span>Ordering</span> <span><button onClick={toggleOrder}>{order} <ChevronDown /></button></span>

            <div className='order_dropdown' style={{'scale': orderToggle}}>
              <button id='Priority' onClick={setOrder}>Priority</button>
              <button id='Title' onClick={setOrder}>Title</button>
            </div>
            
        </div>
    </div>
  )
}

export default Display