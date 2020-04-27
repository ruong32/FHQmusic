import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from '../styles/Personal';
import SearchBar from '../components/SearchBar';

export default class Personal extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <View>
          <SearchBar/>
        </View>
        
      </View>
    );
  }
}