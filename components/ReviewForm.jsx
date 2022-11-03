import React from 'react'
import { Text, View  , StyleSheet , Button , TextInput} from 'react-native'
import { Formik } from 'formik'
import {globaStyles} from  '../styles/Gobal'

export default  ReviewForm = ({addReview}) => {

    return (
      <View>
        <Formik
        initialValues={{title : '' , body : '' ,  rating : ''}}
        onSubmit={(value)=> {
            console.log(value)
            addReview(value)
        }}
        >
            {({values , handleChange , handleSubmit}) => (
                <View>
                    <TextInput style={styles.input} placeholder='enter title' value={values.title} onChangeText={handleChange('title')}/>
                    <TextInput style={styles.input} multiline placeholder='enter body' value={values.body} onChangeText={handleChange('body')}/>
                    <TextInput style={[styles.input , styles.lastbtn ]} keyboardType='numeric' placeholder='rating 1 - 5' value={values.rating} onChangeText={handleChange('rating')}/>
                    <Button title='Submit'   onPress={handleSubmit}/>
                </View>
            )}
        </Formik>
      </View>
    )
}

const styles = StyleSheet.create({
  input : {
    borderColor : '#ececec',
    borderWidth : 1,
    borderRadius : 6,
    marginVertical : 5
  },
  lastbtn : {
    marginBottom : 40
  }
})

