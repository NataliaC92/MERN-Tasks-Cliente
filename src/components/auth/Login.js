import React, { useState } from 'react';

import {Link} from 'react-router-dom';


const Login = () => {

    /* state para iniciar sesion */

    const [user, setuser] = useState({
        email:'',
        password:''
    })

    /* extraer de user */
    const { email, password } = user;
    


    const onChangeIniciarSesion = (e) => {
        setuser({
            ...user,
            [e.target.name] : e.target.value 
        })
    }

    /* cuando el user quiere iniciar sesion */
    const onSubmitInicioSesion = e => {
        e.preventDefault();

        /* validar que no tenga campos vacios */

        /* pasar los datos al action */

    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form 
                    onSubmit={onSubmitInicioSesion}
                
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChangeIniciarSesion}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChangeIniciarSesion}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit" 
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>

                <Link  
                    to={'/nueva-cuenta'}
                    className="enlace-cuenta"
                >
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;