/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Actions,Router} from 'react-native-router-flux';
import {Scene} from 'react-native-router-flux';
import LoginView from "./Component/Login/LoginView";
import FindScene from "./Component/Find/FindScene";
import MineScene from "./Component/Mine/MineScene";
import HomeScene from "./Component/Home/HomeScene";
import MessageScene from "./Component/Message/MessageScene";
import WebScene from "./Component/Widget/WebScene";
import SplashPage from "./Component/Splash/SplashPage";
import Test from "./Component/Test/Test";
import TabIcon from "./Component/Tab/TabIcon";




const scenes = Actions.create(

    <Scene key="root" swipeEnabled={false} animationEnabled={false} hideNavBar>

        <Scene key="splash" component={SplashPage} initial />
        <Scene key="Tab" type='replace' tabBarPosition='bottom' tabs lazy>
            <Scene key="home" component={HomeScene} hideNavBar
                   icon={TabIcon}
                   Image={require('./Component/Images/tabbar/pfb_tabbar_homepage.png')}
                   selectedImage={require('./Component/Images/tabbar/pfb_tabbar_homepage_selected.png')}
                   tabBarOnPress={()=>App.tabBarOnPress(0)}
            />
            <Scene key="find" component={FindScene} hideNavBar
                   icon={TabIcon}
                   Image={require('./Component/Images/tabbar/pfb_tabbar_merchant.png')}
                   selectedImage={require('./Component/Images/tabbar/pfb_tabbar_merchant_selected.png')}
                   tabBarOnPress={()=>App.tabBarOnPress(1)}
            />

            <Scene key="message" component={MessageScene} hideNavBar
                   icon={TabIcon}
                   Image={require('./Component/Images/tabbar/pfb_tabbar_order.png')}
                   selectedImage={require('./Component/Images/tabbar/pfb_tabbar_order_selected.png')}
                   tabBarOnPress={()=>App.tabBarOnPress(2)}
            />

            <Scene key="mine" component={MineScene} hideNavBar
                   icon={TabIcon}
                   Image={require('./Component/Images/tabbar/pfb_tabbar_mine.png')}
                   selectedImage={require('./Component/Images/tabbar/pfb_tabbar_mine_selected.png')}
                   tabBarOnPress={()=>App.tabBarOnPress(3)}
            />
        </Scene>

        <Scene key="web" component={WebScene} title="Web" hideNavBar={true}/>
        <Scene key="login" component={LoginView} title="Login"/>
        <Scene key="test" component={Test} title="TestReactElement"/>

    </Scene>
);


export default class App extends Component {

    render() {
        return (<Router scenes={scenes}/>)
    }

    static tabBarOnPress = (tabIndex) => {
        console.log(tabIndex)
        switch (tabIndex){
            case 0: Actions.jump('home')
                break;
            case 1: Actions.jump('find')
                break;
            case 2: Actions.jump('message')
                break;
            case 3: Actions.jump('mine')
                break;
        }
    }
}
