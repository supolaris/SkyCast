import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import { HomeScreenStyles } from './homeScreenStyles';

import TodayWeatherForcast from '../../components/reuseableComponents/todayWeatherForcast/todayWeatherForcast';
import TenDaysWeatherForecast from '../../components/reuseableComponents/tenDaysWeatherForecast/tenDaysWeatherForecast';
import WeatherDetailCard from '../../components/reuseableComponents/weatherDetailCard/weatherDetailCard';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { myWeatherAPI } from '../../components/utilities/weatherAPI/weatherAPI';

import StartUpLottie from '../../components/lottie/startUpLottie';

const HomeScreen = () => {

    const [cityWeatherDetail, setCityWeatherDetail] = useState('');
    const [storedCityIcon , setStoredCityIcon] = useState('');

    useEffect(() => {

        const weatherDetail = async () => {

            const searchCity = await AsyncStorage.getItem('searchedCity');

            fetch(`http://api.weatherapi.com/v1/current.json?key=${myWeatherAPI}&q=${searchCity}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log("Searched City Details: " + JSON.stringify(data));
                    setCityWeatherDetail(data);
                })
                .then((error) => {
                    console.log("Error " + error);
                })

                //const weatherIcon = 'http://' + cityWeatherDetail.current.condition.icon;
        }

        weatherDetail();

    }, [])

    return (
        <ScrollView style={HomeScreenStyles.container}>
            <View style={HomeScreenStyles.cityTemperatureDescriptionAltLatView}>
                <Text style={HomeScreenStyles.cityText}>{cityWeatherDetail.location && cityWeatherDetail.location.name}</Text>
                <Text style={HomeScreenStyles.countryText}>{cityWeatherDetail.location && cityWeatherDetail.location.country}</Text>
                <Text style={HomeScreenStyles.temperatureText}>20<Text>&#176;</Text></Text>
                <View style={{alignItems: 'center'}}>
                <Text style={HomeScreenStyles.descriptionText}>{cityWeatherDetail.current && cityWeatherDetail.current.condition && cityWeatherDetail.current.condition.text}</Text>
                {/* <Image 
                source={require(storedCityIcon)}
                /> */}
                </View>
                <View style={HomeScreenStyles.altLatView}>
                    <Text style={HomeScreenStyles.altitudeText}>Latitude: {cityWeatherDetail.location && cityWeatherDetail.location.lat}</Text>
                    <Text style={HomeScreenStyles.latitudeText}>Longitude: {cityWeatherDetail.location && cityWeatherDetail.location.lon}</Text>

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

            <View style={HomeScreenStyles.weatherDetailCardView}>
                <WeatherDetailCard
                // cityWeatherDetail={cityWeatherDetail}
                />
            </View>

        </ScrollView>
    )
}

export default HomeScreen;