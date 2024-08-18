import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import ImageView from "react-native-image-viewing";
import { images } from '../../constants/Data';
import Spinner from 'react-native-loading-spinner-overlay';

const ListAllImages = ({ data }) => {
    const navigation = useNavigation();
    const { AllImages } = useLocalSearchParams();
    const [imageList, setImagesList] = useState([]);
    const [visible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: AllImages
        })
    })

    useEffect(() => {
        getImages();
    }, []);

    const getImages = async () => {
        let qry = ''
        setImagesList([]);
        setLoading(true);
        if (AllImages === 'Ganesh Nimazzanam-2023') {
            qry = query(collection(db, 'Ganesh ustava heros 2023'));
        } else if (AllImages === 'Ganesh Nimazzanam-2019') {
            qry = query(collection(db, 'Ganesh_ustava_heros_03-09-2019'));
        } else if (AllImages === 'Ganesh Nimazzanam-2019') {
            qry = query(collection(db, 'Ganesh ustava heros 2020'));
        }else if (AllImages === 'Ganesh Nimazzanam-2018') {
            qry = query(collection(db, 'Ganesh ustava heros 2018'));
        }else if (AllImages === "Lord Ganesh's Wallpapers") {
            qry = query(collection(db, 'Lord ganesh wallpapers'));
        }
        const queryResponse = await getDocs(qry);
        queryResponse.forEach((data) => {
            setImagesList((prev) => [...prev, data.data()])
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
        <SafeAreaView style={{ flex: 1, backgroundColor: '#265687', padding: 10 }}>
            <FlatList numColumns={2} data={imageList} showsVerticalScrollIndicator={false} renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => { setIsVisible(true), setIndex(index) }}>
                    <Image source={{ uri: item.uri }} style={styles.img}></Image>
                </TouchableOpacity>
            )}></FlatList>
            <ImageView
                images={imageList}
                imageIndex={index}
                visible={visible}
                onRequestClose={() => setIsVisible(false)}
            />
        </SafeAreaView>
    )
}

export default ListAllImages

const styles = StyleSheet.create({
    img: {
        width: 180,
        height: 120,
        borderRadius: 12,
        margin: 5,
        objectFit: 'cover'
    }
})