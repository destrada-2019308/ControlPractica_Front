import { useEffect, useState } from "react"
import { NavBarAdmin } from "../../../Components/Admin/NavBarAdmin"
import { useWorkstation } from "../../../Shared/hooks/ADMIN/useWorkstation"

export const CRUDWorkstation = () => {

    const { addWorkstation, getWorkstation, updatedWorkstation, work } = useWorkstation()

    const [ form, setForm ] = useState({
        codeWorkstation: '',
        nameWorkstation: '',
        descriptionWorkstation: ''
    })

    useEffect( () => {
        getWorkstation()
    }, [])

    const cleanInputs = () => {
        setForm({
            nameWorkstation: '',
            descriptionWorkstation: ''
        })
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault()
        addWorkstation(form)
        cleanInputs()
    }

    const handleOnChange = (e) =>{
        const { name, value } = e.target;
        setForm({
            ...form, 
            [name]: value
        })
    }

    const handleOnClick = (index) => {
        setForm({
            codeWorkstation: index.codeWorkstation,
            nameWorkstation: index.nameWorkstation,
            descriptionWorkstation: index.descriptionWorkstation
        })
    } 

    const updateWorkstation = () =>{ 
        updatedWorkstation(form, form.codeWorkstation)
        cleanInputs()
    }

  return (
    <>
        <NavBarAdmin/>
        <div>
            <div className="m-4">
                <div className="form-control p-4">
                    <h4>AGREGAR DEPARTAMENTOS</h4>
                    <form action="" onSubmit={handleOnSubmit}>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">Nombre</label>
                                <input type="text" className="form-input" name="nameWorkstation" required value={form.nameWorkstation} onChange={handleOnChange}/>
                            </div>
                            <div className="col">
                                <label htmlFor="">Descripción</label>
                                <input type="text" className="form-input" name="descriptionWorkstation" required value={form.descriptionWorkstation} onChange={handleOnChange}/>
                            </div>
                            <div>
                                <button style={{ background: '#263061', color: '#fff'}} className="btn m-4 p-3" >Agregar</button>
                                <button onClick={cleanInputs}style={ { background: '#87d1f5', color: '#000'}} className="btn m-4 p-3">Cancelar</button>
                            </div>
                        </div>
                    </form>
                    <button onClick={updateWorkstation} style={{ background: '#707070',  color: '#fff'}} className="btn m-4 p-3" >Actualizar</button>
                </div>
            </div>
            <div className="m-4">
                <div className="form-control m-2 p-4">
                    <h4>Departamentos <span className="" style={{ fontSize:"large"}}>(seleccione una tabla para editar)</span></h4>
                    <table className="table table-hover border shadow-sm p-3 mb-5 bg-body rounded">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                work.length === 0 ? (
                                    <h1><span className="badge badge-secondary ">No hay datos</span></h1>
                                ) : work.length > 0 ? (
                                    work.map(index => (
                                        <tr key={index.codeWorkstation} onClick={() => handleOnClick(index)}>
                                            <th>{index.codeWorkstation}</th>
                                            <td>{index.nameWorkstation}</td>
                                            <td>{index.descriptionWorkstation}</td>
                                        </tr>
                                    ))
                                ) : work ()
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>
  )
}
