const Contar = ({ cantidad }) => {
    if (cantidad === 0) {
        return (
        <div className="alert bg-secondary mt-3 text-center">
            Por ahora no tienes contactos agregados 😒
        </div>
        );
    }
    if (cantidad === 1) {
        return (
        <div className="alert bg-secondary mt-3 text-center">
            tienes pocos contactos 🥲
        </div>
        );
    }
    if (cantidad > 4 && cantidad < 7) {
        return (
        <div className="alert bg-success mt-3 text-center">
            tienes mas de 4 contactos 😊
        </div>
        );
    }
    if (cantidad > 7) {
        return (
        <div className="alert bg-primary mt-3 text-center">
            tienes mas de 7 contactos 🫡
        </div>
        );
    }
    // Por defecto si cantidad está entre 2 y 4 inclusive (o cualquier otro caso)
    return (
        <div className="alert bg-secondary mt-3 text-center">
        tienes pocos contactos 🥲
        </div>
    );
};

export default Contar;
