import { StyleSheet } from "react-native";
import { SkyCastColors } from "../../components/skyCastColors/skyCastColors";


export const StartupScreenSyles = StyleSheet.create({
    container: {
        flex: 1,
        

        
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',

    },
    titleView: {
        flex: 2,
        justifyContent: 'center'
        
    },
    titleText: {
        fontSize: 60,
        fontWeight: 'bold',
        color: SkyCastColors.white

    },

    descriptionText: {
        fontSize: 20,
        color: SkyCastColors.white,
        textAlign: 'center'
        
    },
    lottieView: {
        flex: 2,
        alignItems: 'center',
        width: '100%'
    }



})