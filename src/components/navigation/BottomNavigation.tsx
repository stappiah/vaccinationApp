import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../common/Colors';
import Account from '../../screens/Account';
import Appointment from '../../screens/Appointment';

export default function BottomNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="homeTab"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={27}
              style={{
                color: focused ? Colors.primary : Colors.black,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="appointment"
        component={Appointment}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'calendar-month' : 'calendar-blank'}
              size={27}
              style={{
                color: focused ? Colors.primary : Colors.black,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'account' : 'account-outline'}
              size={27}
              style={{
                color: focused ? Colors.primary : Colors.black,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
