import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';

import { SearchScreenStyles } from './searchScreenStyles';

import PrimaryTextInput from '../../components/reuseableComponents/textinput/primaryTextInput/primaryTextInput';
import CityWeatherCard from '../../components/reuseableComponents/cityWeatherCard/cityWeatherCard';


const SearchScreen = () => {

    const [searchCity, setSearchCity] = useState('');


    return (
        <View style={SearchScreenStyles.container}>
            <StatusBar translucent backgroundColor="transparent" />

            <View style={SearchScreenStyles.titleTextView}>
                <Text style={SearchScreenStyles.titleText}>Weather</Text>
            </View>

            <View style={SearchScreenStyles.textInputView}>
                <PrimaryTextInput
                    placeholder='Search for a city'
                    value={searchCity}
                    onChangeText={setSearchCity}
                    placeholderTextColor='white'
                />
            </View>

            <View style={SearchScreenStyles.cityWeatherCardView}>
                <CityWeatherCard />
            </View>

        </View>
    )
}

export default SearchScreen;