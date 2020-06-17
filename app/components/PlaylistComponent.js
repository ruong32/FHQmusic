import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { device } from '../config/ScreenDimensions';
import SongsComponent from './SongsComponent';
export default class PlaylistComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground source={{uri: 'https://upload.wikimedia.org/wikipedia/vi/c/cd/Taylor_Swift_-_Lover.png',}} style={styles.imageBackground} blurRadius={22}>
                   <TouchableOpacity>
                        <MaterialIcons name="arrow-back"style={styles.back} size={device.height * 0.038}></MaterialIcons>
                    </TouchableOpacity> 
                    
                    <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/vi/c/cd/Taylor_Swift_-_Lover.png',}} style={styles.image}></Image>
                    <Text style={styles.title}>Lover</Text>
                </ImageBackground>
            </View>
            <View style={styles.listSong}>
                <ScrollView style={styles.listScroll}>
                    <SongsComponent navigation={this.props.navigation} />
                </ScrollView>
            </View>
        </View>
        
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe'
    }, 
    header: {
        flex: 4,
        flexDirection: 'column'
    },
    back: {
        marginTop: device.height * 0.04,
        color: '#ffffff',
        marginLeft: device.width * 0.02
    },
    listSong: {
        flex: 6,
    },
    imageBackground: {
        height: device.height * 0.43,
        width: device.width
    },
    image: {
        height: device. height * 0.18,
        width: device.height * 0.18,
        marginTop: device.height * 0.032,
        marginHorizontal: (device.width - device.height * 0.18) / 2,
        borderRadius: 5,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#ffffff'
    }
})