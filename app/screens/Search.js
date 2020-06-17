import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
  StatusBar
} from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import { songs } from '../data/data';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, search: '' };
    this.arrayholder = [];
  }
  componentDidMount() {
        this.setState(
          {
            isLoading: false,
            dataSource: songs,
          },
          function() {
            this.arrayholder = songs;
          }
        );
      }
  

  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }

  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <React.Fragment>
        <SafeAreaView style={{backgroundColor: '#0D47A1', paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}/>
        <SafeAreaView style={styles.viewStyle}>
          <SearchBar
            round
            searchIcon={{ size: 24 }}
            onChangeText={text => this.SearchFilterFunction(text)}
            onClear={text => this.SearchFilterFunction('')}
            placeholder="Tìm bài hát"
            value={this.state.search}
            containerStyle = {{ backgroundColor: '#1976D2', height: 65 }}
            inputContainerStyle={{backgroundColor: 'white', height: 45}}
          />
          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            
            renderItem={({ item }) => (
              <ListItem
                  leftAvatar={{
                    source: item.picture && { uri: item.picture },
                  }}
                  title={item.name}
                  subtitle={item.singer}
                  containerStyle={{ borderBottomWidth: 2 }}
                />
              
            )}
            enableEmptySections={true}
            style={{ marginTop: 10 }}
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
 
});