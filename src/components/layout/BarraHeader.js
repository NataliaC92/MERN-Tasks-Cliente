import React, { useContext, useEffect } from 'react';

import AuthContext from '../../context/autenticacion/authContext';


const BarraHeader = () => {

    //extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

    useEffect(() => {
        usuarioAutenticado();

       //eslint-disable-netx-line
    }, []);



    return (
        <header className="app-header">
            {usuario ? <p className="nombre-usuario">
                Hola <span>{usuario.nombre}</span>
            </p> : null}

            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerra-sesion"
                    onClick={() => cerrarSesion()} 
                >Cerrar Sesión</button>
            </nav>
        </header>
    );
}

export default BarraHeader;