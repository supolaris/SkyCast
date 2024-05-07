import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Text, StatusBar, TextInput, FlatList, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

import { AuthContext } from '../../components/utilities/useContext/useContext';

import { SkyCastColors } from '../../components/skyCastColors/skyCastColors';

import { SearchScreenStyles } from './searchScreenStyles';
import LinearGradient from 'react-native-linear-gradient';

import PrimaryTextInput from '../../components/reuseableComponents/textinput/primaryTextInput/primaryTextInput';
import CityWeatherCard from '../../components/reuseableComponents/cityWeatherCard/cityWeatherCard';

import { useNavigation } from '@react-navigation/native';

import citiesData from '../../components/utilities/citiesJson/cities.json';
import { myWeatherAPI } from '../../components/utilities/weatherAPI/weatherAPI';

import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

import GetLocation from 'react-native-get-location';
import { PermissionsAndroid } from 'react-native';

const SearchScreen = () => {

    const authCtx = useContext(AuthContext);

    const navigation = useNavigation();

    // const [searchCity, setSearchCity] = useState('');
    const [inputText, setInputText] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    const [cityWeatherDetail, setCityWeatherDetail] = useState('');
    const [newYorkCityWeatherDetail, setNewYorkCityWeatherDetail] = useState('');

    const [searchCityDetail, setSearchCityDetail] = useState('');

    // const [savedCityData, setSavedCityData] = useState('');

    // const [myLocation, setMyLocation] = useState('');

    const refVariable = useRef(0);
    let [variable, setVariable] = useState(0);


    const updateValue = () => {

        refVariable.current += 1;
        console.log("RefVariable: " + refVariable.current);
        setVariable(variable + 1);
        console.log("Variable:  " + variable);
    }


    useEffect(() => {

        // const myCity = () => {
        //     fetch(`http://api.weatherapi.com/v1/current.json?key=${myWeatherAPI}&q=Islamabad`)
        //         .then((response) => response.json())
        //         .then((data) => {
        //             console.log("Weather Details: " + JSON.stringify(data));
        //             setCityWeatherDetail(data);
        //         })
        //         .then((error) => {
        //             console.log("Error " + error);
        //         })
        // }

        const myCityAxios = async () => {
            axios.get(`http://api.weatherapi.com/v1/current.json?key=${myWeatherAPI}&q=Islamabad`)
                .then((response) => {
                    //console.log("RESPONSE BACK : " + JSON.stringify(response.data))
                    setCityWeatherDetail(response.data);
                })
                .then((error) => {
                    console.log("Error: " + error);
                })
        }

        const newYorkCity = () => {
            fetch(`http://api.weatherapi.com/v1/current.json?key=${myWeatherAPI}&q=New York City`)
                .then((response) => response.json())
                .then((data) => {
                    // console.log("Weather Details: " + JSON.stringify(data));
                    setNewYorkCityWeatherDetail(data);
                })
                .then((error) => {
                    console.log("Error " + error);
                })
        }

        // const searchCity = async () => {

        //     await AsyncStorage.setItem('searchedCity', inputText);

        //     fetch(`http://api.weatherapi.com/v1/current.json?key=${myWeatherAPI}&q=${inputText}`)
        //         .then((response) => response.json())

        //         .then((data) => {
        //             //  console.log("Weather Details: " + JSON.stringify(data));
        //             setSearchCityDetail(data);
        //         })
        //         .then((error) => {
        //             console.log("Error " + error);
        //         })
        // }

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


        //myCity();
        myCityAxios();
        newYorkCity();
        //searchCity();
        //sevenDaysData();

    }, [])

    // Function to filter cities based on user input
    const filterCities = (text: any) => {
        const filteredCities = citiesData.filter((city: any) =>
            city.name.toLowerCase().includes(text.toLowerCase())
        );

        setSuggestions(filteredCities);
        //console.log(text);
        setInputText(text);
    };

    // Function to handle city selection
    const handleCitySelection = async (city: any) => {
        await AsyncStorage.setItem('searchedCity', city.name);



        const cityyy = city.name;
        const authCity = authCtx.cityName(cityyy);

        console.log("Auth Context City Name: " + authCity);
        console.log("City name" + city.name);
        setSelectedCity(city);
        setInputText(city.name); // Set the input text to the selected city name
        setSuggestions([]); // Clear suggestions
        setInputText('');
        navigation.navigate('HomeScreen');
    };

    // const getLocation = async () => {
    //     try {
    //         const granted = await PermissionsAndroid.request(
    //             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //             {
    //                 title: "Location Permission",
    //                 message:
    //                     "App needs access to your location.",
    //                 buttonNeutral: "Ask Me Later",
    //                 buttonNegative: "Cancel",
    //                 buttonPositive: "OK"
    //             }
    //         );

    //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //             console.log("Location permission granted");

    //             // Get location here
    //         } else {
    //             console.log("Location permission denied");
    //         }
    //     } catch (err) {
    //         console.warn(err);
    //     }
    // };

    return (
        <View style={SearchScreenStyles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <LinearGradient colors={[SkyCastColors.primaryColor, SkyCastColors.navyBlue]}
                style={SearchScreenStyles.linearGradient}
            >

                <View style={SearchScreenStyles.titleTextView}>
                    <Text style={SearchScreenStyles.titleText}>Weather</Text>

                    {/* <Pressable onPress={updateValue}>
                        <Text style={{ fontSize: 18, color: 'white' }}>update value</Text>
                    </Pressable>

                    <Text style={{ fontSize: 18, color: 'white' }}>{"Variable Value: " + variable}</Text> */}


                    {/* <View>
                    <Pressable 
                    onPress={getLocation}
                    >
                        <Text>Get Location</Text>
                    </Pressable>
                </View> */}
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
                                    onPress={() => {
                                        handleCitySelection(item)
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

                {newYorkCityWeatherDetail &&
                    (
                        <View style={SearchScreenStyles.cityWeatherCardView}>
                            <CityWeatherCard
                                cityWeatherDetail={newYorkCityWeatherDetail}
                            // cityName={cityWeatherDetail.location.name}
                            // region={cityWeatherDetail.location.region}
                            />
                        </View>
                    )
                }
            </LinearGradient>
        </View>
    )
}

export default SearchScreen;
