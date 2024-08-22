import React from 'react'
import { useLogin } from '../../Shared/hooks/useLogin'

export const NavBar = () => {

  const { logout } = useLogin()

  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a className="navbar-brand m-4">Practice Control</a>
      
      <form className="form-group d-flex flex-row m-3">
        <input className="form-control m-2 " type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>

      <button className="btn btn-danger m-4" onClick={logout} type="submit">Log Out</button>

    </nav>
  )
}
