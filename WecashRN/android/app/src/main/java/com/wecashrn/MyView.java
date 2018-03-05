package com.wecashrn;

import android.content.Context;
import android.support.annotation.Nullable;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;

/**
 * @version: ${VERSIONNAME}
 * @fileName: com.wecashrn.MyView.java
 * @author: chenliang (baypm_jy@163.com)
 * http://chenliang.github.io/
 * @date: 2018-01-17 18:52
 */

public class MyView extends LinearLayout {

    private Context context;
    private TextView leftView,rightView;

    public MyView(Context context) {
        super(context);
        initContext(context);
        initViews();
    }

    private void initViews() {
        View rootView = LayoutInflater.from(context).inflate(R.layout.test_view, this, true);
        leftView= (TextView) rootView.findViewById(R.id.leftTitle);
        rightView=(TextView) rootView.findViewById(R.id.rightTitle);
    }


    private void initContext(Context context) {
        this.context = context;
    }

    public MyView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        initContext(context);
        initViews();
    }

    public MyView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        initContext(context);
        initViews();
    }


    public void setTitle(String name) {
        Log.e("MyViewManager","MyViewManager......");
        if (!TextUtils.isEmpty(name)) {
            leftView.setText(name);
            Log.e("MyViewManager",name);
        }
    }

    public void setRightTitle(String rightTitle) {
        Log.e("MyViewManager","MyViewManager......");
        if (!TextUtils.isEmpty(rightTitle)) {
            rightView.setText(rightTitle);
            Log.e("MyViewManager",rightTitle);
        }
    }
}
