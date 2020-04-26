import React from 'react';
import { Icon } from 'react-native-elements';
import { View, TextInput } from 'react-native'
import styles from '../../styles/Home/SearchBar';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state={
      searchText: ''
    }
  }

  updateSearch = searchText => {
    this.setState({searchText})
  }

  render(){
    const {searchText} = this.state;
    return(
    <View style={[styles.searchBarContainer, this.props.style]}>
        <Icon  containerStyle={styles.searchIcon} name="search" size={25} color="gray"/>
        <TextInput
          placeholder="Nhập tên bài hát"
          style={styles.searchInput}
          onChangeText={searchText => this.updateSearch(searchText)}
          value={searchText}
        />
    </View>)
  }
}
