import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AlertaContext from '../../context/alerta/alertaContext';
import AuthContext from '..//../context/autenticacion/authContext';


const NuevaCuenta = (props) => {

    /* extraer los valores del context */
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarUsuario } = authContext;

    //en caso en que el usuario se autentique o resgistre o en caso que sea duplicado
    useEffect(() => {
        if(autenticado) {
            props.history.push('/proyectos');
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        //eslint-disable-netx-line
    }, [mensaje, autenticado, props.history]);

    /* state para iniciar sesion */

    const [user, setuser] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmarpassword:''
    })

    /* extraer de user */
    const { nombre, email, password, confirmarpassword } = user;
    
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
        if(nombre.trim() === '' || 
        email.trim() === '' || 
        password.trim() === '' || 
        confirmarpassword.trim() === '') {
            mostrarAlerta('Todo los campos son obligatorios', 'alerta-error');
            return;
        }

        /* password minimo de 6 caracteres */
        if(password.length < 6) {
            mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }

        /* los 2 password son iguales */
        if(password !== confirmarpassword) {
            mostrarAlerta('Los password no son iguales', 'alerta-error');
            return;
        }

        /* pasar los datos al action */
        registrarUsuario({
            nombre,
            email,
            password
        });

    }

    return ( 
        <div className="form-usuario">
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Crear una cuenta</h1>

                <form 
                    onSubmit={onSubmitInicioSesion}
                
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={onChangeIniciarSesion}
                        />
                    </div>
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
                        <label htmlFor="confirmarpassword">Confirmar Password</label>
                        <input 
                            type="password"
                            id="confirmarpassword"
                            name="confirmarpassword"
                            placeholder="Repite tú Password"
                            value={confirmarpassword}
                            onChange={onChangeIniciarSesion}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit" 
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>

                <Link
                    to={'/'}
                    className="enlace-cuenta"
                >
                    Vovler a Iniciar Sesión
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;