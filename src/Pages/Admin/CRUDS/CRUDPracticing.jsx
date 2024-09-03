import { NavBarAdmin } from "../../../Components/Admin/NavBarAdmin"
import { usePracticing } from "../../../Shared/hooks/ADMIN/usePracticing"
import { useSchool } from "../../../Shared/hooks/ADMIN/useSchool"
import { useCareer } from '../../../Shared/hooks/ADMIN/useCareer'
import { useSupervisor } from "../../../Shared/hooks/ADMIN/useSupervisor"
import { useEffect, useState } from "react"

export const CRUDPracticing = () => {

    const { getPracticing,
        addPracticing,
        updatedPracticing,
        getUserPracticing,
        practicing,
        userPracticing } = usePracticing()

    const { getSchool, school } = useSchool()
    const { getCareer, career } = useCareer()
    const { getSupervisor, supervisor} = useSupervisor()



    const [ form, setForm ] = useState({
        codePracticing: '',
        date_init: '',
        date_finish: '',
        practice_hrs: '',
        codeSupervisor: '',
        codeUser: '',
        codeSchool: '',
        codeCareer: ''
    })

    useEffect(() => {
        getPracticing()
        getUserPracticing()
        getSchool()
        getCareer()
        getSupervisor()
    }, [])

    const cleanInputs = () => {
        setForm({
            codePracticing: '',
            date_init: '',
            date_finish: '',
            practice_hrs: '',
            codeSupervisor: '',
            codeUser: '',
            codeSchool: '',
            codeCareer: ''
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        addPracticing(form)
        cleanInputs()
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form, 
            [name]:  value
        })
    }
    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleOnClick = (index) => {
        
        setForm({
            codePracticing: index.codePracticing,
            date_init: formatDateForInput(index.date_init),
            date_finish: formatDateForInput(index.date_finish),
            practice_hrs: index.practice_hrs,
            codeSupervisor: index.codeSupervisor,
            codeUser: index.codeUser,
            codeSchool: index.codeSchool,
            codeCareer: index.codeCareer
        })
    } 

    
    
    const formatDateForInput = (isoDate) => {
        const date = new Date(isoDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Agrega un 0 delante si es necesario
        const day = String(date.getDate()).padStart(2, '0'); // Agrega un 0 delante si es necesario
        return `${year}-${month}-${day}`;
    }
    
    const updatePracticing = () =>{
        updatedPracticing(form, form.codePracticing)
        cleanInputs()
    }

  return (
    <>
        <NavBarAdmin/>
        <div>
            <div className="m-4">
                <div className="form-control  p-4">
                    <h4>AGREGAR PRACTICANTE</h4>
                    <form action="" onSubmit={handleOnSubmit}>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">Fecha de inicio</label>
                                <input type="date" name="date_init" className="form-input" value={form.date_init} onChange={handleOnChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="">Fecha de finalización</label>
                                <input type="date" name="date_finish" className="form-input" value={form.date_finish} onChange={handleOnChange} />
                            </div>
                            <div></div>
                            <div className="col">
                                <label htmlFor="">Horas de practica</label>
                                <input type="number" step="any" min="0" name="practice_hrs" className="form-input" value={form.practice_hrs} onChange={handleOnChange} />
                            </div>
                            <div></div>
                            <div className="col">
                                <label htmlFor="">Usuario </label>
                                <select name="codeUser" className="form-select" value={form.codeUser} onChange={handleOnChange}>
                                    <option value="">Selecciona un usuario</option>
                                    {
                                        userPracticing.map(index =>(
                                            <option value={index.codeUser} key={index.codeUser}>{index.nameUser}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="">Supervisor </label>
                                <select name="codeSupervisor" className="form-select" value={form.codeSupervisor} onChange={handleOnChange}>
                                    <option value="">Selecciona un supervisor</option>
                                    {
                                        supervisor.map(index =>(
                                            <option value={index.codeSupervisor} key={index.codeSupervisor}>{index.codeSupervisor} | {index.nameUser}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div></div>
                            <div className="col">
                                <label htmlFor="">Colegio </label>
                                <select name="codeSchool"  className="form-select" value={form.codeSchool} onChange={handleOnChange}>
                                    <option value="">Selecciona un Colegio</option>
                                    {
                                        school.map(index =>(
                                            <option value={index.codeSchool} key={index.codeSchool}>{index.codeSchool} | {index.nameSchool}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            
                            <div className="col">
                                <label htmlFor="">Carrera </label>
                                <select name="codeCareer" id="codeCareer" className="form-select" value={form.codeCareer} onChange={handleOnChange}>
                                    <option value="">Selecciona una Carrera</option>
                                    {
                                        career.map(index =>(
                                            <option value={index.codeCareer} key={index.codeCareer}>{index.codeCareer} | {index.nameCareer}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </form>
                    <button onClick={handleOnSubmit} className="btn btn-success m-4 p-3">Agregar</button>
                    <button onClick={cleanInputs} className="btn btn-warning m-4 p-3">Cancelar</button>
                    <button onClick={updatePracticing} className="btn btn-danger m-4 p-3">Actualizar</button>
                </div>
            </div>

            <div className="m-4">
                <div className="form-control m-2 p-4">
                    <h4>Mostrar Practicantes <span style={{ fontSize: 'large'}}>(seleccione una tabla para editar)</span></h4>
                    <table className="table table-hover border shadow-sm p-3 mb-5 bg-body rounded">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Fecha inicio</th>
                                <th scope="col">Fecha Final </th>
                                <th scope="col">Horas de Practica</th>
                                <th scope="col">Carrera</th>
                                <th scope="col">Colegio</th>
                                <th scope="col">Supervisor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                practicing.map((index) => (
                                    <tr key={index.codePracticing} onClick={() => handleOnClick(index)}>
                                        <th scope="row">{index.codePracticing}</th>
                                        <td>{index.nameUser}</td>
                                        <td>{formatDate(index.date_init)}</td>
                                        <td>{formatDate(index.date_finish)}</td>
                                        <td>{index.practice_hrs}</td>
                                        <td>{index.nameCareer}</td>
                                        <td>{index.nameSchool}</td>
                                        <td>{index.supervisorName}</td>
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
