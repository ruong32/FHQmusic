import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import {Slider} from 'react-native-elements';
import Moment from 'moment';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Player';
import { Audio } from 'expo-av';

const LOOPING_TYPE_ALL = 0;
const LOOPING_TYPE_ONE = 1;
const LOOPING_TYPE_OFF = 2;

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.playlist = this.props.route.params.playlist
    this.index = this.props.route.params.songId
    this.song = null
    this.isSeeking = false;
    this.shouldPlayAtEndOfSeek = false;
    this.state = {
      loopingType: LOOPING_TYPE_ALL,
      muted: false,
      playbackInstancePosition: 0,
      playbackInstanceDuration: 0,
      shouldPlay: false,
      isPlaying: false,
      isBuffering: false,
      isLoading: true,
      shouldCorrectPitch: true,
      volume: 1.0,
      rate: 1.0,
      throughEarpiece: false
    };
  }

  UNSAFE_componentWillMount(){
    this.song = this.getSongById(this.index);
  }

  async componentDidMount(){
    if (!global.playbackInstance) {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: false
      });
      global.playbackInstance = new Audio.Sound();
    }
    global.playbackInstance.setOnPlaybackStatusUpdate(this._onPlaybackStatusUpdate);
    await this._loadNewPlaybackInstance(true);
  }

  componentWillUnmount(){
    global.playbackInstance.setOnPlaybackStatusUpdate(null);
  }

  async _loadNewPlaybackInstance(playing){
    await global.playbackInstance.unloadAsync();
    this.song = this.getSongById(this.index);
    const source = { uri: this.song.uri };
    const initialStatus = {
      shouldPlay: playing,
      rate: this.state.rate,
      shouldCorrectPitch: this.state.shouldCorrectPitch,
      volume: this.state.volume,
      isMuted: this.state.muted,
      isLooping: false,
    };

    await global.playbackInstance.loadAsync(
      source,
      initialStatus
    );
  }

  _onPlaybackStatusUpdate = status => {
    console.log(status);
    if (status.isLoaded) {
      this.setState({
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        isLoading: status.positionMillis === 0,
        rate: status.rate,
        muted: status.isMuted,
        volume: status.volume,
        loopingType: status.isLooping ? LOOPING_TYPE_ONE : LOOPING_TYPE_ALL,
        shouldCorrectPitch: status.shouldCorrectPitch
      });
      if (status.didJustFinish && !status.isLooping) {
        this._advanceIndex(true);
        this._loadNewPlaybackInstance(true);
      }
    } else {
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  };

  _advanceIndex(forward) {
    this.index =
      (this.index + (forward ? 1 : this.playlist.length - 1)) % this.playlist.length;
  }

  _onPlayPausePressed = () => {
    if (global.playbackInstance) {
      if (this.state.isPlaying) {
        global.playbackInstance.pauseAsync();
      } else {
        global.playbackInstance.playAsync();
      }
    }
  };

  _onForwardPressed = () => {
    if (global.playbackInstance) {
      this._advanceIndex(true);
      this._loadNewPlaybackInstance(true);
    }
  };

  _onBackPressed = () => {
    if (global.playbackInstance) {
      this._advanceIndex(false);
      this._loadNewPlaybackInstance(true);
    }
  };

  _onSeekSliderValueChange = value => {
    if (global.playbackInstance && !this.isSeeking) {
      this.isSeeking = true;
      this.shouldPlayAtEndOfSeek = this.state.shouldPlay;
      global.playbackInstance.pauseAsync();
    }
  };

  _onSeekSliderSlidingComplete = async value => {
    if (global.playbackInstance) {
      this.isSeeking = false;
      const seekPosition = value * this.state.playbackInstanceDuration;
      if (this.shouldPlayAtEndOfSeek) {
        global.playbackInstance.playFromPositionAsync(seekPosition);
      } else {
        global.playbackInstance.setPositionAsync(seekPosition);
      }
    }
  };

  _getSeekSliderPosition() {
    if (
      global.playbackInstance &&
      this.state.playbackInstancePosition &&
      this.state.playbackInstanceDuration
    ) {
      return (
        this.state.playbackInstancePosition /
        this.state.playbackInstanceDuration
      );
    }
    return 0;
  }

  getSongById(id){
    for(let i=0; i<this.playlist.length; i++){
      if (this.playlist[i].id === id){
        return this.playlist[i];
      }
    }
    return null;
  }

  _goBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#ded5d6"></StatusBar>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this._goBack()} style={{flexDirection: 'row'}}>
            <Ionicons style={styles.downButton} name="ios-arrow-down" size={35}></Ionicons>
            <Text style={styles.song}>{this.song.name} - {this.song.singer}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.image}>
          <Image source={{uri: this.song.picture}} style={styles.imageSong}></Image>
        </View>
        <View style={styles.taskBar}>
          <TouchableOpacity>
            <MaterialIcons name="favorite-border" style={styles.favorite} size={27}></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="file-download" style={styles.download} size={27}></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="playlist-play" style={styles.list} size={27}></MaterialIcons>
          </TouchableOpacity>
        </View>
        <View style={styles.slider}>
          <Slider
            trackStyle={styles.track}
            thumbTintColor="#f4ece9"
            value={this._getSeekSliderPosition()}
            onValueChange={this._onSeekSliderValueChange}
            onSlidingComplete={this._onSeekSliderSlidingComplete}
            disabled={this.state.isLoading}
          ></Slider>
          <View style={{ marginTop: -5, flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={[styles.textLight, styles.timeStamp]}>{Moment.utc(this.state.playbackInstancePosition).format("m:ss")}</Text>
              <Text style={[styles.textLight, styles.timeStamp]}>{Moment.utc(this.state.playbackInstanceDuration).format("m:ss")}</Text>
          </View>
        </View>
        <View style={styles.control}>
          <TouchableOpacity>
            <MaterialIcons name="shuffle" style={styles.random} size={28}></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onForwardPressed()}>
            <MaterialIcons name="skip-previous" style={styles.backward} size={36}></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPlayPausePressed()}>
            <MaterialIcons name={this.state.isPlaying ? "pause-circle-filled" : "play-circle-filled"} style={styles.pause} size={55}></MaterialIcons> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onBackPressed()}>
            <MaterialIcons name="skip-next" style={styles.forward} size={36}></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="repeat" style={styles.repeat} size={32}></MaterialIcons>
            {/* <MaterialIcons name="repeat-one" style={styles.repeat} size={32}></MaterialIcons> */}
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.commentContainer}>
          <Text style={styles.comment}>Bình luận</Text>
        </ScrollView>
      </SafeAreaView>
    );
    
  }
    
}