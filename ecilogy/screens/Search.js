import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, ActivityIndicator, FlatList, TextInput, Alert } from 'react-native';
import Minicard from '../component/minicard'
import Icon from 'react-native-vector-icons/FontAwesome';
import Maticon from 'react-native-vector-icons/MaterialIcons';


function SearchScreen() {
    const [value, setValue] = useState("song")
    const [minicarddata, setCarddata] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=""`)
            .then(res => res.json())
            .then(data => {
                console.log("tttttttt", data.items)
                setLoading(false)
                setCarddata(data.items)
            })
    });

    const fetchdata = () => {
        Alert.alert('sd')
        // setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=""`)
            .then(res => res.json())
            .then(data => {
                console.log("xxxxxx", data.items)
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
                <Icon style={{ marginTop: 5 }} name="arrow-left" size={22} color="#808080" />
                <TextInput
                    style={{
                        width: "70%",
                        backgroundColor: "#e6e6e6",
                        height: 35
                    }}
                    onChangeText={(text) => setValue(text)}
                />
                <Icon
                    onPress={fetchdata}
                    style={{ marginTop: 5 }} name="arrow-right" size={22} color="#808080" />

            </View>
            { loading ? <ActivityIndicator size="large" color="red" /> : null}


            <ScrollView>
                <FlatList
                    data={minicarddata}
                    renderItem={({ item }) => {
                        return <Minicard
                            videoId={item.id.videoid}
                            title={item.snippet.title}
                            channel={item.snippet.channelTitle}
                        />
                    }}
                    keyExtractor={item => item.id.vidioId}
                />
            </ScrollView>
        </View>
    );
}

export default SearchScreen