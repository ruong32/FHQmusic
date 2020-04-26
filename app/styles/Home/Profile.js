import {StyleSheet, Dimensions} from 'react-native';
const device = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
}

export default StyleSheet.create({
  container: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: device.height*0.07*0.5,
    height: device.height*0.07,
    width: device.height*0.07,
    marginLeft: (device.width - (device.width*0.8 + device.width*0.03 + device.height*0.07))/2,
    backgroundColor: '#fff'
  },
});