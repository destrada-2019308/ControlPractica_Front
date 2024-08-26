import React, { useEffect, useState } from 'react'
import { NavBarAdmin } from '../../Components/Client/Admin/NavBarAdmin'
import { useAddManager } from '../../Shared/hooks/useAddManager'

export const HomeAdmin = () => {

  const { addManagerAdmin, getUsers, user } = useAddManager()

  const [form, setForm] = useState({
    role: '',
    codeUser: ''
  })

  useEffect(() => {
    getUsers()
  }, [form])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    getUsers()
    addManagerAdmin(form)
    getUsers()
    cleanInputs()
  }

  const cleanInputs = () => {
    setForm({
      role: '',
      codeUser: ''
    })
  }

  const handleOnChange = (e) => {
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
        <div className=' form-control  '>

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
        </div>
      </div>
    </>
  )
}
