import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../config/FirebaseConfig';
import { setItem } from '../../store/AsyncStorage';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Spinner from 'react-native-loading-spinner-overlay';
import { useRouter } from 'expo-router';


const Profile = () => {
    const [imageList, setImageList] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    // const [text, setText] = useState('Uploading, Pls wait....');

    const onImageUpload = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            // allowsEditing: true,
            // aspect: [4, 3],
            quality: 1,
            allowsMultipleSelection: true,
        });

        if (!result.canceled) {
            setImageList(result.assets.map((asset) => asset.uri));
        }
        return [];
    }

    const uploadMultipleImages = async () => {
        setLoading(true)
        const uris = imageList;
        const uploadPromises = uris.map((uri) => uploadImages(uri));
        const downloadURLs = await Promise.all(uploadPromises);
        setLoading(false);
        // console.log('Uploaded image URLs:', downloadURLs);
        downloadURLs.map((image)=> saveImageData(image));
        router.push('/home')
    }

    const saveImageData = async (url) => {
        setLoading(true)
        await setDoc(doc(db, 'Ganesh_ustava_heros_1', uuidv4()), {
            uri: url,
        });
        setLoading(false)
    }

    const uploadImages = async (uri) => {
        try {
            //genetare a unique filename
            const fileName = uuidv4();
            // Convert image URI to Blob
            const response = await fetch(uri);
            const blob = await response.blob();

            // Reference to the Firebase storage location
            const storageRef = ref(storage, `Ganesh-ustava-heros/${fileName}`);
            // Upload the file
            await uploadBytes(storageRef, blob);
            // Get the download URL
            const downloadURL = await getDownloadURL(storageRef);
            return downloadURL;
        } catch (error) {
            console.error('Error uploading image:', error);
            return null;
        }
    }

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Spinner
                    visible={loading}
                    textContent="Uploading, Pls wait...."
                    textStyle={{color :'#fff'}}
                    size={50} animation="fade" overlayColor="rgba(0,0,0,0.5)" color="#3498db"
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'bold', fontSize: 25, color: '#265687',marginBottom : 20 }}>Select Images to Upload</Text>
            <TouchableOpacity onPress={() => onImageUpload()}>
                <FontAwesome6 name="camera-retro" size={75} color="#265687" />
            </TouchableOpacity>
            <View style={{ flex: 1, marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList numColumns={3} data={imageList} renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={{ width: 100, height: 100, margin: 10, borderRadius: 10 }}></Image>
                )}></FlatList>
            </View>
            <View>
                <TouchableOpacity onPress={() => uploadMultipleImages()} style={{ backgroundColor: '#265687', borderRadius: 12, padding: 15, marginTop: 20, marginBottom: 10 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'semibold', color: '#fff' }}>Click to Upload</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    }
})