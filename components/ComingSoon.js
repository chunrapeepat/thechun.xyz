import React from 'react';
import styled from "styled-components";
import ThreeLogo from './ThreeLogo';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    z-index: 999999;
`

const Visit = styled.div`
    position: absolute;
    left: 50%;
    bottom: 10vh;
    transform: translateX(-50%);
    color: white;
    cursor: pointer;
    font-family: sans-serif;
    font-size: 1.8rem;
    color: #ccc;
    text-align: center;
    width: 100vw;
    font-family: 'Press Start 2P', cursive;

    @media (max-width: 1190px) {
        font-size: 1.2rem;
    }
`

class ComingSoon extends React.Component {
    state = {
        show: true,
    }

    render() {
        const {show} = this.state;

        return (
            <Container style={{display: show ? "block" : "none"}}>
                <ThreeLogo /> 
                <Visit onClick={() => this.setState({show: false})}>CLICK TO ENTER OLD-SITE</Visit>
            </Container>
        )
    }
}

export default ComingSoon;