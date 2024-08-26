import { useEffect, useState } from "react"
import { NavBar } from "../../Components/Manager/NavBar"
import { useEvaluations } from '../../Shared/hooks/useEvaluations'
export const HomeAttendant = () => {
  
  const { addEvaluations, getControlByManage, controlUser, getControl, isControlUser, getUser, user, local, prueba } = useEvaluations()

  const [ form, setForm] = useState({
    evaluations: '',
    codePracticante: '',
    codePracticControl: ''
  })

  let id = localStorage.getItem('user')
  let idUser = JSON.parse(id)
  let idMana = idUser.codeUser
  

  
  //console.log('variable del user ',local);
  //console.log('User: ',user);

  useEffect(() =>{
    getControlByManage(idMana)
    getControl()
    getUser(code)
  }, [local])

  let claves = Object.keys(controlUser);
  console.log(claves);
  
  //console.log('Estas son las claves',claves);

  let code = null;
  for (let i = 0; i < claves.length; i++) {
    let clave = claves[i];
    //console.log(controlUser[clave].codeUser);
    code = controlUser[clave].codeUser
    //console.log(code);
    
  }

  const handleOnSubmit= (e) =>{
    e.preventDefault()
    addEvaluations(form)
    cleantInputs()
  }

  const handleOnChange = (e) =>{
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }
  
  const cleantInputs = () =>{
    setForm({
      evaluations: '',
      codePracticante: '',
      codePracticControl: ''
    })
  }


  return (
    <div>
        <NavBar/>
       <h4 >Evaluation Practicing</h4>
       <div className="m-4 p-4">
        <form className="form-control" action="" onSubmit={handleOnSubmit}>
          <div className="p-4">
            <label htmlFor="">Evaluations</label>
            
            <select name="evaluations" className="form-control" value={form.evaluations} onChange={handleOnChange}>
              <option value="">Select evaluation</option>
              <option value={'E'}>EXCELENTE</option>
              <option value={'B'}>BUENO</option>
              <option value={'R'}>REGULAR</option>
              <option value={'M'}>MALO</option>
            </select>
          </div>
          <div className="p-4">
            <label htmlFor="">Code Practicing</label>
            <select required className="form-control" name="codePracticante" value={form.codePracticante} onChange={handleOnChange} id="">
              <option value="">Select your Practicing</option>
              {controlUser.map(index =>(
                <option key={index.codePracticante} value={index.codePracticante}>{index.codeUser} | {code} </option>
              ))}
            </select>
          </div>

          <div className="p-4">
            <label htmlFor="">Code Control Practice</label>
              <select required name="codePracticControl" className="form-control" value={form.codePracticControl} onChange={handleOnChange}>
                <option value="">Select code Control Practice</option>
                {isControlUser.map(index =>(
                  <option key={index.codePracticControl} value={index.codePracticControl}>
                    {new Date(index.date).toLocaleDateString()}
                  </option>
                ))}
              </select>
          </div>
          
          <button className="btn btn-success m-4" style={{ color: '#fff', padding: '15px 25px', border: 'none', borderRadius: '5px' }} >Enviar</button>
          
        </form>
       </div>
    </div>
  )
}
