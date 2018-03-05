/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan 
 * @flow
 */

//import liraries
import React, { PureComponent } from 'react'
import { View, StyleSheet, Image} from 'react-native'
var Dimensions=require('Dimensions');
var {width, height}=Dimensions.get('window');

// create a component
class GuidePage extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imageViewStyle} source={require('../Images/Splash/img_launcher.jpg')}/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    imageViewStyle:{
        width:width,
        height:height
    }
});

//make this component available to the app
export default GuidePage;
