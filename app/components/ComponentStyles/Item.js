import {StyleSheet, Dimensions} from 'react-native';
const device = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
}

export default StyleSheet.create({
  itemArea: {
    marginTop: device.height*0.01,
    height: device.height*0.2,
    width: device.width,
    backgroundColor: 'white'
  },
  titleText:{
    height: device.height*0.04,
    fontSize: device.height*0.03,
    marginLeft: device.width*0.02,
  },
  item:{
    marginLeft: device.width*0.04
  },
  itemPicture: {
    height: device.height*0.12,
    width: device.width*0.28,
    alignSelf: 'center'
  },
  itemName: {
    alignSelf: 'center'
  }
});