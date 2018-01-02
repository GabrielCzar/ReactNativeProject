import React, { Component } from 'react';

import HomePage from './pages/HomePage';
import AnimeViewPage from './pages/AnimeViewPage'

import { StackNavigator } from 'react-navigation';

export const SimpleApp = StackNavigator({
  Home: { screen: HomePage },
  AnimeView: { screen: AnimeViewPage },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

