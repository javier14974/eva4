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
            setErrorNombre("El nombre no debe estar vacío. ❌");
            vali = false;
        }else if(/\d/.test(nombre)){
            setErrorNombre("El nombre no puede contener números. ❌");
            vali = false;
        }else if(nombre.length > 15){
            setErrorNombre("El nombre no puede tener más de 15 caracteres. ❌");
            vali = false;
        }else if(nombre === apellido){
            setErrorNombre("El nombre no puede ser igual al apellido. ❌");
            vali = false;
        }else{
            setErrorNombre("Correcto ✅");
        }

        if(apellido.trim() === ""){
            setErrorApellido("El apellido no debe estar vacío. ❌");
            vali = false;
        }else if(/\d/.test(apellido)){
            setErrorApellido("El apellido no puede contener números. ❌");
            vali = false;
        }else if(apellido.length > 20){
            setErrorNombre("El apellido no puede tener más de 20 caracteres. ❌");
            vali = false;
        }else if(apellido === nombre){
            setErrorApellido("El apellido no puede ser igual al nombre. ❌");
            vali = false;
        }else{
            setErrorApellido("Correcto ✅");
        }

        if(correo.trim() === ""){
            setErrorCorreo("El correo no puede estar vacío. ❌");
            vali = false;
        }else if(!correo.endsWith('@gmail.com')){
            setErrorCorreo("El correo debe terminar en @gmail.com. ❌");
            vali = false;
        }else{
            setErrorCorreo("Correcto ✅");
        }

        if(telefono.trim() === ""){
            setErrorTelefono("El teléfono no puede estar vacío. ❌");
            vali = false;
        }else if(!/^\d{9}$/.test(telefono)){
            setErrorTelefono("El teléfono debe tener 9 dígitos numéricos y no puede contener letras. ❌");
            vali = false;
        }else{
            setErrorTelefono("Correcto ✅");
        }

        return vali;
    };
    

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
            alert("Formulario enviado correctamente.");
            setNombre("");
            setApellido("");
            setCorreo("");
            setTelefono("");
        } else {
            alert("Formulario no enviado. Revise los campos.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1 className="display-4 text-center">Agregar contactos</h1>
                <div className="mb-3 text-center">
                    <label htmlFor="Nombre" className="form-label mt-5 ml-1 titu">Nombre &nbsp;</label>
                    <span className="error">{errorNombre}</span>
                    <input type="text" className="form-control" id="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Por favor, ingrese su nombre. Este campo es obligatorio, no puede estar vacío, no puede contener números y no debe superar los 15 caracteres." />

                    <label htmlFor="Apellido" className="form-label mt-2 titu">Apellido &nbsp;</label>
                    <span className="error">{errorApellido}</span>
                    <input type="text" className="form-control" id="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Por favor, ingrese su apellido. Este campo es obligatorio, no puede estar vacío, no puede contener números y no debe superar los 20 caracteres." />

                    <label htmlFor="Correo" className="form-label mt-2 titu">Email &nbsp;</label>
                    <span className="error">{errorCorreo}</span>
                    <input type="text" className="form-control" id="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Por favor, ingrese su correo electrónico. Debe terminar en @gmail.com." />

                    <label htmlFor="Telefono" className="form-label mt-2 titu">Telefono &nbsp;</label>
                    <span className="error">{errorTelefono}</span>
                    <input type="text" className="form-control" id="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Por favor, ingrese su número de teléfono. Debe contener exactamente 9 dígitos numéricos." />

                    <button type="submit" className="btn btn-success mt-2"><i class="bi bi-bookmark-plus"></i></button>
                </div>
            </div>
        </form>
    );
};

export default Agregar;
