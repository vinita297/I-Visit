import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import styles from './styles';
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginValidationSchema = yup.object().shape({
    email: yup.string().required("Please enter the email"),
    password: yup.string().required("Please enter the password"),
});

function SignIn(props) {

    const onPressLoginBtn = (values) => {
        axios({
            method: 'post',
            url: 'https://reqres.in/api/login',
            data: {
                email: values.email,
                password: values.password
            }
        })
            .then(async (res) => {
                console.warn('---->', res.data.token);
                await AsyncStorage.setItem('loginToken', `${res.data.token}`)
                props.navigation.navigate('AppStack')
            })
            .catch(error => {
                console.warn('error ---->', error.response.data.error);
                alert(error.response.data.error)
            });
    }

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validateOnMount={true}
            onSubmit={(values, { resetForm }) => {
                onPressLoginBtn(values);

                resetForm({ values: "" });
            }}
            validationSchema={loginValidationSchema}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                touched,
                errors,
                isValid,
            }) => (
                <View style={styles.containerStyle}>
                    <TextInput
                        // value={email}
                        placeholder='Email'
                        // onChangeText={(e) => setEmail(e)}
                        style={styles.inputStyle}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                    />
                    {errors.email && touched.email && (
                        <Text
                            style={{
                                color: "red",
                                fontSize: 11,
                                fontWeight: "bold",
                                marginBottom: 20,
                            }}
                        >
                            {errors.email}
                        </Text>
                    )}
                    <TextInput
                        // value={password}
                        placeholder='Password'
                        // onChangeText={(e) => setPassword(e)}
                        style={styles.inputStyle}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                    />
                    {errors.password && touched.password && (
                        <Text
                            style={{
                                color: "red",
                                fontSize: 11,
                                fontWeight: "bold",
                                marginBottom: 20,
                            }}
                        >
                            {errors.password}
                        </Text>
                    )}
                    <TouchableOpacity onPress={handleSubmit}>
                        <View style={styles.buttonContainerStyle}>
                            <Text style={styles.buttonTextStyle}>GO</Text>
                        </View>
                    </TouchableOpacity >
                </View >
            )}
        </Formik>
    );
};

export default SignIn;
