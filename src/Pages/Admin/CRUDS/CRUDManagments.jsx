import { useEffect, useState } from "react"
import { NavBarAdmin } from "../../../Components/Admin/NavBarAdmin"
import { useManagments } from "../../../Shared/hooks/ADMIN/useManagments"

export const CRUDManagments = () => {

    const { getManagments, addManagments, updatedManagments, status } = useManagments()
    const [ form, setForm ] = useState({
        codeManagments: '',
        nameManagments: '',
        descriptionManagments: ''
    })

    useEffect(() => {
        getManagments()
    }, [])

    const cleanInputs = () =>{
        setForm({
            nameManagments: '',
            descriptionManagments: ''
        })
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault()
        addManagments(form)
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
            nameManagments: index.nameManagments,
            descriptionManagments: index.descriptionManagments
        })
    }

    const updateManagments = () =>{
        updatedManagments(form, form.codeManagments)
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
                                <input type="text" className="form-input" name="nameManagments" required value={form.nameManagments} onChange={handleOnChange}/>
                            </div>
                            <div className="col">
                                <label htmlFor="">Descripción</label>
                                <input type="text" className="form-input" name="descriptionManagments" required value={form.descriptionManagments} onChange={handleOnChange}/>
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
                                        <td>{index.nameManagments}</td>
                                        <td>{index.descriptionManagments}</td>
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
