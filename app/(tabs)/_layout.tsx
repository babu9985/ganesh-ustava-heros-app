import { Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={{headerShown : false,tabBarActiveTintColor: '#265687',
      tabBarInactiveTintColor: 'gray',}}>
      <Tabs.Screen name='home' options={{
        tabBarLabel :'Home',
        tabBarIcon :({color})=><FontAwesome5 name="home" size={24} color={color} />
      }}></Tabs.Screen>
      <Tabs.Screen name='explore' options={{
        tabBarLabel :'Explore',
        tabBarIcon :({color})=><Ionicons name="list-circle" size={24} color={color} />
      }}></Tabs.Screen>
      <Tabs.Screen name='profile' options={{
        tabBarLabel :'Profile',
        tabBarIcon :({color})=><FontAwesome name="user" size={24} color={color} />
      }}></Tabs.Screen>
    </Tabs>
  );
}
