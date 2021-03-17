import React, {useContext, useState, useEffect} from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const FormNuevaTarea = () => {

    /* extraer si un proyecto esta activo */
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(TareaContext);
    const { 
        errortarea, 
        tareaseleccionada, 
        agregarTarea, 
        validarTarea, 
        obtenerTareas, 
        actualizaTarea,
        limpiarTarea 
    } = tareasContext;


    /* effect que detecta si hay una tarea seleccionada */

    useEffect(() => {
        if(tareaseleccionada !== null) {
            guardarTarea(tareaseleccionada);
        } else {
            guardarTarea({
                nombre:''
            })
        }
    }, [tareaseleccionada]);


     /* state del formulario */
     const [tarea, guardarTarea] = useState ({
        nombre: ''
     })

     /* extraer nombre del proyecto */
     const {nombre} = tarea;

     /* si no hay proyecto seleccionado */
    if(!proyecto) return null;

    /* array destructuring para extraer el proyecto */
    const [proyectoActual] = proyecto;

     /* leer los valores del formulario*/
     const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
     }

    const onSubmit = e => {
        e.preventDefault();

        /* validar */
        if(nombre.trim() === '') {
            validarTarea();
            return;
        }

        /* revisar si estamos editando o agregando una tarea */
        if(tareaseleccionada === null) {
            /* agregar la nueva tarea al state de tareas */
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
        } else {
            /* actualizar tarea existente */
            actualizaTarea(tarea);

            /* eliminar tarea seleccionada del state */
            limpiarTarea();
        }



        /* obtener y filtrar tareas del proyecto actual */
        obtenerTareas(proyectoActual.id);

        /* reiniciar form */
        guardarTarea({
            nombre: ''
        })

    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div> 
            </form>

                {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
     );
}
 
export default FormNuevaTarea;
