(function () {
    'use strict';

    var backgroundpage = chrome.extension.getBackgroundPage();
    
    document.querySelector('#donatebut').addEventListener('click',function () {
        backgroundpage.handleDonateClick();
        if (history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "http://readact.us";
        };
    });
    
    document.querySelector('#writebut').addEventListener('click',function () {
        backgroundpage.handleWriteClick();
        if (history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "http://readact.us";
        };
    });
    
    document.querySelector('#callbut').addEventListener('click',function () {
        backgroundpage.handleCallClick();
        if (history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "http://readact.us";
        };
    });
    
    document.querySelector('#rallybut').addEventListener('click',function () {
        backgroundpage.handleRallyClick();
        if (history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "http://readact.us";
        };
    });
    
    document.querySelector('#organizebut').addEventListener('click',function () {
        backgroundpage.handleOrganizeClick();
        if (history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "http://readact.us";
        };
    });
    
    document.querySelector('#attendbut').addEventListener('click',function () {
        backgroundpage.handleAttendClick();
        if (history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "http://readact.us";
        };
    });
    
//    document.addEventListener('DOMContentLoaded', function () {
//        var links = document.getElementsByTagName("a");
//        for (var i = 0; i < links.length; i++) {
//            (function () {
//                var ln = links[i];
//                var location = ln.href;
//                ln.onclick = function () {
//                    chrome.tabs.create({active: false, url: location});
//                };
//            })();
//        }
//    });
    
}());