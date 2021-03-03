import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Image, TouchableOpacity, Alert } from 'react-native';

const Minicard = (props) => {
    return (
        <View style={{
            flexDirection: "row",
            margin: 10,
            marginBottom: 0
        }}>
            <Image
                source={{ uri: "../../assets/img/backgroud.jpg" }}
                style={{
                    width: "45%",
                    height: 100,
                    backgroundColor: 'red'
                }}
            />
            <View style={{
                paddingLeft: 7
            }}>
                <Text style={{
                    fontSize: 18,
                    width: Dimensions.get("screen").width / 2
                }}
                    ellipsizeMode="tail"
                    numberOfLines={3}
                >this is amazing</Text>
                <Text style={{
                    fontSize: 12
                }}>this is amazing</Text>
            </View>
            {/* <View style={{
                paddingLeft: 7
            }}>
                <Text style={{
                    fontSize: 18,
                    width: Dimensions.get("screen").width / 2
                }}
                    ellipsizeMode="tail"
                    numberOfLines={3}
                >{props.title}</Text>
                <Text style={{
                    fontSize: 12
                }}>{props.channel}</Text>
            </View> */}
        </View>
    );
}

export default Minicard