import React, { useState } from 'react'
import './style.css'
import { useLogin } from '../../Shared/hooks/useLogin'
import { useRegister } from '../../Shared/hooks/useRegister'

export const AuthPage = () => {

    const [state, setState] = useState(false)

    const { register, loading } = useRegister()
    const { login, isLoading } = useLogin()

    const [formReg, setFormReg] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        password: '',
    })

    const [form, setForm] = useState({
        username: '',
        password: ''
    })


    const handleAuthChange = () => {
        setState(!state)
    }

    const handleOnSubmint = (e) => {
        e.preventDefault()
        login(form)
    }

    const handleOnSubmintRegister = (e) => {
        e.preventDefault()
        register(formReg)
        setFormReg({
            name: '',
            username: '',
            email: '',
            phone: '',
            password: '',
        })
    }

    return (
        <>
            <div className='div-auth'>
                <div className='div-h2'>
                    <h2> Welcome to Practice Control </h2>
                    <br />
                    <div className='cont' id='container'>
                                <div>
                                    <div className="form-container sign-in-container">
                                        <form action="#" onSubmit={handleOnSubmint}>
                                            <h1>Sign in</h1>
                                            <div className="social-container">
                                                <a href="#" className="social"></a>
                                                <a href="#" className="social"></a>
                                                <a href="#" className="social"></a>
                                            </div>
                                            <span>or use your account</span>
                                            <input type="text" placeholder="Username" required className='form-input' value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
                                            <input type="password" placeholder="Password" required className='form-input' value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
                                            {/* <a href="#" className='div-a'>Forgot your password?</a> */}
                                            <button >Sign In</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="overlay-container">
                                        <div className="overlay">
                                            <div className="overlay-panel overlay-right">
                                                <h1>Hello, Friend!</h1>
                                                <p>Enter your personal details and start journey with us</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
