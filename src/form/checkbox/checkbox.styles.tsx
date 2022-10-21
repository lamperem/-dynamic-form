import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
  },
  checkbox: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Helvetica',
    color: '#333',
    fontSize: 14,
    textTransform: 'uppercase',
    paddingStart: 5,
  },
  box: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#333333',
  },
});
