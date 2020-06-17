import React from 'react';
import { SafeAreaView, View, ScrollView, StatusBar, ActivityIndicator, TouchableOpacity, Image, Text } from 'react-native';
import styles from '../styles/Home';
import SearchBar from '../components/SearchBar';
import Item from '../components/Item';
import {singerData, playListData, topicData, forYou} from '../data/data';
import MiniPlayer from '../components/MiniPlayer';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { Icon } from 'react-native-elements';

export default class Home extends React.Component {
  state = {
    isFetching: true,
    data: null
  }

  async UNSAFE_componentWillMount(){
    const response = await fetch(`https://toeic-test-server.herokuapp.com/music/home`) // trả về tất cả bài hát, playlist, ca sĩ
    const data = await response.json(); // data: {songs, singers, playlist}
    this.setState({
      isFetching: false,
      data: data
    })
  }

  render(){
    if (this.state.isFetching){
      return (
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size='large' color='#0D47A1' />
      </SafeAreaView>
      );
    }
    return(
      <SafeAreaView style={{flex: 1, backgroundColor: '#0D47A1', paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <StatusBar barStyle="default" translucent/>
            {/* <View>
              <SearchBar navigation={this.props.navigation}/>
            </View> */}
            <ScrollView style={styles.scrollView}>
              <Item
                category="Dành cho bạn"
                data={this.state.data.playlists[0].songs}
                horizontal={true}
                itemAreaStyle={styles.suggestArea}
                itemPictureStyle={styles.suggestPicture}
                itemNameStyle={styles.suggestText}
                itemStyle={styles.suggestStyle}
              />
              <Item 
                category="Playlist"
                data={this.state.data.playlists}
                horizontal={true}
                scrollEnabled={false}
                pagingEnabled={false}
              />
              <Item 
                category="Ca sĩ" 
                data={this.state.data.singers}
                horizontal={true}
                pagingEnabled={false}
                itemPictureStyle={styles.singerPictureStyle}
                itemStyle={styles.singerStyle}
              />
              <Item 
                category="Chủ đề"
                data={topicData}
                horizontal={true}
                pagingEnabled={false}
              />
              <View style={styles.song}>
                <Text style={styles.titleText}>Bài hát</Text>
                {this.state.data.songs.map((item, index) => (
                <TouchableOpacity
                  key={index.toString()}
                  activeOpacity={0.5}
                  onPress={() => {
                  }}  
                >
                <View style={styles.songContainer}>
                  <Image style={styles.songImage} source = {{uri: item.picture}}/>
                  <View style={styles.songInfoContainer}>
                    <View style={styles.songNameContainer}>
                      <Text style={styles.songName}>{item.name}</Text>
                    </View>
                    <View style={styles.singerContainer}>
                      <Text style={styles.singer}>{item.singer.name}</Text>
                    </View>
                  </View>  
                  <View style={styles.optionIcon}>
                    <Menu>
                      <MenuTrigger>
                        <Icon name="more-vert" size={30} />
                      </MenuTrigger>
                      <MenuOptions optionsContainerStyle={{width: 100}}>
                        <MenuOption onSelect={() => alert(`Tùy chọn 1`)} >
                          <Text>Tùy chọn 1</Text>
                        </MenuOption>
                        <MenuOption onSelect={() => alert(`Tùy chọn 2`)} >
                          <Text>Tùy chọn 2</Text>
                        </MenuOption>
                        <MenuOption onSelect={() => alert(`Tùy chọn 3`)} >
                          <Text>Tùy chọn 3</Text>
                        </MenuOption>
                      </MenuOptions>
                    </Menu>
                  </View>
                </View>
                </TouchableOpacity>))}
              </View>
            </ScrollView>
          </View>
          <MiniPlayer navigate={this.props.navigation.navigate}/>
        </View>
      </SafeAreaView>
    );
  }
}