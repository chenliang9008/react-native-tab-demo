/**
 * Created by chenliang on 2018/1/4.
 */

import Toast from 'react-native-root-toast';

/**
 * 冒一个时间比较短的Toast
 * @param content
 */

var toast=null;

export const showSToast = (content) => {

    if (toast !== undefined) {
        Toast.hide(toast);
    }
     toast = Toast.show(content.toString(), {
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0
    });
};


export const showLToast = (content) => {

    if (toast !== undefined) {
        Toast.hide(toast);
    }
     toast = Toast.show(content.toString(), {
        duration: Toast.durations.LONG,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0
    });


};
