import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';


const TareaState = props => {
    const initialState = {
        tareas: [
             { id: 0, name: 'Elegir plataforma', status: true, proyectoId: 1},
             { id: 1, name: 'Elegir plataforma de pago', status: false, proyectoId: 2},
             { id: 2, name: 'Elegir colores', status: false, proyectoId: 3},
             { id: 3, name: 'Elegir hosting', status: true, proyectoId: 4},
             { id: 4, name: 'Elegir plataforma', status: true, proyectoId: 1},
             { id: 5, name: 'Elegir plataforma de pago', status: false, proyectoId: 2},
             { id: 6, name: 'Elegir colores', status: false, proyectoId: 3 },
             { id: 7, name: 'Elegir plataforma', status: true, proyectoId: 4},
             { id: 8, name: 'Elegir plataforma de pago', status: false, proyectoId: 1},
             { id: 9, name: 'Elegir colores', status: false, proyectoId: 2},
             { id: 10, name: 'Elegir plataforma', status: true, proyectoId: 3},
             { id: 11, name: 'Elegir plataforma de pago', status: false, proyectoId: 4},
             { id: 12, name: 'Elegir colores', status: false, proyectoId: 1}
        ],

        tareasProyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }

    /* crear state y dispatch */
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    /* CREAR FUNCIONES */
    /* tareas de un proyecto */
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    /* AGREGAR TAREA AL PROYECTO SELECCIONADO */
    const agregarTarea = tarea => {
        tarea.id = uuidv4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    /* valida y muestra un error */
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    } 

    /* eliminar tarea por id*/
    const eliminarTarea = id =>{
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    /* modificar estado tarea */

    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }


    /* extrae una tarea para edicion */
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    /* edita o mod una TAREA */
    const actualizaTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    /* ELIMINA la tarea seleccionada */
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }


    return (
        <TareaContext.Provider
                value={{
                    tareas: state.tareas,
                    tareasProyecto: state.tareasProyecto,
                    errortarea: state.errortarea,
                    tareaseleccionada: state.tareaseleccionada,
                    obtenerTareas,
                    agregarTarea,
                    validarTarea,
                    eliminarTarea,
                    cambiarEstadoTarea,
                    guardarTareaActual,
                    actualizaTarea,
                    limpiarTarea
                }}
        >
            {props.children}
        </TareaContext.Provider>
    );
}

export default TareaState;
