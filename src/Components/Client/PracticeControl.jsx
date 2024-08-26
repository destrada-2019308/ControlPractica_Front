import React, { useEffect, useState } from 'react'
import { useControl } from '../../Shared/hooks/useControl'
import { useAddControl } from '../../Shared/hooks/useAddControl'
import './style.css'

export const PracticeControl = () => {

    const { getById, control, user, getPracticing, practicing } = useControl()
    const { registerControler } = useAddControl()

    const [ form, setForm ] = useState({
        date: '', 
        hour_morning_entry: '', 
        hour_morning_exit: '', 
        hour_afternoon_entry: '', 
        hour_afternoon_exit: '', 
        description: '',
        codePracticante: ''
    })

    let idUser = localStorage.getItem('user')

    let id = JSON.parse(idUser)

    //console.log(id.codeUser);
    let userId = id.codeUser
    
    
    console.log('Id del user: ',userId);
    console.log('Practicante : ',practicing.codePracticante);
    let pId = practicing.codePracticante

    
    

    useEffect(() => {
        //console.log(control);
        getById(pId)
        getPracticing(userId)
    }, [pId])

    const handleOnSubmit = (e) =>{
        e.preventDefault()
        form.codePracticante = pId
        getById(pId)
        getPracticing(userId)
        registerControler(form)
        getById(pId)
        cleanInputs()
    } 

    const cleanInputs = () =>{
        setForm({date: '', 
            hour_morning_entry: '', 
            hour_morning_exit: '', 
            hour_afternoon_entry: '', 
            hour_afternoon_exit: '', 
            description: '',
            codePracticante: ''})
    }

    const handleOnChange = (e) =>{
        const { name, value } = e.target;
        setForm({
            ...form, 
            [name]: value
        })
    }


    

    return (
        <div className=''>
            <div className=' form-control rounded-2 p-4 m-2 bg-light'>
                <form className='p-4' onSubmit={handleOnSubmit} >
                    <div className="row m-2 p-1">
                        <h4>INGRESAR NUEVO CONTROL DE PRÁCTICA</h4>
                        <div className='col'>
                            <label className='row m-2 ml-2'>Fecha</label>
                            <input type="date" className="form-control" placeholder='Ingresa el dia de hoy ' required name='date' value={form.date} onChange={handleOnChange}/>
                        </div>
                        
                        <div className='col'>
                            <label className='row m-2 ml-2'>Hora de entrada (Por la mañana)</label>
                            <input type="time" className="form-control" placeholder='Ingresa la hora de entrada por la mañana' required name='hour_morning_entry' value={form.hour_morning_entry} onChange={handleOnChange} />
                        </div>
                        <div>
                        </div>
                        <div className='col'>
                            <label className='row m-2 ml-2'>Hora de salida (Por la mañana)</label>
                            <input type="time" className='form-control' placeholder='Ingresa la hora de salida por la mañana' required name='hour_morning_exit' value={form.hour_morning_exit} onChange={handleOnChange} />
                        </div>
                        <div className='col'>
                            <label className='row m-2 ml-2'>Hora de entrada (Por la tarde)</label>
                            <input type="time" className='form-control' placeholder='Ingresa la hora de entrada por la tarde' required name='hour_afternoon_entry' value={form.hour_afternoon_entry} onChange={handleOnChange} />
                        </div>
                        <div>
                        </div>
                        <div className='col'>
                            <label className='row m-2 ml-2'>Hora de salida (Por la tarde)</label>
                            <input type="time" className='form-control' placeholder='Ingresa la hora de salida por la tarde' required name='hour_afternoon_exit' value={form.hour_afternoon_exit} onChange={handleOnChange}/>
                        </div>
                        <div className='col'>
                            <label className='row m-2 ml-2'>Descripción</label>
                            <input type="text" className='form-control' placeholder='Ingresa el trabajo que realizó' required name='description' value={form.description} onChange={handleOnChange}/>
                        </div>
                    </div>
                    
                    <div className='col '>
                        <button style={{ backgroundColor: '#28A745', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }} className='btn btn-lg m-4'>Agregar</button>
                        <button style={{ backgroundColor: '#FFC107 ', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }} onClick={cleanInputs} className='btn btn-lg m-4'>Cancelar</button>
                    </div>

                    <div className='m-4'>
                    <h4>CONTROL DIARIO DE PRÁCTICA</h4>
                    <table className=' form- table table-sm table-hover shadow-sm p-3 mb-5 bg-body rounded'>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Fecha actual  </th>
                                <th scope="col">Hora de entrada (Mañana)</th>
                                <th scope="col">Hora de salida (Mañana)</th>
                                <th scope="col">Hora de entrada (Tarde)</th>
                                <th scope="col">Hora de salida (Tarde)</th>
                                <th scope="col">Description</th>
                                <th scope="col">Evaluations</th>
                                <th scope="col">Name User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                control.map((index) => (
                                    <tr key={index.codePracticControl}>
                                        <th scope='row'>{index.codePracticControl}</th>
                                        <td>{index.date}</td>
                                        <td>{index.hour_morning_entry}</td>
                                        <td>{index.hour_morning_exit}</td>
                                        <td>{index.hour_afternoon_entry}</td>
                                        <td>{index.hour_afternoon_exit}</td>
                                        <td>{index.description}</td>
                                        <td>{index.evaluations}</td>
                                        <td>{id.name}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>  

                </form>
                
               
            </div>

        </div>
    )
}
