import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Spinner from 'react-native-loading-spinner-overlay';
import ImageCard from './ImageCard';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../config/FirebaseConfig';

const Slider_4 = () => {
    const [imageList, setImagesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const name = "Ganesh Nimazzanam-2018"

    useEffect(() => {
        getImages();
    }, []);

    const getImages = async () => {
        setImagesList([]);
        setLoading(true)
        const qry = query(collection(db, 'Ganesh ustava heros 2018'));
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

export default Slider_4

const styles = StyleSheet.create({})