import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import DevAppsScreen from '../screens/DevAppsScreen';
import MeetingsScreen from '../screens/MeetingsScreen';
import LobbyingScreen from '../screens/LobbyingScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'DevApps':
              iconName = 'business';
              break;
            case 'Meetings':
              iconName = 'people';
              break;
            case 'Lobbying':
              iconName = 'briefcase';
              break;
            default:
              iconName = 'help';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: 'OttWatch' }}
      />
      <Tab.Screen 
        name="DevApps" 
        component={DevAppsScreen}
        options={{ title: 'Development' }}
      />
      <Tab.Screen 
        name="Meetings" 
        component={MeetingsScreen}
        options={{ title: 'Meetings' }}
      />
      <Tab.Screen 
        name="Lobbying" 
        component={LobbyingScreen}
        options={{ title: 'Lobbying' }}
      />
    </Tab.Navigator>
  );
}