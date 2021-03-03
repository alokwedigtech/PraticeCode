import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LotsOfStyles = () => {
    return (
        // <View style={styles.container}>
        //     <Text style={styles.red}>just red</Text>
        //     <Text style={styles.bigBlue}>just bigBlue</Text>
        //     <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        //     <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        // </View>
        // <View>
        //     <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        //     <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
        //     <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
        // </View>
        // <View style={{ flex: 1 }}>
        //     <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
        //     <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
        //     <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
        //     <View style={{ flex: 4, backgroundColor: 'skyblue' }} />
        //     <View style={{ flex: 4, backgroundColor: 'green' }} />
        // </View>
        // <View style={{ flex: 1, flexDirection: 'column-reverse' }}>
        //     <View style={{ width: 70, height: 70, backgroundColor: 'powderblue' }}><Text>1</Text></View>
        //     <View style={{ width: 70, height: 70, backgroundColor: 'skyblue' }}><Text>2</Text></View>
        //     <View style={{ width: 70, height: 70, backgroundColor: 'steelblue' }}><Text>3</Text></View>
        //     <View style={{ width: 70, height: 70, backgroundColor: 'powderblue' }}><Text>4</Text></View>
        // </View>

        // <View style={{
        //     flex: 1,
        //     flexDirection: 'row',
        //     justifyContent: 'space-between',
        // }}>
        //     <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        //     <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        //     <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        // </View>
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignSelf: 'flex-end',
        }}>
            <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
            <View style={{ height: 50, backgroundColor: 'skyblue' }} />
            <View style={{ height: 100, backgroundColor: 'steelblue' }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

export default LotsOfStyles;