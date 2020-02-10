import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { ProfilePicture, UserInfo, UserPhoto, UserText, LikeNumbers, InputComment, NewCommentRow } from './styles';
import { deviceWidth } from './App';
import { LikeButton } from './LikeButton';
import { Comment } from './Comment';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Person extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: { ...this.props.person },
            newComment: ''
        }
    }

    render() {
        const { person } = this.state
        console.log(person.comentarios);
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
                <FlatList
                    keyExtractor={item => item.id}
                    data={person?.comentarios}
                    renderItem={({ item }) => <Comment comentario={item} />}
                />

                <NewCommentRow>
                    <InputComment
                        placeholder="Adicione um comentário..."
                        ref={input => this.commentInput = input}
                        onChangeText={comment => this.setState({ newComment: comment })}
                    />
                    <TouchableOpacity onPress={this.addComment.bind(this)}>
                        <Icon
                            name="md-send"
                            size={25}
                        />
                    </TouchableOpacity>
                </NewCommentRow>
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

        if (!this.state.person.likeada) {
            likers = this.state.person.likers.concat({ login: 'myUser' })
        }

        const personUpdated = {
            ...this.state.person,
            likeada: !this.state.person.likeada,
            likers: likers
        }

        this.setState({ person: personUpdated })
    }

    addComment() {
        if (this.state.newComment === '') return;
        
        const newCommentList = [...this.state.person.comentarios, {
            id: this.state.newComment,
            login: 'Yabu',
            texto: this.state.newComment
        }]

        const updatedPerson = {
            ...this.state.person,
            comentarios: newCommentList
        }

        this.setState({ person: updatedPerson })
        this.commentInput.clear();
    }

}
