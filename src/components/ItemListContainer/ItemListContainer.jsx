import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    console.log(greeting)
    return (
        <div id='contenedor'>
            <p>{greeting}</p>
        </div>
    );
}

export default ItemListContainer;
