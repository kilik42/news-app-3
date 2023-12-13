import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-web';
import {StyleSheet,  TouchableOpacity} from 'react-native';

const  CategoryTextSlider=() =>{

  const [news, setNews] = React.useState([]);
  const categoryList =[
    {
      id:1,
      name:'Business'
    },
    {
      id:2,
      name:'Entertainment'
    },
    {
      id:3,
      name:'General'
    },
    {
      id:4,
      name:'Health'
    },
    {
      id:5,
      name:'Science'
    },
    {
      id:6,
      name:'Sports'
    },
    {
      id:7,
      name:'Technology'
    }
  ];
  return (
    <View >
          <FlatList 
          data={categoryList}
          keyExtractor={item=>item.id.toString()}
          renderItem={({item})=>(
            <TouchableOpacity >
                 {item.name}
              </TouchableOpacity>
          )}
            />
          
    </View>
  )
}

export default CategoryTextSlider
