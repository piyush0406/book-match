import React, { useState } from 'react'

import { Rating } from 'react-simple-star-rating'

function Sample() {

    const [rating, setRating] = useState(0)

  const handleRating = (rate: number) => {
    setRating(rate)
  }

  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value: number, index: number) => console.log(value, index)
  return (
    <div>
        <Rating 
        SVGstyle={ { 'display':'inline' } }
        />
    </div>
  )
}

export default Sample