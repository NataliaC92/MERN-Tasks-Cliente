import React, { useContext, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import AlertaContext from  '../../context/alerta/alertaContext';


const ListadoProyectos = () => {
    
    /* extraer proyectos desde state inicial */
    const proyectosContext = useContext(proyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    
    /* obtener proyecto cuando carga el componente */
    useEffect(() => {

        //si hay un error
        if (mensaje) mostrarAlerta(mensaje.msg, mensaje.categoria)

        obtenerProyectos();

        //eslint-disable-next-line
    }, [mensaje]);


    /* corroborar si proyecto tiene contenido */
    if(proyectos.length === 0) return <p>No hay Proyectos, comienza creando uno</p>;


    
    return ( 
        <ul className="listado-proyectos">
        { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ): null}

           <TransitionGroup>
            {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto._id}
                        timeout={200}
                        classNames="proyecto" 
                    >
                        <Proyecto
                            key={proyecto._id} 
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                 )
            )}
           </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;
