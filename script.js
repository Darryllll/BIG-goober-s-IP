
function LoginPage_Login(){
  
  $(document).ready(function () {
    
    const APIKEY = "63de48653bc6b255ed0c464c";
      
      let userName = $("#login-email").val();
      let userPass = $("#login-password").val();
  
      let jsondata = {
        "email": userName,
        "password": userPass,     
      };
      
  
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
      
      
      
    $.ajax(settings).done(function (response) {
      console.log(response);
    
    
    })
  });
};



