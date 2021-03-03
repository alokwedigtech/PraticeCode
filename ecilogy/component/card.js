import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Image, TouchableOpacity, Alert } from 'react-native';

function Card() {
    return (
        <View style={{
            marginBottom: 10
        }}>
            <Image
                source={{ uri: "../../assets/img/backgroud.jpg" }}
                style={{
                    width: "100%",
                    height: 200,
                    backgroundColor: 'red'
                }}
            />
            <View style={{
                flexDirection: 'row',
                margin: 5
            }}>
                <Text> icon</Text>

                <View style={{
                    marginLeft: 10,
                    width: "80%"
                }}>
                    <Text style={{
                        fontSize: 20,
                        width: Dimensions.get("screen").width - 50
                    }}
                        ellipsizeMode="tail"
                        numberOfLines={2}
                    > this is amazing this is amazingthis is amazing this is amazing </Text>
                    <Text> this is amazing</Text>
                </View>

            </View>
        </View>
    );
}

export default Card