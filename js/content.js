var first = true;
var count = 0;


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var url =  $("a[href^='http']").eq(0).attr("href");
      if( request.message === "clicked_browser_action" ) {  
       
      }else{
          alert(request.message + " " + url);
      }
    }
  );

