import React from 'react';
import styled from 'styled-components';

const First = () => {

    const Row = styled.div`
    height: 100vh;
    display: flex;
    width: 80%;
    flex-wrap:wrap;
    padding-top: 80px;
    `;

    const Card = styled.div`
    height: 300px;
    width: 500px;
    border-style: solid;
    border-color: #f9f9f9;
    background-color: #f3f3f3;
    margin:  20px auto;

    @media (max-width: 1500px){
        width: 400px;
    }
    
    @media (max-width: 1200px){
        width: 300px;
    }
    `

    return (
        <Row>
            <Card>
                <h2>Ventas Totales</h2>

            </Card>
            <Card>
                <h2>Beneficios</h2>
            </Card>
            <Card>
                <h2>Producto mas destacado</h2>
            </Card>
            <Card>
                <h2>Mensajes nuevos</h2>
            </Card>
        </Row>
    )
}

export default First;
