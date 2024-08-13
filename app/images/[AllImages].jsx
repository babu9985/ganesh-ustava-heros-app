import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import ImageView from "react-native-image-viewing";

const ListAllImages = () => {
    const navigation = useNavigation();
    const { AllImages } = useLocalSearchParams();
    const [imageList, setImagesList] = useState([]);
    const [visible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: 'All Images'
        })
    })

    useEffect(() => {
        getImages();
    }, []);

    const getImages = async () => {
        setImagesList([]);
        const qry = query(collection(db, 'Ganesh_ustava_heros_1'));
        const queryResponse = await getDocs(qry);
        queryResponse.forEach((data) => {
            setImagesList((prev) => [...prev, data.data()])
        })
    }
    return (
        <SafeAreaView style={{ flex: 1 ,backgroundColor:'#265687',padding:10}}>
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
        height: 150,
        borderRadius: 12,
        margin: 5,
    }
})