import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    font-family: sans-serif;
    font-weight: bold;

    & > div {
        width: 100%;
        height: 50px;
        color: #6A1B9A;
        cursor: pointer;

        & > span {
            position: absolute;
            display: inline-block;
            z-index: 99999;
            padding: 18px;
        }
    }

    & > div:nth-child(${props => props.position + 2}) {
        color: #333;
    }

    & > div:hover {
        color: #333;
    }
`

const Selection = styled.div`
    position: absolute;
    width: 100%;
    height: 50px;
    background: white;
    z-index: 99;
    box-shadow: 0 2px 4px rgba(50,50,93,.1);
    border-radius: 3px;
    transition: transform 0.2s cubic-bezier(.165,.84,.44,1);
`

export default class extends Component {
    state = {
        position: 0,
    }

    updatePosition(position) {
        this.setState({ position })
    }

    render() {
        return (
          <Container position={this.state.position}>
              <Selection style={{'transform': `translateY(${this.state.position}00%)`}}/>
              <div onClick={() => this.updatePosition(0)}><span>COMPUTER SKILLS</span></div>
              <div onClick={() => this.updatePosition(1)}><span>OTHER SKILLS</span></div>
              <div onClick={() => this.updatePosition(2)}><span>INTERESTED IN</span></div>
          </Container>
        )
    }
}
