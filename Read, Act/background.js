var status;
var prevurl;
var current;

var CheckTime = function () {
    if (status == "Go"){
        chrome.storage.sync.get('time', function(obj){
            if(obj.time || obj.time == 0) {
                chrome.storage.sync.set({time: obj.time - 5});
                console.log(obj.time - 5);
                if (obj.time - 5 == 0 || obj.time - 5 < 0){
                    status = "Stop";
                    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
                        //prevurl = tabs[0].url;
                        chrome.tabs.update(tabs[0].id,{url: chrome.extension.getURL("actwindow.html")});
                    });
                    return true;
                };
            } else {
                status = "Stop";
                chrome.tabs.query({active:true, currentWindow:true},function(tabs){
                    //prevurl = tabs[0].url;
                    //console.log(prevurl);
                    chrome.tabs.update(tabs[0].id,{url: chrome.extension.getURL("startup.html")});
                });
                return true;
            };
        });
    };
};

function handleDonateClick() {
    chrome.storage.sync.get('time', function(obj1) {
        chrome.storage.sync.get('donationtime', function(obj2) {
            chrome.storage.sync.set({time: Math.max(Number(obj1.time),Number(obj2.donationtime))});
            console.log(Math.max(Number(obj1.time),Number(obj2.donationtime)));
        });
    });
}
function handleWriteClick() {
    chrome.storage.sync.get('time', function(obj1) {
        chrome.storage.sync.get('writetime', function(obj2) {
            chrome.storage.sync.set({time: Math.max(Number(obj1.time),Number(obj2.writetime))});
            console.log(Math.max(Number(obj1.time),Number(obj2.writetime)));
        });
    });
}
function handleCallClick() {
    chrome.storage.sync.get('time', function(obj1) {
        chrome.storage.sync.get('phonetime', function(obj2) {
            chrome.storage.sync.set({time: Math.max(Number(obj1.time),Number(obj2.phonetime))});
            console.log(Math.max(Number(obj1.time),Number(obj2.phonetime)));
        });
    });
}
function handleRallyClick() {
    chrome.storage.sync.get('time', function(obj1) {
        chrome.storage.sync.get('rallytime', function(obj2) {
            chrome.storage.sync.set({time: Math.max(Number(obj1.time),Number(obj2.rallytime))});
            console.log(Math.max(Number(obj1.time),Number(obj2.rallytime)));
        });
    });
}

function handleOrganizeClick() {
    chrome.storage.sync.get('time', function(obj1) {
        chrome.storage.sync.get('organizetime', function(obj2) {
            chrome.storage.sync.set({time: Math.max(Number(obj1.time),Number(obj2.organizetime))});
            console.log(Math.max(Number(obj1.time),Number(obj2.organizetime)));
        });
    });
}
function handleAttendClick() {
    chrome.storage.sync.get('time', function(obj1) {
        chrome.storage.sync.get('attendtime', function(obj2) {
            chrome.storage.sync.set({time: Math.max(Number(obj1.time),Number(obj2.attendtime))});
            console.log(Math.max(Number(obj1.time),Number(obj2.attendtime)));
        });
    });
}

function handleGoToAct() {
    chrome.tabs.create({url: chrome.extension.getURL("actwindowUP.html")})
}
function handleGoToSettings() {
    chrome.tabs.create({url: chrome.extension.getURL("settings.html")})
}
function handleGoToHome() {
    chrome.tabs.create({url: "http://www.readact.us"})
}


function handleSubmitClick(don, writ, phon, ral, org, att, engage, active) {
    chrome.storage.sync.set({donationtime: don});
    chrome.storage.sync.set({time: phon});
    chrome.storage.sync.set({writetime: writ});
    chrome.storage.sync.set({phonetime: phon});
    chrome.storage.sync.set({rallytime: ral});
    chrome.storage.sync.set({organizetime: org});
    chrome.storage.sync.set({attendtime: att});
    chrome.storage.sync.set({engage: engage});
    chrome.storage.sync.set({active: active});
    console.log(don, writ, phon, ral, org, att);
}

function handleSubmitClick2(don, writ, phon, ral, org, att, engage, active) {
    chrome.storage.sync.set({donationtime: don});
    chrome.storage.sync.set({writetime: writ});
    chrome.storage.sync.set({phonetime: phon});
    chrome.storage.sync.set({rallytime: ral});
    chrome.storage.sync.set({organizetime: org});
    chrome.storage.sync.set({attendtime: att});
    chrome.storage.sync.set({engage: engage});
    chrome.storage.sync.set({active: active});
    console.log(don, writ, phon, ral, org, att);
}


