import './LoginScreen.scss'
import { useContext, useState } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {

    const {googleLogin, login, error} = useContext(LoginContext);

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

        login(values)
    }



    return (
        <div className='login-container-main'>
            <div className="login-container-img">
                <img className='img-fondo' src='./imgs/img-logo.png' alt='error'/>
            </div>
            <div className="login-container">
                <div className="login">
                    <h2 className='bottom-line'>Iniciar sesion</h2>
                    <form className='bottom-line' onSubmit={handleSubmit}>
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
                        {error ? <p className='red'>Email y/o contraseña incorrectos</p> : <p></p>}
                        <div className='login-btn'>
                            <button className='btn btn-primary' type='submit'>Ingresar</button>
                            <button className='btn btn-primary btn-ingresar-google' onClick={googleLogin}>
                                <img className='logo-google' src='./imgs/logo-google.png' alt='error'/>
                                Ingresar con Google
                            </button>
                        </div>
                    </form>
                    <div className='login-btn reg-block'>
                        <p>¿No tenes cuenta?</p>
                        <Link className='btn btn-primary btn-registrarme' to={"/registrarme"}>Registrarme</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}