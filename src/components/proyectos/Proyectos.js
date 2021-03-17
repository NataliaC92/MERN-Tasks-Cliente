import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import BarraHeader from '../layout/BarraHeader';
import FormNuevaTarea from '../tareas/FormNuevaTarea';
import Listadotareas from '../tareas/ListadoTareas';

import AuthContext from '../../context/autenticacion/authContext';


const Proyectos = () => {

    //extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();

        //eslint-disable-netx-line;
    }, []);


    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <BarraHeader />
                <main>
                    <FormNuevaTarea/>
                    <div className="contenedor-tareas">
                        <Listadotareas />
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Proyectos;
