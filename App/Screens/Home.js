import React from 'react'
import { StyleSheet, View } from 'react-native'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import Color from '../Shared/Color'
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native-web';
const Home=() =>{
  return (
    <View>

        <View>
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
    }   
    })
export default Home
