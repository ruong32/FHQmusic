import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
import  * as Animatable from 'react-native-animatable';
import styles from './ComponentStyles/ListSongs';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { Icon } from 'react-native-elements';
import { device } from '../config/ScreenDimensions'

const songs = [
  {
    id: 0,
    uri: "https://musicapp1509.000webhostapp.com/Nhac/Anh%20Thanh%20Ni%C3%AAn%20-%20HuyR%20-%20OFFICIAL%20MV.mp3",
    picture: 'https://i.ytimg.com/vi/HPL74s4VPdk/maxresdefault.jpg',
    name: 'Anh thanh niên',
    singer: 'HuyR',
    favorite: 0,
    latestListening: 1587917439178,
  },
  { 
    id: 1,
    uri: "https://musicapp1509.000webhostapp.com/Nhac/V%C3%8C%20Y%C3%8AU%20C%E1%BB%A8%20%C4%90%C3%82M%20%C4%90%E1%BA%A6U%20(VYC%C4%90%C4%90)%20-%20MIN%20x%20%C4%90EN%20x%20JUSTATEE%20-%20OFFICIAL%20MUSIC%20VIDEO%20(%EB%AF%BC).mp3",
    picture: 'https://i.ytimg.com/vi/EWz4fITO5qg/maxresdefault.jpg',
    name: 'Vì yêu cứ đâm đầu',
    singer: 'MIN x ĐEN x JUSTATEE',
    favorite: 1,
    latestListening: 1587267045840,
  },
  {
    id: 2,
    uri: "https://musicapp1509.000webhostapp.com/Nhac/M%E1%BA%B7t%20Tr%E1%BB%9Di%20C%E1%BB%A7a%20Em%20-%20Official%20MV%20-%20Ph%C6%B0%C6%A1ng%20Ly%20ft%20JustaTee.mp3",
    picture: 'https://i.ytimg.com/vi/t0WFOnwp3MM/maxresdefault.jpg',
    name: 'Mặt trời của em ',
    singer: 'Phương Ly',
    favorite: 0,
    latestListening: 1587917439178,
  },
  {
    id: 3,
    uri: "https://musicapp1509.000webhostapp.com/Nhac/%C4%90%C3%83%20L%E1%BB%A0%20Y%C3%8AU%20EM%20NHI%E1%BB%80U%20-%20JUSTATEE%20(%20FID%20REMIX%20).mp3",
    picture: 'https://i.ytimg.com/vi/KhTCatAKVpk/maxresdefault.jpg',
    name: 'Đã lỡ yêu em nhiều',
    singer: 'JustaTee',
    favorite: 1,
    latestListening: 1587756992587,
  },
]

export default class ListSongs extends React.Component {
  state = {
    dayOffset: '',
    playlist: []
  }

  getDayOffset = time => {
    const timeOffset = ((Date.now()) - time)/1000;
    if (timeOffset < 86400) {
      return 'Hôm nay';
    } else if (timeOffset < 172.800){
      return 'Hôm qua';
    } else if (timeOffset < 259200){
      return 'Hôm kia';
    } else if (timeOffset < 604800){
      return `${Math.floor(timeOffset/86400)} ngày trước`
    } else if (timeOffset < 2592000){
      return `${Math.floor(timeOffset/604800)} tuần trước`
    } else return new Date(time).toLocaleString();
  }

  playSong = id => {
    this.props.navigate("Player", {songId: id, playlist: this.state.playlist});
  }
  
  renderItem = ({item, index}) => {
    let itemDayOffset = this.getDayOffset(item.latestListening);
    let showDayOffset = false;
    if ((this.props.type==='history')&&(itemDayOffset!==this.state.dayOffset)){
      showDayOffset = true;
      this.state.dayOffset = itemDayOffset;
    }
    return(
      <Animatable.View animation="zoomInLeft" delay={750} duration={2000}>
        {showDayOffset ?
        <View style={styles.dayOffsetContainer}>
          <Text style={styles.dayOffset}>{itemDayOffset}</Text>
        </View> : 
        null }
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            this.playSong(item.id);
            item.latestListening = new Date().getTime();
            this.setState({dayOffset: ''});
          }}  
        >
        <View style={styles.container}>
          <Image style={styles.image} source = {{uri: item.picture}}/>
          <View style={styles.songInfoContainer}>
            <View style={styles.songNameContainer}>
              <Text style={styles.songName}>{item.name}</Text>
            </View>
            <View style={styles.singerContainer}>
              <Text style={styles.singer}>{item.singer}</Text>
            </View>
            {this.props.type==='favorite' ? 
            <View style={styles.favoriteIcon}>
              <Icon name="favorite" size={device.width*0.08} color='#D50000'/>
            </View> : 
            null}
          </View>  
          <View style={styles.optionIcon}>
            <Menu>
              <MenuTrigger>
                <Icon name="more-vert" size={device.width*0.08} />
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
        </TouchableOpacity>
      </Animatable.View>
    );
  }

  render(){
    if (this.props.type === 'songs'){
      this.state.playlist = songs.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        return nameA.localeCompare(nameB);
      });
    } else if (this.props.type === 'favorite') {
      this.state.playlist = songs.filter(item => item.favorite==1)
    } else if (this.props.type === 'history') {
      this.state.playlist = songs.sort((a, b) => b.latestListening - a.latestListening);
    }
    return (
      <FlatList
        data={this.state.playlist}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItem}
        style={styles.flatList}
      />
    )
  }
}
