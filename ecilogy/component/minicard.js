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
                source={{ uri: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' }}
                style={{
                    width: "45%",
                    height: 100,
                    backgroundColor: 'red'
                }}
            />
            {/* <View style={{
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
            </View> */}
            <View style={{
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
            </View>
        </View>
    );
}

export default Minicard