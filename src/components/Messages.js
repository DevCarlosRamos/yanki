import React from 'react';
import styled from 'styled-components';

const Messages = () => {

    const Container = styled.div`
    width: 80%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

    const Row = styled.div`
    width: 70%;
    display: grid;
    height: 80vh;
    grid-template-rows: repeat(8,auto);
    grid-template-columns: repeat(5,auto);
    `;

    const Card = styled.div`
    border-color: #000;
    background-color: #f3f3f3;
    border-style: solid;

    `;

    const Principal = styled.div`

    grid-area: 1 / 2 / 9 / 6;
    background-color: #f3f3f3;
    `;

    return (
        <Container>
            <Row>

                <Card>
                    <h2>Mensanje1</h2>
                </Card>
                <Card>
                    <h2>Mensanje2</h2>
                </Card>
                <Card>
                    <h2>Mensanje3</h2>
                </Card>
                <Card>
                    <h2>Mensanje4</h2>
                </Card>
                <Card>
                    <h2>Mensanje5</h2>
                </Card>
                <Card>
                    <h2>Mensanje6</h2>
                </Card>
                <Card>
                    <h2>Mensanje7</h2>
                </Card>
                <Card>
                    <h2>Mensanje8</h2>
                </Card>

                <Principal>
                    <h3>Chat</h3>
                </Principal>
            </Row>
        </Container>
    )
}

export default Messages;
