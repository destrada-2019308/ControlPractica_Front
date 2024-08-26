import { useState } from "react"
import { NavBar } from "../../Components/Manager/NavBar"
import { useEvaluations } from '../../Shared/hooks/useEvaluations'
export const HomeAttendant = () => {
  
  const { addEvaluations } = useEvaluations()

  const [ form, setForm] = useState({
    evaluations: '',
    codePracticante: ''
  })

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
      codePracticante: ''
    })
  }

  return (
    <div>
        <NavBar/>
       <h4>Evaluation Practicing</h4>
       <div>
        <form className="form-control" action="" onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="">Evaluations</label>
            <input type="text" name="evaluations" value={form.evaluations} onChange={handleOnChange} />
          </div>
          <div>
            <label htmlFor="">Code Practicing</label>
            <input type="text" name="codePracticante" value={form.codePracticante} onChange={handleOnChange} />
          </div>
          <button>Enviar</button>
        </form>
       </div>
    </div>
  )
}
