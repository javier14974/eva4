const Contar = ({ cantidad }) => {
    if (cantidad === 0) {
        return (
        <div className="alert bg-secondary mt-3 text-center">Por ahora no tienes contactos agregados 😒</div>
        );
    }
    if (cantidad === 1) {
        return (
        <div className="alert bg-secondary mt-3 text-center">Tienes pocos contactos 🥲</div>
        );
    }
    if (cantidad > 4 && cantidad < 7) {
        return (
        <div className="alert bg-success mt-3 text-center">Tienes más de 4 contactos 😊</div>
        );
    }
    if (cantidad > 7) {
        return (
        <div className="alert bg-primary mt-3 text-center">Tienes más de 7 contactos 🫡</div>
        );
    }
    return ( /* por defecto saldra esto */
        <div className="alert bg-secondary mt-3 text-center">Tienes pocos contactos 🥲</div>
    );
};

export default Contar;
