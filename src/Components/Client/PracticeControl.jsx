import React, { useEffect, useState } from 'react'
import { useControl } from '../../Shared/hooks/useControl'
import { useAddControl } from '../../Shared/hooks/useAddControl'
import './style.css'
import { useHistorial } from '../../Shared/hooks/useHistorial'

export const PracticeControl = () => {

    const { getById, control, user, getPracticing, practicing } = useControl()
    const { getHistorialUser, userH } = useHistorial()
    const { registerControler } = useAddControl()

    const [form, setForm] = useState({
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


    console.log('Id del user: ', userId);
    console.log('Practicante : ', practicing);
    let pId = practicing
    



    useEffect(() => {
        //console.log(control);
        getPracticing(userId)
        getById(pId)
        
    }, [pId])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        form.codePracticante = pId
        getById(pId)
        getPracticing(userId)
        registerControler(form)
        getById(pId)
        cleanInputs()
    }

    const cleanInputs = () => {
        setForm({
            date: '',
            hour_morning_entry: '',
            hour_morning_exit: '',
            hour_afternoon_entry: '',
            hour_afternoon_exit: '',
            description: '',
            codePracticante: ''
        })
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleOnClick = async() =>{
        getHistorialUser(userId)
    }

    return (
        <div className=' form-control p-4 m-2 t'>
            <button onClick={handleOnClick} className='btn btn-dark'>Descargar Historial</button>
            <form className='p-4' onSubmit={handleOnSubmit} >

                <h4>INGRESAR NUEVO CONTROL DE PRÁCTICA</h4>
                <br />
                <div className="row ">
                    <div className=''>
                        <label>Fecha</label>
                        <input type="date" className="form-input" placeholder='Ingresa el dia de hoy ' required name='date' value={form.date} onChange={handleOnChange} />
                    </div>
                    <div className='mt-3'></div>
                    <h4>Horario por la mañana</h4>

                        <div className='col '>
                            <label >Hora de entrada (Por la mañana)</label>
                            <input type="time" className="form-input" placeholder='Ingresa la hora de entrada por la mañana' required name='hour_morning_entry' value={form.hour_morning_entry} onChange={handleOnChange} />
                        </div>
                        <div className=' col'>
                            <label >Hora de salida (Por la mañana)</label>
                            <input type="time" className='form-input' placeholder='Ingresa la hora de salida por la mañana' required name='hour_morning_exit' value={form.hour_morning_exit} onChange={handleOnChange} />
                        </div>
                        <div className='mt-3'></div>
                    <h4>Horario por la tarde</h4>

                    <div className='col'>
                        <label >Hora de entrada (Por la tarde)</label>
                        <input type="time" className='form-input' placeholder='Ingresa la hora de entrada por la tarde' required name='hour_afternoon_entry' value={form.hour_afternoon_entry} onChange={handleOnChange} />
                    </div>
                    <div className='col'>
                        <label>Hora de salida (Por la tarde)</label>
                        <input type="time" className='form-input' placeholder='Ingresa la hora de salida por la tarde' required name='hour_afternoon_exit' value={form.hour_afternoon_exit} onChange={handleOnChange} />
                    </div>
                    <div className='mt-3'>
                        <label >Descripción</label>
                        <input type="text" className='form-input' placeholder='Ingresa el trabajo que realizó' required name='description' value={form.description} onChange={handleOnChange} />
                    </div>
                </div>

                <div className='col '>
                    <button style={{ backgroundColor: '#28A745', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }} className='btn btn-lg m-4'>Agregar</button>
                    <button style={{ backgroundColor: '#FFC107 ', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }} onClick={cleanInputs} className='btn btn-lg m-4'>Cancelar</button>
                </div>
                
                <div className='m-4 w-100'>
                    <h4>CONTROL DIARIO DE PRÁCTICA</h4>
                    <table className=' table table-hover border shadow-sm p-3 mb-5 bg-body rounded'>
                        <thead className='thead-dark'>
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

    )
}
