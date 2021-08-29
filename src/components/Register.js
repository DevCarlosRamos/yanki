import React from 'react';
import styled from 'styled-components';

const Register = () => {

    const Register = styled.div`

    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #F3F3F3;
    `;
    const Titulo = styled.h2`

    display:flex;
    justify-content: center;
    align-items: center;
    `;

    return (

        <Register clasName="row">
            <form className="col-4">
                <Titulo>Registro</Titulo>
                <div className="form-group">
                    <label for="Name">Nombre</label>
                    <input type="text" className="form-control" id="Name" />
                    <small id="Name" className="form-text text-muted">Carlos Ramos</small>
                </div>
                <div className="form-group mt-2">
                    <label for="Age">Edad</label>
                    <input type="text" className="form-control" id="Age" />
                    <small id="Age" className="form-text text-muted">ejm: 25</small>
                </div>
                <div className="form-group mt-2">
                    <label for="Country">Pais</label>
                    <input type="text" className="form-control" id="Country" />
                    <small id="Country" className="form-text text-muted">ejm: Peru</small>
                </div>
                <div className="form-group mt-2">
                    <label for="Kind">Cuenta comprador o proveedor?</label>
                    <select className="form-control" id="Kind">
                        <option>Comprador</option>
                        <option>Proveedor</option>
                    </select>
                    <small id="Kind" className="form-text text-muted">Escoger cuenta que desea</small>
                </div>
                <div className="form-group mt-2">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                    <small id="exampleInputPassword1" className="form-text text-muted">ejm: hola123</small>
                </div>
                <button type="submit" className="btn btn-primary form-control mt-4">Ingresar</button>
            </form>
        </Register>

    )
}

export default Register
