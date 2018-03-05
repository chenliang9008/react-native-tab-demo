/**
 * Created by chenliang on 2018/1/19.
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {ListView,RefreshControl,View,Text,StyleSheet} from 'react-native';
import {showLToast} from "../Utils/ToastUtil";

class RefreshListView extends Component{

    static propTypes = {
        isRefreshing: PropTypes.bool,    //显示还是隐藏,
        isLoadingTail:PropTypes.bool,
        isNoMoreData: PropTypes.bool,
        listData: PropTypes.array,            //数据源填充
        loadMoreData:PropTypes.func.isRequired, //加载更多数据
        refreshData:PropTypes.func.isRequired   //刷新当前页面
    };

    static defaultProps = {
        dialogTitle: '温馨提示',
        isLoadingTail:false
    };


    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isRefreshing: false,
        };

       // this._endReached=this._endReached.bind(this);
    }

    /**
     * 设置数据源
     * @param dataSource
     * @returns {RefreshListView}
     */
    setDataSource(dataSource){
        this.setState({listData:this.ds.cloneWithRows(dataSource)});
        return this
    }

    setLoadingTail(isLoadingTail){
        this.setState({
            isLoadingTail:isLoadingTail
        })
    }

    render(){
        if (this.state.listData){
            return (
                <ListView
                    enableEmptySections={true}
                    dataSource={this.state.listData}
                    renderRow={(rowData,sectionID,rowID) => this._renderRow(rowData,sectionID,rowID)}
                    renderFooter={() => this._renderFooter()}
                    onEndReached={() => this._endReached()}
                    onEndReachedThreshold={20}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this._onRefresh()}/>
                    }
                />
            );
        }else{
            return null
        }
    }

    /**
     * 渲染行数据
     * @param rowData
     * @private
     */
    _renderRow(rowData,sectionID,rowID){
         return <View style={styles.rowViewStyle}>
                     <Text>{rowData}</Text>
                </View>
    }

    /**
     * 下拉刷新处理
     * @private
     */
    _onRefresh(){
        // 当加载到最后一页数据，再次下拉刷新时，需关闭isNoMoreData状态机
        this.setState({
            isNoMoreData: false
        });

        this.setLoadingTail(false);

        if(this.props.refreshData){
            this.props.refreshData();
        }
    }

    /**
     *底部处理
     * @private
     */
    _endReached(){
        if(this.props.loadMoreData){
            this.props.loadMoreData();
        }

        this.setLoadingTail(true)
    }



    /**
     * 底部View处理
     * @private
     */
    _renderFooter(){
        if (this.state.isLoadingTail){
            return <View style={styles.footerViewStyle}><Text>正在加载中...</Text></View>
        }else{
            return null
        }
    }
}

// define your styles
const styles = StyleSheet.create({
    rowViewStyle: {
        width:GLOBAL.ScreenInfo.mWidth,
        alignItems:'center',
        justifyContent:'center'
    },

    footerViewStyle:{
        width:GLOBAL.ScreenInfo.mWidth,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default RefreshListView;