import React from 'react';
import styled from 'styled-components';
import Customers from './Customers';
import First from './First';
import ListProduct from './ListProduct';
import Messages from './Messages';
import Perfil from './Perfil';
import Product from './Product';

const Dashboard = () => {

    const Container = styled.div`
        display: flex;
        justify-content: space-between;
        
    `;

    const Menu = styled.div`
        height: 100vh;
        min-width: 300px;
        width: 20%;
        background-color: #F3F3F3;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        `;

    const Header = styled.div`
        width: 300px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const Section = styled.div`
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    `;

    const Button = styled.button`
        border-style:none;
    `;


    return (
        <Container>
        <Menu>
            <Header>
                <h1>Yanki</h1>
            </Header>
            <Section>
                <Button>
                    <h5>Home</h5>
                </Button>
                <Button>
                    <p>Inico</p>
                </Button>
                <Button>
                    <p>Mi Perfil</p>
                </Button>
            </Section>
            <Section>
                <Button>
                    <h5>Productos</h5>
                </Button>
                <Button>
                    <p>Publicar</p>
                </Button>
                <Button>
                    <p>Ver productos</p>
                </Button>

            </Section>
            <Section>
                <Button>
                    <h5>Ventas</h5>
                </Button>
                <Button>
                    <p>Mensajes</p>
                </Button>
                <Button>
                    <p>Clientes</p>
                </Button>

            </Section>
            <Section>
                <Button>
                    <h5>Cuenta</h5>
                </Button>
                <Button>
                    <p>Salir</p>
                </Button>
            </Section>
        </Menu>

        <Product/>
        </Container>
    )
}

export default Dashboard;