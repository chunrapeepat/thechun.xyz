import React, { Component } from 'react'
import styled from 'styled-components'
import { fontFamily, padding } from '../core/styled'

const SidebarMenuContainer = styled.div`
  display: flex;
  height: 100vh;
  ${this} > div:nth-child(1) {
    width: 250px;
    background-color: black;
  }
  ${this} > div:nth-child(0) {
    flex: 1;
  }
`

const MainHeading = styled.h1`
  margin: 0;
  color: white;
  cursor: pointer;
  ${fontFamily}
  ${padding}
`

const MenuContainer = styled.div`
  font-family: sans-serif;
  display: block;
  ${padding}
  ${this} > a {
    color: #aaa;
    transition: 0.3s;
    display: block;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: 25px;
    &:hover {
      color: white;
    }
  }
`

export default class extends Component {

  render(){
    return(
      <SidebarMenuContainer>
        <div>
          <MainHeading>THE CHUN</MainHeading>
          <MenuContainer>
            <a style={{'color': 'white'}} href="#">ABOUT ME</a>
            <a target="_blank" href="#">MEDIUM BLOG</a>
            <a target="_blank" href="https://github.com/chunza2542">GITHUB PROFILE</a>
            <a target="_blank" href="https://facebook.com/chun42">FACEBOOK PROFILE</a>
            <a target="_blank" href="https://www.youtube.com/channel/UCIorcrKl6IpDIiB_5RfYqrg">YOUTUBE CHANNEL</a>
          </MenuContainer>
        </div>
        <div>
          {this.props.children}
        </div>
      </SidebarMenuContainer>
    )
  }

}
