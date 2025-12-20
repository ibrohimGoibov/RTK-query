import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TodoById = () => {
    const {id} = useParams();
    const [data, setData] = useState({});
    async function getById() {
        try {
            let {data} = await axios.get(`http://37.27.29.18:8001/api/to-dos/${id}`)
            setData(data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getById()
    }, [id])
  return (
    <div>
        <h1>{data?.name}</h1>
        {data?.images?.map((e) => {
            return (
                <div>
                    <img src={`http://37.27.29.18:8001/images/${e?.imageName}`} width={300} alt="" />
                </div>
            )
        })}
    </div>
  )
}

export default TodoById