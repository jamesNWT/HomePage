String.prototype.replaceChars = function(character, replacement){
    var str = this;
    var a;
    var b;
    for(var i=0; i < str.length; i++){
        if(str.charAt(i) == character){
            a = str.substr(0, i) + replacement;
            b = str.substr(i + 1);
            str = a + b;
        }
    }
    return str;
}

function search(query){
    switch(query.substr(0, 2)){
        case "-d":
            query = query.substr(3);
            window.location = "https://duckduckgo.com/?q=" +
            query.replaceChars(" ", "+");
            break;

        case "-y":
            query = query.substr(3);
            window.location =
            "https://www.youtube.com/results?search_query=" +
            query.replaceChars(" ", "+");
            break;

        case "-l":
            query = query.substr(3);
            window.location =
            "https://www.google.ca/search?q=site:liquipedia.net " +
            query.replaceChars(" ", "%20");
            break;

        case "-w":
            query = query.substr(3);
            window.location =
            "https://en.wikipedia.org/wiki/Special:Search/" +
            query.replaceChars(" ", "%20");
            break;

        default:
            window.location="https://www.google.ca/search?q=" +
            
            //workaround for + being a special char in google search URL
            query.replaceChars("+", "%2B"); 
            
            query.replaceChars("", "%20");
            
    }
}

window.onload = function(){
// search
searchinput = document.getElementById("searchbox");
if(!!searchinput){
    searchinput.addEventListener("keypress", function(a){
        var key = a.keyCode;
        if(key == 13){
            var query = this.value;
            search(query);
        }
    });
}
// jump to search when tab is pressed
var search_sqr = document.getElementById("search_sqr");
}