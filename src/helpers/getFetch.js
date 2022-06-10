let productos = [
    {
        id: '1',
        title: 'Pintura Acrílica 50cc',
        description: 'Pintura acrílica EQ para Artesanías',
        price: '$100',
        pictureUrl: 'https://ctorchia.github.io/maraartesanias/imagenes/acrilico_50.webp'
    },
    {
        id: '2',
        title: 'Pintura a la Tiza 200cc',
        description: 'Pintura a la Tiza EQ para Artesanías',
        price: '$200',
        pictureUrl: 'https://ctorchia.github.io/maraartesanias/imagenes/tiza_200.webp'
    },
    {
        id: '3',
        title: 'Betún de Judea',
        description: 'Betún de Judea para teñir madera',
        price: '$150',
        pictureUrl: 'https://ctorchia.github.io/maraartesanias/imagenes/betun_1000.webp'
    },
];

export const getFetch = (id) => {
    console.log(id)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                resolve(productos.find(producto => producto.id === id))
            } else {
                resolve(productos)
            }
        }, 1000)
    })
}