import React, { Component } from 'react'

import { List, ListItem, Body, Text, Right, Badge } from 'native-base'

export default class ListItemComponent extends Component {



    render () {
        return (
            
            <List dataArray={this.props.itens} renderRow={
                    (item, pos) => 
                        <ListItem key={pos} >
                            <Body>
                                <Text>{ item.name }</Text>
                                
                            </Body>
                            <Right>
                            <Badge style={{ backgroundColor: 'black' }}>
                                <Text style={{ color: 'white' }}>{ item.episodio || 0 }</Text>
                            </Badge>
                            </Right>
                        </ListItem>
                }>
            </List>
        )
    }
}