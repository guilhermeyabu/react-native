/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Yabunito</Text>
          <Image source={require('./assets/myself.jpg')}
            style={{ width: 100, height: 100 }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
