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
    flatListView: {
        width: '90%',
        marginTop: 5,
        marginBottom: 10,

    },
    touchable:{
        flex: 1,
        width: '100%',

    },
    suggestionText: {
        width: '100%',
        flex: 1, 
        fontSize: 18,
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 0.3,
        borderColor: '#ccc',
        marginTop: 5,
        borderRadius: 10
    },
    cityWeatherCardView: {
        marginVertical: 3
    }
})