import React from 'react';
import styled from 'styled-components';

const Login = () => {

    const Login = styled.div`

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

    const [datos,getDatos] = ([]);

    

    return (

            <Login clasName="row">
                <form className="col-4" onChange={getDatos()}>
                    <Titulo>Login</Titulo>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Correo</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">ejm: carlos@gmail.com</small>
                    </div>
                    <div className="form-group mt-3">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                        <small id="exampleInputPassword1" className="form-text text-muted">ejm: hola123</small>
                    </div>
                    <button type="submit" className="btn btn-primary form-control mt-4">Ingresar</button>
                </form>
            </Login>

    )
}

export default Login
