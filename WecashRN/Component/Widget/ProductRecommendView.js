/**
 * Created by chenliang on 2018/1/22.
 */

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text,StyleSheet} from 'react-native';
import {CommonLine, RecommandHeadView, RecommandItemView} from "./RNCommonViews";
var width=GLOBAL.ScreenInfo.mWidth;

class  ProductRecommendView extends PureComponent{

    static propTypes = {
        onRecommandHeadViewSelected:PropTypes.func,//产品推荐点击回调
        onRecommandItemViewSelected:PropTypes.func//下面推荐项目item点击回调
    };

    static defaultProps = {

    };

    constructor(props){
        super(props);
        this.state={
            recommands:null
        }
    }

    setRecommendInfo=(recommands)=>{
        try{
            this.setState({recommands: recommands});
        }catch (e){
            console.log(e)
        }
    };

    render(){
        if (this.state.recommands){
            let { onRecommandHeadViewSelected,onRecommandItemViewSelected } = this.props;
            let menuViews = [];
            this.state.recommands.map(
                (info, i) => (
                    menuViews.push(
                        <RecommandItemView
                         key={i}
                         onPress={() => {
                            onRecommandItemViewSelected && onRecommandItemViewSelected(i)
                        }} />)
                )
            );

            return (<View style={{marginTop:8,marginBottom:8,backgroundColor:'white'}}>
                <RecommandHeadView leftTitle={'产品推荐'} rightTitle={'查看全部'} onPress={()=>{onRecommandHeadViewSelected&&onRecommandHeadViewSelected()}}/>
                <CommonLine/>
                {menuViews}
            </View>)
        }else{
           return null;
        }
    }
}

// define your styles
const styles = StyleSheet.create({
    itemsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width:width
    }
});

export  default ProductRecommendView;
