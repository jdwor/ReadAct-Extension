(function () {
    'use strict';

    //var backgroundpage = chrome.extension.getBackgroundPage();
    
    document.querySelector('#donatebut').addEventListener('click',function () {
        var donateinfo = document.getElementById("donateinfo");
        var label = document.getElementById("donatelab");
        
        if (donateinfo.style.display == "none") {
            label.className = "slidein";
            donateinfo.style.display = "block";
        } else {
            label.className = "slideback";
            donateinfo.style.display = "none";
        };
    });
    
    document.querySelector('#callbut').addEventListener('click',function () {
        var callinfo = document.getElementById("callinfo");
        var label = document.getElementById("calllab");
        
        if (callinfo.style.display == "none") {
            label.className = "slidein";
            callinfo.style.display = "block";
        } else {
            label.className = "slideback";
            callinfo.style.display = "none";
        };
    });
    
    document.querySelector('#attendbut').addEventListener('click',function () {
        var attendinfo = document.getElementById("attendinfo");
        var label = document.getElementById("attendlab");
        
        if (attendinfo.style.display == "none") {
            label.className = "slidein";
            attendinfo.style.display = "block";
        } else {
            label.className = "slideback";
            attendinfo.style.display = "none";
        };
    });
    
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