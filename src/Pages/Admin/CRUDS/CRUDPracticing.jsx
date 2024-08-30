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

    const handleOnClick = (index) => {
        setForm({
            codePracticing: index.codePracticing,
            date_init: index.date_init,
            date_finish: index.date_finish,
            practice_hrs: index.practice_hrs,
            codeSupervisor: index.codeSupervisor,
            codeUser: index.codeUser,
            codeSchool: index.codeSchool,
            codeCareer: index.codeCareer
        })
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
                                <label htmlFor="">Fecha de Final</label>
                                <input type="date" name="date_finish" className="form-input" value={form.date_finish} onChange={handleOnChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="">Horas de practica</label>
                                <input type="date" name="date_init" className="form-input" value={form.date_init} onChange={handleOnChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="">Usuario </label>
                                <select name="codeUser" className="form-select" value={form.codeUser} onChange={handleOnChange}>
                                    <option value="">Selecciona un usuario</option>
                                    {
                                        userSupervisor.map(index =>(
                                            <option value={index.codeUser} key={index.codeUser}>{index.nameUser}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="">Workstation </label>
                                <select name="codeWkst" id="codeWkst" className="form-select" value={form.codeWkst} onChange={handleOnChange}>
                                    <option value="">Selecciona un usuario</option>
                                    {
                                        work.map(index =>(
                                            <option value={index.codeWorkstation} key={index.codeWorkstation}>{index.codeWorkstation} | {index.nameWorkstation}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div></div>
                            <div className="col">
                               
                                
                            </div>
                        </div>
                    </form>
                    <button onClick={handleOnSubmit} className="btn btn-success m-4 p-3">Agregar</button>
                    <button onClick={cleanInputs} className="btn btn-warning m-4 p-3">Cancelar</button>
                    <button onClick={updateSupervisor} className="btn btn-danger m-4 p-3">Actualizar</button>
                </div>
            </div>

            <div className="m-4">
                <div className="form-control m-2 p-4">
                    <h4>Mostrar Datos (seleccione una tabla para editar)</h4>
                    <table className="table table-hover border shadow-sm p-3 mb-5 bg-body rounded">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Departamento</th>
                                <th scope="col">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                supervisor.map((index) => (
                                    <tr key={index.codeSupervisor} onClick={() => handleOnClick(index)}>
                                        <th scope="row">{index.codeSupervisor}</th>
                                        <td>{index.nameUser}</td>
                                        <td>{index.nameWorkstation}</td>
                                        <td>{index.role}</td>
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
