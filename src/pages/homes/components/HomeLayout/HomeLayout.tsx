


export default function HomeLayout() {
    return (
        <>
            {/* Carousel wrapper */}
            <div
                id="carouselDarkVariant"
                className="carousel slide carousel-fade carousel-dark"
                data-mdb-ride="carousel"
            >
                {/* Indicators */}
                <div className="carousel-indicators">
                    <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to={1}
                        aria-label="Slide 1"
                    />
                    <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to={2}
                        aria-label="Slide 1"
                    />
                </div>
                {/* Inner */}
                <div className="carousel-inner">
                    {/* Single item */}
                    <div className="carousel-item active">
                        <img
                            src="https://i0.wp.com/www.tiendaroy.com/wp-content/uploads/2020/02/BANNER-ROY-NIKE-CABALLERO.jpg?fit=1200%2C675&ssl=1"
                            className="d-block w-100"
                            alt="Motorbike Smoke"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    {/* Single item */}
                    <div className="carousel-item">
                        <img
                            src="https://i0.wp.com/www.tiendaroy.com/wp-content/uploads/2020/02/BANNER-ROY-NIKE-DAMA.jpg?fit=1200%2C675&ssl=1"
                            className="d-block w-100"
                            alt="Mountaintop"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    {/* Single item */}
                    <div className="carousel-item">
                        <img
                            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1066,c_limit/32a1c8bd-604f-4979-aba1-1619ad006cd6/nike-just-do-it.jpg"
                            className="d-block w-100"
                            alt="Woman Reading a Book"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Inner */}
                {/* Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Carousel wrapper */}
        </>

    )
}