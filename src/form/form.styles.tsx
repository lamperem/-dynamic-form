import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight,
  },
  fielContainer: {
    marginBottom: 15,
  },
  label: {
    fontFamily: 'Helvetica',
    color: '#333',
    fontSize: 16,
    paddingBottom: 5,
  },
  field: {
    width: windowWidth - 30,
    borderWidth: 1,
    borderColor: '#34343450',
    borderRadius: 10,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  textarea: {
    textAlignVertical: 'top',
  },
});
