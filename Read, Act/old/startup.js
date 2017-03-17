(function () {
    'use strict';
    
    var backgroundpage = chrome.extension.getBackgroundPage();
    
    document.querySelector('#submit').addEventListener('click',function () {
        event.preventDefault();
        
        var don = donationtime.value;
        var phon = phonetime.value;
        var mplan = meetplantime.value;
        var mgo = meetdotime.value;
        
        backgroundpage.handleSubmitClick(don, phon, mplan, mgo);
        window.history.back();
    });
    
    //document.addEventListener('DOMContentLoaded', function () {
    //    var links = document.getElementsByTagName("a");
    //    for (var i = 0; i < links.length; i++) {
    //        (function () {
    //            var ln = links[i];
    //            var location = ln.href;
    //            ln.onclick = function () {
    //                chrome.tabs.create({active: true, url: location});
    //            };
    //        })();
    //    }
    //});
    
}());