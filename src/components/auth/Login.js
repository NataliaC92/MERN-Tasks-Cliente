import React, { useState, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';

import AlertaContext from '../../context/alerta/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';


const Login = (props) => {

    // extrae los valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;
    
    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, iniciarSesion} = authContext;
    
    //en caso que el usuario o el password no existan
    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos');
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        //eslint-disable-netx-line
    }, [mensaje, autenticado, props.history]);

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
        if(email.trim() === '' || password.trim() === '') {
          mostrarAlerta('Todo los campos son obligatorios', 'alerta-error');  
        }

        /* pasar los datos al action */
        iniciarSesion({ email, password });

    }

    return ( 
        <div className="form-usuario">
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null}
            
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