import React, { Component } from 'react'
import styled from 'styled-components'
import { Heading } from '../core/styled'

const OuterContainer = styled.div`
    box-sizing: border-box;
    border-top: 10px solid #222;
    background: #f1f1f1;
`

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
        <OuterContainer>
          <Container>
            <ContentSection>
              <center>
                <Macbook src='/static/macbook.png' />
              </center>
              <br/>
              <Heading>Personal Skills</Heading>
              <ContentSkillContainer>
                <h2>PROGRAMMING SKILLS</h2>
                <span>ReactJS, Golang, NodeJS, NextJS, HTML5 & CSS, Java, C Programming, Docker, Kubernates, Vim, Github, Unix, Computer Science</span>
              </ContentSkillContainer>
              <ContentSkillContainer>
                <h2>EXTRA SKILLS</h2>
                <span>Blog Writing, Communities Making, Mathematic, Algorithm, Self Development, Badminton, Running, Guitar Playing</span>
              </ContentSkillContainer>
              <ContentSkillContainer>
                <h2>INTERESTED IN</h2>
                <span>Deep Learning, Blockchain, Books, Web Technology, Design, People, Music, History, Communities</span>
              </ContentSkillContainer>
            </ContentSection>
            <SideMacbook src='/static/macbook.png' />
          </Container>
        </OuterContainer>
    )
  }
}
