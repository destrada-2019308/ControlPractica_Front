import { useEffect, useState } from "react"
import { NavBarAdmin } from "../../Components/Client/Admin/NavBarAdmin"
import { useRegister } from "../../Shared/hooks/useRegister"
import './style.css'
import { ListUsers } from "../../Components/Client/Admin/ListUsers"

export const CRUDClient = () => {

  const { register, getUsers, user, updatedUser, loading } = useRegister()
  const [ modal, setModal ] = useState(false)
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    role: '',
    estado: ''
  })

  useEffect(() => {
    getUsers()
  }, [loading])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    getUsers()
    register(form)
    getUsers()
    cleanInputs()
    getUsers()
  }

  const cleanInputs = () => {
    setForm({
      name: '',
      lastname: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      role: '',
      estado:''
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
    console.log('click');
    setForm({
      codeUser: user.codeUser,
      name: user.name,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      phone: user.phone,
      password: '',
      role: user.role,
      estado: user.estado
    })
    
  }

  const updateUser = () =>{
    console.log(form);
    updatedUser(form, form.codeUser)
    cleanInputs()
    getUsers()
  }

  return (
    <div>
      <NavBarAdmin />

      

      <div className="m-4" >
        
        <div className="form-control m-2 p-4 ">
        <h4>ADD CLIENT </h4>
          <form action="" onSubmit={handleOnSubmit}>
            <div className="row">
              <div className="col">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Name" name="name" required className="form-input" value={form.name} onChange={handleOnChange} />
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
                <input type="password" placeholder="Repeat Password" required name="repeatPassword" className="form-input" />
              </div>
              <div></div>
              <div className="col">
                <label htmlFor="" className="mb-2 mt-2">Role</label>
                <select name="role" className="form-control" value={form.role} onChange={handleOnChange} id="">
                  <option value="">Select role</option>
                  <option value="CLIENT">CLIENT</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="MANAGER">MANAGER</option>
                </select>
              </div>
              <div className='col'>
                  <label htmlFor="" className='mb-2 mt-2'>Estado</label>
                  <select name="estado" className='form-control' value={form.estado} onChange={handleOnChange} id="">
                    <option value="">Select Estado</option>
                    <option value="ENABLE">ENABLE</option>
                    <option value="DISABLED">DISABLED</option>
                  </select>
              </div>
              <div></div>
              <div className="col">
              <button className="btn btn-success m-4 p-3">Add Profile</button>
              <button className="btn btn-warning m-4 p-3" onClick={cleanInputs}>Cancel</button>
              
              </div>
            </div>
          </form>
          <button className="btn btn-danger m-4 p-3" onClick={updateUser}>Update User</button>
        </div>
      </div>

      <div className="m-4">
        <div className="form-control m-2 p-4">
        <h4>SHOW CLIENTS (select a table for edit )</h4>
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
      
    </div>
  )
}
