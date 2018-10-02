import React, { Component } from 'react'
import styled from 'styled-components'
import Ink from 'react-ink'

import timelines from "../config/timeline"
import { fontFamilyHeading } from '../core/styled'

const Container = styled.div`
  width: 100%;
  background: white;
  overflow: hidden;
  position: relative;
  padding: 50px 0;

  @media (max-width: 1190px) {
    padding: 30px 0;
  }
`

const Card = styled.div`
  width: 600px;
  background: #fafafa;
  margin: auto auto;
  cursor: pointer;
  transition: 0.3s;
  padding: 20px;
  margin-bottom: 20px;
  position: relative;

  @media (max-width: 1190px) {
    width: calc(100% - 60px);
    margin-bottom: 15px;
  }

  &:hover {
    -webkit-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.22);
    -moz-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.22);
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.22);
    transform: scale(1.05);
    z-index: 99999999;
  }

  ${this} > span {
    color: #555;
    font-family: sans-serif;
    font-size: 18px;
  }

  ${this} > h2 {
    margin: 0;
    ${fontFamilyHeading}
    ${this} > span {
      display: inline-block;
      padding-right: 15px;
      margin-right: 15px;
      border-right: 1px solid #ccc;
    }
    ${this} > div {
      display: block;
      margin-top: 10px;
      margin-bottom: 20px;
      width: 100px;
      border: 1px solid #333;
    }
  }
`

export default class extends Component {
  render(){
    return(
      <Container>
        {timelines.map((timeline, i) => {
          return (
            <Card key={i}>
              <Ink />
              <h2><span>{timeline.year}</span>{timeline.header}<div></div></h2>
              <span>{timeline.content}</span>
            </Card>
          )
        })}
      </Container>
    )
  }
}
