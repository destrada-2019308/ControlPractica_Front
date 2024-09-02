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
    const { isSuper, getPractBySupervisor } = useSupervisor()
    const user = localStorage.getItem('user')
    //console.log(user);
    let data = JSON.parse(user)
    console.log(data.codeUser);
    let id = data.codeUser

  useEffect(() => {
    getPractBySupervisor(id)
  }, [])



  return (
    
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href=" ">Home Supervisor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
             
            <NavDropdown title="Usuarios" id="collapsible-nav-dropdown">
                {
                  isSuper.map( index => (
                    <tr>
                      <a href='#' style={{ color: '#000', margin: '10px'}}>{index.nameUser}</a>
                    </tr>
                  ))
                }
            </NavDropdown>
          
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
