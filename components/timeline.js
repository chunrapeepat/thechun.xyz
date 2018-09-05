import React, { Component } from 'react'
import styled from 'styled-components'
import Ink from 'react-ink'
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
          <span>Got the first personal computer and I loved it until then.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2010 - 2011</span>Made a YouTube Channel<div></div></h2>
          <span>Making a YouTube channel with my brothers. This made me learn a lot about how to do effect on the video.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2011</span>Middle School<div></div></h2>
          <span>Started studying primary school at Bodindecha 2 school.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2012</span>Started Programming Experience<div></div></h2>
          <span>I started first programming experience when I was 14 years old with PHP, Of course, I loved it. Then I started learning more in CSS, Java & Javascript</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2014 - 2015</span>Run a VPS Bussiness<div></div></h2>
          <span>I had a pretty much strong knowledge about how to open Minecraft Server. I decided to make my own business named MineShare - A VPS services - with my own budget, and 6 months later this was shutdown.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2015 - 2016</span>Web Developer Freelancer<div></div></h2>
          <span>In 2015 - 2016, I am a freelancer in web development. I made a Facebook fanpage and made a lot of websites such as VPS service website, webshop (web application) and more. I make a lot of money from this.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2016</span>NoobProgramming YouTube Channel<div></div></h2>
          <span>{`Making my new YouTube channel named NoobProgramming. I created this for a people who just started in computer programming and doesn't know how to go.`}</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2016</span>Torkla Project by SCB Foundation<div></div></h2>
          <span>{`Fortunately, My friend at my middle school invited me to run a project (Our darkest night Project) with him. In Tokla camp, I learned a lot from it. I learn how to do project management, UX, UI, I learned how to present and The most important is I met a variety of people who loved in what they did.`}</span>
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
          <h2><span>2017</span>Organize Stupid Hackathon Thailand<div></div></h2>
          <span>Organize a Stupid Hackathon event at NabLab Bangkok, Thailand. with theme: Make stuff that no one needs and make terrible ideas come true!</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2017</span>KU-NAVI Project<div></div></h2>
          <span>KU-NAVI is the web application that can helps you find place, location & bus-line in college based on QRCode poster.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2017</span>Internship at Acourse.io<div></div></h2>
          <span>Software development internship traning at Acourse.io (e-learning online platform in cheap price), This made me learn a lot about Golang, Github and how to working with the team.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2017</span>Teacher Assistant @CodeCampTH<div></div></h2>
          <span>CodeCampTH (at Software Park) is a developer bootcamp that teaching web programming technologies & tools. I got an opportunity to work on this for 5 days and that earn me for 5,000 THB (approx 155$).</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2017</span>KU Grade Report Beautifier<div></div></h2>
          <span>A grade report beautifier web-application for all Kasetsart University students. our goal is to make a report more beautiful, readable and simple than the old one. See this project on my Github :)</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2018</span>Young Webmaster Camp 15<div></div></h2>
          <span>HNY 2018 with the greatest web camp. YWC is a webmaster camp that separates all candidates into 4 fields (programming, marketting, design, content). I was in programming field and working on #RARTY project.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2018</span>Organize Junior Webmaster Camp #10<div></div></h2>
          <span>Organize Junior Webmaster Camp: Nextstep Web Thai (JWCx) as Web Developer, Teacher in programming field and Techniques with 30+ friends from YWC.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2018</span>Attended Startup Thailand Hackathon<div></div></h2>
          <span>Startup Thailand is the biggest startup event in Asia. so I decided to attend hackathon with the idea about the application to pre-order food from food-center and we call it `fastfood`.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2018</span>Attended KU Startup Bootcamp #2<div></div></h2>
          <span>KU Startup Bootcamp is a startup camp hosted by KU startup club. My team came with the idea of smart farming service and we call it `agriservice`, and finally, my team got the first prize :P</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2018</span>Attended Techsauce Global Summit 2018<div></div></h2>
          <span>I'd have an opportunity to get into Techsauce which is the largest tech event in Asia at Centara Grand Bangkok. There are so many startup booths and talking stage which mostly talk about Blockchain & AI.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2018</span>Organize Stupid Hackathon Thailand #2<div></div></h2>
          <span>Attended Stupid Hackathon #2 at LINK co-working space as both candidates and organizer. This times we reach over 100 candidates and get more sponsors than before. It was very fun and I made a lot of friends there.</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2018</span>Attended Young Startup Leader Camp<div></div></h2>
          <span>Young startup leader camp by YEAH. Team building, Leadership, Startup Community & Nice Workshop</span>
        </Card>

        <Card>
          <Ink />
          <h2><span>2018</span>Founded Abacuz Developer Group<div></div></h2>
          <span>Abacuz Developer Group is the developer club at Kasetsart University. (Community, knowledge, Experience)</span>
        </Card>

      </Container>
    )
  }
}
