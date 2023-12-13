import React from 'react'
import { StyleSheet, View } from 'react-native'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import Color from '../Shared/Color'
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native-web';
const Home=() =>{
  return (
    <View>

        <View  style={styles.header}>
            <Text style={styles.appName} >
             Talon News
            </Text>

            <Ionicons name="notifications-outline" size={24} color="black" />
        
        </View>
        
       
        <CategoryTextSlider />
        

    </View>
  )
}

const styles = StyleSheet.create({
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Color.primary
    }  ,
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20 ,
        padding: 20
    }
  })
export default Home
