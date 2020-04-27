import {StyleSheet, Dimensions} from 'react-native';
const device = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
}

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    height: device.height*0.09,
    width: device.width,
    backgroundColor: 'green'
  }, 
  searchBarContainer: {
    flexDirection: 'row',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: device.height*0.06*0.35,
    height: device.height*0.06,
    width: device.width*0.8,
    alignItems: "center",
    marginLeft: device.width*0.03,
    backgroundColor: '#fff',
  },
  searchIcon: {
    height: device.height*0.06,
    justifyContent: 'center',
    marginLeft: device.width*0.015,
    marginRight: device.width*0.015,
  },
  searchInput: {
    flex: 1,
    borderColor: 'gray',
    borderLeftWidth: 1,
    width: device.width*0.5,
    fontSize: device.height*0.025,
    paddingLeft: device.width*0.01,
    height: device.height*0.05,
  },
  profileIcon: {
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: device.height*0.07*0.5,
    height: device.height*0.07,
    width: device.height*0.07,
    marginLeft: (device.width - (device.width*0.8 + device.width*0.03 + device.height*0.07))/2,
    backgroundColor: '#fff'
  }
});