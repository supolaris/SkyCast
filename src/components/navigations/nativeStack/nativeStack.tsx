import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../../../screens/homeScreen/homeScreen';
import StartupScreen from '../../../screens/startupScreen/startupScreen';

const Stack = createNativeStackNavigator();

function MyNativeStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            >

                <Stack.Screen
                    name="Startup_Screen"
                    component={StartupScreen} />

                <Stack.Screen
                    name="Home_Screen"
                    component={HomeScreen} />



            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MyNativeStack;