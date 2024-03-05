import React from 'react'
import './Feedback.css'

export const Feedback = (props) => {
  return (
    <>
    <div className='dtails'>
        <p className='dtails-para'>{props.p}</p>
        <div className='Person-Details'>
        <img src={props.src} alt='Gladis Lennon'></img>
        <div className='Name-details'>
        <span>{props.h5}</span>
        <p>{props.p2}</p>
        </div>
        </div>
    </div>
    
    </>
  )
}
