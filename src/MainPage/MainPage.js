import React from 'react'
import './MainPage.css'
import FirstPart from './FirstPart/FirstPart'
import SecondPart from './SecondPart/SecondPart'

export default function MainPage() {
  return (
    <div className='MainWindow'>

        <FirstPart></FirstPart>
        <SecondPart></SecondPart>
    </div>
  )
}
