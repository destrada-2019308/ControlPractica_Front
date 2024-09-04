import { useEffect, useState } from 'react'
import { useSupervisor } from '../../Shared/hooks/ADMIN/useSupervisor'
import { useControl } from '../../Shared/hooks/useControl'

export const ViewEvaluations = () => {

    const { isSuper, getPractBySupervisor } = useSupervisor()
    const { getControl, control, evaluationPracticing } = useControl()

    const user = JSON.parse(localStorage.getItem("user"))

    const id = user.codeUser;


    const [form, setForm] = useState({
        codePracticing: '',
    })

    const [formControl, setFormControl] = useState({
        codeControl: '',
        evaluations: ''
    })

    useEffect(() => {
            getPractBySupervisor(id)
            getControl(form.codePracticing)
        }, [form])

    const handleOnChange = (e) => {
        let { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleOnChangeControl = (e) => {
        let { name, value } = e.target;
        setFormControl({
            ...formControl,
            [name]: value
        })
    }

    console.log('Code Practicing', form);
    console.log('Toda la data de control', control);
    console.log('Code Control', formControl);


    
    const handleOnClick = (index) => {
        setFormControl({
            codeControl: index.codeControl,
            evaluations: index.evaluations
        })
    }

    const updateEvaluations = () => {
        let idControl = formControl.codeControl
        evaluationPracticing(formControl, idControl)
        
    }
 

    return (
        <>
            <div>
                <div>
                    <div className='m-4 -4'>
                        <div className='form-control'>
                            <div className="row m-4">
                            <div className='col'>
                                <label htmlFor="">Practicante</label>
                                <select name="codePracticing" id="" value={form.codePracticing} onChange={handleOnChange} className='form-select '>
                                    <option value="">Elije un practicante</option>
                                    {
                                        isSuper.map(index => (
                                            <option value={index.codePracticing} key={index.codePracticing}>{index.codePracticing} | {index.nameUser}</option>
                                        ))
                                    }

                                </select>
                            </div>
                            <div className='col'>
                                <label htmlFor="">evaluación</label>

                                <select className='form-select' name="evaluations" value={formControl.evaluations} onChange={handleOnChangeControl} id="">
                                    <option value="">Selecciona una nota</option>
                                    <option value="PENDIENTE">PENDIENTE</option>
                                    <option value="EXCELENTE">EXCELENTE</option>
                                    <option value="BUENO">BUENO</option>
                                    <option value="REGULAR">REGULAR</option>
                                    <option value="MALO">MALO</option>
                                </select>
                            </div>
                            </div>
                        
                        
                        </div>
                        <div className="form-control mt-4 p-4">
                            <h4>Practicante <span style={{ fontSize:'large'}}>(seleccione una tabla para editar)</span></h4>
                            <button style={{ backgroundColor: '#3873ba ', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }} onClick={updateEvaluations} className='btn btn-success m-4'>Enviar evaluacion</button>
                            
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
                                        control.length === 0 ? (
                                            <h1><span className="badge badge-secondary ">No hay datos</span></h1>
                                        ) : control.length > 0 ? (
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
                                        ) : control ()
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
