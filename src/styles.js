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
    marginTop: 15,
  },
  name: {
    fontSize: 20,
  },
  bio: {
    fontSize: 10,
  },
})
