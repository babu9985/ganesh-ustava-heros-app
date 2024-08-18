import {ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Slider_1 from '../../components/Slider_1'
import WallPaperSlider from '../../components/WallPaperSlider'
import Slider_2 from '../../components/Slider_2'
import Slider_3 from '../../components/Slider_3'
import Slider_4 from '../../components/Slider_4'

const Home = () => {


    return (
        <ScrollView style={{ backgroundColor: '#265687', flex: 1 }}>
            <Header></Header>
            <WallPaperSlider></WallPaperSlider>
            <Slider_4></Slider_4>
            <Slider_1></Slider_1>
            <Slider_3></Slider_3>
            <Slider_2></Slider_2>
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