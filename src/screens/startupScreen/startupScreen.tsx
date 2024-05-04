import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { StartupScreenSyles } from './startupScreenStyles';
import { SkyCastColors } from '../../components/skyCastColors/skyCastColors';

import StartUpLottie from '../../components/lottie/startUpLottie';

import PrimaryButton from '../../components/reuseableComponents/buttons/primaryButton/primaryButton';

import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';


const StartupScreen = () => {

    const navigation = useNavigation();

    const onGetStartedPressed = () => {
        navigation.navigate('MyBottomTabs');
    }

    return (
        <View style={StartupScreenSyles.container}>
            <LinearGradient colors={[SkyCastColors.primaryColor, SkyCastColors.navyBlue]}
                style={StartupScreenSyles.linearGradient}
            >
                <View style={StartupScreenSyles.titleView}>
                    <Text style={StartupScreenSyles.titleText}>Sky Cast</Text>
                    <Text style={StartupScreenSyles.descriptionText}>Your Window to the Skies.</Text>
                </View>

                <PrimaryButton
                onPress={onGetStartedPressed}
                    buttonText="Get Started"
                />
                
            </LinearGradient>
        </View>

    )
}

export default StartupScreen;