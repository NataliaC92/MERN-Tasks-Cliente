import React, { Fragment, useState, useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';

const FormNuevoProyecto = () => {

    /* obtener el state del formulario */
   const proyectosContext = useContext(proyectoContext);

   const {
        formulario,
        errorformulario, 
        mostrarFormulario, 
        agregarProyectos, 
        mostrarError 
    } = proyectosContext;

    /* usestate  */
    const [ proyecto, setProyecto ] = useState({
        name:''
    });

    /* extraer nombre de proyecto */

    const { name } = proyecto;

    /* leer contenidos del input */
    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    /* cuando el usuario envia un proyecto */
    const onSubmitProyecto = e => {
        e.preventDefault();

        /* validar el proyecto */
        if(name === '') {
            mostrarError();
            return;
        }
           

        /* agregar al state*/
        agregarProyectos(proyecto)

        /* reiniciar el form */
        setProyecto({
            name:''
        })
    }    

    /* mostrar formulario */
    const onClickFormulario = () => {
        mostrarFormulario();
    }


    return ( 
        <Fragment>

            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >
                Nuevo Proyecto   
            </button>

            {
                formulario 
                ? (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="name"
                            value={name}
                            onChange={onChangeProyecto}
                        />
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                            
                        />
                    </form>
                )
                : null 
            }
           
           {errorformulario 
                ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p> 
                : null
            }
        </Fragment>


     );
}
 
export default FormNuevoProyecto;
