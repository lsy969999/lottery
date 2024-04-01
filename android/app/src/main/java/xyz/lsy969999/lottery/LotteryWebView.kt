package xyz.lsy969999.lottery

import android.util.Log
import android.view.View
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.compose.runtime.Composable
import androidx.compose.ui.viewinterop.AndroidView

@Composable
fun LotteryWebView() {
    AndroidView(
        factory = {context ->
            WebView(context).apply {
                settings.javaScriptEnabled = true
//                this.setLayerType(View.LAYER_TYPE_SOFTWARE, null)
                settings.javaScriptCanOpenWindowsAutomatically = true
                settings.setSupportMultipleWindows(true)
                settings.loadWithOverviewMode = true
                settings.useWideViewPort = true
                settings.setSupportZoom(true)
                webViewClient = CustomWebViewClient()
                webChromeClient = CustomWebChromeClient()
                this.addJavascriptInterface(JsInterface(this), "WV")
            }
        },
        update = { webView ->
            webView.loadUrl("http://192.168.25.51:5173/")
//            webView.loadUrl("https://google.com")
        }
    )
}

class CustomWebViewClient: WebViewClient() {
    override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
        val url = request?.url?.encodedQuery ?: "url"
        Log.d("TAG", "shouldOverrideUrlLoading: $url")
        return super.shouldOverrideUrlLoading(view, request)
    }
}

class  CustomWebChromeClient: WebChromeClient() {

}

class JsInterface(private var context: WebView) {

    @JavascriptInterface
    fun greeting(): String {
        return "greet";
    }
}