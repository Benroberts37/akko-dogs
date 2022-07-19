import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DogDetails from './DogDetails'


export default function DogList() {
    const [data, setData] = useState([])

    async function fetchData() {
        await axios.get('https://dog.ceo/api/breeds/list/all')
            .then((res) => {
                const allDogs = res.data.message.message
                setData(allDogs)
                console.log(data)
            })
            .catch((err) => {
                console.log("Error:", err)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
            'hello'
    )

}