(function () {
    'use strict';
    
    var backgroundpage = chrome.extension.getBackgroundPage();
    
    document.querySelector('#donatebut').addEventListener('click',function () {
        backgroundpage.handleGoToDonate();
    });
    document.querySelector('#writebut').addEventListener('click',function () {
        backgroundpage.handleGoToWrite();
    });
    document.querySelector('#callbut').addEventListener('click',function () {
        backgroundpage.handleGoToCall();
    });
    document.querySelector('#rallybut').addEventListener('click',function () {
        backgroundpage.handleGoToRally();
    });
    document.querySelector('#organizebut').addEventListener('click',function () {
        backgroundpage.handleGoToOrganize();
    });
    document.querySelector('#attendbut').addEventListener('click',function () {
        backgroundpage.handleGoToAttend();
    });
    
    
    document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});
    
}());