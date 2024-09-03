import React, { useEffect, useState } from 'react'
import { useControl } from '../../Shared/hooks/useControl'

export const PracticeControl = () => {

  const { getControl, control, 
            addControl, getPracticingByUsers, 
            practicing, practicId, 
            getAll, allData, pruebaUser, historial } = useControl()

  const [form, setForm] = useState({
    codePracticing: '',
    date: '',
    hrs_mrn_entry: '',
    hrs_mrn_exit: '',
    hrs_aftn_entry: '',
    hrs_aftn_exit: '',
    description: '',
    codeUser: '',
  })


  
  const user = JSON.parse(localStorage.getItem("user"))
  const practic = localStorage.getItem("practicing")
  const id = user.codeUser   
  
  //console.log(practicing[0].codePracticing);
     
    

  useEffect(() => { 
    getPracticingByUsers(id)
    getControl(practic)
    getAll(practic)    
  }, [ practic ])

  const cleanInputs = () => {
    setForm({ 
      codePracticing: '',
      date: '',
      hrs_mrn_entry: '',
      hrs_mrn_exit: '',
      hrs_aftn_entry: '',
      hrs_aftn_exit: '',
      description: '', 
    })
  }
  
  const handleOnSubmit = (e) => {
    console.log(form);
    form.codePracticing = practicing[0].codePracticing
    e.preventDefault()
    addControl(form)
    cleanInputs()
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleOnClick = (index) => [
    setForm({
      codePracticing: index.codePracticing,
      date: index.date,
      hrs_mrn_entry: index.hrs_mrn_entry,
      hrs_mrn_exit: index.hrs_mrn_exit,
      hrs_aftn_entry: index.hrs_aftn_entry,
      hrs_aftn_exit: index.hrs_aftn_exit,
      description: index.description,
      evaluations: index.evaluations,
    })
  ]

  const updateControl = () => {

  }

  const downloadHisto = () => {
    historial(practic)
  }

  return (
    <>
      <div>
         <div className='m-4'>
            <div className='form-control p-4'>
              <div>Datos </div>
              <table className='table table-bordered'> 
                <thead className=''>
                    <tr> 
                      <th>Nombre</th>
                      <th>Supervisor</th>
                      <th>Colegio</th>
                      <th>Carrera</th>
                      <th>Fecha de Inicio</th>
                      <th>Fecha de finalización</th>
                      <th>Horas de práctica</th>
                    </tr> 
                </thead>
                <tbody>{allData.map(index =>(
                     
                      
                        <tr key={index.codeUser}> 
                        <td>{index.nameUser}</td>
                        <td>{index.supervisorName}</td>
                        <td>{index.nameSchool}</td>
                        <td>{index.nameCareer}</td>
                        <td>{new Date(index.date_init).toLocaleDateString()}</td>
                        <td>{new Date(index.date_finish).toLocaleDateString()}</td>
                        <td>{index.practice_hrs}</td> 
                        </tr> 
                    ))}
                  </tbody>
              </table>
            </div>
         </div>
        <div className="m-4">
          <div className="form-control  p-4">
            <h4>AGREGAR CONTROL</h4>
            <form action="" onSubmit={handleOnSubmit}>
              <div className="row">
                <div className=" ">
                  <label htmlFor="">Día</label>
                  <input type="date" name="date" className="form-input"  value={form.date} onChange={handleOnChange} />
                </div>
                <h4>MAÑANA</h4>
                <div className="col">
                  <label htmlFor="">Hora de entrada</label>
                  <input type="time" name="hrs_mrn_entry" className="form-input" value={form.hrs_mrn_entry} onChange={handleOnChange} />
                </div>
                <div className="col">
                  <label htmlFor="">Hora de salida</label>
                  <input type="time" name="hrs_mrn_exit" className="form-input" value={form.hrs_mrn_exit} onChange={handleOnChange} />
                </div>
                <div></div>
                
                <h4>TARDE</h4>
                <div className="col">
                  <label htmlFor="">Hora de entrada</label>
                  <input type="time" name="hrs_aftn_entry" className="form-input" value={form.hrs_aftn_entry} onChange={handleOnChange} />
                </div>
                <div className="col">
                  <label htmlFor="">Hora de salida</label>
                  <input type="time" name="hrs_aftn_exit" className="form-input" value={form.hrs_aftn_exit} onChange={handleOnChange} />
                </div>
                <div></div>
                <div className="col">
                  <label htmlFor="">Descripción</label>
                  <input type="text"  name="description" className="form-input" value={form.description} onChange={handleOnChange} />
                </div>
                <div></div>  
              </div>
            </form>
            <button onClick={handleOnSubmit} className="btn btn-success m-4 p-3">Agregar</button>
            <button onClick={cleanInputs} className="btn btn-warning m-4 p-3">Cancelar</button>
            <button onClick={updateControl} className="btn btn-danger m-4 p-3">Actualizar</button>
            <button onClick={downloadHisto} className='btn btn-dark m-4 p-3'>Descargar Historial</button> 
          </div>
        </div>

        <div className="m-4">
          <div className="form-control m-2 p-4">
            <h4>Mostrar Datos (seleccione una tabla para editar)</h4>
            <table className="table table-hover border shadow-sm p-3 mb-5 bg-body rounded">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Hora inicio (Mañana)</th>
                  <th scope="col">Hora Final (Mañana) </th>
                  <th scope="col">Hora inicio (Tarde)</th>
                  <th scope="col">Hora Final (Tarde) </th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Evaluación</th>
                </tr>
              </thead>
              <tbody>
                {
                  control.map((index) => (
                    <tr key={index.codeControl} onClick={() => handleOnClick(index)}>
                      <th scope="row">{index.codeControl}</th> 
                      <td>{new Date(index.date).toLocaleDateString()}</td>
                      <td>{index.hrs_mrn_entry}</td>
                      <td>{index.hrs_mrn_exit}</td>
                      <td>{index.hrs_aftn_entry}</td>
                      <td>{index.hrs_aftn_exit}</td>
                      <td>{index.description}</td>
                      <td>{index.evaluations}</td>
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
