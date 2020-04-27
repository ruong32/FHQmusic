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
  scrollView: {
    height: device.height*0.8743,
    marginBottom: 10,
  },
  suggestArea: {
    marginTop: device.height*0.01,
    height: device.height*0.38,
    width: device.width,
    backgroundColor: 'white'
  },
  suggestPicture: {
    height: device.height*0.32,
    width: device.width,
  },
  suggestText: {
    height: 0,
    width: 0,
  },
  singerPictureStyle: {
    height: device.height*0.13,
    width: device.height*0.13,
    borderRadius: device.height*0.13*0.5
  },
  singerStyle: {
    marginLeft: (device.width-device.height*0.13*3)/4
  },
  suggestStyle: {
   marginLeft: 0 
  }
});