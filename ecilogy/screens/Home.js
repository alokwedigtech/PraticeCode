import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../component/Header'
import Card from '../component/card'

function Home() {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ScrollView>
        </View>
    );
}

export default Home