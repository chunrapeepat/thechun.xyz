import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  z-index: 999999999;
  background: black;
  text-align: center;
  
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  & > img {
    width: 500px;
    margin-top: 70px;
  }
  
  & > div {
    color: red;
    font-size: 50px;
    margin-top: 70px;
    font-family: sans-serif;
  }
  
  & > span {
    font-family: sans-serif;
    font-size: 18px;
    color: #555;
    display: block;
    margin-top: 20px;
    cursor: pointer;
  }
`

export default class extends Component {
  render(){
    return(
      <Container>
        <img src="https://orig00.deviantart.net/b7bd/f/2012/156/6/9/go_on_a_diet__nyan_cat__by_chinzapep-d52ctte.gif" alt="Hacker"/>
        <div>
          THIS SITE HAS BEEN HACKED!!!
        </div>
        <span>Hacked by Chun Rapeepat</span>
      </Container>
    )
  }
}
