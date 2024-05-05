import { StyleSheet } from "react-native";
import { SkyCastColors } from "../../components/skyCastColors/skyCastColors";

export const WeatherDetailScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: SkyCastColors.primaryColor

    },
    locationTemperatureDetailView: {
        alignItems: 'center',
        paddingVertical: 40

    },
    locationText: {
        fontSize: 35,
        color: SkyCastColors.white

    },
    temperatureDetailView: {
        flexDirection: 'row',
        paddingLeft: 5

    },
    temperatureText: {
        fontSize: 20,
        color: SkyCastColors.white,
        borderRightWidth: 1,
        borderColor: SkyCastColors.white,
        marginRight: 15,
        paddingRight: 20



    },
    detailText: {
        fontSize: 20,
        color: SkyCastColors.white

    },
    iconTemperatureView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        borderColor: SkyCastColors.white,
        borderRadius: 10,
        paddingVertical: 10,
        marginHorizontal: 15,
        paddingHorizontal: 10
        

    },
    iconView: {
        paddingLeft: 5,
        paddingRight: 10

    },
    temperatureIconTextView: {


    },
    temperatureIconText: {
        fontSize: 16,
        color: SkyCastColors.white
    

    },
    weatherDetailCardView: {
        marginVertical: 10
    }
})