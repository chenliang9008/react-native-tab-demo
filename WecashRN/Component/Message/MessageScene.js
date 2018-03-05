/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan 
 * @flow
 */

//import liraries
import React, { Component } from 'react'
import { View, StyleSheet,Text,TouchableOpacity} from 'react-native'
import NavigationHeadView from '../Head/NavigationHeaderView'
import {Actions} from 'react-native-router-flux'
import RNLoading from "../Utils/RNLoading";
import RefreshListView from '../Widget/RefreshListView'
import {showLToast} from "../Utils/ToastUtil";

// create a component
class MessageScene extends Component {

    constructor(props){
        super(props);
        this.state={
            data:["a","b","c","a","b","c","b","c","a","b","c","b","c","a","b","c","b","c","a","b","c","b","c","a","b","c","b","c","a","b","c","b","c","a","b","c","b","c","a","b","c"]
        }
    }

    render() {
        return (
                <View style={styles.container}>
                    <NavigationHeadView middleTitle={'消息'}/>
                    <RNLoading ref={(rnLoading)=>{this.rnLoading=rnLoading}} loadingText='Loading'/>
                    <TouchableOpacity onPress={()=>{this.goToTest()}}>
                        <Text>Message</Text>
                    </TouchableOpacity>

                    <RefreshListView ref={(refreshListView)=>{this.refreshListView=refreshListView}}
                                     refreshData={()=>this.refreshData()}
                                     loadMoreData={()=>this.loadMoreData()}
                    />

                </View>
        );
    };

    /**
     * 刷新数据操作
     */
    refreshData(){
        showLToast('refreshData...');
        this.fetchData()
    }

    /**
     * 加载更多
     */
    loadMoreData(){
        showLToast('loadMoreData...');
        this.fetchData()
    }

    /**
     * 改变数据源
     * @param data
     */
    changeDataSource(data){
        this.refreshListView.setDataSource(data)
    }

    fetchData(){
         this.changeDataSource(this.state.data)
    }

    goToTest(){
        //Actions.push("dialog")
        //Actions.push("test")
        this.rnLoading.showLoading(true);
        setTimeout(()=>{ this.rnLoading.showLoading(false) }, 4000);

        this.fetchData()
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

//make this component available to the app
export default MessageScene;
