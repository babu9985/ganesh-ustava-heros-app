import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
const Header = () => {
    return (
        <View style={styles.header}>
            <LinearGradient colors={['rgba(131,58,180,0.8100490196078431)', 'rgba(134,15,15,1)', 'rgba(252,176,69,1)']} style={{ flexDirection: 'row', alignItems: 'center', background: 'rgb(131,58,180)',padding:10,borderRadius:15}} end={{x:0.2,y:0.2}}>
                <Image source={require('../assets/images/ganeshlogo2.jpg')} style={styles.image}></Image>
                <Text style={styles.txt}>Jai bolo Ganesh Maharaj ki</Text>
            </LinearGradient>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
    },
    image: {
        width: 45,
        height: 45,
        resizeMode :'cover',
        borderRadius: 99
    },
    txt: {
        fontFamily: 'bold',
        fontSize: 25,
        color: '#fff',
        marginLeft : 20,
        fontStyle :'italic'
    }

})