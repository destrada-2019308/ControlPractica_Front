import React from 'react'
import { NavBar } from '../../Components/Client/NavBar'
import { PracticeControl } from '../../Components/Client/PracticeControl'
import './Client.css'

export const HomeClient = () => {
  return (
    <>
      <NavBar/>

      <div className='div-hc'>
      <PracticeControl/>
      </div>
      
    </>
  )
}
