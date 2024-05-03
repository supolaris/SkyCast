import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { TenDaysWeatherForecastStyles } from './tenDaysWeatherForecastStyles';

import SunIcon from 'react-native-vector-icons/Feather';
import HorizontalLineIcon from 'react-native-vector-icons/Octicons';

const TenDaysWeatherForecast = () => {

    const tenDaysData = [
        {
            day: 'Today',
            icon: '',
            minTemperature: '15',
            progressBarStatus: '',
            maxTemperature: '29'
        },
        {
            day: 'Mon',
            icon: '',
            minTemperature: '18',
            progressBarStatus: '',
            maxTemperature: '27'
        },
        {
            day: 'Tue',
            icon: '',
            minTemperature: '20',
            progressBarStatus: '',
            maxTemperature: '25'
        },
        {
            day: 'Wed',
            icon: '',
            minTemperature: '22',
            progressBarStatus: '',
            maxTemperature: '24'
        },
        {
            day: 'Thu',
            icon: '',
            minTemperature: '23',
            progressBarStatus: '',
            maxTemperature: '26'
        },
        {
            day: 'Fri',
            icon: '',
            minTemperature: '24',
            progressBarStatus: '',
            maxTemperature: '27'
        },
        {
            day: 'Sat',
            icon: '',
            minTemperature: '26',
            progressBarStatus: '',
            maxTemperature: '25'
        },
    ];


    const renderTenDaysData = ({ item }: { item: any }) => {
        return (
            <View style={TenDaysWeatherForecastStyles.container}>

                <View style={TenDaysWeatherForecastStyles.dayTextView}>
                    <Text style={TenDaysWeatherForecastStyles.dayText}>{item.day}</Text>
                </View>

                <View style={TenDaysWeatherForecastStyles.temperatureiIconView}>
                    <SunIcon
                        style={TenDaysWeatherForecastStyles.temperatureIcon}
                        name="sun"
                        size={30}
                        color='yellow'
                    />
                </View>

                <View style={TenDaysWeatherForecastStyles.minTemperatureTextView}>
                    <Text style={TenDaysWeatherForecastStyles.minTemperatureText}>{item.minTemperature}</Text>
                </View>

                <View style={TenDaysWeatherForecastStyles.progressBarIconView}>
                    <HorizontalLineIcon
                        style={TenDaysWeatherForecastStyles.progressBarIcon}
                        name='horizontal-rule'
                        size={40}
                        color='orange'
                    />
                </View>

                <View style={TenDaysWeatherForecastStyles.maxTemperatureTextView}>
                    <Text style={TenDaysWeatherForecastStyles.maxTemperatureText}>{item.maxTemperature}</Text>
                </View>

            </View>
        )
    }




    return (
        <>
            <FlatList
                data={tenDaysData}
                renderItem={renderTenDaysData}
                keyExtractor={(item, index) => index.toString()}
            />
        </>
    )
}

export default TenDaysWeatherForecast;