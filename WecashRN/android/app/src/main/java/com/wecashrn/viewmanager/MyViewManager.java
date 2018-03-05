package com.wecashrn.viewmanager;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.wecashrn.MyView;

/**
 * @version: ${VERSIONNAME}
 * @fileName: com.wecashrn.viewmanager.MyViewManager.java
 * @author: chenliang (baypm_jy@163.com)
 * http://chenliang.github.io/
 * @date: 2018-01-17 18:42
 */

public class MyViewManager extends SimpleViewManager<MyView> {

    private static final String REACT_CLASS = "RCTMyView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected MyView createViewInstance(ThemedReactContext reactContext) {
        return new MyView(reactContext);
    }

    @ReactProp(name = "title")
    public void setTitle(MyView view, String value) {
        view.setTitle(value);
    }

    @ReactProp(name = "rightTitle")
    public void setRightTitle(MyView view, String value) {
        view.setRightTitle(value);
    }



}
