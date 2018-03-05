/**
 * Created by chenliang on 2018/1/22.
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {ScrollView,StyleSheet,View,Text} from 'react-native';
import InteractionManager from "react-native/Libraries/Interaction/InteractionMixin";
import { HomeMenuItem }from "./RNCommonViews";
// 引入计时器类库
var TimerMixin = require('react-timer-mixin');
var width=GLOBAL.ScreenInfo.mWidth;

class HomeMenuTopView extends Component {

    // 注册计时器
    mixins: [TimerMixin];

    static propTypes = {
        duration:PropTypes.number,  // 默认为1000ms
        onMenuSelected:PropTypes.func,
        menuTitle:PropTypes.string
    };

    static defaultProps = {
        // 每隔多少时间
        duration: 1000,
        menuTitle:''
    };

    constructor(props) {
        super(props);
        this.state = {
            pageCount: 0,
            // 当前的页码
            currentPage:0,
            images:null
        };
    }

    //设置数据源
     setHomeMenuInfo(images) {
        try {
            if (this.timer)clearInterval(this.timer);
            this.setState({images: images, pageCount: Math.ceil(images.length / 5)});
            InteractionManager.runAfterInteractions(() => {
                this.startTimer();
            });
        } catch (e) {
            console.log(e)
        }
    }

    componentWillUnmount() {
        // 停止定时器
        clearInterval(this.timer);
    }

    render(){
          if(this.state.images){
              let { menuInfos,menuTitle, onMenuSelected } = this.props;
              let menuItems = this.state.images.map(
                  (info, i) => (
                      <HomeMenuItem
                          key={i}
                          title={info.title}
                          icon={info.icon}
                          onPress={() => {
                              onMenuSelected && onMenuSelected(i)
                          }} />
                  )
              );

              let menuViews = [];
              let pageCount = Math.ceil(menuItems.length / 5);

              for (let i = 0; i < pageCount; i++) {
                  let items = menuItems.slice(i * 5, i * 5 + 5);

                  let menuView = (
                      <View style={styles.itemsView} key={i}>
                          {items}
                      </View>
                  );
                  menuViews.push(menuView)
              }

              let menuTitleView=menuTitle&&<Text style={styles.menuTitleStyle}>{menuTitle}</Text>;

              return  <View style={styles.containerStyle}>
                         {menuTitleView}
                          <ScrollView
                              ref={(scrollView)=>{this.scrollView=scrollView}}
                              horizontal={true}
                              // 隐藏水平滚动条
                              showsHorizontalScrollIndicator={false}
                              // 自动分页
                              pagingEnabled={true}
                              // 当一帧滚动结束
                              onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
                              // 开始拖拽
                              onScrollBeginDrag={()=>this.onScrollBeginDrag()}
                              // 停止拖拽
                              onScrollEndDrag={()=>this.onScrollEndDrag()}
                          >
                              {menuViews}

                          </ScrollView>

                          {/*返回指示器*/}
                          <View style={styles.pageViewStyle}>
                              {this.pageIndicator()}
                          </View>
              </View>
          }else{
              return null
          }
    }


    // 调用开始拖拽
    onScrollBeginDrag(){
        // 停止定时器
        clearInterval(this.timer);
    }

    // 调用停止拖拽
    onScrollEndDrag(){
        // 开启定时器
        this.startTimer();
    }

    // 开启定时器
    startTimer(){
        try{
            // 1. 拿到scrollView
            var scrollView=this.scrollView;
            var imgCount =this.state.pageCount;

            var that=this;//匿名方法的时候在内部不能指代当前,故用that指代this

            // 2.添加定时器  this.timer --->可以理解成一个隐式的全局变量
            that.timer = setInterval(function () {
                // 2.1 设置圆点
                var activePage = 0;
                // 2.2 判断
                if((that.state.currentPage+1) >= imgCount){ // 越界
                    activePage = 0;
                }else{
                    activePage = that.state.currentPage+1;
                }

                // 2.3 更新状态机
                that.setState({
                    currentPage: activePage
                });

                // 2.4 让scrollView滚动起来
                var offsetX = activePage * width;
                scrollView?scrollView.scrollResponderScrollTo({x:offsetX, y:0, animated:true}):null;
            }, that.props.duration);
        }catch (e){
            console.log(e)
        }
    }


    // 返回所有的圆点
    pageIndicator(){
        // 定义一个数组放置所有的指示器色块
        var indicatorArr = [];
        var style;
        // 拿到图像数组
        var imgsArr =this.state.pageCount;
        // 遍历
        for(var i=0; i<imgsArr; i++){
            // 判断
            style = (i==this.state.currentPage) ? {backgroundColor:'#00A0F0'} : {backgroundColor:'rgba(0,0,0,0.4)'};

            // 把色块装入数组
            indicatorArr.push(
                <Text key={i} style={[{fontSize:25,width:8,height:2,marginLeft:4},style]}></Text>
            );
        }
        // 返回
        return indicatorArr;
    }


    //  当一帧滚动结束的时候调用
    onAnimationEnd(e){
        // 1.求出水平方向的偏移量
        var offSetX = e.nativeEvent.contentOffset.x;

        // 2.求出当前的页数
        var currentPage = Math.floor(offSetX / width);
        // console.log(currentPage);

        // 3.更新状态机,重新绘制UI
        this.setState({
            // 当前的页码
            currentPage: currentPage
        });
    }

}

// define your styles
const styles = StyleSheet.create({

    containerStyle:{
        backgroundColor:'white',
        marginTop:8
    },

    pageViewStyle:{
        width:width,
        height:16,
       // backgroundColor:'rgba(0,0,0,0.4)',

        // 定位
        // position:'absolute',
        // bottom:0,

        // 设置主轴的方向
        flexDirection:'row',
        // 设置侧轴方向的对齐方式
        alignItems:'center',
        //主轴对齐方式
        justifyContent:'center'
    },

    menuTitleStyle:{
        marginLeft:10,
        fontSize:14,
        height:36,
        alignContent:'center',
        color:'#222222',
        marginTop:8
    },

    itemsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width:width
    },
});

export default HomeMenuTopView;
