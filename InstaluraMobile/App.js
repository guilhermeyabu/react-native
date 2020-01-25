/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, View, Text, Image, Dimensions, ScrollView, FlatList } from 'react-native';

const deviceWidth = Dimensions.get('screen').width;

const people = [{ id: 1, nome: 'Yabu' }, { id: 2, nome: 'Gabi' }, { id: 3, nome: 'Bazinga' }];

export default function App() {
  return (
    <>
      <SafeAreaView>
        <FlatList
        keyExtractor={item => item.id}
          data={people}
          renderItem={({ item }) =>
            <View key={item.id}>
              <Text>{item.nome}</Text>
              <Image source={require('./assets/myself.jpg')}
                style={{ width: deviceWidth, height: deviceWidth }} />
            </View>
          }
        />
      </SafeAreaView>
    </>
  );
}
