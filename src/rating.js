import React from 'react'
import Note from './note'

const Rating = ({onChange, count}) => (
    <div className="rating-filter">
        <span className="rating-filter-text">Minimum rating</span>
        <Note
            count={count}
            onChangeRating={(newRating) =>{
                onChange(newRating)
            }} />
      </div>
)

export default Rating