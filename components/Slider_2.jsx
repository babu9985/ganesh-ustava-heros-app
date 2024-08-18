import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ImageCard from './ImageCard'
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../config/FirebaseConfig';
import Spinner from 'react-native-loading-spinner-overlay';

const Slider_2 = () => {
    const [imageList, setImagesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const name = "Ganesh Nimazzanam-2023"
    const router = useRouter();

    useEffect(() => {
        getImages();
    }, []);

    const getImages = async () => {
        setImagesList([]);
        setLoading(true)
        const qry = query(collection(db, 'Ganesh ustava heros 2023'));
        const queryResponse = await getDocs(qry);
        queryResponse.forEach((data) => {
            setImagesList((prev) => [...prev, data.data()]);
        })
        setLoading(false);
    }

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Spinner
                    visible={loading}
                    size={50} animation="fade" overlayColor="rgba(0,0,0,0.5)" color="#3498db"
                />
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <ImageCard imageList={imageList} name={name}></ImageCard>
        </View >
    )
}

export default Slider_2

const styles = StyleSheet.create({})