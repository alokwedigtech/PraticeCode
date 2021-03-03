import React, { useState } from 'react';
import { StyleSheet, Button, Image, Text, View, Alert, TextInput, TouchableOpacity } from 'react-native';

const Profile = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onPressLogin = () => {
        console.log('TAG', 'button click')
        Alert.alert(`hey ${email} entered password is ${password}`), () => {
            setPassword("")
            setEmail("")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <TouchableOpacity>
                    <Text style={styles.create}> Icon 1  </Text>
                </TouchableOpacity>
                <Image
                    source={{
                        uri: 'https://thumbs.dreamstime.com/z/woman-doctor-face-mask-white-background-woman-doctor-face-mask-white-background-beautiful-female-doctor-arms-127025399.jpg',
                    }}
                    style={{ width: 50, height: 50 }}
                    resizeMode="stretch"
                />
                <TouchableOpacity>
                    <Text style={styles.newone}>Icon 2 </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.profilename}>
                <Text style={styles.name}>Alexander Wolfe</Text>
                <Text style={styles.typedr}>Cardiologist</Text>
                <Text style={styles.rating}>5.0 (234 reviewrs)</Text>
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>BOOK APPOINTMENT</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.options}>
                <Text style={styles.optionText}>Persoanl Information</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.options}>
                <Text style={styles.optionText}>Working adress</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.options}>
                <Text style={styles.optionText}>Reviewer</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        flexDirection: 'row'
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#399cff",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    loginText: {
        color: "white"
    },
    options: {
        width: "80%",
        borderRadius: 8,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    optionText: {
        color: "#000"
    },
    profilename: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 20
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    typedr: {
        color: '#b5b5b5'
    },
    rating: {
        color: '#b5b5b5'
    }

});
export default Profile
