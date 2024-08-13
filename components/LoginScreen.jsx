import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

const LoginScreen = ({setisLogin}) => {
    return (
        <View>
            <View style={styles.imageView}>
                <Image source={require('../assets/images/ganesh1.png')} ></Image>
            </View>
            <View style={{ backgroundColor: '#fff', padding: 20 }}>
                <Text style={{ color: '#f77234', fontSize: 30, textAlign: 'center', fontFamily: 'extrabold', fontStyle: 'italic' }}>Welcome To </Text>
                <Text style={{ color: '#fa2ae5', fontSize: 35, textAlign: 'center', fontFamily: 'bold', fontStyle: 'italic' }}>Ganesh Ustava Heros</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>setisLogin(true)}>
                <Text style={{ textAlign: 'center', fontSize: 25, fontFamily: 'regular', color: '#fff' }}>Let's get Started</Text>
            </TouchableOpacity>
            <View>
                <Text style={{ fontFamily: 'regular', marginTop: 130, textAlign: 'center' }}>Designed by @Ganesh Babu</Text>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
    },
    imageView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    image: {
        width: 300,
        height: 300,
    },
    btn: {
        backgroundColor: '#1442d9',
        padding: 16,
        borderRadius: 99,
        marginTop: 20
    }
})