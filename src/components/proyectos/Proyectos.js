import React from 'react';
import Sidebar from '../layout/Sidebar';
import BarraHeader from '../layout/BarraHeader';
import FormNuevaTarea from '../tareas/FormNuevaTarea';
import Listadotareas from '../tareas/ListadoTareas';


const Proyectos = () => {
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
