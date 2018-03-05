/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan 
 * @flow
 */

//import liraries
import React, { Component } from 'react'
import { View, StyleSheet, Image} from 'react-native'
import {Actions,Router} from 'react-native-router-flux';
var Dimensions=require('Dimensions');
var {width, height}=Dimensions.get('window');

// create a component
class SplashPage extends Component {

    constructor(props){
        super(props);
        
        this.state={
            loginState:false
        }
    }
    
    render() {
            return (
                <View style={styles.container}>
                    <Image style={styles.imageViewStyle} source={require('../Images/Splash/img_launcher.jpg')}/>
                </View>
            );
    }

    componentDidMount() {
        SplashPage.isLoginedIn()
    }

    static isLoginedIn(){
        setTimeout(()=>{
            if (true){
                Actions.reset('Tab')
            }else{
                Actions.push('Tab');
            }
        },2000)
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
export default  SplashPage ;
