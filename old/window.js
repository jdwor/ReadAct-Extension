(function () {
    'use strict';
    
    var backgroundpage = chrome.extension.getBackgroundPage();
    
    document.querySelector('#donate').addEventListener('click',function () {
        backgroundpage.handleDonateClickW();
        window.history.back();
    });
    
    document.querySelector('#call').addEventListener('click',function () {
        backgroundpage.handleCallClickW();
        window.history.back();
    });
    
    document.querySelector('#meetplan').addEventListener('click',function () {
        backgroundpage.handleMeetplanClickW();
        window.history.back();
    });
    
    document.querySelector('#meetgo').addEventListener('click',function () {
        backgroundpage.handleMeetgoClickW();
        window.history.back();
    });
    
    document.addEventListener('DOMContentLoaded', function () {
        var links = document.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            (function () {
                var ln = links[i];
                var location = ln.href;
                ln.onclick = function () {
                    chrome.tabs.create({active: false, url: location});
                };
            })();
        }
    });
    
}());