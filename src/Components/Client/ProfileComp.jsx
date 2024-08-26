import React, { useEffect, useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { useProfile } from '../../Shared/hooks/useProfile'


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

  useEffect(() =>{
    getManagers()
  },[])

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
      <div>EDIT PROFILE</div>

      <p>Welcome user, update your data to get to know you better </p>

      <form className='form-control m-2 p-4' action="" onSubmit={handleOnSubmit}>
        <div className='col'>
          <label className='row m-2 ml-2'>Institucion</label>
          <input type="text" className="form-control" placeholder='Ingresa tu institucion ' required name='institucion' value={form.institucion} onChange={handleOnChange} />
        </div>

        <div className='col'>
          <label className='row m-2 ml-2'>carrera</label>
          <input type="text" className="form-control" placeholder='Ingresa tu carrera ' required name='carrera' value={form.carrera} onChange={handleOnChange} />
        </div>

        <div className='col'>
          <label className='row m-2 ml-2'>empresa</label>
          <input type="text" className="form-control" placeholder='Ingresa tu empresa ' required name='empresa' value={form.empresa} onChange={handleOnChange} />
        </div>

        <div className='col'>
          <label className='row m-2 ml-2'>encargado</label>
          <select name="encargado" id="" className='form-control' value={form.encargado} onChange={handleOnChange}>

          <option value=""> Select your Manager</option>
          {isManager.map(index =>(
            <option key={index.codeUser} value={index.codeUser}>{index.name}</option>
          ))}
          </select>
        </div>

        <button>AddProfile</button>
      </form>

    </>
  )
}
