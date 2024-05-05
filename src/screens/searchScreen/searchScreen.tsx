import React, { useState } from 'react';
import { View, Text, StatusBar, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import { SearchScreenStyles } from './searchScreenStyles';

import PrimaryTextInput from '../../components/reuseableComponents/textinput/primaryTextInput/primaryTextInput';
import CityWeatherCard from '../../components/reuseableComponents/cityWeatherCard/cityWeatherCard';

import citiesData from '../../components/utilities/citiesJson/cities.json';

const SearchScreen = () => {

    const [searchCity, setSearchCity] = useState('');
    const [inputText, setInputText] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    // Function to filter cities based on user input
    const filterCities = (text: any) => {
        const filteredCities = citiesData.filter((city: any) =>
            city.name.toLowerCase().includes(text.toLowerCase())
        );
        setSuggestions(filteredCities);
        setInputText(text);
    };

    // Function to handle city selection
    const handleCitySelection = (city: any) => {
        setSelectedCity(city);
        setInputText(city.name); // Set the input text to the selected city name
        setSuggestions([]); // Clear suggestions
    };

    return (
        <View style={SearchScreenStyles.container}>
            <StatusBar translucent backgroundColor="transparent" />

            <View style={styles.container}>
                {/* <TextInput
                    style={styles.input}
                    placeholder="Type a city name"
                    value={inputText}
                    onChangeText={filterCities}
                /> */}
                {/* <FlatList
                    data={suggestions}
                    renderItem={({ item }: { item: any }) => (
                        <TouchableOpacity onPress={() => handleCitySelection(item)}>
                            <Text style={styles.suggestion}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                /> */}
                {/* <Text style={styles.selectedCity}>
                    Selected City: {selectedCity ? selectedCity.name : 'None'}
                </Text> */}
            </View>

            <View style={SearchScreenStyles.titleTextView}>
                <Text style={SearchScreenStyles.titleText}>Weather</Text>
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
                        onPress={() => handleCitySelection(item)}>
                            <Text style={SearchScreenStyles.suggestionText}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />

                </View>
            </View>

            <View style={SearchScreenStyles.cityWeatherCardView}>
                <CityWeatherCard />
            </View>

        </View>
    )
}

export default SearchScreen;




const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    suggestion: {
        fontSize: 18,
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    selectedCity: {
        marginTop: 10,
        fontWeight: 'bold',
    },
});