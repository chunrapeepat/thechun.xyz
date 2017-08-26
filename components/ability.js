import React, { Component } from 'react'
import styled from 'styled-components'
import { Heading } from '../core/styled'

const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 999;
  height: 600px;
  margin-top: -25px;

  @media (min-width: 1440px){
    width: 1140px;
    margin: auto auto;
    margin-top: -35px;
  }

  @media (max-width: 1190px) {
    height: auto;
    padding-bottom: 30px;
  }
`

const Macbook = styled.img`
  width: 90%;
  margin-top: -50px;
  margin-bottom: 20px;

  @media (min-width: 1190px) {
    display: none;
  }
`

const SideMacbook = styled.img`
  position: absolute;
  right: -350px;
  width: 1000px;

  @media (max-width: 1400px) {
    right: -600px;
  }

  @media (max-width: 1190px) {
    display: none;
  }
`

const ContentSection = styled.div`
  position: absolute;
  margin-top: 30px;
  padding: 40px 80px;
  width: 470px;

  @media (max-width: 1190px) {
    position: static;
    text-align: center;
    width: calc(100% - 40px);
    padding: 20px;
  }
`

const ContentSkillContainer = styled.div`
  margin-top: 30px;
  ${this} > h2 {
    font-weight: 400;
    font-family: sans-serif;
    font-size: 20px;
  }
  ${this} > span {
    font-family: sans-serif;
    font-size: 18px;
    color: #555;
  }
`

export default class extends Component {
  render(){
    return(
      <Container>
        <ContentSection>
          <center>
            <Macbook src='/static/macbook.png' />
          </center>
          <Heading>My Personal Skill</Heading>
          <ContentSkillContainer>
            <h2>COMPUTER SKILL</h2>
            <span>PHP, Javascript, ES6 & ES7, HTML5, CSS, SQL, Java, Python, NodeJS, ExpressJS, React & Redux, React Native, MongoDB, Socket.IO, Basic Machine Learning, Docker, Basic Linux</span>
          </ContentSkillContainer>
          <ContentSkillContainer>
            <h2>ORTHER SKILL</h2>
            <span>Programming Instructor, Basic Photoshop, Minecraft, ScreenFlow, Blog Writting, Bussiness Knowledge</span>
          </ContentSkillContainer>
          <ContentSkillContainer>
            <h2>INTERESTED IN</h2>
            <span>Machine Learning & Deep Learning, StartUp, Bussiness, Mathematic, Web Technology, Design, Google, Computer Technology, Internet of Things, Operating System, Self Development, Assembly</span>
          </ContentSkillContainer>
        </ContentSection>
        <SideMacbook src='/static/macbook.png' />
      </Container>
    )
  }
}
