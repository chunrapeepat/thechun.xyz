import React, { Component } from 'react'
import styled from 'styled-components'
import Ink from 'react-ink'

import SkillSidebar from './element/SkillSidebar'
import { fontFamilyHeading } from '../core/styled'

const Container = styled.div`
  background: #F4EDF5;
  margin-top: 30px;
  width: 100%;

  @media (max-width: 1190px) {
      margin-top: 0px;
  }
`

const Padding = styled.div`
    padding: 50px 230px;

    @media (max-width: 1500px) {
        padding: 50px 80px;
    }
`

const Flex = styled.div`
    display: flex;

    & > div:nth-child(1) {
        flex: 1;
        background: green;
    }
    & > div:nth-child(2) {
        width: 250px;
        margin-left: 70px;
    }
`

export default class extends Component {
  render(){
    return(
      <Container>
          <Padding>
              <Flex>
                  <div>
                      this
                  </div>
                  <div>
                      <SkillSidebar />
                  </div>
              </Flex>
          </Padding>
      </Container>
    )
  }
}
