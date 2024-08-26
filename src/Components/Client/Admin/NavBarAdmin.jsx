import React from 'react'
import { Button, Dropdown } from 'react-bootstrap'
import { useLogin } from '../../../Shared/hooks/useLogin'
import { Navigate, NavLink } from 'react-router-dom'


export const NavBarAdmin = () => {

    const {logout} = useLogin()
  
  return (
    
    <nav className="navbar justify-content-between">
      <a className="navbar-brand m-4 " href='/home/prCtrl/clientAdmin'>Practice Control</a>
      
      <div>
      <Button href="/home/prCtrl/clientAdmin/editClient" style={{  color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }} className="btn btn-dark m-4"> Client</Button>
      <Button style={{ backgroundColor: '#DC3545 ', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }} className="btn m-4" onClick={logout} type="submit">Log Out</Button>
      </div>
        
    </nav>

  )
}
