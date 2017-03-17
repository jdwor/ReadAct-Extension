var numpres;
var numhouse;
var numsen;
var numpol;
var numcong;
var numcongw;
var numcongm;
var numsenator;
var numrep;
var numdem;
var numrepub;
var str;
var numall;
var numtot;
var ratiopre;
var ratio;
var maxtime = 100;
var allclear;


var SendMessage = function() {
    
    chrome.runtime.sendMessage({greeting: "status"}, function(response) {
        console.log(response.farewell);
        allclear = response.farewell;
        
            if (allclear == "site") {

            console.log(allclear);
            console.log("Site related");

            var port = chrome.runtime.connect({name: "ratio"});
            port.postMessage({answer: "Stop"});
            //chrome.runtime.sendMessage({greeting: "Stop"});

        } else if (allclear == "Stop" || allclear == "Go") {

            var port = chrome.runtime.connect({name: "ratio"});
            port.postMessage({answer: allclear});

        } else if (allclear == "true") {

            console.log(allclear);

            str = "";

            var paras = document.getElementsByTagName("p");
            var ps = Array.prototype.slice.call(paras);
            ps.forEach(function (item) {
                str = str + item.textContent;
            });

            console.log("string loaded");

            numpres = str.match(/president/gi);
            numsen = str.match(/senate/gi);
            numpol = str.match(/politician/gi);
            numcong = str.match(/congress/gi);
            numcongw = str.match(/congresswoman/gi);
            numcongm = str.match(/congressman/gi);
            numsenator = str.match(/senator/gi);
            numrep = str.match(/representative/gi);
            numdem = str.match(/democrat/gi);
            numrepub = str.match(/republican/gi);
            numlib = str.match(/liberal/gi);
            numcons = str.match(/conservative/gi);
            numleft = str.match(/left-wing/gi);
            numright = str.match(/right-wing/gi);

            numall = numpres + numsen + numpol + numcong + numcongw + numcongm + numsenator + numrep + numdem + numrepub + numlib + numcons + numleft + numright;
            numall = numall.length;
            numtot = str.length;
            console.log(numall, numtot, numall / numtot);
            ratiopre = numall / numtot;

            if (ratiopre !== ratiopre) {
                ratio = 0;
            } else {
                ratio = ratiopre;
            };

            if (ratio < 0.01) {
                var port = chrome.runtime.connect({name: "ratio"});
                port.postMessage({answer: "Stop"});
            } else {
                var port = chrome.runtime.connect({name: "ratio"});
                port.postMessage({answer: "Go"});
            };
        };
    });
    return true;
};


SendMessage(); 

setInterval(function() {
    SendMessage();
}, 10000);

chrome.runtime.onMessage.addListener(function (msg) {
    if (msg.activated == true) {
        SendMessage();
    };
});











