import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../config/FirebaseConfig'
import { useRouter } from 'expo-router';
import Spinner from 'react-native-loading-spinner-overlay';
const Slider_1 = () => {
    const [imageList, setImagesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const name = "Ganesh Nimazzanam-2019";
    const router = useRouter();

    useEffect(() => {
        getImages();
    }, []);

    const getImages = async () => {
        setImagesList([]);
        setLoading(true)
        const qry = query(collection(db, 'Ganesh_ustava_heros_03-09-2019'));
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

export default Slider_1

const styles = StyleSheet.create({

})