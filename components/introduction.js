import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'
import { fontFamily, fontFamilyHeading } from '../core/styled'

const slideAnimation = keyframes`
    0%{
        background-position: top;
    }
    100%{
        background-position: bottom;
    }
`

const MainContainer = styled.div`
    position: relative;
    overflow: hidden;
`

const SlideBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 300px;
    background: red;
    z-index: 999;
    background: url(/static/wallpaper.jpg) repeat-x;
    background-size: 100% auto;

    @media (min-width: 1190px) {
      animation: ${slideAnimation} 40s linear infinite;
      animation-direction: alternate;
    }
`

const Container = styled.div`
  width: 100%;
  display: block;
  height: 300px;
  position: relative;
  z-index: 9999;
  overflow: hidden;

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
        <MainContainer>
            <SlideBackground />
            <Container>
              <h1>Make The World Suck <span style={{'cursor': 'pointer'}} onClick={() => this.toggleActive()}>{this.state.active ? 'Less' : 'More'}</span></h1>
              <span>{`Full-stack developer, Solving problem & Making communities.`}</span>
            </Container>
        </MainContainer>
    )
  }
}
