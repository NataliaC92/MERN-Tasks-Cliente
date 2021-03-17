import React, { useContext } from 'react';

import TareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';


const Tarea = ({tareaProyecto}) => {

    const tareasContext = useContext(TareaContext);
    const { eliminarTarea, obtenerTareas, actualizaTarea, guardarTareaActual } = tareasContext;

    /* extraer si un proyecto esta activo */
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    /* extraer el proyecto */
    const [proyectoActual] = proyecto;

    /* funcion que se ejecuta cuando se preciona btn eliminar tarea  */
    const tareaEliminar = id => {
        eliminarTarea(id, proyectoActual._id);
        obtenerTareas(proyectoActual.id);
    }

    /* funcion que mod el estado de las tareas */
    const cambiarEstado = tarea => {
        if(tarea.estado) {
            tarea.estado = false
        } else {
            tarea.estado = true
        }
        actualizaTarea(tarea);
    }

    /* agrega tarea actual cuando usuario desea editar */
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }


    return ( 
        <li className="tarea sombra">
            <p>{tareaProyecto.nombre}</p>

            <div className="estado">
                {tareaProyecto.estado
                    ?
                      (
                          <button
                            type="button"
                            className="completo"
                            onClick={ () => cambiarEstado(tareaProyecto)}
                          >Completo</button>
                      )     
                    :
                    (
                        <button
                          type="button"
                          className="incompleto"
                          onClick={ () => cambiarEstado(tareaProyecto)}
                        >Incompleto</button>
                    )   

                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccionarTarea(tareaProyecto)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tareaProyecto._id)}
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarea;