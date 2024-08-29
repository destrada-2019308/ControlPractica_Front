import { useState, useEffect } from "react"
import { NavBarAdmin } from "../../../Components/Admin/NavBarAdmin"
import { useSchool } from "../../../Shared/hooks/ADMIN/useSchool"

export const CRUDSchool = () => {

    const { add, get, update, school } = useSchool()
    const [ form, setForm ] = useState({
        codeSchool: '',
        name: '',
        description: '',
        address: ''
    })

    useEffect(() => {
     get()
    }, [])
    


    const handleOnSubmit = (e) =>{
        e.preventDefault()
        add(form)
        get()
        cleanInputs()
    }

    const handleOnChange = (e) =>{
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const cleanInputs = () =>{
        setForm({
            name: '',
            description: '',
            address: ''
        })
    }

    const handleOnClick = (index) => {
        setForm({
            codeSchool: index.codeSchool,
            name: index.name,
            description: index.description,
            address: index.address
        })
    }
    
    const updateSchool = () =>{
        update(form, form.codeSchool)
        get()
        cleanInputs()
    }   
    

  return (
    <>
        < NavBarAdmin/>
        <div>
            <div className="m-4">
                <div className="form-control  p-4">
                    <h4>AGREGAR COLEGIOS</h4>
                    <form action="" onSubmit={handleOnSubmit}>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">Nombre</label>
                                <input type="text" className="form-input" name="name" required value={form.name} onChange={handleOnChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="">Descripción</label>
                                <input type="text" className="form-input" name="description" required value={form.description} onChange={handleOnChange} />
                            </div>
                            <div></div>
                            <div className="col">
                                <label htmlFor="">Dirección</label>
                                <input type="text" className="form-input" name="address" required value={form.address} onChange={handleOnChange} />
                            </div>
                            <div className="col">
                                <button className="btn btn-success m-4 p-3">Agregar</button>
                                <button onClick={cleanInputs} className="btn btn-warning m-4 p-3">Cancelar</button>
                            </div>
                        </div>
                    </form>
                    <button onClick={updateSchool} className="btn btn-danger m-4 p-3">Actualizar</button>
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
                                <th scope="col">Descripción</th>
                                <th scope="col">Dirección</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                school.map((index) => (
                                    <tr key={index.codeSchool} onClick={() => handleOnClick(index)}>
                                        <th scope="row">{index.codeSchool}</th>
                                        <td>{index.name}</td>
                                        <td>{index.description}</td>
                                        <td>{index.address}</td>
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
