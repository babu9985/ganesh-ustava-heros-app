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

    const router = useRouter();

    useEffect(() => {
        getImages();
    }, []);

    const getImages = async () => {
        setImagesList([]);
        setLoading(true)
        const qry = query(collection(db, 'Ganesh_ustava_heros_1'));
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
            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'regular', fontSize: 20, color: '#fff', textAlign: 'center' }}>Lord Ganesh's Wallpapers</Text>
                <TouchableOpacity onPress={() => router.push('/images/AllImages')}>
                    <Text style={{ fontFamily: 'regular', fontSize: 13, color: '#9eecf6', textAlign: 'center', paddingHorizontal: 10, marginTop: 3, textDecorationLine: 'underline' }}>View All</Text>
                </TouchableOpacity>
            </View>
            {
                !loading && (
                    <FlatList initialNumToRender={3} showsHorizontalScrollIndicator={false} maxToRenderPerBatch={3} horizontal={true} windowSize={10} data={imageList.slice(0, 3)} renderItem={({ item }) => (
                        <TouchableOpacity>
                            <Image source={{ uri: item.uri }} style={styles.img}></Image>
                        </TouchableOpacity>
                    )}></FlatList>
                )
            }

        </View >
    )
}

export default Slider_1

const styles = StyleSheet.create({
    img: {
        width: 150,
        height: 100,
        borderRadius: 12,
        margin: 5,
        objectFit: 'cover',
    },
    loaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinnerTextStyle: {
        color: '#00ff00',
    },
})