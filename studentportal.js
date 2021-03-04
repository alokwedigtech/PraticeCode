import React from 'react'
import { View, Text, StyleSheet, ProgressBarAndroid, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

export default Studetportal = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome style={styles.headericon} name="bars" size={30} color="#6a6a6a" />
                <Icon style={styles.headericon} name="search1" size={30} color="#6a6a6a" />
            </View>

            <View style={styles.profilesection}>
                <View>
                    <Text style={styles.courseheading}>Your courses</Text>
                    <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
                    <Text>Details here about the course</Text>
                </View>
                <View>
                    <Image
                        source={{
                            uri: 'https://yt3.ggpht.com/ytc/AAUvwngsMYKVJenoA3m07HTBPjzMjDsuDMgzFi6L1g0Z=s900-c-k-c0x00ffffff-no-rj',
                        }}
                        style={styles.studentimage}
                        resizeMode="stretch"
                    />
                </View>
            </View>

            <View style={styles.infomationbox}>
                <View style={styles.boxblue}>
                    <Text style={styles.textdoc}>informatic assistnat</Text>
                    <Icon style={styles.headericon} name="user" size={30} color="#6a6a6a" />
                </View>
                <View style={styles.boxgray}>
                    <Text style={styles.textdocs}>national informatic center</Text>
                    <Icon style={styles.headericon} name="user" size={30} color="#6a6a6a" /></View>
            </View>


            <View style={styles.infomationbox}>
                <View style={styles.boxblue}>
                    <Text style={styles.textdoc}>barc and isro</Text>
                    <Icon style={styles.headericon} name="user" size={30} color="#6a6a6a" />
                </View>
                <View style={styles.boxgray}>
                    <Text style={styles.textdocs}>informatic assistnat</Text>
                    <Icon style={styles.headericon} name="user" size={30} color="#6a6a6a" /></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headericon: {
        margin: 20
    },
    profilesection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,

    },
    studentimage: {
        height: 100,
        width: 100,
        borderRadius: 100
    },
    courseheading: {
        fontSize: 30,
        fontWeight: 'bold'

    },
    infomationbox: {
        flexDirection: 'row',
        width: '100%'
    },
    boxblue: {
        height: 150,
        width: 130,
        backgroundColor: '#4cb1ff',
        justifyContent: 'flex-start',
        margin: 20,
        borderRadius: 20
    },
    boxgray: {
        height: 150,
        width: 130,
        backgroundColor: '#f5f6fc',
        justifyContent: 'flex-start',
        margin: 20,
        borderRadius: 20
    },
    textdoc: {
        alignContent: 'center',
        margin: 15,
        justifyContent: 'center',
        color: '#fff'
    },
    textdocs: {
        alignContent: 'center',
        margin: 15,
        justifyContent: 'center',
        color: '#000'
    }

})