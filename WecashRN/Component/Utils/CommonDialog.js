/**
 * Created by chenliang on 2018/1/4.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Modal,
    Text,
    TouchableOpacity,
    View ,
    StyleSheet
} from 'react-native';

let Dimensions = require('Dimensions');
let SCREEN_WIDTH = Dimensions.get('window').width;//宽
let SCREEN_HEIGHT = Dimensions.get('window').height;//高

/**
 *  通过属性渲染
 */
export default class CommonDialog extends Component {

    // 构造
    constructor(props) {
        super(props);
    }

    static propTypes = {
        _dialogTitle: PropTypes.string, //标题
        _dialogContent: PropTypes.string, //内容
        _dialogLeftBtnTitle: PropTypes.string,    //左按键标题
        _dialogRightBtnTitle:PropTypes.string,   //右按键标题
        _dialogLeftBtnAction: PropTypes.func.isRequired,  //左点击方法
        _dialogRightBtnAction:PropTypes.func.isRequired, //右点击方法
        _dialogVisible: PropTypes.bool,       //显示还是隐藏
    };

    static defaultProps = {
        _dialogTitle: '温馨提示',
        _dialogContent: '确定要退出应用吗?',
        _dialogLeftBtnTitle: '取消',
        _dialogRightBtnTitle: '确定',
        _dialogVisible: true,
    };

    render() {

        let dialog=this.props._dialogVisible&& <Modal
            visible={this.props._dialogVisible}
            transparent={true}
            onRequestClose={() => {}} //如果是Android设备 必须有此方法
        >
            <View style={styles.bg}>
                <View style={styles.dialog}>
                    <View style={styles.dialogTitleView}>
                        <Text style={styles.dialogTitle}>
                            {this.props._dialogTitle}
                        </Text>
                    </View>
                    <View style={styles.dialogContentView}>
                        <Text style={styles.dialogContent}>
                            {this.props._dialogContent}
                        </Text>
                    </View>

                    <View style={styles.dialogBtnView}>
                        <TouchableOpacity style={styles.dialogLeftBtnViewItem} onPress={this.props._dialogLeftBtnAction} opacity="0.4">
                            <Text style={styles.leftButton}>
                                {this.props._dialogLeftBtnTitle}
                            </Text>
                        </TouchableOpacity>
                        <View style={{color:'#fff',width:1}}/>
                        <TouchableOpacity style={styles.dialogRightBtnViewItem} onPress={this.props._dialogRightBtnAction} opacity="0.4">
                            <Text style={styles.rightButton}>
                                {this.props._dialogRightBtnTitle}
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>;

        // onPress事件直接与父组件传递进来的属性挂接
        return dialog;
    }
}


const styles = StyleSheet.create({
    bg: {  //全屏显示 半透明 可以看到之前的控件但是不能操作了
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: 'rgba(52,52,52,0.5)',  //rgba  a0-1  其余都是16进制数
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialog: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.28,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    dialogTitleView: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    dialogTitle: {
        textAlign: 'center',
        fontSize: 18,
        color: '#000000',
    },
    dialogContentView: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogContent: {
        textAlign: 'center',
        fontSize: 16,
        color: '#4A4A4A',
    },
    dialogBtnView: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.08,
        flexDirection: 'row'
    },
    dialogLeftBtnViewItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5F2FF',
        borderBottomLeftRadius: 8
    },
    dialogRightBtnViewItem:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5F2FF',
        borderBottomRightRadius: 8
    },

    leftButton: {
        fontSize: 18,
        color: '#007AFF',
        borderBottomLeftRadius: 8,
    },
    rightButton: {
        fontSize: 18,
        color: '#007AFF',
        borderBottomRightRadius: 8,
    }
});