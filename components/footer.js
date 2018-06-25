import React, { Component } from 'react'
import styled from 'styled-components'
import { fontFamilyHeading } from '../core/styled'

const Container = styled.div`
  width: calc(100% - 60px);
  display: block;
  color: #666;
  padding-bottom: 50px;
  font-family: sans-serif;
  text-align: center;

  ${this} > a {
    display: inline-block;
    color: #555;
    margin-bottom: 12px;
    font-size: 25px;
    transition: 0.2s;
    padding: 0 10px;
    &:hover {
      color: #111;
    }
  }
`

const Love = styled.i`
  color: red;
  margin: 0 7px;
  cursor: pointer;
  transform: scale(1.4);

  &:hover {
    transform: scale(1.6) rotate(-15deg);
  }
`

const LoveSpan = styled.span`
  margin-left: 5px;
  margin-right: 8px;
  color: #FE1386;
  font-style: italic;
  font-weight: bold;
`

export default class extends Component {
  state = {
    isText: false
  }
  render(){
    const state = this.state
    return(
      <Container>
        <a href="https://facebook.com/chun42" target="_blank"><i className="zmdi zmdi-facebook-box"></i></a>
        <a href="https://github.com/chunza2542" target="_blank"><i className="zmdi zmdi-github"></i></a>
        <a href="https://www.linkedin.com/in/chun-r-0a67ab134/" target="_blank"><i className="zmdi zmdi-linkedin-box"></i></a>
        <br/>Made with
        {!state.isText &&
          <Love onClick={() => this.setState({isText: true})} className="zmdi zmdi-favorite"/>
        }
        {state.isText &&
          <LoveSpan>LOVE</LoveSpan>
        }
        by Chun Rapeepat, 2017 - 2018.
      </Container>
    )
  }
}
