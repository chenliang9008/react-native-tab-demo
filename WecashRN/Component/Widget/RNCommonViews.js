/**
 * Created by chenliang on 2018/1/20.
 */
import React, { Component } from 'react';
import { View, Text,StyleSheet,ReactElement, Image,TouchableOpacity} from 'react-native'
var screen= GLOBAL.ScreenInfo;


export function CommonLine({style, ...props}: Object): ReactElement {
    return <Text style={[styles.commonLineStyle, style]} {...props} />
}

export function Heading2({style, ...props}: Object): ReactElement {
    return <Text style={[styles.h2, style]} {...props} />
}

export function HomeMenuItem({...props}: Object):ReactElement {
       return (<TouchableOpacity style={styles.container} onPress={props.onPress}>
                    <Image source={{uri:props.icon}} resizeMode='contain' style={styles.icon} />
                    <Heading2>
                        {props.title}
                    </Heading2>
               </TouchableOpacity>
    );
}

export function HomeBannerItem({...props}: Object):ReactElement {
    return (<TouchableOpacity style={{width:screen.mWidth,height:120}} onPress={props.onPress}>
            <Image source={{uri:props.icon}} resizeMode='cover' style={{width:screen.mWidth,height:120}} />
        </TouchableOpacity>
    );
}

export function RecommandHeadView({style, ...props}: Object): ReactElement {
    let {leftTitle,rightTitle,rightIcon}=props;
    return (
        <TouchableOpacity onPress={()=>{
           props.onPress()
        }}>
        <View style={styles.headerStyle}>
            <Text style={{marginLeft:10,fontSize: 14,color: '#222222',}}>{leftTitle}</Text>

            <View style={{flexDirection:'row'}}>
                <Text>{rightTitle}</Text>
                <Image style={styles.rightIconStyle} source={require('../Images/home_arrow.png')}/>
            </View>
        </View>
        </TouchableOpacity>
    );
}

export function RecommandItemView({style, ...props}: Object): ReactElement {
    let {leftTitle,rightTitle,rightIcon}=props;
    return (
        <View style={styles.recommandItemViewStyle}>
            <View style={{marginTop:10,marginBottom:10}}>
                <Text style={{marginLeft:10,fontSize: 14, color: '#222222'}}>闪贷</Text>
                <View style={{flexDirection:'row',marginTop:6,marginBottom:6}}>
                    <Text style={styles.recommandItemTextStyle}>最高5万</Text>
                    <Text style={styles.recommandItemTextStyle}>月利率3%</Text>
                    <Text style={styles.recommandItemTextStyle}>2-12期</Text>
                </View>
            </View>
            <View>
               <TouchableOpacity onPress={props.onPress}>
                   <Text style={styles.loanTextStyle}>立即借款</Text>
               </TouchableOpacity>
            </View>
        </View>
    );
}


// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.mWidth / 5,
        height: screen.mWidth / 5,
    },
    icon: {
        width: screen.mWidth / 9,
        height: screen.mWidth / 9,
        margin: 5,
    },
    h2: {
        fontSize: 14,
        color: '#222222',
    },
    headerStyle:{
        width: screen.mWidth,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        height:40,
        backgroundColor:'white'
    },
    recommandItemViewStyle:{
        width: screen.mWidth,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'white'
    },
    recommandItemTextStyle:{
        marginLeft:6
    },
    loanTextStyle:{
        backgroundColor:'#00A0F0',
        marginRight:10,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        borderRadius:8,
        color:'white'
    },
    commonLineStyle:{
        width: screen.mWidth,
        height:0.4,
        marginLeft:10,
        backgroundColor:'#969696'
    },
    rightIconStyle:{
        width:15,
        height:15,
        marginLeft:6,
        marginRight:10,
        marginTop:3,
        justifyContent:'center',
        alignItems:'center'
    }
});
