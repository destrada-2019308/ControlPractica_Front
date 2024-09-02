import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLogin } from '../../Shared/hooks/useLogin'
import { Button } from 'react-bootstrap';

export const NavBarAdmin = () => {

    const {logout} = useLogin()

    const user = localStorage.getItem('user')
    //console.log(user);
    let data = JSON.parse(user)
    //console.log(data.name);
    
  return (
    
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home/prCtrl/clientAdmin"> Gestion de datos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home/prCtrl/clientAdmin/School">Colegios</Nav.Link>
            <Nav.Link href="/home/prCtrl/clientAdmin/Career">Carreras</Nav.Link>
            <Nav.Link href="/home/prCtrl/clientAdmin/Workstation">Workstation</Nav.Link>
            <Nav.Link href="/home/prCtrl/clientAdmin/Managments">Managments</Nav.Link>

            <NavDropdown title="Usuarios" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/home/prCtrl/clientAdmin/Supervisor">Supervisor</NavDropdown.Item>
              <NavDropdown.Item  href="/home/prCtrl/clientAdmin/Practicing">
                Practicante
              </NavDropdown.Item>
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
