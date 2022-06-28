let products = [
    {
        id: '1',
        title: 'Pintura Acrílica 50cc',
        description: 'Pintura acrílica EQ para Artesanías',
        category: 'producto',
        price: '100',
        stock: '15',
        pictureUrl: 'https://ctorchia.github.io/maraartesanias/imagenes/acrilico_50.webp'
    },
    {
        id: '2',
        title: 'Pintura a la Tiza 200cc',
        description: 'Pintura a la Tiza EQ para Artesanías',
        category: 'producto',
        price: '200',
        stock: '15',
        pictureUrl: 'https://ctorchia.github.io/maraartesanias/imagenes/tiza_200.webp'
    },
    {
        id: '3',
        title: 'Betún de Judea 1L',
        description: 'Betún de Judea para teñir madera',
        category: 'producto',
        price: '150',
        stock: '15',
        pictureUrl: 'https://ctorchia.github.io/maraartesanias/imagenes/betun_1000.webp'
    },
    {
        id: '4',
        title: 'Banco 1',
        description: 'Banco Multiuso Gris Jaspeado',
        category: 'trabajo',
        price: '1500',
        stock: '15',
        pictureUrl: 'https://ctorchia.github.io/maraartesanias/imagenes/banquito_1.webp'
    },
    {
        id: '5',
        title: 'Banco 2',
        description: 'Banco Multiuso Celeste con Hojas',
        category: 'trabajo',
        price: '1500',
        stock: '15',
        pictureUrl: 'https://ctorchia.github.io/maraartesanias/imagenes/banquito_2.webp'
    },
    {
        id: '6',
        title: 'Banco 3',
        description: 'Banco Multiuso en Betún',
        category: 'trabajo',
        price: '1500',
        stock: '15',
        pictureUrl: 'https://ctorchia.github.io/maraartesanias/imagenes/banquito_3.webp'
    }
];

export const getFetch = (id) => {
    // console.log(id)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                resolve(products.find(producto => producto.id === id))
            } else {
                resolve(products)
            }
        }, 1000)
    })
}