import React, { useReducer } from 'react';


import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
         FORMULARIO_PROYECTO, 
         OBTENER_PROYECTOS,
         AGREGAR_PROYECTOS,
         PROYECTO_ERROR,
         VALIDAR_FORMULARIO,
         PROYECTO_ACTUAL,
         ELIMINAR_PROYECTO 
} from '../../types';

import clienteAxios from '../../config/axios';


const ProyectoState = props => {


    const initialState = {
        proyectos : [],
        formulario: false,
        errorformulario: false,
        proyecto: null,
        mensaje: null
    }

    /* Distpach para ejecutar las acciones  */

    const [state, dispatch] = useReducer(proyectoReducer, initialState,)

    /* serie de funciones para el CRUD */


    /* funcion para mostrar formulario */
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    /* obtener los proyectos */
    const obtenerProyectos = async () => {
        try {
            const resultado = await clienteAxios.get('/api/proyectos');

            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos
            })
        } catch (error) { 
            const alerta = {
                msg: 'Hubo un Error',
                categoria: 'alerta-error'
            }
            dispatch ({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

    /* Agregar nuevo proyecto  */
    const agregarProyectos = async proyecto => {
        /* console.log(proyecto); */
       try {
        const resultado = await clienteAxios.post('/api/proyectos', proyecto);
        console.log(resultado);
        
        //insertar el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTOS,
            payload: resultado.data
        });
        
       } catch (error) { 
        const alerta = {
            msg: 'Hubo un Error',
            categoria: 'alerta-error'
        }
        dispatch ({
            type: PROYECTO_ERROR,
            payload: alerta
        })
    }
    }

    /* Validar Formulario por errores*/
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    /* selecciona el proyecto al cual el usuario dio click */
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    /* ELIMINAR PROYECTO */
    const eliminarProyecto = async proyectoId =>{
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
            dispatch({
                type:ELIMINAR_PROYECTO,
                payload:proyectoId
            })
        } catch (error) { 
            const alerta = {
                msg: 'Hubo un Error',
                categoria: 'alerta-error'
            }
            dispatch ({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mensaje: state.mensaje,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyectos,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
             {props.children}
        </proyectoContext.Provider>
    )

}

export default ProyectoState;