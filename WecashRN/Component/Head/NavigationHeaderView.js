import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

var Dimensions=require('Dimensions');
var {width, height}=Dimensions.get('window');
import {Actions} from 'react-native-router-flux';

/**
 * 这是一个RN标准的组件化开发
 */
class NavigationHeaderView extends Component{

    /**
     * 初始状态机的值
     */
    constructor(props){
        super(props);
        // 状态属性,可以改变
        this.state={
            pageTitle:'defalut'
        };

        this.onBackAction=this.onBackAction.bind(this);
    }

    /**
     * 默认值
     */
    static defaultProps={
        middleTitle:'加载中...',
        leftIcon:'...'
    };

    /**
     * 默认值属性要求类型
     */
    static propTypes={
        middleTitle:PropTypes.string.isRequired,
        onBackAction:PropTypes.func
    };

    onBackAction(){
       Actions.pop()
    }

    render(){

        let leftTitle=this.props.leftTitle&&<Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>;
        let leftIcon=this.props.leftIcon&&<Image style={styles.leftIconStyle}  source={this.props.leftIcon} />;

        let middleTitle=this.props.middleTitle&&<Text style={styles.middleTitleStyle}>{this.props.middleTitle}</Text>;
        let rightTitle=this.props.rightTitle && <Text style={styles.rightTitleStyle}> {this.props.rightTitle} </Text>;


        return (
            <View style={ styles.outViewStyle }>

                <TouchableOpacity activeOpacity={0.6}  onPress={this.onBackAction}>
                     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',width:40}}>
                        { leftTitle }
                        { leftIcon }
                    </View>
                </TouchableOpacity>

                <View style={styles.middleViewStyle}>
                    { middleTitle }
                </View>

                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',width:40}}>
                    {rightTitle}
                    {/*<Image style={styles.rightIconStyle} source={{uri:'icon'}}/>*/}
                </View>

            </View>
        );
    };
}

const styles = StyleSheet.create({

    outViewStyle: {
        width:width,
        height:Platform.OS==='android'?50:70,
        flexDirection:'row',
        backgroundColor: '#00A0F0',
        alignItems:'center',
        justifyContent:'center'
    },

    middleViewStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    leftTitleStyle:{
       color:'#fff',
       marginLeft:2
    },
    middleTitleStyle:{
        color:'#fff'
    },
    rightTitleStyle:{
        color:'#fff'
    },
    leftIconStyle:{
        width:15,
        height:15,
        marginLeft:5,
        alignItems:'center',
        justifyContent:'center'
    },
    rightIconStyle:{
        width:15,
        height:15,
        marginLeft:5,
        marginRight:5,
        alignItems:'center'
    }
});

export default NavigationHeaderView;
