import React from 'react'
import './Hero.css'
import { Button } from './Button'
import Herosec2 from './Herosec2'
import { Feedback } from './Feedback'


function Hero() {
  return (
    <>
    <div className='hero-div'>
        <div className='hero-text'>
        <h1 className='heading1'>Let us find your</h1>
        <h1 className='heading2'>Forever Food.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
        <div className='Hero-btn'>
            <Button fontColor={'#FFFFFF'} width={"150px"} boarderRadius={"6px"} backgroundColor={'RGB(190, 18, 60)'}>Search Now</Button>
            <Button fontColor={'RGB(190, 18, 60)'} width={"150px"} boarderRadius={"6px"} backgroundColor={'#ffffff'}>Know More</Button>
        </div>
        </div>
    </div>
    <Herosec2/>
    <div className='feedback-section'>
    <Feedback p={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.'} h5={'Gladis Lennon'} p2={'Head of SEO'} src={'https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80'}/>
    <Feedback p={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.'} h5={'Gladis Lennon'} p2={'Head of SEO'} src={'https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80'}/>
    <Feedback p={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.'} h5={'Gladis Lennon'} p2={'Head of SEO'} src={'https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80'}/>
    <Feedback p={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.'} h5={'Gladis Lennon'} p2={'Head of SEO'} src={'https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80'}/>
    <Feedback p={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!'} h5={'Gladis Lennon'} p2={'Head of SEO'} src={'https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80'}/>
    <Feedback p={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.'} h5={'Gladis Lennon'} p2={'Head of SEO'} src={'https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80'}/>

    </div>
    
    </>
  )
}

export default Hero