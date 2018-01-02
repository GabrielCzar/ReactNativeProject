import React, { Component } from 'react'


import { 
    Header
  , Body
  , Title
  } from 'native-base'; 

export default class HeaderComponent extends Component {

    render () {
        return (
            <Header>
              <Body>
                <Title> { this.props.title } </Title>
              </Body>
            </Header>
        )
    }
}