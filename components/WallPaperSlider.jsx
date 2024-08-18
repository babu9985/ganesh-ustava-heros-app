import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router';
import ImageCard from './ImageCard';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../config/FirebaseConfig';
import Spinner from 'react-native-loading-spinner-overlay';


const WallPaperSlider = () => {
    const [imageList, setImagesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const name = "Lord Ganesh's Wallpapers";
    const router = useRouter();

    useEffect(() => {
        getImages();
    }, []);

    const getImages = async () => {
        setImagesList([]);
        setLoading(true)
        const qry = query(collection(db, 'Lord ganesh wallpapers'));
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

export default WallPaperSlider

const styles = StyleSheet.create({
    img: {
        width: 150,
        height: 100,
        borderRadius: 12,
        margin: 5,
        objectFit: 'cover',
    },
})