import React from 'react'

import SidebarMenu from '../components/sidebarmenu'
import AboutmeSection from '../components/aboutme'
import AbilitySection from '../components/ability'
import FooterSection from '../components/footer'
import TimelineSection from '../components/timeline'
import IntroductionSection from '../components/introduction'

import GotoTop from '../components/gototop'

export default class extends React.Component {

  render(){
    return(
      <div>
        <SidebarMenu>
          <GotoTop />
          <IntroductionSection />
          <AboutmeSection />
          <AbilitySection />
          <TimelineSection />
          <FooterSection />
        </SidebarMenu>
      </div>
    )
  }
}
