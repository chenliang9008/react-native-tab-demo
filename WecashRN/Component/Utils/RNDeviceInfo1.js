/**
 * Created by chenliang on 2018/1/5.
 */

import DeviceInfo from 'react-native-device-info'

/**
 * 获取设备品牌
 * @returns {string}
 */
export const getDeviceBrand=()=> {
    return DeviceInfo.getBrand()
};

/**
 * 获取设备号码
 * @returns {string}
 */
export const getDevicePhoneNumber=()=>{
    return DeviceInfo.getPhoneNumber()
};

/**
 * 获取设备ID
 * @returns {string}
 */
export const getDeviceId=()=>{
    return DeviceInfo.getDeviceId()
};

/**
 * 获取设备名称
 * @returns {string}
 */
export const getDeviceName=()=>{
    return DeviceInfo.getDeviceName()
};
