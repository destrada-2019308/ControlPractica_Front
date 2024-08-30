import { useState, useEffect } from "react"
import { NavBarAdmin } from "../../../Components/Admin/NavBarAdmin"
import { useSchool } from "../../../Shared/hooks/ADMIN/useSchool"

export const CRUDSchool = () => {

    const { addSchool, getSchool, updatedSchool, school } = useSchool()
    const [ form, setForm ] = useState({
        codeSchool: '',
        nameSchool: '',
        descriptionSchool: '',
        addressSchool: ''
    })

    useEffect(() => {
     getSchool()
    }, [])
    


    const handleOnSubmit = (e) =>{
        e.preventDefault()
        addSchool(form)
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
            nameSchool: '',
            descriptionSchool: '',
            addressSchool: ''
        })
    }

    const handleOnClick = (index) => {
        setForm({
            codeSchool: index.codeSchool,
            nameSchool: index.nameSchool,
            descriptionSchool: index.descriptionSchool,
            addressSchool: index.addressSchool
        })
    }
    
    const updateSchool = () =>{
        updatedSchool(form, form.codeSchool)
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
                                <input type="text" className="form-input" name="nameSchool" required value={form.nameSchool} onChange={handleOnChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="">Descripción</label>
                                <input type="text" className="form-input" name="descriptionSchool" required value={form.descriptionSchool} onChange={handleOnChange} />
                            </div>
                            <div></div>
                            <div className="col">
                                <label htmlFor="">Dirección</label>
                                <input type="text" className="form-input" name="addressSchool" required value={form.addressSchool} onChange={handleOnChange} />
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
                                        <td>{index.nameSchool}</td>
                                        <td>{index.descriptionSchool}</td>
                                        <td>{index.addressSchool}</td>
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
