import React, { Component } from 'react'

import { Form, Item, Input, Label } from 'native-base'

export default class AnimeForm extends Component {
    render () {
        return (
            <Form>
                <Item floatingLabel>
                    <Label>Nome</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>Temporada</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>EpisódioNome</Label>
                    <Input />
                </Item>
                <Item floatingLabel last>
                    <Label>Mangá</Label>
                    <Input />
                </Item>
            </Form>
        )
    }
}