import React from 'react'
import './../component/Button.css'

export const Button = (props) => {
  return (
    <button style={{
        color:props.fontColor,
        backgroundColor:props.backgroundColor,
        borderRadius:props.boarderRadius,
        width:props.width
    }} className='btn'>{props.children}</button>
  )
}
