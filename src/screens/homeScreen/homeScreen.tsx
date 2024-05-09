import React, { useState, useEffect, useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';

import { SkyCastColors } from '../../components/skyCastColors/skyCastColors';

import LinearGradient from 'react-native-linear-gradient';

import { HomeScreenStyles } from './homeScreenStyles';

import TodayWeatherForcast from '../../components/reuseableComponents/todayWeatherForcast/todayWeatherForcast';
import TenDaysWeatherForecast from '../../components/reuseableComponents/tenDaysWeatherForecast/tenDaysWeatherForecast';
import WeatherDetailCard from '../../components/reuseableComponents/weatherDetailCard/weatherDetailCard';

import SunIcon from 'react-native-vector-icons/Feather';

import { myWeatherAPI } from '../../components/utilities/weatherAPI/weatherAPI';


const HomeScreen = () => {

    const route = useRoute();
    const city = route.params?.city ? route.params.city : "Islamabad";
    const [searchedCityWeatherDetail, setSearchedCityWeatherDetail] = useState({
        location: "",
        current: "",
        condition: ""

    });

    useEffect(() => {

        const weatherDetail = async () => {
            fetch(`http://api.weatherapi.com/v1/current.json?key=${myWeatherAPI}&q=${city}`)
                .then((response) => response.json())
                .then((data) => {
                    setSearchedCityWeatherDetail(data);
                })
                .then((error) => {
                    console.log("Error " + error);
                })
        }
        weatherDetail();
    }, [city])

    return (
        <ScrollView style={HomeScreenStyles.container}>
            <LinearGradient colors={[SkyCastColors.primaryColor, SkyCastColors.navyBlue]}
                style={HomeScreenStyles.linearGradient}
            >
                <View style={HomeScreenStyles.cityTemperatureDescriptionAltLatView}>
                    <Text style={HomeScreenStyles.cityText}>{searchedCityWeatherDetail.location && searchedCityWeatherDetail.location.name}</Text>
                    <Text style={HomeScreenStyles.countryText}>{searchedCityWeatherDetail.location && searchedCityWeatherDetail.location.country}</Text>
                    <Text style={HomeScreenStyles.temperatureText}>20<Text>&#176;</Text></Text>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={HomeScreenStyles.descriptionText}>{searchedCityWeatherDetail.current && searchedCityWeatherDetail.current.condition && searchedCityWeatherDetail.current.condition.text}</Text>
                        {/* <Image 
                source={require(storedCityIcon)}
                /> */}
                    </View>
                    <View style={HomeScreenStyles.altLatView}>
                        <Text style={HomeScreenStyles.altitudeText}>Latitude: {searchedCityWeatherDetail.location && searchedCityWeatherDetail.location.lat}</Text>
                        <Text style={HomeScreenStyles.latitudeText}>Longitude: {searchedCityWeatherDetail.location && searchedCityWeatherDetail.location.lon}</Text>

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

                <View style={[HomeScreenStyles.weatherDetailCardView, {marginHorizontal: 10}]}>
                    <View style={HomeScreenStyles.titleView}>
                        <View style={HomeScreenStyles.iconView}>
                            <SunIcon
                                name='sun'
                                color={SkyCastColors.white}
                                size={25}
                            />
                        </View>
                        <View>
                            <Text style={HomeScreenStyles.titleText}>Humidity</Text>
                        </View>
                    </View>
                    <View style={HomeScreenStyles.valueView}>
                        <Text style={HomeScreenStyles.valueText}>{searchedCityWeatherDetail.current && searchedCityWeatherDetail.current.humidity}%</Text>
                    </View>
                    <View style={HomeScreenStyles.descriptionView}>
                        <Text style={HomeScreenStyles.descriptionText}>{searchedCityWeatherDetail.location && searchedCityWeatherDetail.location.name}</Text>
                    </View>
                </View>

            </LinearGradient>
        </ScrollView>
    )
}

export default HomeScreen;