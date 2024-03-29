import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
    <div className="container">
        <h1>
            Learn French 
        </h1>
        <hr />
        <h2>
            What is Oiseaux  mean in English?
        </h2>
        <ul>
            <li>Dog</li>
            <li>Cat</li>
            <li>Bird</li>
            <li>Fish</li>
        </ul>
        <button>Next</button>
        <div className="index"> 1 of 5 quetions</div>
    </div>
  )
}

export default Quiz