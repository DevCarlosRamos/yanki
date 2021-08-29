import React from 'react';
import styled from 'styled-components';

const ListProduct = () =>{

const Row = styled.div`
height: 100vh;
display: flex;
width: 80%;
flex-wrap:wrap;
padding-top: 80px;
`;

const Card = styled.div`
height: 150px;
width: 300px;
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
            <h5>Producto1</h5>
        </Card>
        <Card>
            <h5>Producto2</h5>
        </Card>
        <Card>
            <h5>Producto3</h5>
        </Card>
        <Card>
            <h5>Producto4</h5>
        </Card>
        <Card>
            <h5>Producto5</h5>
        </Card>
        <Card>
            <h5>Producto6</h5>
        </Card>
        <Card>
            <h5>Producto7</h5>
        </Card>
        <Card>
            <h5>Producto8</h5>
        </Card>
        <Card>
            <h5>Producto9</h5>
        </Card>
        <Card>
            <h5>Producto10</h5>
        </Card>
        <Card>
            <h5>Producto11</h5>
        </Card>
        <Card>
            <h5>Producto12</h5>
        </Card>
    </Row>
)
}

export default ListProduct;
