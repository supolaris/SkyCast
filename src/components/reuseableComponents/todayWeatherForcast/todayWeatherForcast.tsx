import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { SkyCastColors } from '../../skyCastColors/skyCastColors';


import Icon from 'react-native-vector-icons/FontAwesome';

import CloudIcon from 'react-native-vector-icons/Feather';
import { TodayWeatherForcastStyles } from './todayWeatherForcastStyles';


const perHourData = [
    {
        time: 'Now',
        icon: '',
        temperature: '21',
    },
    {
        time: '10AM',
        icon: '',
        temperature: '20',
    },
    {
        time: '11AM',
        icon: '',
        temperature: '19',
    },
    {
        time: '12AM',
        icon: '',
        temperature: '21',
    },
    {
        time: '1PM',
        icon: '',
        temperature: '22',
    },
    {
        time: '2PM',
        icon: '',
        temperature: '22',
    },
    {
        time: '3PM',
        icon: '',
        temperature: '23',
    },
    {
        time: '4PM',
        icon: '',
        temperature: '21',
    },
]


const TodayWeatherForcast = () => {


    const renderPerhourData = ({ item }: { item: any }) => {
        return (
            <View style={TodayWeatherForcastStyles.container}>
                <Text style={TodayWeatherForcastStyles.timeText}>{item.time}</Text>
                <CloudIcon
                style={TodayWeatherForcastStyles.icon}
                    name='cloud'
                    color={SkyCastColors.white}
                    size={40}
                />
                <Text style={TodayWeatherForcastStyles.temperatureText}>{item.temperature}<Text>&#176;</Text></Text>
            </View>
        )
    }

    return (
        <>
            <FlatList
                horizontal
                data={perHourData}
                renderItem={renderPerhourData}
                keyExtractor={(item, index) => index.toString()}
            />
        </>
    )
}

export default TodayWeatherForcast;