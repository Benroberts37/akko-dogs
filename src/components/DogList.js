import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DogDetails from './DogDetails'


export default function DogList() {
    const [data, setData] = useState([])

    async function fetchData() {
        await axios.get('https://dog.ceo/api/breeds/list/all')
            .then((res) => {
                const allDogs = res.data.message
                const namesOfBreeds = []
                for (const key in allDogs) {
                    namesOfBreeds.push(key)
                    setData(namesOfBreeds)
                }
                console.log(data)
            })
            .catch((err) => {
                console.log("Error:", err)
            })
    }

    let handleDogChange = (e) => {
        setData(e.target.value)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
            <div>
                <select onChange={handleDogChange}>
                    <option>Select a Dog</option>
                        {data.map((dog) => 
                            <option value={dog.value}>{dog}</option>
                        )}
                </select>
            </div>
    )

}