import React, { Fragment, useContext } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Tarea from './Tarea';

import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';


const Listadotareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const {  proyecto, eliminarProyecto  } = proyectosContext;

    const tareasContext = useContext(TareaContext);
    const { tareasProyecto } = tareasContext;

    /* si no hay proyecto seleccionado */
    if(!proyecto) return <h2>Selecciona un Proyecto</h2>;

    /* array destructuring para extraer el proyecto */
    const [proyectoActual] = proyecto;

    /* elimina un proyecto */
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual._id);
    }

    
    return ( 
    <Fragment>
        <h2> Proyecto: {proyectoActual.name} </h2>

        <ul className = "listado-tareas"> {
            tareasProyecto.length === 0 ?
            ( <li className = "tarea" > <p> No hay Tareas </p></li > )

            :
                <TransitionGroup>
                    {        
                        tareasProyecto.map(tareaProyecto => ( 
                            <CSSTransition
                                key = {tareaProyecto.id}
                                timeout ={300}
                                classNames="tarea"
                            >
                                <Tarea 
                                    tareaProyecto = {tareaProyecto}
                                />
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup> 
            
        } 
        </ul>

        <button 
            type = "button"
            className = "btn btn-eliminar" 
            onClick={onClickEliminar}
        >
            Eliminar Proyecto &times; </button> 
    </Fragment>
    );
}

export default Listadotareas;