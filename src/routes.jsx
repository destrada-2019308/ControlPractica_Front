import React from 'react'
import { AuthPage } from './Pages/AuthPage/AuthPage'
import { ContentRole } from './Pages/AuthPage/ContentRole'
import { HomeClient } from './Pages/Client/HomeClient'

export const routes = [
    {path: '/', element: <AuthPage/>},
    {path: '/home/*', element: <ContentRole/>},
    {path: '/home/prCtrl/clientHome', element: <HomeClient/>}
]
