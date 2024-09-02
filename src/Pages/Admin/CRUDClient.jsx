import { useEffect, useState } from "react"
import { useRegister } from "../../Shared/hooks/useRegister"
import { validatePassword, passwordConfirmValidateMessage } from "../../Shared/validators/validator"
import './style.css'
import toast from "react-hot-toast"

export const CRUDClient = () => {

  const { register, getUser, user, updatedUser, loading } = useRegister()
  const [ modal, setModal ] = useState(false)
  const [form, setForm] = useState({
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
        <h4>ADD CLIENT </h4>
          <form action="" onSubmit={handleOnSubmit}>
            <div className="row">
              <div className="col">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Name" name="nameUser" required className="form-input" value={form.nameUser} onChange={handleOnChange} />
              </div>
              <div className="col">
                <label htmlFor="">Lastname</label>
                <input type="text" placeholder="Lastname" name="lastname" required className="form-input" value={form.lastname} onChange={handleOnChange} />
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
                <label htmlFor="">Phone</label>
                <input type="number" placeholder="Phone" name="phone" min='0' step='any' required className="form-input" value={form.phone} onChange={handleOnChange} />
              </div>
              <div></div>
              <div className="col">
                <label htmlFor="">Password </label>
                <input type="password" placeholder="Password" name="password" required className="form-input" value={form.password} onChange={handleOnChange} />
              </div>
              <div className="col">
                <label htmlFor="">Repeat Password </label>
                <input type="password" placeholder="Repeat Password" required name="passwordConfirm" className="form-input" value={form.passwordConfirm} onChange={handleOnChange}/>
              </div>
              <div></div>
              <div className="col">
                <label htmlFor="" className="mb-2 mt-2">Role</label>
                <select name="role" className="form-control"  key={form.codeUser} value={form.role} onChange={handleOnChange}  >
                  <option value="">Select role</option>
                  <option value="SUPERVISOR">SUPERVISOR</option>
                  <option value="PRACTICING">PRACTICING</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="MANAGER">MANAGER</option>
                </select>
              </div>
              <div className='col'>
                  <label htmlFor="" className='mb-2 mt-2'>Estado</label>
                  <select name="state" className='form-control' value={form.state} onChange={handleOnChange} >
                    <option value="">Select Estado</option>
                    <option value="ENABLE">ENABLE</option>
                    <option value="DISABLED">DISABLED</option>
                  </select>
              </div>
              <div></div>
              <div className="col">
              <button className="btn btn-success m-4 p-3" onClick={validatePass}>Add Profile</button>
              <button className="btn btn-warning m-4 p-3" onClick={cleanInputs}>Cancel</button>
              
              </div>
            </div>
          </form>
          <button className="btn btn-danger m-4 p-3" onClick={updateUser}>Update User</button>
        </div>
      </div>

      <div className="m-4">
        <div className="form-control m-2 p-4">
        <h4>SHOW CLIENTS ( select table for edit )</h4>
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
