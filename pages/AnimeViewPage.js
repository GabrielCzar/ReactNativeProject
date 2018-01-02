import React, { Component } from 'react'

import { Content, Container } from 'native-base'

import HeaderComponent from '../components/HeaderComponent'
import AnimeForm from '../components/AnimeForm'

export default class AnimeViewPage extends Component {
    render () {
        return (
            <Container>
                <HeaderComponent title='Animes' />
                
                <Content>
                    <AnimeForm anime={this.props.anime} />
                </Content>
            </Container>
        )
    }
}