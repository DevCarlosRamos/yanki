import React from 'react'
import ropa from '../img/ropa.jpg'

const Home = () => {
    return (
        <div className="row mt-5 justify-content-center">
            <div className="card col-2 m-3" >
                <img className="card-img-top" src={ropa} alt={ropa}/>
                <div className="card-body">
                    <h5 className="card-title">$100 - polo</h5>
                    <a href="#/" className="btn btn-success">Agregar al carrito</a>
                </div>
            </div>
            <div className="card col-2 m-3" >
                <img className="card-img-top" src={ropa} alt={ropa}/>
                <div className="card-body">
                    <h5 className="card-title">$50 - gorro</h5>
                    <a href="#/" className="btn btn-success">Agregar al carrito</a>
                </div>
            </div>
            <div className="card col-2 m-3" >
                <img className="card-img-top" src={ropa} alt={ropa}/>
                <div className="card-body">
                    <h5 className="card-title">$130 - pantalon</h5>
                    <a href="#/" className="btn btn-success">Agregar al carrito</a>
                </div>
            </div>
            <div className="card col-2 m-3" >
                <img className="card-img-top" src={ropa} alt={ropa}/>
                <div className="card-body">
                    <h5 className="card-title">$90 - blusa</h5>
                    <a href="#/" className="btn btn-success">Agregar al carrito</a>
                </div>
            </div>
        </div>
    )
}

export default Home
