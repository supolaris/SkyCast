import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { WeatherDetailCardSyles } from './weatherDetailCardSyles';

import SunIcon from 'react-native-vector-icons/Feather';
import { SkyCastColors } from '../../skyCastColors/skyCastColors';

const weatherDetailData = [
    {
        title: 'UV INDEX',
        value: '0',
        temperatureDescription: 'Low for rest of the day'
    },
    {
        title: 'SUNRISE',
        value: '6:28 AM',
        temperatureDescription: 'Sunset 6:10 PM'
    },
]

const WeatherDetailCard = () => {

    // const { location } = props.searchCityDetail;
    // const { current } = props.searchCityDetail;
    // const { condition } = props.searchCityDetail;

    const renderWeatherDetail = ({ item }: { item: any }) => {
        return (
            <View style={WeatherDetailCardSyles.container}>

                <View style={WeatherDetailCardSyles.titleView}>
                    <View style={WeatherDetailCardSyles.iconView}>
                        <SunIcon
                            name='sun'
                            color={SkyCastColors.white}
                            size={25}
                        />
                    </View>
                    <View>
                        <Text style={WeatherDetailCardSyles.titleText}>{item.title}</Text>

                    </View>


                </View>

                <View style={WeatherDetailCardSyles.valueView}>
                    <Text style={WeatherDetailCardSyles.valueText}>{item.value}</Text>

                </View>

                <View style={WeatherDetailCardSyles.descriptionView}>
                    <Text style={WeatherDetailCardSyles.descriptionText}>{item.temperatureDescription}</Text>

                </View>

            </View>
        )
    }

    return (
        <>
            <FlatList
                data={weatherDetailData}
                renderItem={renderWeatherDetail}
                keyExtractor={(item, index) => index.toString()}
            />
        </>
    )
}

export default WeatherDetailCard;