import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeAdmin } from '../ADMIN/HomeAdmin'
import { HomeClient } from '../Client/HomeClient'
import { HomeAttendant } from '../Attendant/HomeAttendant'
import { NotFound } from '../NotFound'

export const ContentRole = () => {

    const user = localStorage.getItem('user')
    //console.log(user);
    
    const role = JSON.parse(user).role
    //console.log(role);
    

  return (
    <Routes>
        {
            role === 'ADMIN' ? (
                <Route path='prCtrl' element={<HomeAdmin/>} />
            ) : role === 'CLIENT' ? (
                <Route path='prCtrl' element={<HomeClient/>} />
            ) : role === 'ATTENDANT' ? (
                <Route path='prCtrl' element={<HomeAttendant/>} />
            ) : (
                <Route path='*' element={<NotFound/>} />
            )
        }
    </Routes>
  )
}

