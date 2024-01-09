package com.flutterinreactnativeexample

import android.app.AlertDialog
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import io.flutter.embedding.android.FlutterActivity

class FlutterInjectModule(reactContext: ReactApplicationContext) :
        ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "FlutterInjectModule"

    @ReactMethod
    fun createCalendarEvent(name: String, location: String) {
        Log.d("FlutterInjectModule", "Create event called with name: $name and location: $location")
        val builder: AlertDialog.Builder = AlertDialog.Builder(this.getCurrentActivity())
        builder
            .setMessage(location)
            .setTitle(name)
        val dialog: AlertDialog = builder.create()
        dialog.show()
    }

    @ReactMethod
    fun openFlutterModule() {
        Log.d("FlutterInjectModule", "openFlutterModule")
        var currentActivity = getCurrentActivity()
        if (currentActivity != null) {
            Log.d("FlutterInjectModule", currentActivity.toString())
            currentActivity.startActivity(
               FlutterActivity.createDefaultIntent(this.getReactApplicationContext())
            )
        }
    }
}
