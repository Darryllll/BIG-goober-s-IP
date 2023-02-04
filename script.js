
function LoginPage_Login(){
  console.log("abdwa")
  $(document).ready(function () {
    console.log("dbuayda")
    const APIKEY = "63de48653bc6b255ed0c464c";
      
      let userName = $("#login-email").val();
      let userPass = $("#login-password").val();
  
      let jsondata = {
        "email": userName,
        "password": userPass,     
      };
      console.log("diuaid")
  
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://ipproject-81b0.restdb.io/rest/login",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
      }
      console.log("jad")
      
      
    $.ajax(settings).done(function (response) {
      console.log(response);
    
    
    })
  });
};



