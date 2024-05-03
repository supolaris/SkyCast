import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../../screens/homeScreen/homeScreen';

const Tab = createBottomTabNavigator();

function MyBottomTabs() {
  return (
    <Tab.Navigator>

      <Tab.Screen 
      name="HomeScreen" 
      component={HomeScreen} />

    </Tab.Navigator>
  );
}

export default MyBottomTabs;