(function () {
    'use strict';
    
    var donbut = document.getElementById("donate");
    var callbut = document.getElementById("call");
    var planbut = document.getElementById("meetplan");
    var gobut = document.getElementById("meetgo");
    var backgroundpage = chrome.extension.getBackgroundPage();
    var numclicks = 0;

    function toggle(button) {
        button.innerHTML = "Awesome!";
    };
    function error(button) {
        button.innerHTML = "Already submitted";
    };
    
    document.querySelector('#donate').addEventListener('click',function () {
        if (numclicks < 1) {
            backgroundpage.handleDonateClick();
            toggle(donbut);
            numclicks = numclicks + 1;
        } else {
            error(donbut);
        };
    });
    
    document.querySelector('#call').addEventListener('click',function () {
        if (numclicks < 1) {
            backgroundpage.handleCallClick();
            toggle(callbut);
            numclicks = numclicks + 1;
        } else {
            error(callbut);
        };
    });
    
    document.querySelector('#meetplan').addEventListener('click',function () {
        if (numclicks < 1) {
            backgroundpage.handleMeetplanClick();
            toggle(planbut);
            numclicks = numclicks + 1;
        } else {
            error(planbut);
        };
    });
    
    document.querySelector('#meetgo').addEventListener('click',function () {
        if (numclicks < 1) {
            backgroundpage.handleMeetgoClick();
            toggle(gobut);
            numclicks = numclicks + 1;
        } else {
            error(gobut);
        };
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