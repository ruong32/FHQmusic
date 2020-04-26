import {StyleSheet, Dimensions} from 'react-native';
const device = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
}

export default StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: device.height*0.06*0.35,
    height: device.height*0.06,
    width: device.width*0.8,
    alignItems: "center",
    marginLeft: device.width*0.03,
    backgroundColor: '#fff'
  },
  searchIcon: {
    height: device.height*0.06,
    justifyContent: 'center',
    marginLeft: device.width*0.02,
    marginRight: device.width*0.02,
  },
  searchInput: {
    flex: 1,
    borderColor: 'gray',
    borderLeftWidth: 1,
    fontSize: device.height*0.025,
    paddingLeft: device.width*0.01,
    height: device.height*0.05,
  }
});