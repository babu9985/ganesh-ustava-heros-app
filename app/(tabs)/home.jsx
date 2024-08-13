import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Slider_1 from '../../components/Slider_1'
import { getDownloadURL, ref } from 'firebase/storage'
import { db, storage } from '../../config/FirebaseConfig'
import { getAllItems, getItem } from '../../store/AsyncStorage'
import { collection, getDocs, query } from 'firebase/firestore'

const Home = () => {

    

    return (
        <ScrollView style={{ backgroundColor: '#265687', flex: 1}}>
            <Header></Header>
            <Slider_1></Slider_1>
            {/* <FlatList data={imageList} renderItem={({ item ,index}) => (
                <Slider_1 item={item} key={index}></Slider_1>
            )}></FlatList> */}
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        flex: 1
    }
})