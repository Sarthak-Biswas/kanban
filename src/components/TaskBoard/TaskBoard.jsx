import React, {useEffect, useState} from 'react'
import Board from '../BoardView/Board'
import { useGlobalContext } from '../../context/appcontext'

const TaskBoard = () => {
    const {data, updateData, group} = useGlobalContext()
    const [content, setContent] = useState([])
    const [carddata, setCarddata] = useState([])
    const [loading , setLoading] = useState(true)

    const API = "https://api.quicksell.co/v1/internal/frontend-assignment"

    const fetchData = async (url) => {
        try {
            console.log(url)
            const res = await fetch(url)
            const resdata = await res.json()
            updateData(resdata)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData(API)
    },[])

  return (
    <>
        {data.users.map((x) => {
            return <Board key={x.id} title={x.name} dat={data}/>
        })}
    </>
  )
}

export default TaskBoard