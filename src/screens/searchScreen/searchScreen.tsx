import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import { SearchScreenStyles } from './searchScreenStyles';

import PrimaryTextInput from '../../components/reuseableComponents/textinput/primaryTextInput/primaryTextInput';
import CityWeatherCard from '../../components/reuseableComponents/cityWeatherCard/cityWeatherCard';

import { useNavigation } from '@react-navigation/native';

import citiesData from '../../components/utilities/citiesJson/cities.json';
import { myWeatherAPI } from '../../components/utilities/weatherAPI/weatherAPI';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchScreen = () => {

    const navigation = useNavigation();

    const [searchCity, setSearchCity] = useState('');
    const [inputText, setInputText] = useState('Lahore');
    const [selectedCity, setSelectedCity] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    const [cityWeatherDetail, setCityWeatherDetail] = useState('');

    const [searchCityDetail, setSearchCityDetail] = useState('');

    const [savedCityData, setSavedCityData] = useState('');

    useEffect(() => {

        const myCity = () => {
            fetch(`http://api.weatherapi.com/v1/current.json?key=${myWeatherAPI}&q=Islamabad`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Weather Details: " + JSON.stringify(data));
                setCityWeatherDetail(data);
            })
            .then((error) => {
                console.log("Error " + error);
            })
        }

        const searchCity = async () => {

            await AsyncStorage.setItem('searchedCity', inputText);
            
            fetch(`http://api.weatherapi.com/v1/current.json?key=${myWeatherAPI}&q=${inputText}`)
            .then((response) => response.json())
            
            .then((data) => {
                console.log("Weather Details: " + JSON.stringify(data));
                setSearchCityDetail(data);
            })
            .then((error) => {
                console.log("Error " + error);
            })
        }

        // const sevenDaysData = () => {

        //     fetch(`http://api.weatherapi.com/v1/current.json?key=${myWeatherAPI}&q=07112&days=7`)
            
        //     .then((response) => response.json())
            
        //     .then((data) => {
        //         console.log("7 Data Weather Details: " + JSON.stringify(data));
        //         setSearchCityDetail(data);
        //     })
        //     .then((error) => {
        //         console.log("Error " + error);
        //     })

        // }

        myCity();
        searchCity();
        //sevenDaysData();

    }, [])

    const TouchableOpacityFunciton = () => {

    }

    // Function to filter cities based on user input
    const filterCities = (text: any) => {
        const filteredCities = citiesData.filter((city: any) =>
            city.name.toLowerCase().includes(text.toLowerCase())
        );
        
        setSuggestions(filteredCities);
        setInputText(text);
    };

    // Function to handle city selection
    const handleCitySelection = async (city: any) => {
        await AsyncStorage.setItem('searchedCity', city.name);
        setSelectedCity(city);
        setInputText(city.name); // Set the input text to the selected city name
        setSuggestions([]); // Clear suggestions
    };

    return (
        <View style={SearchScreenStyles.container}>
            <StatusBar translucent backgroundColor="transparent" />

            <View style={SearchScreenStyles.titleTextView}>
                <Text style={SearchScreenStyles.titleText}>Weather</Text>
                {/* <Text>{cityWeatherDetail.location.name}</Text> */}

            </View>

            <View style={SearchScreenStyles.textInputView}>
                <PrimaryTextInput
                    placeholder='Search for a city'
                    value={inputText}
                    onChangeText={filterCities}
                    placeholderTextColor='white'
                />
                <View style={SearchScreenStyles.flatListView}>
                    <FlatList
                        data={suggestions}
                        renderItem={({ item }: { item: any }) => (
                            <TouchableOpacity
                                style={SearchScreenStyles.touchable}
                                onPress={ () => {
                                    handleCitySelection(item)
                                    navigation.navigate('HomeScreen');
                                    
                                }}>
                                <Text style={SearchScreenStyles.suggestionText}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />

                </View>
            </View>

            {cityWeatherDetail &&
                (
                    <View style={SearchScreenStyles.cityWeatherCardView}>
                        <CityWeatherCard 
                        cityWeatherDetail={cityWeatherDetail}
                        // cityName={cityWeatherDetail.location.name}
                        // region={cityWeatherDetail.location.region}
                    />
                    </View>

                )
            }

        </View>
    )
}

export default SearchScreen;
