import React from 'react';
import styled from 'styled-components';

const PerfilProduct = () => {

    const Container = styled.div`
        height: 90vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F3F3F3;
    `;

    const Img = styled.div`
        height: 70vh;
        width: 40%;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const Info = styled.div`
    height: 70vh;
    width: 40%;
    background-color: #F0FFFF;
    `;

    return (
        <Container>
            <Img>
                <p>aqui va la imagen</p>
            </Img>
            <Info>
                <h3>Casaca de invierno para hombre</h3>
                <p>Descripción</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, 
                    animi sit. Molestiae odio consequuntur, ratione, dicta esse ea velit, 
                    numquam repudiandae placeat corrupti deserunt iste temporibus excepturi 
                    culpa praesentium cumque?</p>
                <h3>$100</h3>
                <p>Cantidad minima</p>
                <p>Agregar al carrito</p>
            </Info>
        </Container>
    )
}

export default PerfilProduct;
