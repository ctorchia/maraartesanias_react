import { Link } from "react-router-dom";

export default function Item(item) {
    return (
        <div className="card m-2" key={item.id}>
            <img src={item.pictureUrl} className="card-img-top h-100" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Precio: $ {item.price}</p>

                <Link to={`/item/${item.id}`}>
                    <button className="btn btn-primary"> Ver Detalle </button>
                </Link>

            </div>
        </div>
    )
}
