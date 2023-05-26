import './RegisterScreen.scss'
import { useContext, useState } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {

    const {googleLogin, register, error} = useContext(LoginContext);

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleValues = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        register(values)
    }



    return (
        <div className="login-container">
            <div className="login">
                <h2 className='bottom-line'>Registrarme</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleValues}
                        name="email"
                        value={values.email}
                        type={'email'}
                        className="form-control my-2"
                        placeholder='Tu email'>
                    </input>
                    <input
                        onChange={handleValues}
                        name="password"
                        value={values.password}
                        type={'password'}
                        className="form-control my-2"
                        placeholder='Contraseña'>
                    </input>
                    {error ? <p className='red'>Datos de registro inválidos</p> : <p></p>}
                    <div className='registrarme-btn'>
                        <button className='btn btn-primary' type='submit'>Registrarme</button>
                        <Link className='btn btn-primary btn-registrado' to={"/inicio"}>Ya estoy registrado</Link>
                    </div>
                    <div className='registrarme-btn'>
                        <button className='btn btn-primary btn-ingresar-google' onClick={googleLogin}>
                            <img className='logo-google' src='./imgs/logo-google.png' alt='error'/>
                            Registrarme con Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}