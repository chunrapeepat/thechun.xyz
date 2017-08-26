import React, { Component } from 'react'
import styled from 'styled-components'
import { fontFamily, fontFamilyHeading } from '../core/styled'

const Container = styled.div`
  width: 100%;
  display: block;
  height: 300px;
  background: url(/static/wallpaper.jpg) no-repeat bottom center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  ${this} > h1 {
    margin: 0;
    text-align: center;
    color: white;
    padding-top: 100px;
    font-size: 45px;
    ${fontFamily}

    @media (max-width: 1190px) {
      font-size: 30px;
      padding-top: 70px;
    }
  }

  ${this} > span {
    color: #eee;
    margin-top: 10px;
    display: block;
    font-size: 25px;
    text-align: center;
    ${fontFamilyHeading}

    @media (max-width: 1190px) {
      font-size: 18px;
    }
  }

  @media (max-width: 1190px) {
    height: 250px;
  }
`


export default class extends Component {
  render(){
    return(
      <Container>
        <h1>Make The World Suck Less</h1>
        <span>{`Make everything come true with two hands and one computer.`}</span>
      </Container>
    )
  }
}
