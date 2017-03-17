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
    
    document.querySelector('#writebut').addEventListener('click',function () {
        var writeinfo = document.getElementById("writeinfo");
        var label = document.getElementById("writelab");
        
        if (writeinfo.style.display == "none") {
            label.className = "slidein";
            writeinfo.style.display = "block";
        } else {
            label.className = "slideback";
            writeinfo.style.display = "none";
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
    
    document.querySelector('#rallybut').addEventListener('click',function () {
        var rallyinfo = document.getElementById("rallyinfo");
        var label = document.getElementById("rallylab");
        
        if (rallyinfo.style.display == "none") {
            label.className = "slidein";
            rallyinfo.style.display = "block";
        } else {
            label.className = "slideback";
            rallyinfo.style.display = "none";
        };
    });
    
    document.querySelector('#organizebut').addEventListener('click',function () {
        var organizeinfo = document.getElementById("organizeinfo");
        var label = document.getElementById("organizelab");
        
        if (organizeinfo.style.display == "none") {
            label.className = "slidein";
            organizeinfo.style.display = "block";
        } else {
            label.className = "slideback";
            organizeinfo.style.display = "none";
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
    
    document.querySelector('#readactdonate').addEventListener('click',function () {
        backgroundpage.handleDonateClick();
        window.history.back();
    });
    
    document.querySelector('#write').addEventListener('click',function () {
        backgroundpage.handleWriteClick();
        window.history.back();
    });
    
    document.querySelector('#call').addEventListener('click',function () {
        backgroundpage.handleCallClick();
        window.history.back();
    });
    
    document.querySelector('#rally').addEventListener('click',function () {
        backgroundpage.handleRallyClick();
        window.history.back();
    });
    
    document.querySelector('#organize').addEventListener('click',function () {
        backgroundpage.handleOrganizeClick();
        window.history.back();
    });
    
    document.querySelector('#attend').addEventListener('click',function () {
        backgroundpage.handleAttendClick();
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