
/*function LoginPage_Login() {
  $(document).ready(function () {
    const APIKEY = "63de48653bc6b255ed0c464c";

    let userName = $("#login-email").val();
    let userPass = $("#login-password").val();

    if (!userName || !userPass) {
      console.error("Email and password are required.");
      return;
    }

    let jsondata = {
      "email": userName,
      "password": userPass,
    };

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://ipproject-81b0.restdb.io/rest/login",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache",
      },
      "processData": false,
      "data": JSON.stringify(jsondata),
    };

    $.ajax(settings).done(function (response) {
      let emailWrong = false;
      let passWrong = false;
  
      for (let i = 0; i < response.length; i++) {
        if (response[i].email === userName) {
          emailWrong = true;
          break;
        }
  
        if (response[i].password === userPass) {
          passWrong = true;
          break;
        }
      }
      
      if (emailWrong) {
        $("#errorModal .modal-body").html("Error: email is incorrect");
        $("#errorModal").modal("show");
        return;
      }
  
      if (passWrong) {
        $("#errorModal .modal-body").html("Error: Password is incorrect");
        $("#errorModal").modal("show");
        return;
      }

      });
  });
}*/
/*function LoginPage_Login() {
  $(document).ready(function () {
    const APIKEY = "63de48653bc6b255ed0c464c";

    let userName = $("#login-email").val();
    let userPass = $("#login-password").val();

    if (!userName || !userPass) {
      console.error("Email and password are required.");
      return;
    }

    let jsondata = {
      "email": userName,
      "password": userPass,
    };

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://ipproject-81b0.restdb.io/rest/login",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache",
      },
      "processData": false,
      "data": JSON.stringify(jsondata),
    };

    $.ajax(settings).done(function (response) {
      let emailWrong = false;
      let passWrong = false;
  
      for (let i = 0; i < response.length; i++) {
        if (response[i].email !== userName) {
          emailWrong = true;
          break;
        }
  
        if (response[i].password !== userPass) {
          passWrong = true;
          break;
        }
      }
      
      if (!emailWrong && !passWrong) {
      window.location.href = "Lobby.html";
      } else {
        if (emailWrong) {
          $("#errorModal .modal-body").html("Error: Email is incorrect");
        }
  
        if (passWrong) {
          $("#errorModal .modal-body").html("Error: Password is incorrect");
        }
        $("#errorModal").modal("show");
      
      }
    });
  });
}*/

function LoginPage_Login() {
  $(document).ready(function () {
    const APIKEY = "63de48653bc6b255ed0c464c";

    let userName = $("#login-email").val();
    let userPass = $("#login-password").val();

    if (!userName || !userPass) {
      $("#errorModal .modal-body").html("Email and password are required.");
      $("#errorModal").modal("show");
      return;
    }

    let jsondata = {
      "email": userName,
      "password": userPass,
    };

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://ipproject-81b0.restdb.io/rest/login",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache",
      },
      "processData": false,
      "data": JSON.stringify(jsondata),
    };

    $.ajax(settings).done(function (response) {
      let emailWrong = true;
      let passWrong = true;
    
      for (let i = 0; i < response.length; i++) {
        if (response[i].email === userName) {
          emailWrong = false;
    
          // Extract the username from the response
          let username = response[i].username;
    
          // Store the username in the session storage
          sessionStorage.setItem("username", username);
    
          // Redirect to the lobby page
          window.location.href = "Lobby.html";
        }
    
        if (response[i].password === userPass) {
          passWrong = false;
        }
      }
    
      if (emailWrong || passWrong) {
        let errorMessage = "Error: Data is incorrect";
        $("#errorModal .modal-body").html(errorMessage);
        $("#errorModal").modal("show");
      }
    });
  });
}



//for the sign up page
function submitButton() {
  $(document).ready(function () {
    const APIKEY = "63de48653bc6b255ed0c464c";
    let userName = $("#signUp-Email").val();
    let userPass = $("#signUp-Password").val();
    let userUname = $("#signUp-Username").val();
  
    let jsondata = {
      "email": userName,
      "password": userPass,  
      "username": userUname,
    };
  
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://ipproject-81b0.restdb.io/rest/login",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata)
    }
    
    $.ajax(settings).done(function (response) {
      let emailTaken = false;
      let usernameTaken = false;
  
      for (let i = 0; i < response.length; i++) {
        if (response[i].email === userName) {
          emailTaken = true;
          break;
        }
  
        if (response[i].username === userUname) {
          usernameTaken = true;
          break;
        }
      }
      
      if (emailTaken) {
        $("#errorModal .modal-body").html("Error: email is already taken");
        $("#errorModal").modal("show");
        return;
      }
  
      if (usernameTaken) {
        $("#errorModal .modal-body").html("Error: username is already taken");
        $("#errorModal").modal("show");
        return;
      }
  
      // Only make the POST request if both email and username are available
      var postSettings = {
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
  
      $.ajax(postSettings).done(function (postResponse) {
        console.log(postResponse);
        $("#submitButton").prop("disabled", false);
        window.location.href = "LoginPage.html";
      }).fail(function() {
        $("#errorModal .modal-body").html("Error: sign-up failed");
        $("#errorModal").modal("show");
        
      });
    });
  });
};
/* for lobby page*/
$(document).ready(function() {
  const APIKEY = "63de48653bc6b255ed0c464c";
  let userEmail = sessionStorage.getItem("userEmail");

  if (!userEmail) {
    window.location.href = "Login.html";
    return;
  }

  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://ipproject-81b0.restdb.io/rest/login",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": APIKEY,
      "cache-control": "no-cache",
    },
  };

  $.ajax(settings).done(function(response) {
    let user;
    for (let i = 0; i < response.length; i++) {
      if (response[i].email === userEmail) {
        user = response[i];
        break;
      }
    }
    if (!user) {
      window.location.href = "Login.html";
      return;
    }
    let username = user.name;

    // Replace the welcome message with the username
    $("#LobbyInven0").html(username);
  });
});

