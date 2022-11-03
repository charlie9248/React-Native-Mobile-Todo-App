import React  from 'react'
import { Text, View , StyleSheet ,Image} from 'react-native'
import  {images} from '../styles/Gobal'

export default ReviewDetails = ({route}) =>  {

  const {data}  = route.params;
  const rating  = data.rating
  console.log(rating)
  console.log(data)
    return (
      <View style={styles.card}>
        <Text style={styles.cardContent}>{data.title} = {data.rating}</Text>
        <View style={styles.rating}>
            <Text>Rating :</Text>
            <Image source={images.rating[rating]}/>
          </View>
      </View>
    )
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
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
})

