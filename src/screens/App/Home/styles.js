import {
    StyleSheet,
    Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        backgroundColor: '#c71585'
    },

    personDataContainer: {
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 2,
        height: height / 4,
        width: width / 2.3,
        padding: 5,
        paddingTop: 10,
        alignItems: 'center'
    },

    imageStyle: {
        height: height / 6.2,
        width: width / 3
    },

    nameStyle: {
        fontSize: 12,
        marginTop: 20,
        color: '#000'
    },

    emailStyle: {
        fontSize: 11
    }
})
