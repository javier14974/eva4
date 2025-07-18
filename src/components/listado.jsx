const Listado = ({ contactos, onEliminar, onEditar }) => {
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
                                    <button onClick={() => onEditar(index)} className="btn btn-warning btn-sm">*</button>
                                    <button onClick={() => onEliminar(index)} className="btn btn-danger btn-sm">-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Listado;
