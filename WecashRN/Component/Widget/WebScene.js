/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, WebView, InteractionManager } from 'react-native'
import NavigationHeadView from '../Head/NavigationHeaderView'
import {Actions} from 'react-native-router-flux';
import {showLToast} from "../Utils/ToastUtil";


var WEBVIEW_REF = 'webview';

// create a component
class WebScene extends Component {


    state: {
        source: Object
    };

    constructor(props: Object) {
        super(props);
        this.state={
            title:'正在加载...',
            canGoBack:false
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({ source: { uri: this.props.navigation.state.params.url } })
        })
    }

    onBackAction(){

        // if(this.state.canGoBack){
        //     showLToast("webViewBack...")
        // }

        //this.refs.webView.goBack()

        //this.refs[WEBVIEW_REF].goBack();
        //this.refs[WEBVIEW_REF].goBack();

        // if(this.refs.webView.goBack()){
        //     //showLToast("webViewBack...")
        // }else {
            Actions.pop()
        // }
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationHeadView isWebView={true}
                                    leftTitle={'返回'}
                                    ref="navigationHeadView"
                                    middleTitle={this.state.title}
                                    onBackAction={this.onBackAction}
                />

                <WebView
                    ref={WEBVIEW_REF}
                    style={styles.webView}
                    automaticallyAdjustContentInsets={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={this.state.source}
                    onLoadStart={this.onLoadStart}
                    onLoadEnd={(e) => this.onLoadEnd(e)}
                    onError={this.onError}
                    renderLoading={this.renderLoading}
                    startInLoadingState={true}
                    decelerationRate="normal"
                    onMessage={(e)=>this.handleMessage(e)}
                    injectJavaScript={this.injectJavaScript}
                    onNavigationStateChange={this.onNavigationStateChange}
                />
            </View>
        );
    }

    onNavigationStateChange=(navState)=>{
        // this.setState({
        //     event: e.nativeEvent.title
        // })
        //showLToast(e.nativeEvent.canGoBack)

        // this.setState({
        //     canGoBack: navState.canGoBack
        // })

    };

    injectJavaScript(){
        //调用H5
    }

    /**
     *与H5的交互方法
     */
    handleMessage(e) {
        //window.postMessage(data); H5发消息
        // e.nativeEvent.data RN收数据
    }


    onLoadEnd(e: any) {
        this.setNavigationTitle(e)
    }


    onLoadStart(e: any) {

    }

    onError(e:any){

    }

    renderLoading(e:any){

    }

    setNavigationTitle=(e: any)=>{
        //showLToast(e.nativeEvent.title)
        if (e.nativeEvent.title !== 'about:blank') {
            this.setState({
                title: e.nativeEvent.title
            })
        }
    }

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    webView: {
        flex: 1,
        backgroundColor: 'white',
    }
});

//make this component available to the app
export default WebScene;
