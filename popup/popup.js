(function () {
    'use strict';
    
    var backgroundpage = chrome.extension.getBackgroundPage();
    
    var getTime = function() {
        chrome.runtime.sendMessage({greeting: "timer"}, function(response) {
            console.log(response.hours);
            console.log(response.minutes);
            console.log(response.seconds);
            var hours = response.hours;
            var minutes = response.minutes;
            var seconds = response.seconds;
            var pagestatus = response.status;

            document.getElementById("hours").innerHTML=hours;
            document.getElementById("minutes").innerHTML=minutes;
            document.getElementById("seconds").innerHTML=seconds;
            
            if (pagestatus == "Go"){
                setInterval(incrementseconds,1000);
            };

        });
        return true;

    };

    var incrementseconds = function() {
        var seconds = document.getElementById("seconds").innerHTML;
        var minutes = document.getElementById("minutes").innerHTML;
        var hours = document.getElementById("hours").innerHTML;
        if (seconds > 10){
            document.getElementById("seconds").innerHTML = seconds - 1;
        } else if (seconds == 10){
            document.getElementById("seconds").innerHTML = "09";
        } else if (seconds == "09"){
            document.getElementById("seconds").innerHTML = "08";
        } else if (seconds == "08"){
            document.getElementById("seconds").innerHTML = "07";
        } else if (seconds == "07"){
            document.getElementById("seconds").innerHTML = "06";
        } else if (seconds == "06"){
            document.getElementById("seconds").innerHTML = "05";
        } else if (seconds == "05"){
            document.getElementById("seconds").innerHTML = "04";
        } else if (seconds == "04"){
            document.getElementById("seconds").innerHTML = "03";
        } else if (seconds == "03"){
            document.getElementById("seconds").innerHTML = "02";
        } else if (seconds == "02"){
            document.getElementById("seconds").innerHTML = "01";
        } else if (seconds == "01"){
            document.getElementById("seconds").innerHTML = "00";
        } else if (seconds == "00"){
            document.getElementById("seconds").innerHTML = 59;
            if (minutes > 10){
                document.getElementById("minutes").innerHTML = minutes - 1;
            } else if (minutes == 10){
                document.getElementById("minutes").innerHTML = "09";
            } else if (minutes == "09"){
                document.getElementById("minutes").innerHTML = "08";
            } else if (minutes == "08"){
                document.getElementById("minutes").innerHTML = "07";
            } else if (minutes == "07"){
                document.getElementById("minutes").innerHTML = "06";
            } else if (minutes == "06"){
                document.getElementById("minutes").innerHTML = "05";
            } else if (minutes == "05"){
                document.getElementById("minutes").innerHTML = "04";
            } else if (minutes == "04"){
                document.getElementById("minutes").innerHTML = "03";
            } else if (minutes == "03"){
                document.getElementById("minutes").innerHTML = "02";
            } else if (minutes == "02"){
                document.getElementById("minutes").innerHTML = "01";
            } else if (minutes == "01"){
                document.getElementById("minutes").innerHTML = "00";
            } else if (minutes == "00"){
                document.getElementById("minutes").innerHTML = 59;
                if (hours > 10){
                    document.getElementById("hours").innerHTML = hours - 1;
                } else if (hours == 10){
                    document.getElementById("hours").innerHTML = "09";
                } else if (hours == "09"){
                    document.getElementById("hours").innerHTML = "08";
                } else if (hours == "08"){
                    document.getElementById("hours").innerHTML = "07";
                } else if (hours == "07"){
                    document.getElementById("hours").innerHTML = "06";
                } else if (hours == "06"){
                    document.getElementById("hours").innerHTML = "05";
                } else if (hours == "05"){
                    document.getElementById("hours").innerHTML = "04";
                } else if (hours == "04"){
                    document.getElementById("hours").innerHTML = "03";
                } else if (hours == "03"){
                    document.getElementById("hours").innerHTML = "02";
                } else if (hours == "02"){
                    document.getElementById("hours").innerHTML = "01";
                } else if (hours == "01"){
                    document.getElementById("hours").innerHTML = "00";
                } else if (hours == "00"){
                    document.getElementById("hours").innerHTML = 59;
                };
            };
        };
    };
    
    getTime();

    
    document.querySelector('#tookact').addEventListener('click',function () {
        backgroundpage.handleGoToAct();
    });
    document.querySelector('#myset').addEventListener('click',function () {
        backgroundpage.handleGoToSettings();
    });
    document.querySelector('#homepage').addEventListener('click',function () {
        backgroundpage.handleGoToHome();
    });

    
}());