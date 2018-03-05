import React, { Component} from 'react'
import {Actions} from 'react-native-router-flux';
import { View, Text,StyleSheet,ReactElement, Image,TouchableOpacity} from 'react-native'
var Dimensions=require('Dimensions');
var {width, height}=Dimensions.get('window');

/**
 * 函数式声明控件
 * @param style
 * @param props
 * @returns {XML}
 * @constructor
 */
export function RNNomalItemView({...props}: Object):ReactElement {

    let {leftTitle,rightTitle}=props;

    let leftTitle1=leftTitle&&<Text>{leftTitle}</Text>;
    let rightTitle1=rightTitle&&<Text>{rightTitle}</Text>;

    return  <View style={styles.nomalItemViewStyle}>
                <View style={styles.leftItemViewStyle}>
                    <Image style={styles.itemImageStyle} source={require('../Images/tabbar/pfb_tabbar_discover.png')}/>
                    {leftTitle1}
                </View>

                <View style={styles.rightItemViewStyle}>
                    {rightTitle1}
                    <Image style={styles.itemImageStyle}  source={{uri:'home_arrow'}}/>
                </View>
            </View>
}

class Test extends Component{

    render(){
      //  return <RNText style={styles.textStyle1}>aaaaa</RNText>

        if (true){
            return <View style={styles.outViewStyle}>
                <RNNomalItemView leftTitle={'我的钱包'}/>

                <TouchableOpacity onPress={this.testAction}>
                    <Text>好意思吗</Text>
                </TouchableOpacity>
            </View>
        }
    }

    testAction(){
        Actions.reset('Root')
    }
}

export default Test

const styles = StyleSheet.create({

    outViewStyle:{
        flex:1,
        width:width
    },

    textStyle1:{
        color:"#ffaacc",
        fontSize:40
    },

    nomalItemViewStyle:{
        width:width,
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:"#f6f6f6",
    },

    leftItemViewStyle:{
        flexDirection:'row',
        alignItems:'center'
    },

    rightItemViewStyle:{
        flexDirection:'row',
        alignItems:'center'
    },

    itemImageStyle:{
        width:30,
        height:30
    }

});