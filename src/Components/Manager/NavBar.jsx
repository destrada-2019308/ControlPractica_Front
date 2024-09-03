import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLogin } from '../../Shared/hooks/useLogin'
import { Button } from 'react-bootstrap';
import { useSupervisor } from '../../Shared/hooks/ADMIN/useSupervisor';
import { useEffect } from 'react';

export const NavBar = () => {

    const {logout} = useLogin() 
    const user = localStorage.getItem('user')
    //console.log(user);
    let data = JSON.parse(user)
    console.log(data.codeUser);
  


  return (
    
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href=" ">Evalua a tu practicante</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"> 
          </Nav>
          <Nav>
            <Container>
            <Navbar.Brand>Bienvenido {data.nameUser}</Navbar.Brand>
            <Button  className='btn btn-danger p-3 mb-2' onClick={logout}>Cerrar sesión</Button>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
