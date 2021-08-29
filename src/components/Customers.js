import React from 'react';
import styled from 'styled-components';

const Customers = () => {

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
                <h5>Cliente1</h5>
            </Card>
            <Card>
                <h5>Cliente2</h5>
            </Card>
            <Card>
                <h5>Cliente3</h5>
            </Card>
            <Card>
                <h5>Cliente4</h5>
            </Card>
            <Card>
                <h5>Cliente5</h5>
            </Card>
            <Card>
                <h5>Cliente6</h5>
            </Card>
            <Card>
                <h5>Cliente7</h5>
            </Card>
            <Card>
                <h5>Cliente8</h5>
            </Card>
            <Card>
                <h5>Cliente9</h5>
            </Card>
            <Card>
                <h5>Cliente10</h5>
            </Card>
            <Card>
                <h5>Cliente11</h5>
            </Card>
            <Card>
                <h5>Cliente12</h5>
            </Card>
        </Row>
    )
    }

export default Customers;
