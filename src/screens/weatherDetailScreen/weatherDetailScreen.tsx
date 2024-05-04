import React from 'react';
import { View, Text } from 'react-native';

import { WeatherDetailScreenStyles } from './weatherDetailScreenStyles';

import WeatherDetailCard from '../../components/reuseableComponents/weatherDetailCard/weatherDetailCard';

import TemperatureIcon from 'react-native-vector-icons/FontAwesome6';
import { SkyCastColors } from '../../components/skyCastColors/skyCastColors';

const WeatherDetailScreen = () => {
    return (
        <View style={WeatherDetailScreenStyles.container}>

            <View style={WeatherDetailScreenStyles.locationTemperatureDetailView}>
                <Text style={WeatherDetailScreenStyles.locationText}>Islamabad</Text>
                <View style={WeatherDetailScreenStyles.temperatureDetailView}>
                    <Text style={WeatherDetailScreenStyles.temperatureText}>21<Text>&#176;</Text></Text>
                    <Text style={WeatherDetailScreenStyles.detailText}>Partly Cloudy</Text>
                </View>
            </View>

            <View style={WeatherDetailScreenStyles.iconTemperatureView}>
                <View style={WeatherDetailScreenStyles.iconView}>
                    <TemperatureIcon
                        name='temperature-full'
                        color='orange'
                        size={20}
                    />

                </View>
                <View style={WeatherDetailScreenStyles.temperatureIconTextView}>
                    <Text style={WeatherDetailScreenStyles.temperatureIconText}>TEMPERATURE</Text>
                </View>

            </View>

        </View>
    )
}

export default WeatherDetailScreen;