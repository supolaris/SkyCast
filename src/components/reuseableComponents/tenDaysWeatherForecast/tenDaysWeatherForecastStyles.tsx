import { StyleSheet } from "react-native";
import { SkyCastColors } from "../../skyCastColors/skyCastColors";

export const TenDaysWeatherForecastStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,

    },
    dayTextView: {
        flex: 1.5,

    },
    dayText: {
        fontSize: 25,
        color: SkyCastColors.white,


    },
    temperatureiIconView: {
        flex: 1,

    },
    temperatureIcon: {


    },
    minTemperatureTextView: {
        flex: 1,

    },
    minTemperatureText: {
        fontSize: 25,
        color: SkyCastColors.white,


    },
    progressBarIconView: {
        flex: 1,

    },
    progressBarIcon: {


    },
    maxTemperatureTextView: {
        flex: 1,

    },
    maxTemperatureText: {
        fontSize: 25,
        color: SkyCastColors.white,


    },
})