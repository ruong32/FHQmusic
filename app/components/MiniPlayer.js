import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./ComponentStyles/MiniPlayer";

export default class MiniPlayer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <TouchableOpacity>
                <View style={styles.container}></View>
            </TouchableOpacity>
        );
    }
}