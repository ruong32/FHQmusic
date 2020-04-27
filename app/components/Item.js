import React from 'react';
import { View, Text, Image, ScrollView, Keyboard } from 'react-native';
import styles from './ComponentStyles/Item';
import PropTypes from 'prop-types';

export default class Item extends React.Component {
  constructor(props){
    super(props);
  }

  static propTypes = {
    itemAreaStyle: PropTypes.object,
    titleTextStyle: PropTypes.object,
    category: PropTypes.string,
    horizontal: PropTypes.bool,
    scrollEnabled: PropTypes.bool,
    data: PropTypes.array.isRequired,
    itemStyle: PropTypes.object,
    itemPictureStyle: PropTypes.object,
    itemNameStyle: PropTypes.object
  }

  static defaultProps = {
    itemAreaStyle: styles.itemArea,
    titleTextStyle: styles.titleText,
    horizontal: false,
    scrollEnabled: true,
    data: [],
    itemStyle: styles.item,
    itemPictureStyle: styles.itemPicture,
    itemNameStyle: styles.itemName
  };

  render(){
    return(  
      <View style={this.props.itemAreaStyle}>
        <Text style={this.props.titleTextStyle}>{this.props.category}</Text>
        <ScrollView 
          horizontal={this.props.horizontal}
          onScroll={Keyboard.dismiss}
          scrollEventThrottle={0}
          pagingEnabled={true}
          scrollEnabled={this.props.scrollEnabled}
        >
          {this.props.data.map((item, index) => (
          <View key={index.toString()} style={this.props.itemStyle}>
            <Image style={this.props.itemPictureStyle} source={{
              uri: item.picture,
            }}/>
            <Text style={this.props.itemNameStyle}>{item.name}</Text>
          </View>
          ))}
        </ScrollView>
      </View>     
    )
  }
}
