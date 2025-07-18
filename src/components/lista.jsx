const Lista = ({ contactos, onEliminar}) => {
    return (
        <div className="container mt-4">
            <div className="row">
                {contactos.map((persona, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card h-100 bg-primary">
                            <img src="/img/unnamed.png" className="card-img-top" alt="..." />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title">
                                    {persona.nombre} - {persona.apellido}
                                </h5>
                                <p className="card-text">{persona.correo} - {persona.telefono}</p>
                                <div className="d-flex justify-content-between mt-3">
                                    <button className="btn btn-warning btn-sm"><i class="bi bi-pen"></i></button> {/* no logre aditar los datos usando el formulario de agregar :,c */}
                                    <button onClick={() => onEliminar(index)} className="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button> {/* envio el index a App para poder eliminar en especifico ese usuario */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lista;
