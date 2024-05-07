import { StyleSheet } from "react-native";
import { SkyCastColors } from "../../skyCastColors/skyCastColors";

export const TodayWeatherForcastStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingRight: 7,
        marginRight: 20,
        alignItems: 'center',
        paddingVertical: 20

    },
    timeText: {
        fontSize: 20,
        color: SkyCastColors.white
    },
    icon: {
        paddingVertical: 20

    },
    temperatureText: {
        fontSize: 20,
        color: SkyCastColors.white

    },
})