function handleTweaksClick(morefreq, lessfreq, snooze) {
    if(snooze==true){
        chrome.storage.sync.get('time', function(obj1) {
            chrome.storage.sync.set({time: Number(obj1.time) + 3600});
            console.log(Number(obj1.time) + 3600);
        });
    };
    if(morefreq==false & lessfreq==true){
        chrome.storage.sync.get('time', function(obj1) {
            chrome.storage.sync.set({time: 1.5 * Number(obj1.time)});
            console.log(1.5 * Number(obj1.time));
        });
        chrome.storage.sync.get('donationtime', function(obj1) {
            chrome.storage.sync.set({donationtime: 1.5 * Number(obj1.donationtime)});
            console.log(1.5 * Number(obj1.donationtime));
        });
        chrome.storage.sync.get('writetime', function(obj1) {
            chrome.storage.sync.set({writetime: 1.5 * Number(obj1.writetime)});
            console.log(1.5*Number(obj1.writetime));
        });
        chrome.storage.sync.get('phonetime', function(obj1) {
            chrome.storage.sync.set({phonetime: 1.5 * Number(obj1.phonetime)});
            console.log(1.5*Number(obj1.phonetime));
        });
        chrome.storage.sync.get('rallytime', function(obj1) {
            chrome.storage.sync.set({rallytime: 1.5 * Number(obj1.rallytime)});
            console.log(1.5*Number(obj1.rallytime));
        });
        chrome.storage.sync.get('organizetime', function(obj1) {
            chrome.storage.sync.set({organizetime: 1.5 * Number(obj1.organizetime)});
            console.log(1.5*Number(obj1.organizetime));
        });
        chrome.storage.sync.get('attendtime', function(obj1) {
            chrome.storage.sync.set({attendtime: 1.5 * Number(obj1.attendtime)});
            console.log(1.5*Number(obj1.attendtime));
        });
    } else if(lessfreq==false & morefreq==true){
        chrome.storage.sync.get('time', function(obj1) {
            chrome.storage.sync.set({time: Number(obj1.time) / 1.5});
            console.log(Number(obj1.time) / 1.5);
        });
        chrome.storage.sync.get('donationtime', function(obj1) {
            chrome.storage.sync.set({donationtime: Number(obj1.donationtime) / 1.5});
            console.log(Number(obj1.donationtime) / 1.5);
        });
        chrome.storage.sync.get('writetime', function(obj1) {
            chrome.storage.sync.set({writetime: Number(obj1.writetime) / 1.5});
            console.log(Number(obj1.writetime) / 1.5);
        });
        chrome.storage.sync.get('phonetime', function(obj1) {
            chrome.storage.sync.set({phonetime: Number(obj1.phonetime) / 1.5});
            console.log(Number(obj1.phonetime) / 1.5);
        });
        chrome.storage.sync.get('rallytime', function(obj1) {
            chrome.storage.sync.set({rallytime: Number(obj1.rallytime) / 1.5});
            console.log(Number(obj1.rallytime) / 1.5);
        });
        chrome.storage.sync.get('organizetime', function(obj1) {
            chrome.storage.sync.set({organizetime: Number(obj1.organizetime) / 1.5});
            console.log(Number(obj1.organizetime) / 1.5);
        });
        chrome.storage.sync.get('attendtime', function(obj1) {
            chrome.storage.sync.set({attendtime: Number(obj1.attendtime) / 1.5});
            console.log(Number(obj1.attendtime) / 1.5);
        });
    };
}

chrome.runtime.onInstalled.addListener(function (object) {
    chrome.storage.sync.get('time', function(obj){
        if(obj.time) {
            console.log("already installed");
        } else {
            chrome.tabs.create({url: chrome.extension.getURL("startup.html")});
        };
    });
});


chrome.tabs.onActivated.addListener(function(){
    chrome.tabs.query({active:true, currentWindow:true},function(tabs){ 
        chrome.tabs.sendMessage(tabs[0].id, {activated : true});
    });
});


chrome.runtime.onConnect.addListener(function (port) {
    console.assert(port.name == "ratio");
    port.onMessage.addListener(function (msg) {
        status = msg.answer;
        //chrome.browserAction.setBadgeText({text: status.toString()});
        if (status == "Go") {
            chrome.browserAction.setIcon({path: "ims/flagcomma48.png"});
            current = "Go";
        } else if (status == "Stop") {
            chrome.browserAction.setIcon({path: "ims/graycomma48.png"});
            current = "Stop";
        };
    });
});

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    if (request.greeting == "status") {
    
        var badge;

        badge = current;

        var sametabs;
        var facebook = (sender.tab.url.indexOf("facebook.com") !== -1);
        var popup = (sender.tab.url.indexOf("popup.html") !== -1);
        var startup = (sender.tab.url.indexOf("startup.html") !== -1);
        var actwindow = (sender.tab.url.indexOf("actwindow.html") !== -1);
        var settings = (sender.tab.url.indexOf("settings.html") !== -1);
        var readact = (sender.tab.url.indexOf("readact") !== -1);

        chrome.tabs.query({active:true, currentWindow:true},function(tabs){
            sametabs = (tabs[0].id == sender.tab.id);

            if (sametabs == false) {
                allclear = badge;
            } else if (((facebook == true) || (popup == true) || (startup == true) || (actwindow == true) || (settings == true) || (readact == true)) && sametabs == true) {
                allclear = "site";
            } else {
                allclear = "true";
            };

            console.log(facebook);
            console.log(popup);
            console.log(allclear);

            sendResponse({farewell: allclear});
            
        });
        return true;

    } else if (request.greeting == "settings") {
        chrome.storage.sync.get('engage', function(obj1) {
            var engage = obj1.engage;
            chrome.storage.sync.get('active', function(obj2) {
                var active = obj2.active;
                console.log(engage);
                console.log(active);
                sendResponse({
                    engagement: engage,
                    activity: active
                });
            });
        });
        return true;
    } else if (request.greeting == "timer") {
        chrome.storage.sync.get('time', function(obj1) {
            var status = current;
            var time = obj1.time;
            var hours = Math.floor(time / 3600);
            if (hours < 10) {
                hours = "0".concat(hours);
            }
            var hoursrem = time % 3600;
            var minutes = Math.floor(hoursrem / 60);
            if (minutes < 10) {
                minutes = "0".concat(minutes);
            }
            var minutesrem = hoursrem % 60;
            var seconds = Math.floor(minutesrem);
            if (seconds < 10) {
                seconds = "0".concat(seconds);
            }
            console.log(hours);
            console.log(minutes);
            console.log(seconds);
            console.log(status);
            sendResponse({
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                status: status
            });
        });
        return true;
    }; 
});


setInterval(function() {
    CheckTime();
}, 5000);






