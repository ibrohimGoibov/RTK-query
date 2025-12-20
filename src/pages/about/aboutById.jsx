import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const AboutById = () => {
    const {id} = useParams();
    const [data, setData] = useState({});
    async function getById() {
        try {
            let {data} = await axios.get(`http://37.27.29.18:8001/api/categories/${id}`)
            setData(data.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getById()
    }, [id])
  return (
    <div className='p-[20px]'>
        <div className="flex items-center justify-center flex-col gap-[20px]">
        <h1 className='text-[20px]'>Name: {data?.name}</h1>
        <h2 className='text-[20px]'>Id: {data?.id}</h2>
        </div>
    </div>
  )
}

export default AboutById