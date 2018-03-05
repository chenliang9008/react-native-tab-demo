import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    StatusBar,
    Alert,
    Modal,
    NativeModules,
    DeviceEventEmitter
} from 'react-native';
import {Actions} from 'react-native-router-flux';

var Dimensions=require('Dimensions');
var {width, height}=Dimensions.get('window');

import CommonItemView from '../Widget/CommonItemView';
import HeaderView from '../Home/HeaderView';
import NavigationHeadView from '../Head/NavigationHeaderView'
import CommonItemViewTestCallback from "../Widget/CommonItemViewTestCallback";
import {showLToast} from "../Utils/ToastUtil";
import CommonDialog from "../Utils/CommonDialog";
import {getDeviceBrand,getDeviceName} from "../Utils/RNDeviceInfo1";
import RCommonDialog from "../Utils/RCommonDialog";
import MyView from '../Widget/MyView';
import RCommonBottomDialog from "../Utils/RCommonBottomDialog";
import NavigationHeaderView from "../Head/NavigationHeaderView";

class MineScene extends PureComponent {

    constructor(props){
        super(props);
        this.state={
            dialogVisible:false
        }
    }

    doComfirmAction(){
        this.hideDialog()
    }

    render(){
        return (
            <View style={styles.outViewStyle}>

                <CommonDialog _dialogVisible={this.state.dialogVisible}
                              _dialogLeftBtnAction={()=>this.hideDialog()}
                              _dialogRightBtnAction={()=>this.doComfirmAction()}
                />

                <RCommonDialog ref={(commandDialog)=>{this.commandDialog=commandDialog}}
                  dialogRightBtnAction={()=>{
                      this.commandDialog.setModalVisible(false);
                      showLToast('dialogRightBtnAction')}
                  }
                />


                <NavigationHeadView middleTitle={'个人中心'}/>

                <ScrollView style={styles.scrollViewStyle}>
                    {/*个人中心头部信息*/}
                    <HeaderView/>

                    <View style={{marginTop:20}}>
                        <CommonItemView leftTitle={'免息券'} onPress={ this.itemClickView.bind(this) }/>
                    </View>


                    <View style={styles.secondItemViewStyle}>
                        <CommonItemView leftTitle={'零钱包'} rightTitle={'余额:0元'}/>
                        <CommonItemView leftTitle={'账单与还款'}/>
                        <CommonItemView leftTitle={'交易记录'} />
                    </View>

                    <View style={styles.threeItemViewStyle}>
                        <CommonItemView leftTitle={'个人信息'} />
                    </View>

                    <View style={styles.fourItemViewStyle}>
                        <CommonItemView leftTitle={'个人信息'} rightTitle={'实名认证、手机号/密码、银行卡'}/>
                        <CommonItemView leftTitle={'消息中心'} />
                        <CommonItemView leftTitle={'帮助与反馈'} onPress={this.goWeb.bind(this)}/>
                        <CommonItemView leftTitle={'关于闪银'} rightTitle={'发前版本4.9.5'} />
                        <CommonItemViewTestCallback leftTitle={'测试回调'} url={'https://www.baidu.com'} onItemSelected={this.onItemSelected} />
                    </View>
                </ScrollView>
            </View>

        );
    }

    showDialog(){
        this.setState({
            dialogVisible:true,
            modalVisible:true
        });
    }

    hideDialog(){
        this.setState({dialogVisible:false});
    }


    onItemSelected(urlAddress){// 测试带参数的回调函数
        //showLToast("我是测试长Toast")
         Actions.push('web',{url:urlAddress});

        // NativeModules.CommonModule.callbackMethod("CommonModule Test")
        //showLToast("我是测试长Toast"+getDeviceBrand())
        //showLToast("我是测试长Toast"+getDeviceName())
    }

    itemClickView(){
        //Actions.push('login');
        //this.showDialog();
        this.commandDialog.setModalVisible(true);
        DeviceEventEmitter.emit('eventType', '通知来了');
    }

    goWeb(){
        let url='https://www.baidu.com';
        Actions.push('web',{url:url});
    }
}

const styles = StyleSheet.create({

    scrollViewStyle:{
        flex:1,
        width:width
    },
    outViewStyle:{
        flex:1,
        //justifyContent:'center',
        alignItems:'center'
    },
    navigationHeadViewStyle:{
        alignItems:'center',
        backgroundColor:'#00A0F0',
        width:width,
        height:50,
        justifyContent:'center'
    },
    secondItemViewStyle:{
        marginTop:20
    },

    threeItemViewStyle:{
        marginTop:20
    },

    fourItemViewStyle:{
        marginTop:20,
        marginBottom:20
    }
});

export  default MineScene;

