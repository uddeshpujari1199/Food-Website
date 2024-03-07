import React from 'react'
import Navbar from './../component/Navbar'
import { Footer } from '../component/Footer'
import { QuoteCard } from '../component/QuoteCard'





function QuoteScreen() {
    const arr=[{
        para:'Its amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can t go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.',
        name:'Adam Scott'
    },
    {
        'para':'Eat breakfast like a king, lunch like a prince, and dinner like a pauper.',
        'name':'Adam Scott'  
    },
    {
        'para':'We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.',
        'name':'Adam Scott'
    },
    {
        'para':'Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.',
        'name':'Adam Scott'  
    },
    {
        'para':'Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.',
        'name':'Alice May Brock'  
    },
    {
        'para':'Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, "Your fatness is an affront to me, so we have the right to treat you as offensively as you appear." Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.',
        'name':'Anthelme Brillat-Savarin'  
    },
    {
        'para':'I have never cared much for fish - it floats in the belly as much as in the pond.',
        'name':'Henry Bromel'  
    },
    {
        'para':'If the divine creator has taken pains to give us delicious and exquisite things to eat, the least we can do is prepare them well and serve them with ceremony.',
        'name':'J. R. R. Tolkien'  
    }]
  return (
    <>

    <Navbar/>
    {
        arr.map((val,index)=>{
            return (
                <QuoteCard disc={val.para} auth={val.name}></QuoteCard>
            )
        })
    }
        
    <Footer/>
    </>
  )
}

export default QuoteScreen