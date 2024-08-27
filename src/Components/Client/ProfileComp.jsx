import React, { useEffect, useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { useProfile } from '../../Shared/hooks/useProfile'
import './style.css'

export const ProfileComp = () => {

  const { addProfile, getManagers, isManager } = useProfile()

  const [form, setForm] = useState({
    codeUser: '',
    institucion: '',
    carrera: '',
    empresa: '',
    encargado: ''
  })

  let user = JSON.parse(localStorage.getItem('user'))
  //console.log(user.codeUser);

  const handleOnSubmit = (e) => {
    e.preventDefault()
    form.codeUser = user.codeUser
    addProfile(form)
    cleanInputs()
  }

  useEffect(() => {
    getManagers()
  }, [])

  const cleanInputs = () => {
    setForm({
      codeUser: '',
      institucion: '',
      carrera: '',
      empresa: '',
      encargado: ''
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
      <div className='form-control m-2 p-4'>
      <div>
            <h4>EDIT PROFILE</h4>

            <p>Welcome user, update your data to get to know you better </p>
          </div>
        <form action="" onSubmit={handleOnSubmit}>
          
          <div className="row">
            <div className='col'>
              <label >Institucion</label>
              <input type="text" className="form-input" placeholder='Ingresa tu institucion ' required name='institucion' value={form.institucion} onChange={handleOnChange} />
            </div>

            <div className='col'>
              <label  >carrera</label>
              <input type="text" className="form-input" placeholder='Ingresa tu carrera ' required name='carrera' value={form.carrera} onChange={handleOnChange} />
            </div>
            <div><br /></div>
            <div className='col'>
              <label >empresa</label>
              <input type="text" className="form-input" placeholder='Ingresa tu empresa ' required name='empresa' value={form.empresa} onChange={handleOnChange} />
            </div>

            <div className='col'>
              <label className='mb-2 mt-2'>encargado</label>
              <select name="encargado" id="" className='form-control' value={form.encargado} onChange={handleOnChange}>

                <option value=""> Select your Manager</option>
                {isManager.map(index => (
                  <option key={index.codeUser} value={index.codeUser}>{index.name}</option>
                ))}
              </select>
            </div>
          </div>

          <button className="btn btn-success m-4 p-3">AddProfile</button>
        </form>
        
      </div>
    </>
  )
}
