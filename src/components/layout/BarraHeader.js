import React from 'react';

const BarraHeader = () => {
    return (
        <header className="app-header">
            <p className="nombre-usuario">
                Hola <span>Nombre del Usuario</span>
            </p>

            <nav className="nav-principal">
                <a href="#!">Cerrar Sesión</a>
            </nav>
        </header>
    );
}

export default BarraHeader;