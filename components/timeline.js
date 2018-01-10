import React, { Component } from 'react'
import styled from 'styled-components'
import Ink from 'react-ink'
import { fontFamilyHeading } from '../core/styled'

const Container = styled.div`
  width: 100%;
  background: #F6F6F6;
  overflow: hidden;
  position: relative;
  padding: 50px 0;

  @media (max-width: 1190px) {
    padding: 30px 0;
  }
`

const Card = styled.div`
  width: 600px;
  background: white;
  margin: auto auto;
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
        <Card>
          <Ink />
          <h2><span>1999</span>Start Point<div></div></h2>
          <span>I was born in Bangkok, Thailand on May 9th, 1999</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2005</span>Studied Elementary School<div></div></h2>
          <span>Started studying at Somapa 2 School.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2009</span>First Personal Computer<div></div></h2>
          <span>When I was in 5 grade, I got my first own personal computer with WindowsXP, 500GBs of hard disk and a 4GBs of RAM.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2010 - 2011</span>Made a YouTube Channel<div></div></h2>
          <span>Someday on YouTube. I watched the video posted by Fredrew. It was so fascinating. This made me learn a lot about how to do effect on the video using Adobe After Effects.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2011</span>Middle School<div></div></h2>
          <span>Studied primary school at Bodindecha 2 School. In this school I have a lot of friends with variety of background and I meet some friends who loved computers like me.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2012</span>Started Programming Experience<div></div></h2>
          <span>I started first programming experience when I was 14 years old. I started with HTML language because I make a Minecraft Server. and I wanted my own web page for promote it. Of course, I loved it. Then I started learning more in CSS, PHP & Javascript</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2014 - 2015</span>Run a VPS Bussiness<div></div></h2>
          <span>I had a pretty much strong knowledge about how to open Minecraft Server and I had a little budget. I decided to make my own business about Minecraft named MineShare. I rented a dedicated server (approx 120$ per month) with Vmware ESXI OS. then 6 months later. This business was shutdown. because I got a fucking DDOS everyday. GG T-T</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2015 - 2016</span>Web Developer Freelancer<div></div></h2>
          <span>In 2015 - 2016, I am a freelance web developer. I made a Facebook fanpage and made a lot of websites such as VPS service website, webshop (web application) and more. I make a lot of money from this.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2016</span>NoobProgramming YouTube Channel<div></div></h2>
          <span>{`I created my new YouTube channel named NoobProgramming. I created this for a people who just started in computer programming and doesn't know how to go.`}</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2016</span>Torkla Project by SCB Foundation<div></div></h2>
          <span>{`Fortunately, My friend at my middle school invited me to run a project (A video game made by Unity named Our Darkest Night) with him. In Tokla camp, I learned a lot from it. I learn how to do project management, UX, UI, I learned how to present and The most important is I met a variety of people who loved in what they did.`}</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2017</span>Go To College<div></div></h2>
          <span>Studied at Kasetsart University in Computer Science program.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2017</span>NoobProgrammer Thailand Community<div></div></h2>
          <span>{`I decided to create this group to make a young people who loves in programming more connected.`}</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2017</span>Stupid Hackathon Thailand<div></div></h2>
          <span>Organise a Stupid Hackathon event at NabLab Bangkok, Thailand. Make stuff that no one needs and make terrible ideas come true!</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2017</span>KU-NAVI Project<div></div></h2>
          <span>In Kasetsart University. I make a project with my friend call KU-NAVI (you can see on my Github). KU-NAVI is the web application that can helps you find place, location & bus line in university based on QRCode poster.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2017</span>Internship at Acourse.io<div></div></h2>
          <span>Software development internship traning at Acourse.io (e-learning online platform in cheap price), This made me learn a lot about Golang, Scrum and how to working with the team.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2017</span>Teacher Assistant @CodeCampTH<div></div></h2>
          <span>CodeCampTH (at Software Park) is a developer bootcamp that teaching web programming technologies & tools. I got an opportunity to work on this for 5 days and that earn me for 5,000 THB (approx 155$). Nice~</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2017</span>KU Grade Report Beautifier<div></div></h2>
          <span>A grade report beautifier web-application for all Kasetsart University students. our goal is to make a report more beautiful, readable and simple than the old one. See this project on my Github :)</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2018</span>Young Webmaster Camp 15<div></div></h2>
          <span>HNY 2018 with the greatest camp forever. YWC is a webmaster camp that separates all candidates into 4 sections (programming, marketting, design, content). I made a lot of friends & connections. I do a startup project with my friends called RARTY and I love it.</span>
        </Card>

      </Container>
    )
  }
}
