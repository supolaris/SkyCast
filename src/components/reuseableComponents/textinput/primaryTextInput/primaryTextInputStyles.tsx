import { StyleSheet } from "react-native";
import { SkyCastColors } from "../../../skyCastColors/skyCastColors";

export const primaryTextInputStyles = StyleSheet.create({
    conatiner: {
        borderWidth: 0.5,
        borderColor: SkyCastColors.white,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%'

    },
    icon: {
        paddingLeft: 10,
        paddingRight: 5

    },
    textInput: {
        color: SkyCastColors.white,
        fontSize: 18

    }
})