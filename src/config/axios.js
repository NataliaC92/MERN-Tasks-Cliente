import axios from 'axios';

/* de esta manera conectamos el backend (el archivo env que creamos con el REACT_APP_BACKEND_URL) con el front end
donde querramos hacer una peticion al backend utilizaremos la const clienteAxios, haciendo referencia a este archivo
y por lo tanto a la coneccion con el back
*/
const clienteAxios = axios.create({
    baseURL : process.env.REACT_APP_BACKEND_URL
});

export default clienteAxios;