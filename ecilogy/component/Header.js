import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Header() {
    const mycolor = "#212121"
    return (
        <View style={{
            height: 45,
            backgroundColor: 'white',
            justifyContent: "space-between",
            elevation: 4,
            shadowColor: "black",
            flexDirection: "row"
        }}>
            <View style={{
                flexDirection: "row",
                margin: 5
            }}>
                <Icon name="youtube-play" size={30} color="red" />

                <Text style={{
                    fontSize: 20,
                    marginLeft: 8,
                    fontWeight: "700",
                    color: mycolor
                }}>YouTube</Text>
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: 150,
                margin: 5,
                marginTop: 12
            }}>
                <Icon name="video-camera" size={20} color="black" />
                <Icon name="search" size={20} color="black" />
                <Icon name="user-circle" size={20} color="black" />

            </View>
        </View>
    );
}

export default Header