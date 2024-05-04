import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { HomeScreenStyles } from './homeScreenStyles';

import TodayWeatherForcast from '../../components/reuseableComponents/todayWeatherForcast/todayWeatherForcast';
import TenDaysWeatherForecast from '../../components/reuseableComponents/tenDaysWeatherForecast/tenDaysWeatherForecast';

import StartUpLottie from '../../components/lottie/startUpLottie';


const HomeScreen = () => {
    return (
        <ScrollView style={HomeScreenStyles.container}>
            <View style={HomeScreenStyles.cityTemperatureDescriptionAltLatView}>
                <Text style={HomeScreenStyles.cityText}>Islamabad</Text>
                <Text style={HomeScreenStyles.temperatureText}>20<Text>&#176;</Text></Text>
                <Text style={HomeScreenStyles.descriptionText}>Partly Cloudy</Text>
                <View style={HomeScreenStyles.altLatView}>
                    <Text style={HomeScreenStyles.altitudeText}>H: 29<Text>&#176;</Text></Text>
                    <Text style={HomeScreenStyles.latitudeText}>H: 15<Text>&#176;</Text></Text>

                </View>
            </View>

            <View style={HomeScreenStyles.weatherDetailTodayScheduleView}>
                <View style={HomeScreenStyles.weatherDetailView}>
                    <Text style={HomeScreenStyles.weatherDetailText}>Cloudy condition from 1AM-9PM, with showers expected at 9AM</Text>
                </View>

                <View style={HomeScreenStyles.todayScheduleView}>
                    <TodayWeatherForcast />

                </View>


            </View>
            <View style={HomeScreenStyles.tenDaysScheduleTitleView}>
                <View style={HomeScreenStyles.tenDaysTitleTextView}>
                    <Text style={HomeScreenStyles.tenDaysTitleText}>10-Days FORECAST</Text>
                </View>

                <TenDaysWeatherForecast />
                
            </View>

        </ScrollView>
    )
}

export default HomeScreen;