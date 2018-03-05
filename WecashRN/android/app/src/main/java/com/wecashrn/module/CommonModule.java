package com.wecashrn.module;

import android.os.Process;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * @version: ${VERSIONNAME}
 * @fileName: com.wecashrn.module.CommonModule.java
 * @author: chenliang (baypm_jy@163.com)
 * http://chenliang.github.io/
 * @date: 2018-01-05 10:47
 */

public class CommonModule extends ReactContextBaseJavaModule {

    private ReactApplicationContext context;
    public CommonModule(ReactApplicationContext reactContext) {
        super(reactContext);
        context=reactContext;
    }


    @Override
    public String getName() {
        return "CommonModule";
    }

    @ReactMethod
    public void callbackMethod(String param){
        Log.e("CommonModule",param);
        Toast.makeText(context,param,Toast.LENGTH_LONG).show();
    }

    @ReactMethod
    public String getDeviceInfo(){
        return null;
    }

    @ReactMethod
    public void exitHybridApp(){
        System.exit(0);
        Process.killProcess(Process.myPid());
    }
}
