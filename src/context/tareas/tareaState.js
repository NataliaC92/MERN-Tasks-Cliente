import React, { useReducer } from 'react';


import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    /* ESTADO_TAREA, */
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';


import clienteAxios from '../../config/axios';


const TareaState = props => {
    const initialState = {
        tareasProyecto: [],
        errortarea: false,
        tareaseleccionada: null
    }

    /* crear state y dispatch */
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    /* CREAR FUNCIONES */
    /* tareas de un proyecto */
    const obtenerTareas = async proyecto => {

        console.log(proyecto);

       try {
           const resultado = await clienteAxios.get('/api/tareas', { params: { proyecto }} );
           // cuando eviamos params debemos hacerlo en el controller. en este caso tareaControllers.js como req.query en vez de req.body
           
           console.log(resultado); 

           dispatch({
            type: TAREAS_PROYECTO,
            payload: resultado.data.tareas
            
        })
           
       } catch (error) {
           console.log(error);
       }
    }

    /* AGREGAR TAREA AL PROYECTO SELECCIONADO */
    const agregarTarea = async tarea => {
        //console.log(tarea);
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            console.log(resultado);

            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea
            })
            
        } catch (error) {
            console.log(error);
        }
    }

    /* valida y muestra un error */
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    } 

    /* eliminar tarea por id*/
    const eliminarTarea = async (id, proyecto) =>{
       try {
            await clienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto }});   
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
       } catch (error) {
           console.log(error);
       }
    }

    /* modificar estado tarea */

    /* const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    } */


    /* edita o mod una TAREA */
    const actualizaTarea = async tarea => {
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);
            console.log(resultado.data.tarea);

            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data.tarea
            })
        } catch (error) {
            console.log(error);
        }
    }
    /* extrae una tarea para edicion */
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
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
                    tareasProyecto: state.tareasProyecto,
                    errortarea: state.errortarea,
                    tareaseleccionada: state.tareaseleccionada,
                    obtenerTareas,
                    agregarTarea,
                    validarTarea,
                    /* cambiarEstadoTarea, */
                    eliminarTarea,
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
