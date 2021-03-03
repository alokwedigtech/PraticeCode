import React, { useState } from 'react';
import { View, ScrollView, Text, ActivityIndicator, FlatList, TextInput, Alert } from 'react-native';
import Minicard from '../component/minicard'

function SearchScreen() {
    const [value, setValue] = useState("")
    const [minicarddata, setCarddata] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchdata = () => {
        setLoading(true)
        Alert.alert("clicked")
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyCgl6AxAX5rsK8yWxp-iFjhEbsqWmMCpMg`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLoading(false)
                setCarddata(data.items)
            })
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                padding: 5,
                flexDirection: "row",
                justifyContent: "space-around",
                elevation: 5,
                backgroundColor: 'white',
            }}>
                <Text>11</Text>
                <TextInput
                    style={{
                        width: "70%",
                        backgroundColor: "#e6e6e6"
                    }}
                    // value={value}
                    onChangeText={(text) => setValue(text)}
                />
                <Text onPress={fetchdata}>icon</Text>
            </View>
            {/* { loading ? <ActivityIndicator size="large" color="red" /> : null} */}
            <ScrollView>
                <Minicard />
                <Minicard />
                <Minicard />
                <Minicard />
                <Minicard />
                <Minicard />
                <Minicard />
                <Minicard />
                <Minicard />
                <Minicard />
            </ScrollView>
            {/* 
            <ScrollView>
                <FlatList
                    data={minicarddata}
                    renderItem={({ item }) => {
                        return <Minicard
                            videoId={item.id.videoId}
                            title={item.snippet.title}
                            channel={item.snippet.channelTitle}
                        />
                    }}
                    keyExtractor={item => item.id.vidioId}
                />
            </ScrollView> */}
        </View>
    );
}

export default SearchScreen