import React from 'react'
import { Text, View , StyleSheet } from 'react-native'
import {globaStyles} from  '../styles/Gobal'
export default  About = ({route ,navigation}) =>  {
  const { name  , age} = route.params;

    return (
      <View>
        <Text style={globaStyles.container}>This is About screen   {name} {age} </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container  : {
        padding :20
    }
})

