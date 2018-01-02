import React, { Component } from 'react';

import { Container, Content } from 'native-base'; 

import HeaderComponent from '../components/HeaderComponent'
import ListItemComponent from '../components/ListItemComponent'

export default class Home extends Component {
    state = {
        animes: [
            {
                name: 'Boku no hero',
                temporada: 1,
                episodio: 1,
                manga: 0
            },
            {
                name: 'Naruto',
                temporada: 1,
                episodio: 700000,
                manga: 1100
            }
        ]
    };
    
    async componentDidMount() {
      //
    }

    render() {
        return (
          <Container>
            
            <HeaderComponent title='Animes'/>
            
            <Content>
                <ListItemComponent itens={this.state.animes} />
            </Content>

          </Container>
        );
      }
}