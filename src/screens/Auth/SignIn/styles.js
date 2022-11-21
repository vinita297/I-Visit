import {
    StyleSheet,
    Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    containerStyle: {
        flex: 1,
        marginVertical: 20,
        alignItems: 'center',
    },

    inputStyle: {
        borderBottomWidth: 0.8,
        marginTop: 5,
        borderBottomColor: "#000",
        height: height / 15,
        width: width / 1.2,
        paddingHorizontal: 10
    },

    buttonContainerStyle: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#FF8C00',
        marginTop: height / 14,
        width: width / 2,
        alignSelf: 'center'
    },

    buttonTextStyle: {
        alignSelf: 'center',
        color: '#fff'
    }
})
