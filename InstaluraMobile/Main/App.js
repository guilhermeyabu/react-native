/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, View, Text, Image, Dimensions, FlatList, StyleSheet } from 'react-native';
import { ProfilePicture, UserInfo, UserPhoto } from './styles';

const deviceWidth = Dimensions.get('screen').width;

const people = [{ id: '1', nome: 'Yabu' }, { id: '2', nome: 'Gabi' }, { id: '3', nome: 'Bazinga' }];

export default function App() {
  return (
    <>
      <SafeAreaView>
        <FlatList
          keyExtractor={item => item.id}
          data={people}
          renderItem={({ item }) => <Person person={item} />}
        />
      </SafeAreaView>
    </>
  );
}

/**
 * Component that represents a person with a Text (name) and a Image (Photo).
 * @param {Item from people's list} person 
 */
function Person({ person }) {
  return (
    <View>
      <UserInfo>
        <ProfilePicture source={require('../assets/myself.jpg')} />
        <Text>{person.nome}</Text>
      </UserInfo>

      <UserPhoto width = {deviceWidth} height = {deviceWidth} source={require('../assets/myself.jpg')}/>
    </View>
  )
}
