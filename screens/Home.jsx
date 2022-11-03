import React , {useState} from 'react'
import {  StyleSheet, View  , FlatList , Modal  , Text} from 'react-native'
import {globaStyles} from  '../styles/Gobal'
import Card from '../components/Card'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import  ReviewForm from '../components/ReviewForm'

export default  Home = ({navigation}) =>  {

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);
    const [openModal , setOpenModal] =  useState(false);

    const  modalOpen = () => {
      setOpenModal(true)
    }

    const addReview = (review) => {
      review.key = Math.random().toString();
      console.log(review)
      setReviews(prevstate => [review , ...prevstate])
      setOpenModal(false)
    }

    return (
      <View style={globaStyles.container}>
        <Modal visible={openModal} animationType='slide'>
          <View style={styles.modalContent}>
          <MaterialIcon style={styles.closebtn} name='close' size={40}  onPress={()=>setOpenModal(false)}/>
          <ReviewForm addReview={addReview}/>
          </View>
        </Modal>

        <MaterialIcon  style={styles.add} name='add' size={40}  onPress={modalOpen}/>
        <FlatList style={styles.list} data={reviews}
        keyExtractor={(review) => review.key}
        renderItem = {({item}) =>  <Card review={item} navigation={navigation}/>}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    list  : {
        flex : 1
    },
    add : {
      alignSelf : 'center' ,
      marginVertical :30,
      backgroundColor: '#fff',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    modalContent : {
      flex : 1,
      padding : 20
    },
    closebtn: {
      marginBottom : 40
    }
})
