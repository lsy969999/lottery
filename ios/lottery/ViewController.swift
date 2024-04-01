//
//  ViewController.swift
//  lottery
//
//  Created by SY L on 4/1/24.
//

import UIKit
import WebKit

class ViewController: UIViewController, WKUIDelegate, WKScriptMessageHandler, WKNavigationDelegate {
    @IBOutlet weak var webView: WKWebView!
    override func viewDidLoad() {
        super.viewDidLoad()
        let contentController = WKUserContentController()
        let wkPreferences = WKPreferences()
        wkPreferences.javaScriptCanOpenWindowsAutomatically = true
        let webConfiguration = WKWebViewConfiguration()
        webConfiguration.userContentController = contentController
        webConfiguration.preferences = wkPreferences
        
        self.webView.uiDelegate = self
        self.webView.navigationDelegate = self
        self.webView.scrollView.bounces = false
        self.webView.allowsLinkPreview = false
        
        if #available(iOS 16.4, *) {
            self.webView.isInspectable = true
        }
        
        let url = URL(string: "http://192.168.25.51:5173/")!
        let request = URLRequest(url: url)
        self.webView.load(request)
    }
    
    //MARK: WKScriptMessageHandler
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        //TODO
    }
    
    //MARK: WKUIDelegate
    func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Void) {
        let alertController = UIAlertController(title: "Alert", message: message, preferredStyle: .alert)
        alertController.addAction(UIAlertAction(title: "OK", style: .default, handler: { _ in
            completionHandler()
        }))
        present(alertController, animated: true, completion: nil)
    }
    
    //MARK: WKUIDelegate
    func webView(_ webView: WKWebView, runJavaScriptConfirmPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping (Bool) -> Void) {
        let alertController = UIAlertController(title: "Confirm", message: message, preferredStyle: .alert)
        alertController.addAction(UIAlertAction(title: "OK", style: .default, handler: { _ in
           completionHandler(true)
        }))
        alertController.addAction(UIAlertAction(title: "Cancel", style: .cancel, handler: { _ in
           completionHandler(false)
        }))
        present(alertController, animated: true, completion: nil)
    }
    
    //MARK: WKUIDelegate
    func webView(_ webView: WKWebView, runJavaScriptTextInputPanelWithPrompt prompt: String, defaultText: String?, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping (String?) -> Void) {
        let alertController = UIAlertController(title: nil, message: prompt, preferredStyle: .alert)

        alertController.addTextField { textField in
            textField.text = defaultText
        }

        let cancelAction = UIAlertAction(title: "Cancel", style: .cancel) { _ in
            completionHandler(nil)
        }

        let okAction = UIAlertAction(title: "OK", style: .default) { _ in
            if let text = alertController.textFields?.first?.text {
                completionHandler(text)
            } else {
                completionHandler(nil)
            }
        }

        alertController.addAction(cancelAction)
        alertController.addAction(okAction)

        present(alertController, animated: true, completion: nil)
    }
        
    //TODO
//    func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration, for navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
//        //createWebview해주기전에
//        //이미 만든 createWebview가 있다면 기존것은 지워주고 createWebview 해준다.
//        //그렇지 않으면 createWebview가 겹쳐서 원래 webview로 돌아가지 못하는 현상이발생할수도 있다.
//        //재현: open('some url') -> open('some url2') 하고 close하면 원래 웹뷰로 못돌아감
//        if let beforeCreatedWebview = createWebView {
//            webViewDidClose(beforeCreatedWebview)
//        }
//        createWebView = WKWebView(frame: view.bounds, configuration: configuration)
//        createWebView?.uiDelegate = self
//        createWebView?.navigationDelegate = self
//        
//        // 현재 뷰 컨트롤러에 추가
//        view.addSubview(createWebView!)
//        // 새로운 WKWebView 반환
//        return createWebView
//    }
//    
//    func webViewDidClose(_ webView: WKWebView) {
//        createWebView?.removeFromSuperview()
//        createWebView = nil
//    }
}
