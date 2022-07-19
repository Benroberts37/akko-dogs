import React from 'react'

const DogDetails = ({
    name, 
    bred_for,
    breed_group,
    life_span,
    temperament
}) => {
    return(
        <div className="flex-container">
        <div>{name}</div>
        <div>{bred_for}</div>
        <div>{breed_group}</div>
        <div>{life_span}</div>
        <div>{temperament}</div>
      </div>
    )
}

export default DogDetails