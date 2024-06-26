import { StyleSheet } from "react-native";
import { SkyCastColors } from "../../components/skyCastColors/skyCastColors";


export const HomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: SkyCastColors.primaryColor
        

    },
    linearGradient: {
        flex: 1,

    },
    cityTemperatureDescriptionAltLatView: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        paddingBottom: 20

    },
    cityText: {
        fontSize: 50,
        color: SkyCastColors.white,

    },
    countryText: {
        fontSize: 16,
        color: SkyCastColors.white,

    },
    temperatureText: {
        fontSize: 60,
        color: SkyCastColors.white,
        fontWeight: '300'

    },
    descriptionText: {
        fontSize: 28,
        color: SkyCastColors.white

    },
    altLatView: {
        marginTop: 5,
        flexDirection: 'row',

    },
    altitudeText: {
        fontSize: 18,
        color: SkyCastColors.white,
        marginRight: 10

    },
    latitudeText: {
        fontSize: 16,
        color: SkyCastColors.white,
        marginLeft: 10

    },
    weatherDetailTodayScheduleView: {
        flex: 2,
        borderWidth: 0.5,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 10
        
    },
    weatherDetailView: {
        borderBottomWidth: 0.5,
        padding: 20
        
    },
    weatherDetailText: {
        fontSize: 18,
        color: SkyCastColors.white

    },
    todayScheduleView: {

    },
    tenDaysScheduleTitleView: {
        flex: 1,
        borderWidth: 0.5,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 5,
        paddingBottom: 5
    },
    tenDaysTitleTextView: {
        borderBottomWidth: 0.5,
        padding: 20

    },
    tenDaysTitleText: {
        fontSize: 18,
        color: SkyCastColors.white

    },
    tenDaysScheduleView: {
        
    },
    weatherDetailCardView: {
        paddingHorizontal: 15,
        paddingBottom: 10
    },






    weatherDetailCardView: {
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
    descriptionTexta: {
        fontSize: 18,
        color: SkyCastColors.white

    },
    view2: {
        marginHorizontal: 50

    },

})