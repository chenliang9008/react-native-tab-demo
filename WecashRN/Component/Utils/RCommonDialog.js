/**
 * Created by chenliang on 2018/1/12.
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View,StyleSheet } from 'react-native';

let Dimensions = require('Dimensions');
let SCREEN_WIDTH = Dimensions.get('window').width;//宽
let SCREEN_HEIGHT = Dimensions.get('window').height;//高

/**
 *  通过引用id,调用方法体,改变state,渲染render,刷新界面
 */

export  default class RCommonDialog extends Component{

    static propTypes = {
        dialogTitle: PropTypes.string, //标题
        dialogContent: PropTypes.string, //内容
        dialogLeftBtnTitle: PropTypes.string,    //左按键标题
        dialogRightBtnTitle:PropTypes.string,   //右按键标题
        //dialogLeftBtnAction: PropTypes.func.isRequired,  //左点击方法
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
                       <View style={styles.bgView}>
                              <View style={styles.innerStyle}>

                                  <Text style={{marginTop:20}}>{this.props.dialogTitle}</Text>
                                  <Text style={styles.contentStyle}>{this.props.dialogContent}</Text>

                                  <View style={styles.bottomBtn}>
                                      <TouchableOpacity opacity="0.6" onPress={()=>{this.setModalVisible(false)}}
                                                        style={styles.leftTitleStyle} >
                                          <Text>{this.props.dialogLeftBtnTitle}</Text>
                                      </TouchableOpacity>
                                      <TouchableOpacity opacity="0.6" onPress={()=>{this.props.dialogRightBtnAction()}}  style={styles.rightTitleStyle} >
                                           <Text>{this.props.dialogRightBtnTitle}</Text>
                                      </TouchableOpacity>
                                  </View>

                              </View>

                       </View>
                   </Modal>
           );
       }else{
           return null
       }
    }
}

const styles=StyleSheet.create({
    bgView: {  //全屏显示 半透明 可以看到之前的控件但是不能操作了
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: 'rgba(52,52,52,0.5)',  //rgba  a0-1  其余都是16进制数
        justifyContent: 'center',
        alignItems: 'center',
    },

    innerStyle:{
        width:SCREEN_WIDTH*0.8,
        flexDirection:'column',
        backgroundColor: '#FFFFFF',
        alignItems:'center',
        borderRadius:8
    },

    contentStyle:{
        marginTop:20,
        marginBottom:60
    },

    bottomBtn:{
        marginTop:30,
        flexDirection:'row',
        position:'absolute',
        bottom:0
    },

    leftTitleStyle:{
        width:SCREEN_WIDTH*0.4,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        height:40
    },

    rightTitleStyle:{
        width:SCREEN_WIDTH*0.4,
        justifyContent:'center',
        alignItems:'center',
        color:'#aa00ff',
        flex:1,
        height:40
    }
});
