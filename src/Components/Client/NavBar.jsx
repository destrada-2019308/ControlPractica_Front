import React from 'react'
import { useLogin } from '../../Shared/hooks/useLogin'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import './style.css'
import img2 from '../../assets/logoMacro.png'

export const NavBar = () => {

  const { logout } = useLogin()

  return (
    <nav className=" navbar justify-content-between " style={{ color: '#fff', background: '#2f518d'}}>
      
      
      <div>
      <img src={img2} alt=""/>
      <a className="navbar-brand m-4 " style={{ color: '#fff'}} href='/home/prCtrl/clientHome'>Control de Práctica</a>
      </div>
      
      <div className='d-flex'>
        <Dropdown className='mt-4' >
          <Dropdown.Toggle className='' style={{ padding: '10px 20px'}} variant="dark" id="dropdown-basic">
            Profile
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/home/prCtrl/clientHome">Home</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button style={{ backgroundColor: '#3873ba ', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }} className="btn m-4" onClick={logout} type="submit">Log Out</Button>
        
      </div>
    </nav>
  )
}
