import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { CityWeatherCardStyles } from './cityWeatherCardStyles';

const CityWeatherCard = (props: { cityWeatherDetail: any }) => {

    const renderCityWeatherData = () => {
        const { location } = props.cityWeatherDetail;
        const { current } = props.cityWeatherDetail;
        const { condition } = props.cityWeatherDetail;
        return (
            <View style={CityWeatherCardStyles.container}>
                <View style={CityWeatherCardStyles.locationTimeTemperatureView}>
                    <View style={CityWeatherCardStyles.locationTimeView}>
                        <Text style={CityWeatherCardStyles.locationText}>{location.name}</Text>
                        <Text style={CityWeatherCardStyles.timeText}>{location.country}</Text>
                    </View>
                    <View style={CityWeatherCardStyles.temperatureView}>
                        <Text style={CityWeatherCardStyles.temperatureText}>{current.temp_c}<Text>&#176;</Text></Text>
                    </View>
                </View>

                <View style={CityWeatherCardStyles.descriptionTemperatureHighLowView}>

                    <View style={CityWeatherCardStyles.temperatureHighLowView}>
                        <View>
                            <Text style={CityWeatherCardStyles.temperatureHighText}>Humidity:  {current.humidity}<Text>%</Text></Text>
                        </View>
                        <View>
                            <Text style={CityWeatherCardStyles.temperatureLowText}>Feels like:  {current.feelslike_c}<Text>&#176;</Text></Text>
                        </View>

                    </View>
                </View>

            </View>
        )
    }

    return (
        <>
            <FlatList
                data={[props.cityWeatherDetail]}
                renderItem={renderCityWeatherData}
                keyExtractor={(item, index) => index.toString()}
            />
        </>
    )
}

export default CityWeatherCard;