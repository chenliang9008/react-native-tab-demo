import React, { PureComponent } from 'react'
import { View, StyleSheet,ScrollView} from 'react-native'
import NavigationHeadView from '../Head/NavigationHeaderView'
import HomeMenuTopView from "../Widget/HomeMenuTopView";
import BannerView from "../Widget/BannerView";
import ProductRecommendView from "../Widget/ProductRecommendView";
import {showLToast} from "../Utils/ToastUtil";

// create a component
class FindScene extends PureComponent {

    componentDidMount() {
        this.fetchData();
    }

    fetchData(){
        //TODO
        //数据请求成功,设置数据
        this.setHomeInfo()
    }

    constructor(props){
        super(props);
        this.state={
            data:[
                { title: '美食',icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516455410279&di=d42c32a4991c82f20ad574717125a2d1&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201603%2F20160320016.jpg'},
                { title: '电影', icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516455410279&di=d42c32a4991c82f20ad574717125a2d1&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201603%2F20160320016.jpg'},
                { title: '酒店', icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516366989580&di=31d98951cb3071bc934384de66c3d2e0&imgtype=0&src=http%3A%2F%2Fpic10.nipic.com%2F20101026%2F5109752_145000073561_2.jpg' },
                { title: '电影', icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516455410279&di=d42c32a4991c82f20ad574717125a2d1&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201603%2F20160320016.jpg'},
                { title: '电影', icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516455410279&di=d42c32a4991c82f20ad574717125a2d1&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201603%2F20160320016.jpg'},
                { title: '电影', icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516455410279&di=d42c32a4991c82f20ad574717125a2d1&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201603%2F20160320016.jpg'},
                { title: '电影', icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516455410279&di=d42c32a4991c82f20ad574717125a2d1&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201603%2F20160320016.jpg'},
                { title: '酒店', icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516366989580&di=31d98951cb3071bc934384de66c3d2e0&imgtype=0&src=http%3A%2F%2Fpic10.nipic.com%2F20101026%2F5109752_145000073561_2.jpg' },
                { title: '酒店', icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516366989580&di=31d98951cb3071bc934384de66c3d2e0&imgtype=0&src=http%3A%2F%2Fpic10.nipic.com%2F20101026%2F5109752_145000073561_2.jpg' },
                { title: '酒店', icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516366989580&di=31d98951cb3071bc934384de66c3d2e0&imgtype=0&src=http%3A%2F%2Fpic10.nipic.com%2F20101026%2F5109752_145000073561_2.jpg' },
                { title: '酒店', icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516366989580&di=31d98951cb3071bc934384de66c3d2e0&imgtype=0&src=http%3A%2F%2Fpic10.nipic.com%2F20101026%2F5109752_145000073561_2.jpg' }
            ],
            banners:[
                { title: '美食',icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516455410279&di=d42c32a4991c82f20ad574717125a2d1&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201603%2F20160320016.jpg'},
                { title: '美食',icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516455410279&di=d42c32a4991c82f20ad574717125a2d1&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201603%2F20160320016.jpg'}
            ],
            recommands:['','']
        }
    }

    render() {
        return (
                <View style={styles.container}>
                    <NavigationHeadView middleTitle={'发现'}/>
                    <ScrollView>
                            <HomeMenuTopView ref={(homeMenu)=>{this.homeMenu=homeMenu}}
                                             menuTitle={'VIP专享'}
                                             duration={3000}
                                             onMenuSelected={this.onMenuSelected}/>

                            <ProductRecommendView ref={(recommandView)=>this.recommandView=recommandView}
                                                  onRecommandHeadViewSelected={this.onRecommandHeadViewSelected}
                                                  onRecommandItemViewSelected={this.onRecommandItemViewSelected}/>

                            <BannerView ref={(bannerView)=>this.bannerView=bannerView}
                                        duration={3000}
                                        onBannerItemViewSelected={this.onBannerItemViewSelected}/>
                    </ScrollView>
                </View>
        );
    }

    onRecommandHeadViewSelected(){
        showLToast('onRecommandHeadViewSelected')
    }

    onMenuSelected(index: number){
        showLToast('onMenuSelected='+index)
    }

    onBannerItemViewSelected(index: number){
        showLToast('onBannerItemViewSelected='+index)
    }

    onRecommandItemViewSelected(index: number){
        showLToast('onRecommandItemViewSelected='+index)
    }

   setHomeInfo(){
       this.homeMenu.setHomeMenuInfo(this.state.data);
       this.bannerView.setBannerInfo(this.state.banners);
       this.recommandView.setRecommendInfo(this.state.recommands)
   }

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

//make this component available to the app
export default FindScene;
