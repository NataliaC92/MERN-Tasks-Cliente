import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';


/* creamos el Hidder order component*/

const RutaPrivada = ({ component: Component, ...props }) => {

    const authContext = useContext(AuthContext);
    const { autenticado, cargando, usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();

        //eslint-disable-netx-line
    }, []);

    return(
        <Route
            {...props } render={ props => !autenticado && !cargando ? (
                <Redirect to="/" />
            ) : (
                <Component {...props} />
            ) }
        />
    );
}

export default RutaPrivada;