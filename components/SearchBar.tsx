import React from 'react'
import { Image, TextInput, View } from 'react-native'

const icons = {
  search: require('../assets/icons/search.png')
}

interface Props{
  placeholder: string,
  onPress?: ()=>void,
  onChangeText?: (text: string)=>void,
  value: string
}

const SearchBar = ({placeholder, onPress, value, onChangeText}: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image source={icons.search} className='size-5 ' resizeMode='contain' tintColor='#ab8bff' />
      <TextInput 
      onPress={onPress}  
      placeholder= {placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor='#ab8bff'
      className='flex-1 ml-2 text-white'
      />
    </View>
  )
}

export default SearchBar