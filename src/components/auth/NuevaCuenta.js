import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NuevaCuenta = () => {

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

        /* password minimo de 6 caracteres */

        /* los 2 password son iguales */

        /* pasar los datos al action */

    }

    return ( 
        <div className="form-usuario">
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