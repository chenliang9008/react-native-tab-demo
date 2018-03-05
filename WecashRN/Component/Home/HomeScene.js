//import liraries
import React, { Component } from 'react'
import { View, StyleSheet,Text,BackHandler,AsyncStorage,Platform,NativeModules,DeviceEventEmitter} from 'react-native'
import {Actions} from 'react-native-router-flux';
import NavigationHeadView from '../Head/NavigationHeaderView'
import NetUitl from '../Utils/NetUtil'
import Consant from '../Constant/Constant'
import {showLToast} from "../Utils/ToastUtil";

// create a component
let lastClickTime = (new Date()).valueOf();

class HomeScene extends Component {

    constructor(props){
        super(props);
        this.state = {jsonResult:'...'}
    }

    componentDidMount() {
        this.subscription = DeviceEventEmitter.addListener('eventType',(userName) =>{
           this.loadHomePage()
        })

        if(Platform.OS==='android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid)
        }
    }

    loadHomePage(){
        NetUitl.createGet(Consant.url + '/data/app_resource.json', '', (json) => {
            AsyncStorage.setItem(Consant.USERNAME,json.resource.authenticate,()=>{
                this.setState({
                    jsonResult:json.resource.authenticate
                });
            })
        })
    }

    componentWillUnmount() {
        this.subscription.remove();
        showLToast('componentWillUnmount')
        this.listener && this.listener.remove();
    }

    onBackAndroid = () => {
        this.listener = BackHandler.addEventListener('hardwareBackPress', function () {
            if (Actions.state.index !== 0) {
                lastClickTime = (new Date()).valueOf();
                return false
            } else {
                let nowTime = (new Date()).valueOf();
                if (nowTime - lastClickTime < 1000) {//间隔时间小于1秒才能退出
                    Actions.pop();
                } else {
                    showLToast('再按一次退出应用')
                    lastClickTime = nowTime;
                    return true;
                }
            }
            return false;
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <NavigationHeadView middleTitle={'首页'} leftIcon={require('../Images/tabbar/pfb_tabbar_merchant.png')}/>
                <Text>{this.state.jsonResult}</Text>
                <Text>{global.ScreenInfo.mHeight}</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

//make this component available to the app
export default HomeScene;
