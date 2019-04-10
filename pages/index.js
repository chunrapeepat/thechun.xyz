import React from 'react'
import styled from 'styled-components'

import SidebarMenu from '../components/sidebarmenu'
import AboutmeSection from '../components/aboutme'
import AbilitySection from '../components/ability'
import FooterSection from '../components/footer'
import TimelineSection from '../components/timeline'
import IntroductionSection from '../components/introduction'

import GotoTop from '../components/gototop'
import ComingSoon from "../components/ComingSoon"

const Container = styled.div`
  filter: grayscale(${props => props.scale});
  transition: 0.3s;
`

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      scale: '0%'
    }
  }

  toggleGrayscale() {
    if (this.state.scale === '0%') {
      this.setState({ scale: '100%' })
    } else {
      this.setState({ scale: '0%' })
    }
  }

  render(){
    return(
      <div>
        <ComingSoon />
        <Container
          scale={this.state.scale}>
          <SidebarMenu lightFunction={() => this.toggleGrayscale()}>
            <GotoTop />
            <IntroductionSection />
            <AboutmeSection />
            <AbilitySection />
            <TimelineSection />
            <FooterSection />
          </SidebarMenu>
        </Container>
      </div>
    )
  }
}
