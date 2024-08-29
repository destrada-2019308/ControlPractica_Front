import { useEffect, useState } from "react"
import { NavBarAdmin } from "../../../Components/Admin/NavBarAdmin"
import { useManagments } from "../../../Shared/hooks/ADMIN/useManagments"
import { updateManagments } from "../../../services/api"

export const CRUDManagments = () => {

    const { get, add, update, status } = useManagments()
    const [ form, setForm ] = useState({
        codeManagments: '',
        name: '',
        description: ''
    })

    useEffect(() => {
        get()
    }, [])

    const cleanInputs = () =>{
        setForm({
            name: '',
            description: ''
        })
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault()
        add(form)
        get()
        cleanInputs()
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form, 
            [name]: value
        })
    }

    const handleOnClick = (index) =>{
        setForm({
            codeManagments: index.codeManagments,
            name: index.name,
            description: index.description
        })
    }

    const updateManagments = () =>{
        update(form, form.codeManagments)
        get()
        cleanInputs()
    }

  return (
    <>
        <NavBarAdmin/>
        <div>
            <div className="m-4">
                <div className="form-control p-4">
                    <h4>AGREGAR MANAGMENTS</h4>
                    <form action="" onSubmit={handleOnSubmit}>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">Nombre</label>
                                <input type="text" className="form-input" name="name" required value={form.name} onChange={handleOnChange}/>
                            </div>
                            <div className="col">
                                <label htmlFor="">Descripción</label>
                                <input type="text" className="form-input" name="description" required value={form.description} onChange={handleOnChange}/>
                            </div>
                            <div>
                                <button className="btn btn-success m-4 p-3">Agregar</button>
                                <button onClick={cleanInputs} className="btn btn-warning m-4 p-3">Cancelar</button>
                            </div>
                        </div>
                    </form>
                    <button onClick={updateManagments} className="btn btn-danger m-4 p-3">Actualizar</button>
                </div>
            </div>
            <div className="m-4">
                <div className="form-control m-2 p-4">
                    <h4>Managments(seleccione una tabla para editar)</h4>
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
                                status.map(index => (
                                    <tr key={index.codeManagments} onClick={() => handleOnClick(index)}>
                                        <th>{index.codeManagments}</th>
                                        <td>{index.name}</td>
                                        <td>{index.description}</td>
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
