//------------------VOID FUNCTIONS---------------------//


function changeColors(){
     
    //background color and status text color

     $("div._li._5vb_, ._5vb_ #contentCol"),css({
        "background-color": backgroundColor,
        "color": coral
     });

    //$("body").css("background-color", backgroundColor); 
    //$("div._li._5vb_, ._5vb_ #contentCol"),css("background-color", backgroundColor);
    //not sure what correct syntax is 


     //font change
     $("._5p3y[dir='ltr'], ._5p3y[dir='ltr'] button, ._5p3y[dir='ltr'] input, ._5p3y[dir='ltr'] label, ._5p3y[dir="ltr"] select, ._5p3y[dir="ltr"] td, ._5p3y[dir="ltr"] textarea, ._5p3y[dir="ltr"] .uiMentionsInput .highlighter, ._5p3y[dir="ltr"] .uiButtonText, ._5p3y[dir="ltr"] .uiButton input, ._5p3y[dir="ltr"] .uiLinkButton input, ._5p3y[dir="ltr"] button.as_link, ._5p3y[dir="ltr"] .fbChatSidebar, ._5p3y[dir="ltr"] .fbDock, ._5p3y[dir="ltr"] .fbFeedTicker .fbFeedTickerStory .tickerFeedMessage, ._5p3y[dir="ltr"] .fbFeedTicker .fbFeedTickerStory div.tickerFeedMessage h5, ._5p3y[dir="ltr"] .fbFeedTicker .fbFeedTickerStory div.tickerFeedMessage h6, ._5p3y[dir="ltr"] .uiTooltipX .tooltipContent, ._5p3y[dir="ltr"] a[role="button"], ._5p3y[dir="rtl"] *[dir="ltr"]").css({
        "font-family": arial, //in quotes? 
        "font-style": italic,
        "text-transform": uppercase
     });

     

  
     //header
    $("div._2t-a ._4pmj ._2t-d ._50tk ._2s1x ._2s1y").css({
        "background-image": "tumblr_bkgrnd.jpg",
        "background-color": headerColor

    });

    // $("._2s1x ._2s1y").css("background-image", "tumblr_bkgrnd.jpg"); // change search bar to grid 
    // $("._2s1x ._2s1y").css("background-color", headerColor); 

    //links 
    $("a #'accessible_elem skipto' href='#newsFeedHeading' target='newsFeedHeading' id='u_0_0'>Skip to News Feeds").css("color", linkColor);             
    $("a.selected").css("border-bottom", "2px solid "+anchorColor); 

    //button text color
   $("._5p3y, ._5p3y button, ._5p3y input, ._5p3y label, ._5p3y select, ._5p3y td, ._5p3y textarea, ._5p3y .uiMentionsInput .highlighter, ._5p3y .uiButtonText, ._5p3y .uiButton input, ._5p3y .uiLinkButton input, ._5p3y button.as_link").css("color", anchorColor)



}

function resetForAjax(){
    changeColors();
    previousURL = document.URL;
}