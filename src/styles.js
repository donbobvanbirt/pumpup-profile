import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex      : 1,
    marginTop : 50,
    // backgroundColor : '#fff',
    // alignItems      : 'center',
    // justifyContent  : 'center',
  },
  header: {
    display           : 'flex',
    flexDirection     : 'row',
    borderBottomColor : 'gray',
    borderBottomWidth : 1,
  },
  profileImage: {
    height : 100,
    width  : 100,
    // borderRadius: 50,
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
  lineBreak: {
    width  : 1500,
    height : 1
  },
  grid: {
    flexDirection : 'row',
    alignItems    : 'flex-start',
    flexWrap      : 'wrap',
    padding       : 10,
  }
})
