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
        <div className="login-container">
            <div className="login">
                <h2>Login</h2>
                <hr/>
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
                    {error ? <p className='red'>Email y/o contraseña incorrectos</p> : <p></p>}
                    <button className='btn btn-primary' type='submit'>Ingresar</button>
                    <Link to={"/registrarme"}>Registrarme</Link>
                </form>
                <button className='btn btn-primary' onClick={googleLogin}>Ingresar con Google</button>
            </div>
        </div>
    )
}