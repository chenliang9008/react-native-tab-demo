package com.wecashrn.reactpackage;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.wecashrn.viewmanager.MyViewManager;

import java.util.Collections;
import java.util.List;

/**
 * @version: ${VERSIONNAME}
 * @fileName: com.wecashrn.reactpackage.MyViewPackage.java
 * @author: chenliang (baypm_jy@163.com)
 * http://chenliang.github.io/
 * @date: 2018-01-17 18:54
 */

public class MyViewPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    // Deprecated RN 0.47
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.<ViewManager>singletonList(new MyViewManager());
    }
}
