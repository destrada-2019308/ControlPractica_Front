import React from 'react'
import { AuthPage } from './Pages/AuthPage/AuthPage'
import { ContentRole } from './Pages/AuthPage/ContentRole'
import { HomeClient } from './Pages/Client/HomeClient'
import { HomeAdmin } from './Pages/Admin/HomeAdmin.jsx'
import { Profile } from './Pages/Client/Profile'
import { CRUDSchool } from './Pages/Admin/CRUDS/CRUDSchool.jsx'
import { CRUDCareer } from './Pages/Admin/CRUDS/CRUDCareer.jsx'
import { CRUDWorkstation } from './Pages/Admin/CRUDS/CRUDWorkstation.jsx'
import { CRUDManagments } from './Pages/Admin/CRUDS/CRUDManagments.jsx'
import { CRUDSupervisor } from './Pages/Admin/CRUDS/CRUDSupervisor.jsx'
import { CRUDPracticing } from './Pages/Admin/CRUDS/CRUDPracticing.jsx'

export const routes = [
    {path: '/', element: <AuthPage/>},
    {path: '/home/*', element: <ContentRole/>},
    {path: '/home/prCtrl/clientHome', element: <HomeClient/>},
    {path: '/home/prCtrl/clientHome/Profile', element: <Profile/>},
    
    /* RUTAS DE ADMIN */
    {path: '/home/prCtrl/clientAdmin', element: <HomeAdmin/>},
    {path: '/home/prCtrl/clientAdmin/School', element: <CRUDSchool/>},
    {path: '/home/prCtrl/clientAdmin/Career', element: <CRUDCareer/>},
    {path: '/home/prCtrl/clientAdmin/Workstation', element: <CRUDWorkstation/>},
    {path: '/home/prCtrl/clientAdmin/Managments', element: <CRUDManagments/>},
    {path: '/home/prCtrl/clientAdmin/Supervisor', element: <CRUDSupervisor/>},
    {path: '/home/prCtrl/clientAdmin/Practicing', element: <CRUDPracticing/>},
]
