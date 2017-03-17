(function () {
    'use strict';
    
    var backgroundpage = chrome.extension.getBackgroundPage();
    
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
        
        backgroundpage.handleSubmitClick(don, writ, phon, ral, org, att, engage, active);
        if (history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "http://readact.us";
        };
    });

}());