/**
 * Created by chenliang on 2018/1/12.
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View,StyleSheet } from 'react-native';


/**
 *  通过引用id,调用方法体,改变state,渲染render,刷新界面
 */

export  default class RCommonBottomDialog extends Component{

    static propTypes = {
        dialogTitle: PropTypes.string, //标题
        dialogContent: PropTypes.string, //内容
        dialogLeftBtnTitle: PropTypes.string,    //左按键标题
        dialogRightBtnTitle:PropTypes.string,   //右按键标题
        dialogLeftBtnAction: PropTypes.func.isRequired,  //左点击方法
        dialogRightBtnAction:PropTypes.func.isRequired, //右点击方法
        modalVisible: PropTypes.bool      //显示还是隐藏
    };

    static defaultProps = {
        dialogTitle: '温馨提示',
        dialogContent: '确定要退出应用吗?',
        dialogLeftBtnTitle: '取消',
        dialogRightBtnTitle: '确定',
        modalVisible: true,
    };


    constructor(props) {
        super(props);
        this.state = {modalVisible: false};
    }

    setModalVisible(modalVisible) {
        this.setState({modalVisible});
        return this
    }

    render(){
       if (this.state.modalVisible){
           return (
                   <Modal
                       transparent={true}
                       visible={this.state.modalVisible}
                       onRequestClose={() => {}}
                   >
                       <TouchableOpacity opacity="0.6" onPress={()=>{this.props.dialogRightBtnAction()}}>
                       <View style={styles.bgView}>
                              <View style={styles.innerStyle}>

                                  <View style={styles.topInfoStyle}>
                                      <TouchableOpacity opacity="0.6" onPress={()=>{this.setModalVisible(false)}}
                                                        style={styles.leftTitleStyle} >
                                          <Text>{this.props.dialogLeftBtnTitle}</Text>
                                      </TouchableOpacity>
                                      <TouchableOpacity opacity="0.6" onPress={()=>{this.props.dialogRightBtnAction()}}  style={styles.rightTitleStyle} >
                                          <Text>{this.props.dialogRightBtnTitle}</Text>
                                      </TouchableOpacity>
                                  </View>

                                  <Text style={{marginTop:20}}>{this.props.dialogTitle}</Text>
                                  <Text style={styles.contentStyle}>{this.props.dialogContent}</Text>

                              </View>

                       </View>
                      </TouchableOpacity>
                   </Modal>
           );
       }else{
           return null
       }
    }
}

const styles=StyleSheet.create({
    bgView: {  //全屏显示 半透明 可以看到之前的控件但是不能操作了
        width: GLOBAL.ScreenInfo.mWidth,
        height: GLOBAL.ScreenInfo.mHeight,
        backgroundColor: 'rgba(52,52,52,0.5)',  //rgba  a0-1  其余都是16进制数
        justifyContent: 'center',
        alignItems: 'center',
    },

    innerStyle:{
        width:GLOBAL.ScreenInfo.mWidth,
        flexDirection:'column',
        backgroundColor: '#FFFFFF',
        position:'absolute',
        bottom:0,
        borderRadius:4
    },

    contentStyle:{
        marginTop:20,
        marginBottom:60
    },

    topInfoStyle:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    leftTitleStyle:{
        height:40,
        marginLeft:10
    },

    rightTitleStyle:{
        height:40,
        marginRight:10
    }
});
