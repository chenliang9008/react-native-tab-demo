import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import NetUtil from "../Utils/NetUtil"


var Dimensions=require('Dimensions');
var {width, height, scale} = Dimensions.get('window');

class LoginView extends PureComponent {

    constructor(props){
        super(props);
        this.state={
            userName:''
        }
    }

    render(){
        return (
            <View style={styles.container}>

                <View style={{width:width}}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                        <Image source={require('../Images/tabbar/pfb_tabbar_discover.png')} style={styles.leftTopIconStyle}/>
                    </TouchableOpacity>
                </View>
                {/*头像*/}
                <Image source={{uri:'icon'}} style={styles.imageStyle}/>

                {/*用户名与密码*/}
                <TextInput
                            ref="userName"
                            placeholder={'请输入用户名'}
                            underlineColorAndroid={'transparent'}
                            style={styles.inputStyle}
                            clearButtonMode="while-editing"
                            keyboardType={'default'}
                            onChangeText={(text)=>{
                                this.setState({
                                    userName:text
                                });
                            }
                            }
                />

                <TextInput placeholder={'请输入密码'}
                           underlineColorAndroid={'transparent'}
                           secureTextEntry={true}
                           clearButtonMode="while-editing"
                           style={styles.inputStyle}
                           keyboardType={'numeric'}
                           onChangeText={(text)=>{
                             this.setState({
                               userPwd:text
                             })
                           }}
                />

                {/*登录*/}
                <TouchableOpacity onPress={()=>this.loginPerform()}>
                <View style={styles.loginBtnStyle}>
                     <Text style={{color:'white'}}>登录</Text>
                </View>
                </TouchableOpacity>

                {/*设置*/}
                <View style={styles.settingStyle}>
                     <Text>无法登录</Text>
                    <Text>新用户</Text>
                </View>

                <View style={styles.placeStyle}/>

                {/*其它view*/}
                <View style={styles.otherViewStyles}>
                    <Text>其它登录方式:</Text>
                    <Image source={{uri:'icon3'}} style={styles.otherImageStyle}/>
                    <Image source={{uri:'icon7'}} style={styles.otherImageStyle}/>
                    <Image source={{uri:'icon8'}} style={styles.otherImageStyle}/>
                </View>

             </View>
        );
    }

    loginPerform() {
        var userName = this.state.userName;
        if (!userName) {
            ToastAndroid.showWithGravity('请输入用户名...', 300, ToastAndroid.CENTER);
            return;
        }

        var userPwd = this.state.userPwd;
        if (!userPwd) {
            ToastAndroid.showWithGravity('请输入密码...', 300, ToastAndroid.CENTER);
            return;
        }

        let params = {'userName': userName, 'userPwd': userPwd};

        // NetUtil.createPost('https://www.baidu.com', params, '', (json) => {
        //     //TODO
        // })

        if(this.props.fromLogin){
            Actions.push('tabbar')
        }else{
            Actions.jump('tabbar')
        }
    }
}


const styles = StyleSheet.create({

    placeStyle:{
        flex:1
    },

    leftTopIconStyle:{
        width:20,
        height:20,
        marginLeft:20,
        marginTop:20
    },

    loginBtnStyle:{
       backgroundColor:'blue',
       height:40,
       width:width*0.9,
       marginTop:40,
       marginBottom:20,
       alignItems:'center',
       borderRadius:8,
       justifyContent:'center'
    },

    settingStyle:{
        width:width*0.85,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    container: {
        flex:1,
        backgroundColor:'#dddddd',
        alignItems:'center'
    },

    imageStyle:{
        width:100,
        height:100,
        borderWidth:2,
        borderColor:'cyan',
        borderRadius:50,
        marginTop:50,
        marginBottom:30
    },

    inputStyle:{
        width:width,
        backgroundColor:'white',
        height:40,
        marginBottom:1,
        // 内容居中
        textAlign:'center',
        borderColor:'gray'
    },

    otherViewStyles:{
        width:width*0.9,
        flexDirection:'row',
        position:'relative',
        bottom:10,
        alignItems:'center'
    },

    otherImageStyle:{
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:10,
    }

});

export default LoginView;
