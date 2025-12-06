import React from 'react'
import '../Styles/Card.css'
function Card({ college }) {
    return (
        <div className='card-container'>
            <div className='img-container'>
            </div>
            <div className='card'>{college}</div>
        </div>
    )
}

export default Card