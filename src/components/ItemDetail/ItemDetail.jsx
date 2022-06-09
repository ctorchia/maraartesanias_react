import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ item }) => {
    console.log(item)
    return (
        <div className="row">

            <div className="col-6">
                <img src={item.pictureUrl} className="img-fluid" alt="..." />
            </div>
            <div className="col-6">
                <h2>{item.title}</h2>
                <h4>{item.description}</h4>
                <h4>{item.price}</h4> 
                <ItemCount stock={10} initial={1}/>
            </div>

        </div>
    )
}

export default ItemDetail