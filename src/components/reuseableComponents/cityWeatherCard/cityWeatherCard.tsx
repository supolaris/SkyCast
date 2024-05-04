import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { CityWeatherCardStyles } from './cityWeatherCardStyles';

const CityWeatherData = [
    {
        cityName: 'Islamabad',
        time: '10PM',
        temperature: '22',
        description: 'Partly Cloudy',
        temperatureHigh: '25',
        temperatureLow: '15'
    },
    {
        cityName: 'San Francisco',
        time: '7AM',
        temperature: '12',
        description: 'Hail Strom',
        temperatureHigh: '15',
        temperatureLow: '10'
    },
]

const CityWeatherCard = () => {

    const renderCityWeatherData = ({item}: {item:any}) => {
        return (
            <View style={CityWeatherCardStyles.container}>
                <View style={CityWeatherCardStyles.locationTimeTemperatureView}>
                    <View style={CityWeatherCardStyles.locationTimeView}>
                        <Text style={CityWeatherCardStyles.locationText}>{item.cityName}</Text>
                        <Text style={CityWeatherCardStyles.timeText}>{item.time}</Text>
                    </View>
                    <View style={CityWeatherCardStyles.temperatureView}>
                        <Text style={CityWeatherCardStyles.temperatureText}>{item.temperature}<Text>&#176;</Text></Text>
                    </View>
                </View>

                <View style={CityWeatherCardStyles.descriptionTemperatureHighLowView}>
                    <View style={CityWeatherCardStyles.descriptionView}>
                        <Text style={CityWeatherCardStyles.descriptionText}>{item.description}</Text>
                    </View>
                    <View style={CityWeatherCardStyles.temperatureHighLowView}>
                        <Text style={CityWeatherCardStyles.temperatureHighText}>H:{item.temperatureHigh}<Text>&#176;</Text></Text>
                        <Text style={CityWeatherCardStyles.temperatureLowText}>L:{item.temperatureLow}<Text>&#176;</Text></Text>
                    </View>
                </View>

            </View>
        )
    }

  return (
    <>
      <FlatList
      data={CityWeatherData}
      renderItem={renderCityWeatherData}
      keyExtractor={(item, index) => index.toString()}
      />
    </>
  )
}

export default CityWeatherCard;