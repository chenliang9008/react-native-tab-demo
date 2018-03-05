import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

var Dimensions=require('Dimensions');
var {width, height}=Dimensions.get('window');

class CommonItemViewTestCallback extends Component{

    constructor(props){
        super(props);
        this.onItemSelected=this.onItemSelected.bind(this);
    }


    static propTypes={
        onItemSelected:PropTypes.func,
        leftTitle:PropTypes.string,
        rightTitle:PropTypes.string
    };

    onItemSelected(){
        if(this.props.onItemSelected){
            this.props.onItemSelected(this.props.url);
        }
    }

    render(){

        let rightTitle=this.props.rightTitle&&<Text style={styles.rightTitleStyle}>{this.props.rightTitle}</Text>;
        let leftTitle=this.props.leftTitle&&<Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>;

        return (
            <TouchableOpacity activeOpacity={0.6} onPress={this.onItemSelected}>
            <View style={styles.outViewStyle}>
                { leftTitle }
                <View style={styles.innerViewStyle}>
                    { rightTitle }
                    <Image style={styles.rightIconStyle} source={{uri:'home_arrow'}}/>
                </View>
            </View>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

    outViewStyle: {
        width:width,
        height:48,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: '#FFFFFF',
        alignItems:'center',
        borderBottomWidth:0.5,
        backgroundColor:'white',
        borderBottomColor:'#dddddd'
    },

    innerViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },

    leftTitleStyle:{
       color:'#969696',
       marginLeft:10
    },
    rightTitleStyle:{
        color:'#969696'
    },
    rightIconStyle:{
        width:15,
        height:15,
        marginLeft:10,
        marginRight:10,
        alignItems:'center'
    }
});

export default CommonItemViewTestCallback;
