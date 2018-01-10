import React, { Component } from 'react'
import styled from 'styled-components'
import { fontFamily, padding, fontFamilyHeading } from '../core/styled'

const SidebarMenuContainer = styled.div`
  display: flex;

  ${this} > div:nth-child(1) {
    width: 250px;
    position: fixed;
    height: 100vh;
    background-color: black;

    @media (max-width: 1190px) {
      display: none;
    }
  }

  ${this} > div:nth-child(2) {
    flex: 1;
    margin-left: 250px;
    display: block;
    overflow: hidden;

    @media (max-width: 1190px) {
      margin-left: 0;
    }
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

const ResponsiveMenu = styled.div`
  margin-bottom: 50px;

  ${this} > h2 {
    width: calc(100% - 50px);
    position: fixed;
    z-index: 99999999999;
    background: black;
    color: white;
    display: block;
    padding: 15px 25px;
    margin: 0;
    cursor: pointer;
    font-size: 20px;
    ${fontFamilyHeading}

    ${this} > div {
      float: right;
    }
  }

  ${this} > div {
    position: fixed;
    width: calc(100% - 50px);
    height: calc(100vh - 95px);
    background: #333;
    z-index: 999999999;
    transition: 0.5s;
    padding: 25px;
    padding-top: 70px;

    ${this} > a {
      display: block;
      color: white;
      text-decoration: none;
      font-family: sans-serif;
      color: #ddd;
      font-size: 18px;
      padding: 10px 0;
    }
  }

  @media (min-width: 1190px){
    display: none;
  }
`

export default class extends Component {

  constructor(){
    super()
    this.state = {
      top: '-100vh',
    }
  }

  toggleMenu(){
    if(this.state.top === '-100vh'){
      this.setState({ top: '0' })
    }else{
      this.setState({ top: '-100vh' })
    }
  }

  render(){
    return(
      <SidebarMenuContainer>
        <div>
          <MainHeading onClick={() => this.props.lightFunction()}>THE CHUN</MainHeading>
          <MenuContainer>
            <a style={{'color': 'white'}} href="#">ABOUT ME</a>
            <a target="_blank" href="https://medium.com/chunza2542">MEDIUM BLOG</a>
            <a target="_blank" href="https://github.com/chunza2542">GITHUB PROFILE</a>
            <a target="_blank" href="https://twitter.com/chunza2542">TWITTER PROFILE</a>
            <a target="_blank" href="https://facebook.com/chun42">FACEBOOK PROFILE</a>
            <a target="_blank" href="https://www.linkedin.com/in/chun-r-0a67ab134/">LINKED-IN PROFILE</a>
          </MenuContainer>
        </div>
        <div>
          <ResponsiveMenu>
            <h2 onClick={() => this.toggleMenu()}>
              THECHUN.XYZ
              <div>
                <i className="zmdi zmdi-menu"></i>
              </div>
            </h2>
            <div style={{'top': this.state.top}}>
              <a style={{'color': 'white'}} href="#">ABOUT ME</a>
              <a target="_blank" href="https://medium.com/chunza2542">MEDIUM BLOG</a>
              <a target="_blank" href="https://github.com/chunza2542">GITHUB PROFILE</a>
              <a target="_blank" href="https://twitter.com/chunza2542">TWITTER PROFILE</a>
              <a target="_blank" href="https://facebook.com/chun42">FACEBOOK PROFILE</a>
              <a target="_blank" href="https://www.linkedin.com/in/chun-r-0a67ab134/">LINKED-IN PROFILE</a>
            </div>
          </ResponsiveMenu>
          {this.props.children}
        </div>
      </SidebarMenuContainer>
    )
  }

}
