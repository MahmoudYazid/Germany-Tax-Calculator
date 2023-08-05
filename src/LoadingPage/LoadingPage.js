import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



export default function LoadingPage() {
    const nav = useNavigate();
    useEffect(() => {
        // Use setTimeout inside useEffect to manage side effects
        setTimeout(() => {
           nav('/main')


        }, 5000);
    }) 

  return (

      
        <div className="LoadingPage">

            <div className="FirstBall"></div>
            <div className="SecondBall"></div>
            <div className="ThirdBall"></div>
            <p> Made By Eng.Mahmoud Abuelyazid</p>

        </div>

  )
}
