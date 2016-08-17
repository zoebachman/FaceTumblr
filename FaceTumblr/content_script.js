//------------------GLOBALS------------------//

var backgroundColor = "#ebd2ea"; //lilac
var headerColor = "#F1E1E2"; //lightpink or grid
var linkColor = "#06E2FD"; //link color > aqua

var lightCoral = "#ff7e81";
var darkCoral = "#EF2C71";
var white = "#ffffff";
var lightPink = "#fadedd";
var lightBlue = "#d8e7fe";



//------------------DOC READY-------------------//

$("document").ready(function(){

    //change cursor
    $("body").css("cursor", "url('"+chrome.extension.getURL('cur1006.gif')+"'), default");
    previousURL = document.URL;

    changeColors();

});

//--------------------EVENTS------------------------//

//makes swaps when .ajax calls happen because the page is never reloaded
$("body").click(function(){
    window.setTimeout(function(){
        if(document.URL != previousURL){
            resetForAjax();
        }
    },450);
});

$("div.pagination.ajax_paginate").click(function(){
    console.log("I should have just changed something");
    window.setTimeout(function(){
        resetForAjax();
    },450);
});

toggleColorOnHover($("a.tooltipped,a.header-logo-invertocat,span.octicon-mark-github,ul.top-nav li a,.stats li a"),
            iconColor, iconColorHovered);
toggleColorOnHover($(".stats li a"),"#222", anchorColor);

