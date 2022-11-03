import React from 'react'
import { Text, View  , StyleSheet , TouchableOpacity , Image} from 'react-native'

export default  Card = ({review , navigation}) =>  {

    const goToDetailsScreen = () => {
        navigation.navigate('Details' , {data : review})
    }
    return (
      <TouchableOpacity   onPress={goToDetailsScreen}>
        <View style={styles.card}>
          <Text style={styles.cardContent}>{review.title}</Text>
        </View>
      </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
      },
      cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
      }
})

