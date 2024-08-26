import React from 'react'
import { AuthPage } from './Pages/AuthPage/AuthPage'
import { ContentRole } from './Pages/AuthPage/ContentRole'
import { HomeClient } from './Pages/Client/HomeClient'
import { HomeAdmin } from './Pages/Admin/HomeAdmin.jsx'
import { Profile } from './Pages/Client/Profile'
import { CRUDClient } from './Pages/Admin/CRUDClient.jsx'
import { UpdateClient } from './Pages/Admin/UpdateClient.jsx'

export const routes = [
    {path: '/', element: <AuthPage/>},
    {path: '/home/*', element: <ContentRole/>},
    {path: '/home/prCtrl/clientHome', element: <HomeClient/>},
    {path: '/home/prCtrl/clientAdmin/editClient', element: <CRUDClient/>},
    {path: '/home/prCtrl/clientAdmin', element: <HomeAdmin/>},
    {path: '/home/prCtrl/clientHome/Profile', element: <Profile/>}
]
