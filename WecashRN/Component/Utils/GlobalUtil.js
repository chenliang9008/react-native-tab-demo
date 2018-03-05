
import { Dimensions,StatusBar,Platform } from 'react-native';

global.ScreenInfo={
    mWidth: Dimensions.get('window').width,
    mHeight: Dimensions.get('window').height
};

Platform.select({
    ios: () => StatusBar.setBarStyle('light-content'),
    android: () => StatusBar.setBackgroundColor('#00A0F0'),
})();