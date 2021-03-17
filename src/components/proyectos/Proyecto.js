import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';


const Proyecto = ({ proyecto }) => {

    const proyectosContext = useContext(proyectoContext);
    const {
        proyectoActual,
     } = proyectosContext;

     const tareasContext = useContext(TareaContext);
     const {
        obtenerTareas
     } = tareasContext;

     /* funcion para agregar proyecto actual */
     const seleccionarProyecto = id => {
        proyectoActual(id); /* fijar proyecto actual */
        obtenerTareas(id); /* filtrar las tareas cuando se de click */
     }

    return ( 
    <li>
        <button 
            type = "button"
            className = "btn btn-blank" 
            onClick={() => seleccionarProyecto(proyecto._id)}
        >
        {proyecto.name}
         
        </button> 
    </li>
    );
}

export default Proyecto;