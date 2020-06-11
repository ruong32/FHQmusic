import React from 'react';
import { SafeAreaView, View, Text, StatusBar, TouchableOpacity, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ListItem } from 'react-native-elements'
import styles from '../styles/Personal';
import SearchBar from '../components/SearchBar';
import {list} from '../data/data';
import MiniPlayer from '../components/MiniPlayer';

export default class Personal extends React.Component {
  render(){
    const {navigate} = this.props.navigation;
    return(
      <SafeAreaView style={{flex: 1, backgroundColor: '#0D47A1'}}>
        <View style={styles.container}>
          <View>
            <StatusBar barStyle="default" translucent/>
            <View>
              <SearchBar navigation={this.props.navigation}/>
            </View>
            <View style={styles.titleTextContainer}>
              <Text style={styles.titleText}>Cá nhân</Text>
            </View>
            <View style={{backgroundColor: 'white'}}>
            {list.map((item, i) => {
              return (
                <Animatable.View key={i} animation="fadeInDown" delay={i*100} duration={500}>
                  <TouchableOpacity 
                    onPress={()=> navigate('SongList', {title: item.title, type: item.type})}
                    activeOpacity={0.3}
                  >
                    <ListItem
                      key={i}
                      title={item.title}
                      leftIcon={{ name: item.icon }}
                      bottomDivider
                      chevron
                    />
                  </TouchableOpacity>
                </Animatable.View>  
              )
            })}
            </View>
          </View>
        <MiniPlayer navigate={navigate}/>
        </View>
      </SafeAreaView>
    );
  }
}