import React, { Component } from 'react'
import styled from 'styled-components'
import { fontFamilyHeading } from '../core/styled'

const Container = styled.div`
  width: calc(100% - 60px);
  display: block;
  background: #444;
  color: #ddd;
  padding: 30px;
  font-family: sans-serif;
  text-align: center;

  ${this} > a {
    display: inline-block;
    color: white;
    margin-bottom: 12px;
    font-size: 25px;
    transition: 0.2s;
    padding: 0 10px;
    &:hover {
      color: white;
    }
  }
`

export default class extends Component {
  render(){
    return(
      <Container>
        <a href="https://facebook.com/chun42" target="_blank"><i className="zmdi zmdi-facebook-box"></i></a>
        <a href="https://github.com/chunza2542" target="_blank"><i className="zmdi zmdi-github"></i></a>
        <a href="https://www.linkedin.com/in/chun-r-0a67ab134/" target="_blank"><i className="zmdi zmdi-linkedin-box"></i></a>
        <br/>Made by Chun Rapeepat, 2017.
      </Container>
    )
  }
}
