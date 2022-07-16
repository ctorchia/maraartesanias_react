import './Footer.css'

const Footer = () => {
    return (

        <footer>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2 g-4 d-flex align-items-center mt-3 mb-3 pb-3">
                <div className="text-center">

                    <div className="medios-contacto d-flex justify-content-center">
                        <div className="agrupar">
                            <a href="https://mail.google.com/"><i className="medio-correo fas fa-envelope fa-3x"></i></a>
                        </div>
                        <div className="agrupar">
                            <a href="https://www.instagram.com/"><i
                                className="medio-instagram fab fa-instagram fa-3x"></i></a>
                        </div>
                        <div className="agrupar">
                            <a href="https://web.whatsapp.com/"><i
                                className="medio-whatsapp fab fa-whatsapp fa-3x"></i></a>
                        </div>
                        <div className="agrupar">
                            <a href="https://twitter.com/"><i className="medio-twitter fab fa-twitter fa-3x"></i></a>
                        </div>
                    </div>

                    <p>
                        San Martín, Buenos Aires, ARG.
                    </p>
                </div>

                <div className="grupo-nav-footer">

                    <div className="bg-transparent text-center">
                        <h2>MaraArtesanias</h2>
                        <p>Todos los productos para tus Artesanias</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer