import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  z-index: 99999999;
  background-color: rgba(0,0,0,0.8);
  color: white;
  font-size: 47px;
  text-align: center;
  bottom: 15px;
  cursor: pointer;
  right: 15px;
  width: 55px;
  height: 55px;
`

export default class extends Component {

  constructor(){
    super()
    this.state = {
      display: 'none'
    }
  }

  componentDidMount(){
    if(window != undefined){
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }
  }

  componentWillUnmount(){
    if(window != undefined){
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
  }

  handleScroll(event){
    if(window != undefined){
      if(event.srcElement.body.scrollTop >= window.outerHeight){
        this.setState({ display: 'block' })
      }else{
        this.setState({ display: 'none' })
      }
    }
  }

  gotoTop(){
    if(window != undefined){
      const scrollHeight = window.scrollY,
            scrollStep = Math.PI / ( 750 / 15 ),
            cosParameter = scrollHeight / 2;
      var scrollCount = 0,
          scrollMargin,
          scrollInterval = setInterval( function() {
              if ( window.scrollY != 0 ) {
                  scrollCount = scrollCount + 1;
                  scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                  window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
              }
              else clearInterval(scrollInterval);
          }, 15 );
    }
  }

  render(){
    return(
      <Container style={{'display': this.state.display}} onClick={() => this.gotoTop()}>
        <i className="zmdi zmdi-chevron-up"></i>
      </Container>
    )
  }
}
