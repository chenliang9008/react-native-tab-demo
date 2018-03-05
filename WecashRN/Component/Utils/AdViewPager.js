/**
 * Created by chenliang on 2018/1/5.
 */

'use strict';

import React, { PureComponent } from 'react';
// import ViewPager from 'react-native-viewpager';
var ViewPager=require('react-native-viewpager');
import PropTypes from 'prop-types';
import {
    View,
    Image,
    Dimensions,
    StyleSheet,
    Animated,
    Easing
} from 'react-native';


var deviceWidth = Dimensions.get('window').width;

const banners=[
    'http://b.hiphotos.baidu.com/baike/whfpf=800,800,0/sign=ab9f687dc095d143da23b76315cdba32/ca1349540923dd54bf762316d909b3de9c824843.jpg'
    ,'http://news.youth.cn/yl/201705/W020170516543782825205.jpeg'
    , 'https://cdn.duitang.com/uploads/item/201512/01/20151201144727_TGQ3R.thumb.700_0.jpeg'
    ,'http://s13.sinaimg.cn/mw690/0042uhingy6EVG0YA7W9c&690'];

class MyViewPager extends PureComponent {

    static propTypes = {
       // _dataSource: PropTypes.func,       //显示还是隐藏
        _dataSource:PropTypes.arrayOf(PropTypes.string).isRequired
    };

    constructor(props) {
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 实际的DataSources存放在state中
        this.state = {
            dataSource: dataSource.cloneWithPages(banners)
        }
    }

    _renderPage(data, pageID) {
        return (
            <Image
                source={data}
                style={styles.page}/>
        );
    }

    /**
     dataSource: 提供页面数据,
     renderPage: 用于渲染页面视图,
     autoPlay: 为true 将自动播放,
     isLoop: 为true支持循环播放,
     locked: 为true禁止触摸滚动,
     onChangePage: 页面变化的回调,
     renderPageIndicator: 渲染自定义的 ViewPager indicator.
     */
    render() {
        return (
            <View style={styles.container}>
                <ViewPager
                    style={{height:130}}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}
                    animation = {(animatedValue, toValue, gestureState) => {
                        var velocity = Math.abs(gestureState.vx);
                        var baseDuration = 300;
                        var duration = (velocity > 1) ? 1/velocity * baseDuration : baseDuration;

                        return Animated.timing(animatedValue,
                            {
                                toValue: toValue,
                                duration: duration,
                                easing: Easing.out(Easing.exp)
                            });
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop:5,
        paddingLeft:5,
        backgroundColor:'#999999',
        paddingRight:5,
        paddingBottom:5,
    },
    page: {
        width: deviceWidth,//设备宽(只是一种实现，此处多余)
        flex: 1,
        height: 130,
        resizeMode: 'stretch'
    },

});

export default MyViewPager;
