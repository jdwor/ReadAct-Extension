(function () {
    'use strict';
    
    var backgroundpage = chrome.extension.getBackgroundPage();
    
    chrome.runtime.sendMessage({greeting: "settings"}, function(response) {
        console.log(response.engagement);
        console.log(response.activity);
        var engagement = response.engagement;
        var activity = response.activity;
        
        if (engagement == "disengaged") {
            document.querySelector('input[id="disengaged"]').checked=true;
        } else if (engagement == "occasional") {
            document.querySelector('input[id="occasional"]').checked=true;
        } else if (engagement == "engaged") {
            document.querySelector('input[id="engaged"]').checked=true;
        } else if (engagement == "avid") {
            document.querySelector('input[id="avid"]').checked=true;
        } else if (engagement == "pundit") {
            document.querySelector('input[id="pundit"]').checked=true;
        };
        
        if (activity == "monthly") {
            document.querySelector('input[id="monthly"]').checked=true;
        } else if (activity == "fewweeks") {
            document.querySelector('input[id="fewweeks"]').checked=true;
        } else if (activity == "weekly") {
            document.querySelector('input[id="weekly"]').checked=true;
        } else if (activity == "fewdays") {
            document.querySelector('input[id="fewdays"]').checked=true;
        } else if (activity == "daily") {
            document.querySelector('input[id="daily"]').checked=true;
        };
    });
    
    document.querySelector('#submittweaks').addEventListener('click',function () {
        event.preventDefault();
        
        var morefreq = document.querySelector('input[id="morefreq"]').checked;
        var lessfreq = document.querySelector('input[id="lessfreq"]').checked;
        var snooze = document.querySelector('input[id="snooze"]').checked;
        
        backgroundpage.handleTweaksClick(morefreq, lessfreq, snooze);
        window.location.href = "http://readact.us";
    });
    
    document.querySelector('#submit').addEventListener('click',function () {
        event.preventDefault();
        
        var engage = document.querySelector('input[name="engagement"]:checked').id;
        var active = document.querySelector('input[name="activity"]:checked').id;
        var value;
        
        if(engage=='disengaged'){
            if(active=='monthly'){value=4;}
            else if(active=='fewweeks'){value=2;}
            else if(active=='weekly'){value=1;}
            else if(active=='fewdays'){value=.33;}
            else if(active=='daily'){value=.14;};
        }else if(engage=='occasional'){
            if(active=='monthly'){value=10;}
            else if(active=='fewweeks'){value=5;}
            else if(active=='weekly'){value=2.5;}
            else if(active=='fewdays'){value=.83;}
            else if(active=='daily'){value=.36;};
        }else if(engage=='engaged'){
            if(active=='monthly'){value=18;}
            else if(active=='fewweeks'){value=9;}
            else if(active=='weekly'){value=4.5;}
            else if(active=='fewdays'){value=1.5;}
            else if(active=='daily'){value=.64;};
        }else if(engage=='avid'){
            if(active=='monthly'){value=28;}
            else if(active=='fewweeks'){value=14;}
            else if(active=='weekly'){value=7;}
            else if(active=='fewdays'){value=2.33;}
            else if(active=='daily'){value=1;};
        }else if(engage=='pundit'){
            if(active=='monthly'){value=44;}
            else if(active=='fewweeks'){value=22;}
            else if(active=='weekly'){value=11;}
            else if(active=='fewdays'){value=3.66;}
            else if(active=='daily'){value=1.57;};
        };
        
        var don = (value * 3600);
        var writ = (value * 3600);
        var phon = (value * 3600);
        var ral = (value * 2) * 3600;
        var org = (value * 2) * 3600;
        var att = (value * 2) * 3600;
        
        backgroundpage.handleSubmitClick2(don, writ, phon, ral, org, att, engage, active);
        window.location.href = "http://readact.us";
    });

}());