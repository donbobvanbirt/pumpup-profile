import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display           : 'flex',
    flexDirection     : 'row',
    borderBottomColor : 'gray',
    borderBottomWidth : 1,
    marginTop : 25,
  },
  profileImage: {
    height : 100,
    width  : 100,
  },
  headerContent: {
    marginTop      : 11,
    flex           : 1,
    justifyContent : 'flex-start',
  },
  name: {
    fontSize: 20,
  },
  bio: {
    flexDirection : 'row',
    alignItems    : 'flex-start',
    flexWrap      : 'wrap',
    paddingBottom : 10,
  },
  bioWord: {
    fontSize: 12,
  },
  bioLink: {
    color    : 'blue',
    fontSize : 12,
  },
  lineBreak : {
    width   : 1500,
    height  : 1
  },
  grid: {
    flexDirection : 'row',
    alignItems    : 'flex-start',
    justifyContent: 'center',
    flexWrap      : 'wrap',
    flex          : 1,
  },
  gridImageContainer: {
    padding: 1
  },
  imageScroll: {
    flex          : 1,
    flexDirection : 'row',
  },
  spinnerContainer: {
    flex           : 1,
    alignItems     : 'center',
    justifyContent : 'center',
  }
})
