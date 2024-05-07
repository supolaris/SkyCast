import { StyleSheet } from "react-native";
import { SkyCastColors } from "../../../skyCastColors/skyCastColors";

export const PrimaryButtonStyles = StyleSheet.create({
    conatiner: {
        flex: 1,
        width: '60%'

    },
    pressable: {
        backgroundColor: SkyCastColors.primaryColor,
        borderRadius: 10,
        padding: 10

    },
    pressableText: {
        color: SkyCastColors.white,
        fontSize: 22,
        textAlign: 'center',
        //fontWeight: 'bold'

    }
})