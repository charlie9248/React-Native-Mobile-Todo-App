import React from 'react'
import { Text, View , StyleSheet  , Image , ImageBackground} from 'react-native'

export default Header = () => {
    return (
      <ImageBackground source={require('../assets/images/game_bg.png')} style={styles.container}>
        <Image style={styles.img} source={require('../assets/images/heart_logo.png')}/>
        <Text style={styles.headerText}>Practice</Text>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
  container : {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText : {    
    flexDirection : 'row',
    color : 'black',
    fontWeight : 'bold',
    fontSize : 20,
  },

  img : {
    width : 26,
    height : 26,
    marginHorizontal : 10
  }
})

