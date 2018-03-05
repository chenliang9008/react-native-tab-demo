
import React, { Component } from 'react'
import {AsyncStorage} from 'react-native'
import Constant from '../Constant/Constant'

let instance;

/***
 * RN里面的单例写法
 */
class UserManager extends Component{

    constructor(props){
        super(props);

        if(!instance){
            instance = this;
        }
        return instance;
    }

    static setUserName(userName){
        AsyncStorage.setItem(Constant.USERNAME,userName)
    }

    static getUserName(){
        return AsyncStorage.getItem(Constant.USERNAME);
    }
}

export default UserManager
