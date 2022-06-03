import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    console.log(greeting)

    return (
        <div id='contenedor'>
            <ItemCount stock="8" initial="1" />
        </div>
    );
}

export default ItemListContainer;
