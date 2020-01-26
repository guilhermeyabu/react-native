import React from 'react';
import { View } from 'react-native';
import { ProfilePicture, UserInfo, UserPhoto, UserText } from './styles';
import { deviceWidth } from './App';
/**
 * Component that represents a person with a Text (name) and a Image (Photo).
 * @param {Item from people's list} person
 */
export function Person({ person }) {
  return (<View>
    <UserInfo>
      <ProfilePicture source={{ uri: person?.urlPerfil }} />
      <UserText>{person?.loginUsuario}</UserText>
    </UserInfo>

    <UserPhoto width={deviceWidth} height={deviceWidth} source={{ uri: person?.urlFoto }} />
  </View>);
}
