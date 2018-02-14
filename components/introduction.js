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

    @media (max-width: 1190px) {
      font-size: 40px;
      padding-top: 40px;
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
      font-size: 22px;
      ${fontFamilyHeading}
    }
  }

  @media (max-width: 1190px) {
    height: 250px;
    ${fontFamilyHeading}
  }
`


export default class extends Component {

  constructor(){
    super()
    this.state = {
      active: true
    }
  }

  toggleActive(){
    this.setState({ active: !this.state.active })
  }

  render(){
    return(
      <Container>
        <h1>Make The World Suck <span style={{'cursor': 'pointer'}} onClick={() => this.toggleActive()}>{this.state.active ? 'Less' : 'More'}</span></h1>
        <span>{`Full-stack developer, Solving problem & Making communities.`}</span>
      </Container>
    )
  }
}
