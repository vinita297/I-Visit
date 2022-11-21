import {
    StyleSheet,
    Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    containerStyle: {
        marginVertical: 10,
        marginHorizontal: 20
    },

    personDataContainer: {
        marginTop: 15,
        alignItems: 'flex-start'
    },

    imageStyle: {
        height: height / 4,
        width: width / 2
    },

    nameStyle: {
        fontSize: 17,
        color: '#000',
        fontWeight: 'bold'
    },

    emailStyle: {
        fontSize: 11
    },

    textStyle: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 14
    },

    viewStyle: {
        flexDirection: 'row',
        marginTop: 10
    },

    viewStyle2: {
        flexDirection: 'row',
        marginTop: 5
    },

    viewStyle3: {
        flexDirection: 'row',
        marginTop: 30
    },

    addressStyle: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 14,
        marginTop: 30
    }

})