/* for posting page*/
function postSubmit() {
  const APIKEY = "63de48653bc6b255ed0c464c";
  let caption = $("#caption").val();
  let title = $("#title").val();

  if (!caption || !title) {
    alert("Please fill in both caption and title fields.");
    return;
  }

  let jsondata = {
    "caption": caption,
    "title": title,
  };

  var captionsettings = {
    "async": true,
    "crossDomain": true,
    "url": "https://ipproject-81b0.restdb.io/rest/posts",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "x-apikey": APIKEY,
      "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(jsondata)
  };

  $.ajax(captionsettings).done(function (response) {
    if (response.hasOwnProperty("caption") && response.caption != null && 
        response.hasOwnProperty("title") && response.title != null) {
      alert("posted");
    } else {
      alert("error");
    }
  }).fail(function() {
    alert("error");
  });

  var apikey = "63de48653bc6b255ed0c464c";
  $.ajaxPrefilter(function(options) {
    if (!options.beforeSend) {
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('x-apikey', apikey);
      };
    }
  });

  var formData = new FormData();
  var files = $('#file1')[0].files;
  // Loop through each of the selected files.
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var name = files[0].name;
    // Add the file to the request.
    formData.append('myfile', file, file.name);
  }

  $.ajax({
    "data": formData,
    "url": "https://ipproject-81b0.restdb.io/rest/image",
    "method": "POST",
    "contentType": false,
    "processdata": false,
  }).done(function(response) {
    console.log("upload success");
    console.log(response);
  });
}



function fart() {
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes();
  var dateTime = date+' '+time;
  
  console.log(dateTime)
}

  /*var apikey = "63de48653bc6b255ed0c464c";
  $.ajaxPrefilter(function(options) {
    if (!options.beforeSend) {
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('x-apikey', apikey);
      };
    }
  });

  var formData = new FormData();
  var files = $('#file1')[0].files;
  // Loop through each of the selected files.
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var name = files[0].name;
    // Add the file to the request.
    formData.append('myfile', file, file.name);
  }

  $.ajax({
    "data": formData,
    "url": "https://ipproject-81b0.restdb.io/rest/image",
    "method": "POST",
    "contentType": false,
    "processdata": false,
  }).done(function(response) {
    console.log("upload success");
    console.log(response);
  });
}*/


/*function ff() {
  var apikey = "63de48653bc6b255ed0c464c";
  $.ajaxPrefilter(function( options ) {
	  if ( !options.beforeSend) {
		  options.beforeSend = function (xhr) { 
			  xhr.setRequestHeader('x-apikey', apikey);
  var formData = new FormData();
  var files = $('#file1')[0].files; 
        // Loop through each of the selected files.
    for (var i = 0; i < files.length; i++) {
         var file = files[i];
         var name = files[0].name;
          // Add the file to the request.
        formData.append('myfile', file, file.name);
    $.ajax({
        "data": formData,
        "url": "https://ipproject-81b0.restdb.io/rest/posts",
        "method": "POST",
        "contentType": false,
    }).done(function (response) {
      console.log("upload success");
      console.log(response);
    });
        }
		}
	}
});
}*/




/*var xhr = new XMLHttpRequest();
xhr.open("GET", "https://ipproject-81b0.restdb.io/rest/login", true);
xhr.setRequestHeader("x-apikey", "<api-key>");
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    for (var i = 0; i < data.length; i++) {
      var post = data[i];
      var postHTML = "<div class='post'>" +
                        "<img class='postImage' src='" + post.image + "'>" +
                        "<p class='postCaption'>" + post.caption + "</p>" +
                     "</div>";
      document.getElementById("postContainer").innerHTML += postHTML;
    }
  }
};
xhr.send();*/
/*$.get("api/data", function(data) {
  var commUsername = data.commUsername;
  var commTag = data.commTag;
  var commTitle = data.commTitle;
  var commImage = data.commImage;
  var commCaption = data.commCaption;
  
  $(".commUsername").replaceWith("<p class='commUsername'>" + commUsername + "</p>");
  $(".commTag").replaceWith("<p class='commTag'>" + commTag + "</p>");
  $(".commTitle").replaceWith("<h4 class='commTitle'>" + commTitle + "</h4>");
  $(".commImage").replaceWith("<img class='commImage' src='" + commImage + "'>");
  $(".commCaption").replaceWith("<p class='commCaption'>" + commCaption + "</p>");
});*/
/*async function postImageAndCaption(image, caption) {
  const postData = {
    image: image,
    caption: caption
  };

  const response = await fetch("https://ipproject-81b0.restdb.io/rest/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
  });

  if (!response.ok) {
    throw new Error("Failed to post image and caption");
  }

  const postContainer = document.createElement("div");
  postContainer.className = "post-container";

  const postImage = document.createElement("img");
  postImage.src = image;
  postImage.alt = "Post Image";
  postContainer.appendChild(postImage);

  const postCaption = document.createElement("p");
  postCaption.className = "post-caption";
  postCaption.innerText = caption;
  postContainer.appendChild(postCaption);

  document.body.appendChild(postContainer);
}*/




