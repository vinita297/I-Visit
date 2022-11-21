import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native'
import axios from "axios";
import styles from './styles';

function Home(props) {

    useEffect(() => {
        GetPersonsData()
    }, [])

    const [personsData, SetPersonsData] = useState([])
    const [limit, setLimit] = useState('')

    const GetPersonsData = (values) => {
        axios({
            method: 'get',
            url: 'https://dummyapi.io/data/v1/user?limit=10',
            headers: {
                'app-id': '6149ac924e29ce2338d6f836'
            }
        })
            .then(async (res) => {
                console.warn('---->', res.data);
                SetPersonsData(res.data.data)
                setLimit(res.data.limit)
            })
            .catch(error => {
                console.warn('error ---->', error.response.data.error);
            });
    }

    const LoadTransactions = () => {
        axios({
            method: 'get',
            url: `https://dummyapi.io/data/v1/user?limit=${limit + 10}`,
            headers: {
                'app-id': '6149ac924e29ce2338d6f836'
            }
        })
            .then(async (res) => {
                let loadedData = personsData.concat(res.data.data);
                SetPersonsData(loadedData)
                setLimit(res.data.limit)
            })
            .catch(error => {
                console.warn('error ---->', error.response);
            });
    }

    const keyExtractor = (item, index) => index.toString();

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => { props.navigation.navigate('PersonDetails', { id: item.id }) }}>
                <View style={styles.personDataContainer}>
                    <Image source={{ uri: item.picture }} style={styles.imageStyle} />

                    <Text style={styles.nameStyle}>
                        {item.title}. {item.firstName} {item.lastName}
                    </Text >
                    <Text style={styles.emailStyle} numberOfLines={1}>
                        {item.firstName.toLowerCase()}.{item.lastName.toLowerCase()}@example.com
                    </Text >
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.containerStyle}>
            <FlatList
                data={personsData}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                onEndReached={() => LoadTransactions()}
                onEndReachedThreshold={0.8}
                numColumns='2'
            />
        </View>
    );
};

export default Home;
