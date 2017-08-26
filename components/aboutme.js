import React, { Component } from 'react'
import styled from 'styled-components'
import { fontFamilyHeading } from '../core/styled'

const Container = styled.div`
  background: #553E6E;
  width: calc(100% - 160px);
  padding: 80px;
  text-align: center;

  @media (max-width: 1190px) {
    width: calc(100% - 40px);
    padding: 50px 20px;
    padding-bottom: 70px;
  }

  ${this} > h1 {
    color: white;
    margin: 0;
    font-weight: 300;
    font-size: 25px;
    ${fontFamilyHeading}

    @media (min-width: 1300px) {
      width: 900px;
      margin: auto auto;
    }

    @media (max-width: 1190px) {
      font-size: 20px;
    }
  }

  ${this} > a {
    color: white;
    font-family: sans-serif;
    display: block;
    padding-top: 50px;
    text-decoration: none;

    &:hover {
      color: #B483EA;
    }

    ${this} > i {
      margin-right: 7px;
    }

    @media (max-width: 1190px) {
      padding-top: 30px;
    }
  }
`

export default class extends Component {
  render(){
    return(
      <Container>
        <h1>{`Hi! I'm Chun Rapeepat, Nice to meet you here. I'm the one who loved in computer such as Web Technology, Machine Learning, etc. and also interested in Mathematic, StartUp & Bussiness too.`}</h1>
        <a target='_blank' href='https://facebook.com/chun42'><i className="zmdi zmdi-facebook-box"></i> FIND CHUN RAPEEPAT ON FACEBOOK</a>
      </Container>
    )
  }
}
