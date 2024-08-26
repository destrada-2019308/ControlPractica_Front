import { Button, Dropdown } from "react-bootstrap"
import { useLogin } from "../../Shared/hooks/useLogin"

export const NavBar = () => {
  
    const {logout } = useLogin()

    return (
    <nav className="navbar justify-content-between">
      <a className="navbar-brand m-4 " href=''>Home Practice Control MANAGER</a>
      
      <div className='d-flex'>
        <Dropdown className='mt-4' >
          <Dropdown.Toggle className='' style={{ padding: '10px 20px'}} variant="dark" id="dropdown-basic">
            Profile
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="">Profile</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button style={{ backgroundColor: '#DC3545 ', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }} className="btn m-4" onClick={logout} type="submit">Log Out</Button>
        
      </div>
    </nav>
  )
}
