// creates pretty HTML character escape in pre and code enclosed tags in reveal.js
// (C) 2013, Raymond Camden: https://www.raymondcamden.com
document.addEventListener("DOMContentLoaded", properCodeMarkup, false);

function properCodeMarkup(){
      console.log("Run my init, yo!");

      var cblocks = document.querySelectorAll("pre code");
                              
      if(cblocks.length) {
              for(var i=0, len=cblocks.length; i<len; i++) {
                      var dom = cblocks[i];
                      var html = dom.innerHTML;
                      html = html.replace(/</g,"&lt;").replace(/>/g,"&gt;");
                      dom.innerHTML = html;
              }
      }

}
