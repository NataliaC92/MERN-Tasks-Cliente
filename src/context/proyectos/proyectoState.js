import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';


import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
         FORMULARIO_PROYECTO, 
         OBTENER_PROYECTOS,
         AGREGAR_PROYECTOS,
         VALIDAR_FORMULARIO,
         PROYECTO_ACTUAL,
         ELIMINAR_PROYECTO 
} from '../../types';


const ProyectoState = props => {

    const proyectos = [
        { id: 1, name: 'Tienda Virtual' },
        { id: 2, name: 'Intranet' },
        { id: 3, name: 'Diseño de Sitio Web' }
    ];

    const initialState = {
        proyectos : [],
        formulario: false,
        errorformulario: false,
        proyecto: null
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
    const obtenerProyectos = () => {
        dispatch({
            type:OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    /* Agregar nuevo proyecto  */
    const agregarProyectos = proyecto => {
        proyecto.id = uuidv4();

        /* Insertar el proyecto en el state */
        dispatch({
            type:AGREGAR_PROYECTOS,
            payload: proyecto
        })
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
    const eliminarProyecto = proyectoId =>{
        dispatch({
            type:ELIMINAR_PROYECTO,
            payload:proyectoId
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
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