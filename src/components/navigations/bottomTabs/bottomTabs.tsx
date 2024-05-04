
import { View, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SkyCastColors } from '../../skyCastColors/skyCastColors';

import HomeScreen from '../../../screens/homeScreen/homeScreen';
import SearchScreen from '../../../screens/searchScreen/searchScreen';

import HomeIcon from "react-native-vector-icons/AntDesign";
import SearchIcon from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

function MyBottomTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        bottom: 0,
        elevation: 0,
        height: 70,
        backgroundColor: SkyCastColors.primaryColor,
        paddingHorizontal: 15,
        paddingTop: 10
      }
    }}
    >

      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
                  <SearchIcon
                      name={'home'}
                      size={focused ? 25 : 24}
                      style={{
                          color: focused ? SkyCastColors.primaryColor : '#ffffff',
                          backgroundColor: focused ? '#ffffff' : SkyCastColors.primaryColor,
                          borderRadius: focused ? 100 : 0,
                          paddingHorizontal: focused ? 16 : 0,
                          paddingVertical: focused ? 4 : 0,
                      }}
                  />
          ),
          tabBarLabel: ''
      }}
        />

      <Tab.Screen
        name="Search_Screen"
        component={SearchScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
                  <HomeIcon
                      name={'search1'}
                      size={focused ? 25 : 24}
                      style={{
                          color: focused ? SkyCastColors.primaryColor : '#ffffff',
                          backgroundColor: focused ? '#ffffff' : SkyCastColors.primaryColor,
                          borderRadius: focused ? 100 : 0,
                          paddingHorizontal: focused ? 16 : 0,
                          paddingVertical: focused ? 4 : 0,
                      }}
                  />
          ),
          tabBarLabel: ''
      }}
        />

    </Tab.Navigator>
  );
}

export default MyBottomTabs;