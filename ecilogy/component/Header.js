import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { AntDesign, Inoicons } from '@expo/vector-icons'

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
                <Text style={{ color: "red" }}>1ss</Text>
                {/* <AntDesign style={{
                    marginLeft: 20
                }} name="youtube" size={28} color="red" /> */}
                <Text style={{
                    fontSize: 22,
                    marginLeft: 5,
                    fontWeight: "bold",
                    color: mycolor
                }}>YouTube</Text>
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: 150,
                margin: 5
            }}>
                <Text>1</Text>
                <Text>1</Text>
                <Text>1</Text>
                {/* <Inoicons name="md-videocam" size={32} color={mycolor} />
                <Inoicons name="md-videocam" size={32} color={mycolor} />
                <Inoicons name="md-videocam" size={32} color={mycolor} /> */}
            </View>
        </View>
    );
}

export default Header