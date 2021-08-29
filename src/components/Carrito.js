import React from 'react'
import styled from 'styled-components';

const Carrito = () => {

    const Container = styled.div`
    display: flex;
    height: 90vh;
    width: 100%;
    background-color: #F3F3F3;
    align-items: center;
    justify-content: center;
    `;

    const Carrito = styled.div`
    height: 80vh;
    width: 60%;
    background-color: white;
    `;

    const Pasarela = styled.div`
    width: 30%;
    height: 80vh;
    background-color: #F3FFFF;
    `;

    return (
        <Container>
            <Carrito>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">SubTotal</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Casaca</td>
                            <td>100
                            <button>+</button>
                            <button>-</button>
                            </td>
                            <td>$1000</td>
                            <td><button>Eliminar</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Pantalon</td>
                            <td>500 
                            <span><button> + </button></span>
                            <span><button> - </button></span>
                            </td>
                            <td>$30000</td>
                            <td><button>Eliminar</button></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Gorro</td>
                            <td>400
                            <button>+</button>
                            <button>-</button>
                            </td>
                            <td>$6000</td>
                            <td><button>Eliminar</button></td>
                        </tr>
                    </tbody>
                </table>
            </Carrito>
            <Pasarela>
                <h1>Pago</h1>
                <p>Casaca subTotal: $1000</p>
                <p>Casaca subTotal: $30000</p>
                <p>Casaca subTotal: $6000</p>
                <p>----------------------------------------------</p>
                <h1> Total a pagar:</h1>
                <h3>$37000</h3>
                <p>----------------------------------------------</p>
                <h3>Pagos con:</h3>
                <p>Paypal</p>
                <button>PAGAR</button>
            </Pasarela>
        </Container>
    )
}

export default Carrito
