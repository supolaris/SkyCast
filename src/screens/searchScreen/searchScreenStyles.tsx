import { StyleSheet } from "react-native";
import { SkyCastColors } from "../../components/skyCastColors/skyCastColors";

export const SearchScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: SkyCastColors.primaryColor,
        paddingTop: 40

    },
    titleTextView: {
        paddingLeft: 20,
        paddingVertical: 20

    },
    titleText:{
        fontSize: 45,
        color: SkyCastColors.white,
        fontWeight: 'bold'

    },
    textInputView: {
        alignItems: 'center'
    },
    cityWeatherCardView: {
        marginVertical: 10
    }
})