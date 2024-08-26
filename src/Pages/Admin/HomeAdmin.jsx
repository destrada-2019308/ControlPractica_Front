import React, { useEffect, useState } from 'react'
import { NavBarAdmin } from '../../Components/Client/Admin/NavBarAdmin'
import { useAddManager } from '../../Shared/hooks/useAddManager'

export const HomeAdmin = () => {

  const { addManagerAdmin, getUsers, user } = useAddManager()

  const [ form, setForm ] = useState({
    role: '',
    codeUser: ''
  })

  useEffect(() =>{
    getUsers()
  }, [form])

  const handleOnSubmit = (e) =>{
    e.preventDefault()
    getUsers()
    addManagerAdmin(form)
    getUsers()
    cleanInputs()
  }
    
  const cleanInputs = () =>{
    setForm({
      role: '',
      codeUser: ''
    })
  }

  const handleOnChange = (e) =>{
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  } 

  return (
    <>
      <NavBarAdmin />
      <div className='m-4'>
      <h5>Change the ROLE of users</h5>
        <div className='m-4'>
          <form className='p-4 form-control' onSubmit={handleOnSubmit}>
            <div className="form-group m-3">
              <label className='m-1'>Role</label>
              <select name='role' value={form.role} onChange={handleOnChange} className="form-control" >
                <option value='' >Select Role</option>
                <option value='CLIENT'>CLIENT</option>
                <option value='MANAGER'>MANAGER</option>
                <option value='ADMIN'>ADMIN</option>
              </select>
            </div>
            <div className="form-group m-3">
              <label className='m-1' >Select a User </label>
              <select name='codeUser' className="form-control" value={form.codeUser} onChange={handleOnChange}>
                <option value=''>Select User</option>
                {user.map(index =>(
                  <option key={index.codeUser} value={index.codeUser}>{index.name}</option>
                ))}
              </select>
            </div>
            <br />
                <button>Enivar</button>
                <br /><br />
                <div className='m-4'>
                    <h4>CONTROL DE USUARIOS</h4>
                    <table className=' form- table table-sm table-hover shadow-sm p-3 mb-5 bg-body rounded'>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name  </th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Role</th>
                                <th scope="col">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((index) => (
                                    <tr key={index.codeUser}>
                                        <th scope='row'>{index.codeUser}</th>
                                        <td>{index.name}</td>
                                        <td>{index.username}</td>
                                        <td>{index.email}</td>
                                        <td>{index.phone}</td>
                                        <td>{index.role}</td>
                                        <td>{index.status}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
          </div>  
          </form>


          
        </div>
      </div>
    </>
  )
}
