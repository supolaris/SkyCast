import { StyleSheet } from "react-native";
import { SkyCastColors } from "../../skyCastColors/skyCastColors";

export const WeatherDetailCardSyles = StyleSheet.create({
    container: {
        backgroundColor: SkyCastColors.transparentWhite,
        marginVertical: 5,
        padding: 10,
        borderRadius: 10
        //flexDirection: 'row'

    },
    view1: {
        marginHorizontal: 50

    },
    titleView: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    iconView: {
        marginRight: 10

    },
    titleText: {
        fontSize: 20,
        color: SkyCastColors.white

    },
    valueView: {
        marginTop: 10

    },
    valueText: {
        fontSize: 18,
        color: SkyCastColors.white

    },
    descriptionView: {
        marginTop: 20

    },
    descriptionText: {
        fontSize: 18,
        color: SkyCastColors.white

    },
    view2: {
        marginHorizontal: 50

    },
})