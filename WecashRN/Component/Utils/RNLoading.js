/**
 * Created by chenliang on 2018/1/15.
 */

import React, { PureComponent} from 'react'
import PropTypes from 'prop-types';
import { View, Text,StyleSheet,ReactElement, Image,Modal} from 'react-native'
import {UIActivityIndicator} from 'react-native-indicators'

// import {
//     BallIndicator,
//     BarIndicator,
//     DotIndicator,
//     MaterialIndicator,
//     PacmanIndicator,
//     PulseIndicator,
//     SkypeIndicator,
//     UIActivityIndicator,
//     WaveIndicator} from 'react-native-indicators'

export default class RNLoading extends  PureComponent{

    static defaultProps = {
        //isLoading: false,
        color:'white',
        loadingText:'Loading'
    };

    static propTypes = {
        //isLoading: PropTypes.boolean,
        loadingText:PropTypes.string,
        color:PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {isLoading: false};
    }

    showLoading(isLoading){
        this.setState({isLoading});
        return this
    }

    render(){
        let {...props } = this.props;
        let loadingText=this.props.loadingText&&<Text style={{color:'white',marginBottom:6}}>{this.props.loadingText}</Text>;
        if (this.state.isLoading){
            return <Modal
                          transparent={true}
                          visible={this.state.isLoading}
                          onRequestClose={() => {}}
                   >
                        <View style={styles.bgView}>
                           <View style={styles.loadingViewStyle}>
                               <UIActivityIndicator {...props}/>
                               {loadingText}
                           </View>
                        </View>
                  </Modal>
        }else{
            return null
        }

    }

}

const styles = StyleSheet.create({

    bgView: {  //全屏显示 半透明 可以看到之前的控件但是不能操作了
        width: global.ScreenInfo.mWidth,
        height: global.ScreenInfo.mHeight,
        //backgroundColor: 'rgba(0,0,0,0.2)',  //rgba  a0-1  其余都是16进制数
        justifyContent: 'center',
        alignItems: 'center',
    },

    loadingViewStyle:{
        alignItems:'center',
        backgroundColor:'grey',
        justifyContent:'center',
        height:90,
        width:90,
        borderRadius:6
    }
});



