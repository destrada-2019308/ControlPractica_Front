import { useEffect } from 'react'
import '../../../Pages/Admin/style.css'
import { useRegister } from '../../../Shared/hooks/useRegister'

export const ListUsers = () => {

    const { getUsers, user} = useRegister()

    useEffect(() => {
        getUsers()
      }, [])


      const handleOnClick = () =>{
            
      }

    return (
    <div className="m-4">
        <div className="form-control m-2 p-4">
        <h4>SHOW CLIENTS</h4>
        <br />
          <table className="table table-hover  border shadow-sm p-3 mb-5 bg-body rounded">
            <thead className='thead-dark'>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Lastname</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Role</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody onClick={handleOnClick}>
              {
                user.map((index) => (
                  <tr key={index.codeUser}>
                    <th scope="row">{index.codeUser}</th>
                    <td>{index.name}</td>
                    <td>{index.lastname}</td>
                    <td>{index.username}</td>
                    <td>{index.email}</td>
                    <td>{index.phone}</td>
                    <td>{index.role}</td>
                    <td>{index.estado}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
  )
}
