import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('window');
import {Surface} from 'react-native-paper';
import { device } from '../config/ScreenDimensions';

class SOngData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  playSong = item => {
    this.props.navigation.navigate('Player', {item: item});
  };

  openModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  render() {
    let item = this.props.item;
    return (
      <View>
        <Modal
          transparent={true}
          onRequestClose={() => this.closeModal()}
          visible={this.state.modalVisible}
          animationType="slide">
          <View style={{height: '100%', backgroundColor: 'rgba(0,0,0,0.4)'}}>
            <View style={styles.modal}>
              <Surface style={styles.surface}>
                <Image source={{uri: item.img}} style={styles.modalImg} />
              </Surface>

              <View style={styles.modalData}>
                <View style={styles.playerContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subTitle}>{item.subTitle}</Text>
                  <TouchableOpacity style={styles.btn}>
                    <Icon name="play" size={30} color="#fff" />
                  </TouchableOpacity>
                </View>
                <View style={styles.option}>
                  <Icon name="heart" size={30} color="#f25050" />
                  <Text style={styles.text}>Add To Favourite</Text>
                </View>
                <View style={styles.option}>
                  <Icon name="playlist-plus" size={30} color="#000" />
                  <Text style={styles.text}>Add To Playlist</Text>
                </View>
                <View style={styles.option}>
                  <Icon name="album" size={30} color="#000" />
                  <Text style={styles.text}>Create Album</Text>
                </View>
                <View style={styles.option}>
                  <Icon name="download" size={30} color="#000" />
                  <Text style={styles.text}>Download</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          style={styles.songContainer}
          onPress={() => this.playSong(item)}>
          <View style={{flexDirection: 'row'}}>
            <Image source={{uri: item.img}} style={styles.img} />
            <View style={styles.dataContainer}>
              <Text style={styles.songtitle}>{item.title}</Text>
              <Text style={styles.subTitle}>{item.subTitle}</Text>
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => this.openModal()}>
                <Icon name="dots-vertical" color="#737373" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class SongsComponent extends Component {
  constructor(props) {
    super(props);
  }

  separator = () => {
    return <View style={{height: 10, backgroundColor: '#ffffff'}} />;
  };

  render() {
    let songs = [
      {
        title: 'You Need To Calm Down',
        subTitle: 'Taylor Swift',
        link: 'https://data18.chiasenhac.com/downloads/2019/1/2018222-1d3381f4/128/You%20Need%20To%20Calm%20Down%20-%20Taylor%20Swift.mp3',
        img: 'https://upload.wikimedia.org/wikipedia/vi/c/cd/Taylor_Swift_-_Lover.png',
      },
      {
        title: 'The Man',
        subTitle: 'Taylor Swift',
        link: 'https://data19.chiasenhac.com/downloads/2032/1/2031028-4263a9f1/128/The%20Man%20-%20Taylor%20Swift.mp3',
        img: 'https://upload.wikimedia.org/wikipedia/vi/c/cd/Taylor_Swift_-_Lover.png',
      },
      {
        title: "The Archer",
        subTitle: 'Taylor Swift',
        link: 'https://data19.chiasenhac.com/downloads/2026/1/2025942-bc9aa9c9/128/The%20Archer%20-%20Taylor%20Swift.mp3',
        img: 'https://upload.wikimedia.org/wikipedia/vi/c/cd/Taylor_Swift_-_Lover.png',
      },
      {
        title: 'Soon You ll Get Better',
        subTitle: 'Taylor Swift',
        link: 'https://data19.chiasenhac.com/downloads/2032/1/2031026-be49d351/128/Soon%20You___ll%20Get%20Better%20-%20Taylor%20Swift_.mp3',
        img: 'https://upload.wikimedia.org/wikipedia/vi/c/cd/Taylor_Swift_-_Lover.png',
      },
      {
        title: 'Miss Americana The Heartbreak',
        subTitle: 'Taylor Swift',
        link: 'https://data19.chiasenhac.com/downloads/2032/1/2031024-754a6166/128/Miss%20Americana%20The%20Heartbreak%20Prince%20-%20T.mp3',
        img: 'https://upload.wikimedia.org/wikipedia/vi/c/cd/Taylor_Swift_-_Lover.png',
      },
      {
        title: 'ME',
        subTitle: 'Taylor Swift',
        link: 'https://data18.chiasenhac.com/downloads/2008/1/2007116-3dad1f5d/128/Me_%20-%20Taylor%20Swift_%20Brendon%20Urie.mp3',
        img: 'https://upload.wikimedia.org/wikipedia/vi/c/cd/Taylor_Swift_-_Lover.png',
      },
      {
        title: 'Afterglow',
        subTitle: 'Taylor Swift',
        link: 'https://data19.chiasenhac.com/downloads/2032/1/2031012-6bf0c3ba/128/Afterglow%20-%20Taylor%20Swift.mp3',
        img: 'https://upload.wikimedia.org/wikipedia/vi/c/cd/Taylor_Swift_-_Lover.png',
      },
      {
        title: 'Cornelia Street',
        subTitle: 'Taylor Swift',
        link: 'https://data19.chiasenhac.com/downloads/2032/1/2031014-4e280438/128/Cornelia%20Street%20-%20Taylor%20Swift.mp3',
        img: 'https://upload.wikimedia.org/wikipedia/vi/c/cd/Taylor_Swift_-_Lover.png',
      },
      {
        title: 'Daylight',
        subTitle: 'Taylor Swift',
        link: 'https://data19.chiasenhac.com/downloads/2032/1/2031015-63cd4814/128/Daylight%20-%20Taylor%20Swift.mp3',
        img: 'https://upload.wikimedia.org/wikipedia/vi/c/cd/Taylor_Swift_-_Lover.png',
      },
      {
        title: 'Lover',
        subTitle: 'Taylor Swift',
        link: 'https://data19.chiasenhac.com/downloads/2032/1/2031023-d64819f1/128/Lover%20-%20Taylor%20Swift.mp3',
        img: 'https://upload.wikimedia.org/wikipedia/vi/c/cd/Taylor_Swift_-_Lover.png',
      },
      {
        title: 'London Boy',
        subTitle: 'Taylor Swift',
        link: 'https://data19.chiasenhac.com/downloads/2032/1/2031021-d98102e3/128/London%20Boy%20-%20Taylor%20Swift.mp3',
        img: 'https://upload.wikimedia.org/wikipedia/vi/c/cd/Taylor_Swift_-_Lover.png',
      },
    ];
    return (
      <View style={styles.container}>
        <View style={{padding: 10, paddingTop: 0}}>
          <FlatList
            data={songs}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => this.separator()}
            renderItem={({item, index}) => {
              return (
                <SOngData item={item} navigation={this.props.navigation} />
              );
            }}
          />
        </View>
      </View>
    );
  }
}

export default SongsComponent;

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: '#fefefe'
  },
  songContainer: {
    width: width,
    height: 70,
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  songContainer: {
    backgroundColor: 'white'
  },
  dataContainer: {
    paddingLeft: 10,
    width: width - 160,
  },
  songtitle: {
    fontSize: 16,
    marginTop: 10,
    color: '#000',
  },
  subTitle: {
    fontSize: 14,
    color: '#737373',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: device.width * 0.15,
  },
  modal: {
    height: '55%',
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  modalImg: {
    height: 180,
    width: 180,
  },
  surface: {
    height: 180,
    width: 180,
    alignSelf: 'center',
    position: 'absolute',
    overflow: 'hidden',
    top: -100,
    borderRadius: 8,
    elevation: 20,
  },
  modalData: {
    marginTop: 100,
  },
  option: {
    height: 50,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e5e5',
  },
  text: {
    marginLeft: 15,
    color: '#000',
    fontSize: 20,
  },
  playerContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#1da1f2',
    elevation: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});