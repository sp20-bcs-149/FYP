import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CategoryItem from './CategoryItem'

export default function CategoryList({setSelectedCategory}) {
  const categoryList=[
    {
        id:1,
        name:'Clinic',
        value:'doctor',
        icon:require('./../../../assets/vac.png')
    },
    {
        id:2,
        name:'Hospital',
        value:'hospital',
        icon:require('./../../../assets/BA.png')
    },{
      id:3,
      name:'Vaccine Center',
      value:'vaccination_Center',
      icon:require('./../../../assets/vaccination.png')
  },
    
]
  return (
    <View style={{marginTop:15}}>
      <Text style={{
        fontSize:20,
        fontFamily:'raleway-bold',
        
      }} >Select Top Category</Text>

      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop:5}}
        renderItem={({item})=>(
          <TouchableOpacity 
          onPress={()=>setSelectedCategory(item.value)} >
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
      
    </View>
  )
}