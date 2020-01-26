import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ProfilePicture, UserInfo, UserPhoto, UserText, LikeNumbers } from './styles';
import { deviceWidth } from './App';
import { LikeButton } from './LikeButton';

export default class Person extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: { ...this.props.person}
        }
    }

    render() {
        const { person } = this.state
        return (
            <View>
                <UserInfo>
                    <ProfilePicture source={{ uri: person?.urlPerfil }} />
                    <UserText>{person?.loginUsuario}</UserText>
                </UserInfo>

                <UserPhoto width={deviceWidth} height={deviceWidth} source={{ uri: person?.urlFoto }} />

                <TouchableOpacity onPress={this.like.bind(this)}>
                    <LikeButton liked={person?.likeada} />
                </TouchableOpacity>

                {this.showLikes(person.likers)}
            </View>
        );
    }

    showLikes(likers) {
        if (likers.length <= 0) return;

        return (
            <LikeNumbers>{likers.length} {likers.length === 1 ? 'curtida' : 'curtidas'}</LikeNumbers>
        )

    }

    like() {
        let likers = []

        if(!this.state.person.likeada) {
            likers = this.state.person.likers.concat({login: 'myUser'})
        }

        const personUpdated = {
            ...this.state.person,
            likeada: !this.state.person.likeada,
            likers: likers
        }

        this.setState({ person: personUpdated })
    }

}
