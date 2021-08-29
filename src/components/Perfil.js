import React from 'react';
import styled from 'styled-components';

const Perfil = () => {

    const Row = styled.div`
    height: 100vh;
    display: flex;
    width: 80%;
    flex-wrap:wrap;
    padding-top: 10px;
    `;

    const Card = styled.div`
    height: 600px;
    width: 500px;
    border-style: solid;
    border-color: #f9f9f9;
    background-color: #f3f3f3;
    margin:auto;

    @media (max-width: 1500px){
        width: 400px;
    }
    
    @media (max-width: 1200px){
        width: 300px;
    }
    `;

    return (
        <Row>
            <Card>
                <h2>Foto del perfil</h2>
            </Card>
            <Card>
                <h2>Información</h2>
            </Card>
        </Row>
    )
}


export default Perfil;
