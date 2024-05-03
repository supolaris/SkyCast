import { StyleSheet } from "react-native";
import { SkyCastColors } from "../../../skyCastColors/skyCastColors";

export const PrimaryButtonStyles = StyleSheet.create({
    conatiner: {
        flex: 1,
        width: '60%'

    },
    pressable: {
        backgroundColor: SkyCastColors.lightPink,
       // width: '90%',
        borderRadius: 10,
        padding: 10


    },
    pressableText: {
        color: SkyCastColors.black,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'

    }
})