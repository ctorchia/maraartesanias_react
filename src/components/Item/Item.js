
export default function Item(producto) {

    return (
        <div className="card m-2" key={producto.id}>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text">Stock: {producto.stock}</p>
                <a href="#action1" className="btn btn-primary">Detalle del producto</a>
            </div>
        </div>
    )
}
