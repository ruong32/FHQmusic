import React from 'react'
import { View } from 'react-native';
import styles from '../../styles/Home/Profile'

export default class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={[styles.container, this.props.style]}></View>
    )
  }
}
