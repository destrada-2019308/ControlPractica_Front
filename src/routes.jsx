import React from 'react'
import { AuthPage } from './Pages/AuthPage/AuthPage'
import { ContentRole } from './Pages/AuthPage/ContentRole'
import { HomeClient } from './Pages/Client/HomeClient'
import { HomeAdmin } from './Pages/ADMIN/HomeAdmin'
import { Profile } from './Pages/Client/Profile'

export const routes = [
    {path: '/', element: <AuthPage/>},
    {path: '/home/*', element: <ContentRole/>},
    {path: '/home/prCtrl/clientHome', element: <HomeClient/>},
    {path: '/home/prCtrl/clientAdmin', element: <HomeAdmin/>},
    {path: '/home/prCtrl/clientHome/Profile', element: <Profile/>}
]
