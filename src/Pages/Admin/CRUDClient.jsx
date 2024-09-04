import { useEffect, useState } from "react"
import { useRegister } from "../../Shared/hooks/useRegister"
import { CRUDSupervisor } from "./CRUDS/CRUDSupervisor"
import { validatePassword, passwordConfirmValidateMessage } from "../../Shared/validators/validator"
import './style.css'
import toast from "react-hot-toast"
import { useSupervisor } from "../../Shared/hooks/ADMIN/useSupervisor"
import { useWorkstation } from "../../Shared/hooks/ADMIN/useWorkstation"

export const CRUDClient = () => {

  const { register, getUser, user, updatedUser, loading } = useRegister()
  const { addSupervisor, supervisor } = useSupervisor()
  const { getWorkstation, work } = useWorkstation()

  const [ modal, setModal ] = useState(false)
  const [form, setForm] = useState({
    codeUser: '',
    nameUser: '',
    lastname: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
    role: '',
    state: ''
  })

  const [ formSuper, setFormSuper] = useState({
    codeUser: '',
    codeWkst: ''
  })

  console.log(loading);
  
  useEffect(() => {
    getUser()
    console.log('Ya cambie');
    
  }, [loading])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if(form.password === form.passwordConfirm){

        register(form)
        cleanInputs()
    }else {
      console.log('The passeord dont equal');
      return toast.error('Las contraseñas no coinciden')
    }
  }

  const cleanInputs = () => {
    setForm({
      nameUser: '',
      lastname: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      passwordConfirm: '',
      role: '',
      state:''
    })
  }
 

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }
  const handleOnChangeSuper = (e) => {
    const { name, value } = e.target
    setFormSuper({
      ...form, 
      [name]: value
    })
  }

  const handleOnClick = (user) =>{
    setForm({
      codeUser: user.codeUser,
      nameUser: user.nameUser,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      phone: user.phone,
      password: '',
      role: user.role,
      state: user.state
    })
    
  }
  const validatePass = ( ) =>{
    if(form.password === form.passwordConfirm){

    }
    console.log(form.passwordConfirm, form.password);
    validatePassword(form.password, form.passwordConfirm)
  }
  

  const updateUser = () =>{
    console.log(form);
    updatedUser(form, form.codeUser)
    cleanInputs()
  }

  return (
    <div>
      

      <div className="m-4" >
        
        <div className="form-control m-2 p-4 ">
        <h4>AGREGAR USUARIOS </h4>
          <form action="" onSubmit={handleOnSubmit}>
            <div className="row">
              <div className="col">
                <label htmlFor="">Nombre</label>
                <input type="text" placeholder="Nombre" name="nameUser" required className="form-input" value={form.nameUser} onChange={handleOnChange} />
              </div>
              <div className="col">
                <label htmlFor="">Apellido</label>
                <input type="text" placeholder="Apellido" name="lastname" required className="form-input" value={form.lastname} onChange={handleOnChange} />
              </div>
              <div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Username" name="username" required className="form-input" value={form.username} onChange={handleOnChange} />
              </div>
              <div className="col">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Email" name="email" required className="form-input" value={form.email} onChange={handleOnChange} />
              </div>
              <div className="col">
                <label htmlFor="">Teléfono</label>
                <input type="number" placeholder="Teléfono" name="phone" min='0' step='any' required className="form-input" value={form.phone} onChange={handleOnChange} />
              </div>
              <div></div>
              <div className="col">
                <label htmlFor="">Contraseña </label>
                <input type="password" placeholder="Contraseña" name="password" required className="form-input" value={form.password} onChange={handleOnChange} />
              </div>
              <div className="col">
                <label htmlFor="">Repetir Contraseña </label>
                <input type="password" placeholder="Repetir Contraseña" required name="passwordConfirm" className="form-input" value={form.passwordConfirm} onChange={handleOnChange}/>
              </div>
              <div></div>
              <div className="col">
                <label htmlFor="" className="mb-2 mt-2">Rol</label>
                <select name="role" className="form-control"  key={form.codeUser} value={form.role} onChange={handleOnChange}  >
                  <option value="">Selecciona un rol</option>
                  <option value="SUPERVISOR">SUPERVISOR</option>
                  <option value="PRACTICING">PRACTICANTE</option>
                  <option value="ADMIN">ADMIN</option>
                   
                </select>
              </div>
               
              <div className='col'>
                  <label htmlFor="" className='mb-2 mt-2'>Estado</label>
                  <select name="state" className='form-control' value={form.state} onChange={handleOnChange} >
                    <option value="">Selecciona un estado</option>
                    <option value="ENABLE">ACTIVO</option>
                    <option value="DISABLED">DESACTIVADO</option>
                  </select>
              </div>
              <div></div>
              <div className="col">
              <button style={{ background: '#263061', color: '#fff'}} className="btn m-4 p-3" onClick={validatePass}>Agregar perfil</button>
              <button style={ { background: '#87d1f5', color: '#000'}} className="btn m-4 p-3" onClick={cleanInputs}>Cancelar</button>
              
              </div>
            </div>
          </form>
          <button style={{ background: '#707070',  color: '#fff'}} className="btn   m-4 p-3" onClick={updateUser}>Actualizar usuario</button>
        </div>
        
      </div>

      <div className="m-4">
        <div className="form-control m-2 p-4">
        <h4>MOSTRAR USUARIOS <span style={{ fontSize: 'large'}}>(seleccione una tabla para editar)</span></h4>
        <br />
          <table className="table table-hover  border shadow-sm p-3 mb-5 bg-body rounded">
            <thead className='thead-dark'>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Rol</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody >
              {
                user.map((index) => (
                  <tr key={index.codeUser} onClick={() => handleOnClick(index)}>
                    <th>{index.codeUser}</th>
                    <td>{index.nameUser}</td>
                    <td>{index.lastname}</td>
                    <td>{index.username}</td>
                    <td>{index.email}</td>
                    <td>{index.phone}</td>
                    <td>{index.role}</td>
                    <td>{index.state}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  )
}
