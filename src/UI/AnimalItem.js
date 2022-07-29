import React from 'react'

const AnimalItem = ({name, img}) => {
  return (
    <div className='animalitem'>
        <div className='frames'>
          <img src={img}></img>
          <p>{name}</p>
        </div>
    </div>
  )
}

export default AnimalItem