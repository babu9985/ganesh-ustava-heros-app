import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function ImageCard({ imageList,name }) {
    const router = useRouter();
    return (
        <View style={{ flex: 1 }}>
            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'regular', fontSize: 20, color: '#fff', textAlign: 'center' }}>{name}</Text>
                <TouchableOpacity onPress={() => router.push(`/images/${name}`)}>
                    <Text style={{ fontFamily: 'regular', fontSize: 13, color: '#9eecf6', textAlign: 'center', paddingHorizontal: 10, marginTop: 3, textDecorationLine: 'underline' }}>View All</Text>
                </TouchableOpacity>
            </View>
            <FlatList initialNumToRender={3} showsHorizontalScrollIndicator={false} maxToRenderPerBatch={3} horizontal={true} windowSize={10} data={imageList.slice(0, 4)} renderItem={({ item }) => (
                <TouchableOpacity>
                    <Image source={{ uri: item.uri }} style={styles.img}></Image>
                </TouchableOpacity>
            )}></FlatList>
        </View>
    )
}

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