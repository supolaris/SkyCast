import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import StartupScreen from '../../../screens/startupScreen/startupScreen';
import HomeScreen from '../../../screens/homeScreen/homeScreen';
import SearchScreen from '../../../screens/searchScreen/searchScreen';
import WeatherDetailScreen from '../../../screens/weatherDetailScreen/weatherDetailScreen';
import MyBottomTabs from '../bottomTabs/bottomTabs';

const Stack = createNativeStackNavigator();

function MyNativeStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>

                    
                <Stack.Screen
                    name="WeatherDetail_Screen"
                    component={WeatherDetailScreen} />

                <Stack.Screen
                    name="Startup_Screen"
                    component={StartupScreen} />

                <Stack.Screen
                    name="MyBottomTabs"
                    component={MyBottomTabs} />

                <Stack.Screen
                    name="Search_Screen"
                    component={SearchScreen} />

                <Stack.Screen
                    name="Home_Screen"
                    component={HomeScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MyNativeStack;