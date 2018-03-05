import React, { PureComponent } from 'react';
import  ImagePicker from 'react-native-image-picker'; //第三方相机
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import {showLToast} from "../Utils/ToastUtil";

var Dimensions=require('Dimensions');
var {width, height}=Dimensions.get('window');

var photoOptions = {
    //底部弹出框选项
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
};

class HeaderView extends PureComponent {


    constructor(props){
        super(props);
        this.state={
            avatarSource:require('../Images/mine/icon.png')
        }
    }

    render(){
        return (
                <View style={styles.outViewStyle}>

                    <TouchableOpacity onPress={this.showImagePiker}>
                        <Image style={styles.imageStyle} source={this.state.avatarSource}/>
                    </TouchableOpacity>

                    <View style={styles.middleViewStyle}>
                        <Text style={styles.textViewStyle}>群星</Text>
                        <Text style={styles.textViewStyle}>4211*************8990</Text>
                    </View>

                    <Image style={{width:20,height:20,marginRight:10}} source={require('../Images/home_arrow.png')}/>
                </View>
        );
    }

    showImagePiker=()=>{
        // ImagePicker.launchCamera(photoOptions,(response=>{
        //         try{
        //             let source = response.uri ;
        //             //let source = { uri: 'data:image/jpeg;base64,' + response.data };
        //             this.setState({
        //                 avatarSource: source
        //             });
        //         }catch (e){console.log(e)}
        // }))

        ImagePicker.launchImageLibrary(photoOptions,(response=>{
            try{
                let source = response.uri ;
                if(source!=null){
                    //let source = { uri: 'data:image/jpeg;base64,' + response.data };
                    this.setState({
                        avatarSource: source!=null?'uri:'+source:require('../Images/mine/icon.png')
                    });
                }
            }catch (e){console.log(e)}
        }))

        ImagePicker.launchImageLibrary(photoOptions,(response => {

        }))
    }
}

const styles = StyleSheet.create({

    outViewStyle:{
        alignItems:'center',
        backgroundColor:'#00A0F0',
        height:160,
        width:width,
        flexDirection:'row'
    },
    imageStyle:{
        width:100,
        height:100,
        borderRadius:50,
        borderColor:'white',
        borderWidth:4,
        marginLeft:20,
        marginRight:20
    },

    middleViewStyle:{
        flex:1
    },
    textViewStyle:{
        color:'white',
        marginTop:10,
        fontSize:18
    }
});

export default HeaderView;
