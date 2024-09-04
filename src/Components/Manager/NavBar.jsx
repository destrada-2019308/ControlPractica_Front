import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLogin } from '../../Shared/hooks/useLogin'
import { Button } from 'react-bootstrap';
import { useSupervisor } from '../../Shared/hooks/ADMIN/useSupervisor';
import { useEffect } from 'react';
import img2 from '../../assets/logoMacro.png'

export const NavBar = () => {

    const {logout} = useLogin() 
    const user = localStorage.getItem('user')
    //console.log(user);
    let data = JSON.parse(user)
    console.log(data.codeUser);
  


  return (
    
    <Navbar collapseOnSelect expand="lg" className=" " style={{ background: '#2f518d'}}>

      <Container style={{ color: '#fff' }}>
      <div>
      <img src={img2} alt=""/>      
      <Navbar.Brand href=" " style={{ color: '#fff',fontSize: 'x-large' }}>Evalua a tu practicante</Navbar.Brand>
      </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"> 
          </Nav>
          <Nav>
            <Container>
            <Navbar.Brand style={{ color: '#fff' }}>Bienvenido {data.nameUser}</Navbar.Brand>
            <Button  className='btn p-3 mb-2' style={{ backgroundColor: '#3873ba ', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }} onClick={logout}>Cerrar sesión</Button>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
