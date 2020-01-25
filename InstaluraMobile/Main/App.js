/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, View, Text, Image, Dimensions, ScrollView, FlatList, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get('screen').width;

const people = [{ id: 1, nome: 'Yabu' }, { id: 2, nome: 'Gabi' }, { id: 3, nome: 'Bazinga' }];

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
      <View style={styles.userHeader}>
        <Image source={require('../assets/myself.jpg')}
          style={styles.profilePicture} />
        <Text>{person.nome}</Text>
      </View>

      <Image source={require('../assets/myself.jpg')}
        style={styles.userPhoto} />
    </View>
  )
}

const styles = StyleSheet.create({
  userHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },

  profilePicture: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20
  },

  userPhoto: {
    width: deviceWidth,
    height: deviceWidth
  }
})
