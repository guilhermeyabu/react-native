/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView, Dimensions, FlatList } from 'react-native';
import { AppText } from './styles';
import Person from './Person';

export const deviceWidth = Dimensions.get('screen').width;

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      people: []
    }
  }

  async componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(response => response.json())
      .then(responseJson => this.setState({ people: responseJson }))
      .catch(e => {
        console.warn('Não foi possível carregar as fotos: ' + e);
        this.setState({ status: 'ERRO' })
      });
  }

  render() {
    return (
      <>
        <SafeAreaView>
          <AppText>Yabugram</AppText>
          <FlatList style={{marginBottom: 60}}
            keyExtractor={item => item.id}
            data={this.state.people}
            renderItem={({ item }) => <Person person={item} />}
          />
        </SafeAreaView>
      </>
    );
  }
}
