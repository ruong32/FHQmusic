import {StyleSheet, Dimensions} from 'react-native';
const device = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
}

export default StyleSheet.create({
  container: {
    paddingTop: device.height*0.035,
    backgroundColor: '#999999'   
  },
});
