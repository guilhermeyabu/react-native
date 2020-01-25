/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, View, Text, Image, Dimensions, ScrollView } from 'react-native';

const deviceWidth = Dimensions.get('screen').width;

const people = [{ id: 1, nome: 'Yabu' }, { id: 2, nome: 'Gabi' }, { id: 3, nome: 'Bazinga' }];

export default function App() {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          {people.map(person =>
            <View key={person.id}>
              <Text>{person.nome}</Text>  
              <Image source={require('./assets/myself.jpg')}
                style={{ width: deviceWidth, height: deviceWidth }} />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
