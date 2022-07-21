import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './dog.css' 



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
            <div className = 'largeContainer'>
                {data.map((dog) => {
                   return  <div key={dog} className = 'smallContainer'>{dog}</div>
                })}
            </div>
        </div>
    )
}



            // <div>
            //     <select onChange={handleDogChange}>
            //         <option>Select a Dog</option>
            //             {data.map((dog) => 
            //                 <option key={dog}>{dog}</option>
            //             )}
            //     </select>
            // </div>