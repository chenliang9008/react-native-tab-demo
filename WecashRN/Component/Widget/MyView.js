/**
 * Created by chenliang on 2018/1/17.
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {requireNativeComponent } from 'react-native';
var MyNativeView = requireNativeComponent('RCTMyView', MyCustomView);
class MyCustomView extends Component {

    static propTypes = {
        title: PropTypes.string,
        rightTitle:PropTypes.string
    };
    render() {
        return <MyNativeView {...this.props} />;
    }
}
module.exports=MyCustomView;


// 'use strict';
// import PropTypes from 'prop-types';
// import { requireNativeComponent, View } from 'react-native';
// var iface = {
//     name: 'myView',
//     propTypes: {
//         ...View.propTypes,
//         style: View.propTypes.style,
//         title: PropTypes.string,
//         rightTitle:PropTypes.string
//     },
// };
// module.exports = requireNativeComponent('RCTMyView', iface);
