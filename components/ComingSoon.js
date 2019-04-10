import React from 'react';
import styled, {keyframes} from "styled-components";
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
const BlinkAnimation = keyframes`
  from {
      color: white;
  }

  to {
      color: black;
  }
`;

const Visit = styled.div`
    position: absolute;
    left: 50%;
    bottom: 10vh;
    transform: translateX(-50%);
    color: white;
    cursor: pointer;
    font-family: sans-serif;
    font-size: 1.6rem;
    color: #ccc;
    text-align: center;
    width: 100vw;
    font-family: 'Press Start 2P', cursive;

    animation: ${BlinkAnimation} 0.7s linear infinite;

    @media (max-width: 1190px) {
        font-size: 1rem;
    }
`

const Quote = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    color: #777;
    font-size: 1.4rem;
    z-index: 999;
    font-family: 'Orbitron', sans-serif;

    @media (max-width: 1190px) {
        font-size: 0.8rem;
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
                <Quote>
                    CHUN'S NEW SITE IS COMING SOON<br/>
                    UNDER CONSTRUCTION...
                </Quote>

                <ThreeLogo /> 
                <Visit onClick={() => this.setState({show: false})}>CLICK TO ENTER OLD-SITE</Visit>
            </Container>
        )
    }
}

export default ComingSoon;