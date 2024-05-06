import { StyleSheet } from "react-native";
import { SkyCastColors } from "../../skyCastColors/skyCastColors";

export const CityWeatherCardStyles = StyleSheet.create({
    container: {
        backgroundColor: SkyCastColors.transparentWhite,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 15

    },
    locationTimeTemperatureView: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    locationTimeView: {
        paddingLeft: 10

    },
    locationText: {
        fontSize: 30,
        color: SkyCastColors.white

    },
    timeText: {
        fontSize: 16,
        color: SkyCastColors.white

    },
    temperatureView: {
        paddingRight: 10,

    },
    temperatureText: {
        fontSize: 50,
        color: SkyCastColors.white

    },
    descriptionTemperatureHighLowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
        marginTop: 30

    },
    descriptionView: {
        paddingLeft: 10

    },
    descriptionText: {
        fontSize: 18,
        color: SkyCastColors.white

    },
    temperatureHighLowView: {
        flex: 1,
        flexDirection: 'row',
       // paddingLeft: 50,
       paddingHorizontal: 10,
        justifyContent: 'space-between'

    },
    temperatureHighText: {
        fontSize: 18,
        color: SkyCastColors.white,
        paddingRight: 5

    },
    temperatureLowText: {
        fontSize: 18,
        color: SkyCastColors.white,
        paddingLeft: 5

    },
})