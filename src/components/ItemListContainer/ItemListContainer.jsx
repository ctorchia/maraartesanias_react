import { useEffect, useState } from 'react';
import { getFetch } from '../../helpers/getFetch';
// import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch()
            .then((resp) => {
                setProductos(resp)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    console.log(productos)

    return (
        <div id='contenedor'>

            {loading ? 
                <h1>Cargando...</h1>
            :
                productos.map(producto =>

                <div className="card" key={producto.id}>
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">{producto.descripcion}</p>
                        <a href="#" className="btn btn-primary">{producto.stock}</a>
                    </div>
                </div>
            )}

        </div>
    );
}

export default ItemListContainer;
