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
            <Nav.Link href="/home/prCtrl/clientAdmin/Supervisor">Supervisor</Nav.Link>
            <Nav.Link href="/home/prCtrl/clientAdmin/Practicing">Practicing</Nav.Link>

            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item  href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          
          </Nav>
          <Nav>
            <Container>
            <Navbar.Brand>Bienvenido {data.name}</Navbar.Brand>
            <Button  className='btn btn-danger p-3 mb-2' onClick={logout}>Cerrar sesión</Button>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
