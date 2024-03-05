import React from 'react'
import './Herosec2.css'
import { Button } from './Button'

function Herosec2() {
  return (
    <>
    <div className='hero-sec2'>
        <img src='https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='home-img'></img>
        <div className='side-text'>
            <div className='side-innerText'>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
            <Button fontColor={'#ffffff'} width={"150px"} boarderRadius={"0px"} backgroundColor={'#4f46e5'}>Get in Touch</Button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Herosec2