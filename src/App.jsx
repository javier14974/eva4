import { Fragment, useState, useEffect } from "react";
import './css/styles.css';
import Agregar from './components/agregar';
import Contar from "./components/contar";
import Listado from "./components/listado";

const App = () => {
    const [contactos, setContactos] = useState([]);


    useEffect(() => {
        const datosGuardar = localStorage.getItem("lista_contactos");
        if (datosGuardar) {
            setContactos(JSON.parse(datosGuardar));
        }
    }, []);
    const agregar_contacto = (nuevoContacto) => {
        // Leer la lista guardada o inicializar un array vacío si no existe
        let listado = [];
        const list = localStorage.getItem("lista_contactos");
        if (list !== null) {
            listado = JSON.parse(list);
        }

        // Agregar el nuevo contacto a la lista actual
        listado.push(nuevoContacto);

        // Actualizar el estado con la nueva lista
        setContactos(listado);

        // Guardar la lista actualizada en localStorage
        localStorage.setItem("lista_contactos", JSON.stringify(listado));
    };

    const Editar = (index) =>{
        const contacto = contactos[index];
        
    }


    const eliminarContacto = (index) => {
        const nuevaLista = [...contactos];
        nuevaLista.splice(index, 1);
        setContactos(nuevaLista);
        localStorage.setItem("lista_contactos", JSON.stringify(nuevaLista));
    };

    return (
        <Fragment>
            <div className="container-fluid head">
                <div className="container">
                    <nav className="navbar sticky-top">  
                        <a className="navbar-brand" href="#">
                            <img src="/img/png-transparent-lego-minifigures-smiley-worried-smiley-face-smiley-emoticon-lego-spiderman.png" alt="Logo" width="30" height="28" className="d-inline-block align-text-top align-text-center"/>
                            Agenda de contactos
                        </a>
                    </nav>
                    <Agregar onAgregar={agregar_contacto} />
                    <br />
                    <div className="container">
                        <h2 className="text-center">Lista de contactos</h2>
                        <Listado contactos={contactos} onEliminar={eliminarContacto}  onEditar={Editar}/>
                        <Contar cantidad={contactos.length} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default App;
