import { Fragment, useState, useEffect } from "react";
import './css/styles.css';
import Agregar from './components/agregar';
import Contar from "./components/contar";
import Lista from "./components/lista";

const App = () => {
    const [contactos, setContactos] = useState([]);

    useEffect(() => {  /* Navegación fija en la parte superior de la página  */
        const datosGuardar = localStorage.getItem("lista_contactos");
        if (datosGuardar) {
            setContactos(JSON.parse(datosGuardar));
        }
    }, []);
    const agregar_contacto = (nuevoContacto) => {
        let listado = [];
        const list = localStorage.getItem("lista_contactos");
        if (list !== null) {
            listado = JSON.parse(list);
        }

        listado.push(nuevoContacto);
        setContactos(listado);
        localStorage.setItem("lista_contactos", JSON.stringify(listado));
    };



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
                    <nav className="navbar sticky-top">    {/* hacer que siempre aparesca arriba  */}
                        <a className="navbar-brand" href="#">
                            <img src="/img/png-transparent-lego-minifigures-smiley-worried-smiley-face-smiley-emoticon-lego-spiderman.png" alt="Logo" width="30" height="28" className="d-inline-block align-text-top align-text-center"/>Agenda de contactos</a>
                    </nav>
                    <Agregar onAgregar={agregar_contacto} />
                    <br />
                    <div className="container">
                        <h2 className="text-center">Lista de contactos 📞</h2>
                        <Lista contactos={contactos} onEliminar={eliminarContacto}/>  
                        <Contar cantidad={contactos.length} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default App;
