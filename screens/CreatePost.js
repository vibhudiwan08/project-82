import React, { Component } from 'react';
import { Text, View,TextInput,Image } from 'react-native';

export default class CreatePost extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:'grey',
                }}>
                <Text>Create Post</Text>
            </View>
        )
    }
}