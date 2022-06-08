let productos = [
    {
        id: '1',
        nombre: 'Pintura Acrílica 50cc',
        descripcion: 'Pintura acrílica EQ para Artesanías',
        stock: '20',
    },
    {
        id: '2',
        nombre: 'Pintura a la Tiza 200cc',
        descripcion: 'Pintura a la Tiza EQ para Artesanías',
        stock: '15',
    },
    {
        id: '3',
        nombre: 'Betún de Judea',
        descripcion: 'Betún de Judea para teñir madera',
        stock: '10',
    },
];

export const getFetch = () =>{
    return new Promise( (resolve, reject) =>{
        setTimeout(() =>{
            resolve(productos)
        },3000)
    })
}