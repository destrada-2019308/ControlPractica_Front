import { useEffect, useState } from "react"
import { NavBarAdmin } from "../../../Components/Admin/NavBarAdmin"
import { useSupervisor } from "../../../Shared/hooks/ADMIN/useSupervisor"
import { useWorkstation } from "../../../Shared/hooks/ADMIN/useWorkstation"

export const CRUDSupervisor = () => {

    const { getSupervisor, 
            addSupervisor, 
            updatedSupervisor, 
            getUserSupervisor,
            supervisor, userSupervisor} = useSupervisor()
    
    const { getWorkstation, work } = useWorkstation()

    const [ form, setForm ] = useState({
        codeSupervisor: '',
        codeUser: '',
        codeWkst: '',
    })

    useEffect(() => {
        getUserSupervisor()
        getSupervisor()
        getWorkstation()
    }, [])

    const cleanInputs = () =>{
        setForm({
            codeSupervisor: '',
            codeUser: '',
            codeWkst: '',
        })
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault()
        addSupervisor(form)
        cleanInputs()
    }
    const handleOnChange = (e) =>{
        const { name, value } = e.target;
        setForm({
            ...form, 
            [name]: value
        })
    }

    const handleOnClick = (index) =>{
        setForm({
            codeSupervisor: index.codeSupervisor,
            codeUser: index.codeUser,
            codeWkst: index.codeWorkstation,
        })
    }

    const updateSupervisor = () => {
        console.log(form);
        
        updatedSupervisor(form, form.codeSupervisor)
        cleanInputs()
    }


  return (
    <>
        <NavBarAdmin/>
        <div>
            <div className="m-4">
                <div className="form-control  p-4">
                    <h4>AGREGAR SUPERVISOR</h4>
                    <form action="" onSubmit={handleOnSubmit}>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">usuario </label>
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
                                <label htmlFor="">Departamento </label>
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
                    <h4>Mostrar Datos <span style={{ fontSize: 'large'}}>(seleccione una tabla para editar)</span></h4>
                    <table className="table table-hover border shadow-sm p-3 mb-5 bg-body rounded">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Departamento</th>
                                <th scope="col">Rol</th>
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
