import React from 'react'
import './QuoteCard.css'

export const QuoteCard = (props) => {
  return (
    <>
    <div className='card-main'>
    <div className='card'>
        <p className='p1'>{props.disc}</p>
        <p className='p2'>{props.auth}</p>
    </div>
    </div>
    </>
  )
}
