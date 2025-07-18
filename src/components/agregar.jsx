import { useState } from "react";


const Agregar = ({ onAgregar }) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");

    const [errorNombre, setErrorNombre] = useState('');
    const [errorApellido, setErrorApellido] = useState('');
    const [errorCorreo, setErrorCorreo] = useState('');
    const [errorTelefono, setErrorTelefono] = useState('');

    const vali = () => {
        let vali = true;

        if(nombre.trim() === ""){
            setErrorNombre("el nombre NO debe estar vacio");
            vali = false;
        }else if(/\d/.test(nombre)){
            setErrorNombre("no puede aver numeros en el nombre");
            vali = false;
        }else{
            setErrorNombre("correcto");
        }

        if(apellido.trim() === ""){
            setErrorApellido("el apellido NO debe estar vacio");
            vali = false;
        }else if(/\d/.test(apellido)){
            setErrorApellido("no puede aver numeros en el apellido");
            vali = false;
        }else{
            setErrorApellido("correcto");
        }

        if(correo.trim() === ""){
            setErrorCorreo("el correo NO puede estar vacio");
            vali = false;
        }else if(!correo.endsWith('@gmail.com')){
            setErrorCorreo("el correo tiene que tener al ultimo @gmail.com");
            vali = false;
        }else{
            setErrorCorreo("correcto");
        }

        if(telefono.trim() === ""){
            setErrorTelefono("el telefono no puede estar vacio");
            vali = false;
        }else if(!/^\d{9}$/.test(telefono)){
            setErrorTelefono("el telefono tiene que tener 9 digitos y no puede tener letras");
            vali = false;
        }else{
            setErrorTelefono("correcto");
        }

        return vali;
    };
    
    const setContacto = () =>{

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (vali()) {
            const contacto = {
                nombre,
                apellido,
                correo,
                telefono
            };
            onAgregar(contacto);
            alert("formulario enviado");
            setNombre("");
            setApellido("");
            setCorreo("");
            setTelefono("");
        } else {
            alert("formuladiro no enviado");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1 className="display-4 text-center">agregar contacto</h1>
                <div className="mb-3 text-center">
                    <label htmlFor="Nombre" className="form-label mt-5 ml-1 titu">nombre &nbsp;</label>
                    <span className="error">{errorNombre}</span>
                    <input type="text" className="form-control" id="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="porfavor ingrese su apellido este es obligatorio no puede estar vacio y tampoco puede tener numeros" />

                    <label htmlFor="Apellido" className="form-label mt-2 titu">apellido &nbsp;</label>
                    <span className="error">{errorApellido}</span>
                    <input type="text" className="form-control" id="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="porfavor ingrese su apellido este es obligatorio no puede estar vacio y tampoco puede tener numeros" />

                    <label htmlFor="Correo" className="form-label mt-2 titu">correo &nbsp;</label>
                    <span className="error">{errorCorreo}</span>
                    <input type="text" className="form-control" id="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="porfavor ingrese su correo con @gmail.com al ultimo" />

                    <label htmlFor="Telefono" className="form-label mt-2 titu">telefono &nbsp;</label>
                    <span className="error">{errorTelefono}</span>
                    <input type="text" className="form-control" id="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="porfavor ingresar telefono debe tener 9 digitos" />

                    <button type="submit" className="btn btn-success mt-2">+</button>
                </div>
            </div>
        </form>
    );
};

export default Agregar;
