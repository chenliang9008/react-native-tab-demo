//import liraries
import React, { PureComponent } from 'react'
import { Image ,StyleSheet} from 'react-native'

// create a component
class TabBarItem extends PureComponent {

    static defaultProps={
        selectedImage:'',
        normalImage:'',
        focused:false
    };

    render() {
        if(this.props.focused){
            return (
                <Image style={styles.iconStyle}  source={{uri:this.props.selectedImage}} />
            );
        }else{
            return (
                <Image
                    source={{uri:this.props.normalImage}}
                    style={{ tintColor: this.props.tintColor, width: 25, height: 25 }}
                />
            );
        }

    }
}

var styles=StyleSheet.create({
    iconStyle:{
        width:15,
        height:15
    }
});

//make this component available to the app
export default TabBarItem;
