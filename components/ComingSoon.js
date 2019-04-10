import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    z-index: 999999;
`

class ComingSoon extends React.Component {
    render() {
        return (
            <Container>
                Comming Soon
            </Container>
        )
    }
}

export default ComingSoon;