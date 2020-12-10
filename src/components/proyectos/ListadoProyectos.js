import React, { useContext, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
    
    /* extraer proyectos desde state inicial */
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;
    
    /* obtener proyecto cuando carga el componente */
    useEffect(() => {
        obtenerProyectos();

        //eslint-disable-next-line
    }, []);


    /* corroborar si proyecto tiene contenido */
    if(proyectos.length === 0) return <p>No hay Proyectos, comienza creando uno</p>;


    
    return ( 
        <ul className="listado-proyectos">
           <TransitionGroup>
           {proyectos.map(proyecto => (
                <CSSTransition
                    key={proyecto.id}
                    timeout={200}
                    classNames="proyecto" 
                >
                    <Proyecto 
                        proyecto={proyecto}
                    />
                </CSSTransition>
            ) )}
           </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;
