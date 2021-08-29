import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/#">Yanki</a>
                <div className="collapse navbar-collapse row" >
                    <ul className="navbar-nav col-2">
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Pais</a>
                            </li>
                    </ul>
                    <ul className="navbar-nav col-6">
                            <input class="form-control" type="search" placeholder="Buscador" aria-label="Search"/>
                    </ul>
                    <ul className="navbar-nav col-2 d-flex flex-row-reverse ">
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#" >Carrito</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
