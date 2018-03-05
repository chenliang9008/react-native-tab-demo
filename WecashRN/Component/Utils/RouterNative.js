import {NativeModules, Platform} from 'react-native';

export default {
    Router: (Platform.OS === 'android' ? NativeModules.RouterModule : null),
}