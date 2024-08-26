import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeAdmin } from '../Admin/HomeAdmin'
import { HomeClient } from '../Client/HomeClient'
import { HomeAttendant } from '../Manager/HomeAttendant'
import { NotFound } from '../NotFound'

export const ContentRole = () => {

    let user = localStorage.getItem('user')
    //console.log(user);
    
    let role = JSON.parse(user).role
    console.log(role);
    

  return (
    <Routes>
        {
            role === 'ADMIN' ? (
                <Route path='prCtrl' element={<HomeAdmin/>} />
            ) : role === 'CLIENT' ? (
                <Route path='prCtrl' element={<HomeClient/>} />
            ) : role === 'MANAGER' ? (
                <Route path='prCtrl' element={<HomeAttendant/>} />
            ) : (
                <Route path='*' element={<NotFound/>} />
            )
        }
    </Routes>
  )
}

