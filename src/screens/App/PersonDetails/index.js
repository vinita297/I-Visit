import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    Text
} from 'react-native'
import axios from "axios";
import styles from './styles';

function PersonDetails(props) {

    useEffect(() => {
        console.warn(props.route.params.id)
        GetPersonsData()
    }, [])

    const [data, setData] = useState('')

    const GetPersonsData = (values) => {
        axios({
            method: 'get',
            url: `https://dummyapi.io/data/v1/user/${props.route.params.id}`,
            headers: {
                'app-id': '6149ac924e29ce2338d6f836'
            }
        })
            .then(async (res) => {
                console.warn('---->', res.data);
                setData(res.data)


            })
            .catch(error => {
                console.warn('error ---->', error.response.data.error);
            });
    }

    return (
        <View style={styles.containerStyle}>
            <View style={{ alignSelf: 'center' }}>
                <Image source={{ uri: data.picture }} style={styles.imageStyle} />
            </View>
            <View style={styles.personDataContainer}>
                <Text>{data.id}</Text>
                <Text style={styles.nameStyle}>{data.title}. {data.firstName} {data.lastName}</Text >
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Gender: </Text>
                    <Text>{data.gender}</Text>
                </View>
                <View style={styles.viewStyle2}>
                    <Text style={styles.textStyle}>Date Of Birth: </Text>
                    <Text>{data.dateOfBirth}</Text>
                </View>
                <View style={styles.viewStyle2}>
                    <Text style={styles.textStyle}>Register Date: </Text>
                    <Text>{data.registerDate}</Text>
                </View>
                <View style={styles.viewStyle3}>
                    <Text style={styles.textStyle}>Email: </Text>
                    <Text>
                        <Text>{data.email}</Text>
                    </Text>
                </View>
                <View style={styles.viewStyle2}>
                    <Text style={styles.textStyle}>Phone: </Text>
                    <Text>{data.phone}</Text>
                </View>

                {data.location ?
                    <>
                        <Text style={styles.addressStyle}>Address</Text>
                        <Text>
                            {data.location.country}, {data.location.state}, {data.location.street}, {data.location.city}
                        </Text>
                    </>
                    :
                    null
                }
            </View>
        </View>
    );
};

export default PersonDetails;
