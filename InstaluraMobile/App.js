/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, View, Text, Image, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('screen').width;

export default function App() {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Yabunito</Text>
          <Image source={require('./assets/myself.jpg')}
            style={{ width: deviceWidth, height: deviceWidth }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
