import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { WeatherDetailCardSyles } from './weatherDetailCardSyles';

const weatherDetailData = [
    {
        temperatureDetail: '',
        temperatureValue: '',
        temperatureDescription: ''
    }
]

const WeatherDetailCard = () => {


    const renderWeatherDetail = ({item}:{item:any}) => {
        return (
            <View style={WeatherDetailCardSyles.container}>
                <View style={WeatherDetailCardSyles.temperatureDetailView}>
                    <Text style={WeatherDetailCardSyles.temperatureDetailText}></Text>

                </View>

                <View style={WeatherDetailCardSyles.temperatureValueView}>
                    <Text style={WeatherDetailCardSyles.temperatureValueText}>{item.temperatureValue}</Text>

                </View>

                <View style={WeatherDetailCardSyles.temperatureDescriptionView}>
                    <Text style={WeatherDetailCardSyles.temperatureDescriptionText}></Text>

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