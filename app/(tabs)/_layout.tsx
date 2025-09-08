import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'


const icons = {
  home: require('../../assets/icons/home.png'),
  search: require('../../assets/icons/search.png'),
  saved: require('../../assets/icons/save.png'),
  profile: require('../../assets/icons/profile.png'),
}

const TabIcon = ({ focused, icon, title, color }: any) => {
  return (
    <View className="mt-6 items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        style={{ tintColor: color }}
        className="w-6 h-6"
      />
      <Text 
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs `} 
        style={{ color: color }}
      >
        {title}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%', 
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarShowLabel: false, // Hides the default labels
        tabBarActiveTintColor: '#FFA001', // Color for the active tab
        tabBarInactiveTintColor: '#CDCDE0', // Color for inactive tabs
        tabBarStyle: {
          backgroundColor: '#0f0D23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '0f0d23',
        }
      }}
    >
      <Tabs.Screen 
        name='index' // This should match your file name, e.g., index.jsx
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => ( // Use parentheses for implicit return
            <TabIcon 
              focused={focused}
              icon={icons.home}
              title="Home"
              color={color} // Pass the color provided by react-navigation
            />
          )
        }}
      />
      <Tabs.Screen 
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              focused={focused}
              icon={icons.search}
              title="Search"
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen 
        name='saved'
        options={{
          title: 'Saved',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              focused={focused}
              icon={icons.saved}
              title="Saved"
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen 
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              focused={focused}
              icon={icons.profile}
              title="Profile"
              color={color}
            />
          )
        }}
      />
    </Tabs>
  )
}

export default TabsLayout