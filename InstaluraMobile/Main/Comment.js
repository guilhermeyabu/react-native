import React from 'react';
import { View, Text } from 'react-native';
import {CommentUser, CommentRow} from './styles';

export function Comment({ comentario }) {
    return (
        <CommentRow style="flexDirection= row">
            <CommentUser>{comentario.login} </CommentUser>
            <Text>{comentario.texto}</Text>
        </CommentRow>
    )
}