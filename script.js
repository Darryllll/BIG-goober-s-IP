
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
    const APIKEY = "63ef3c6e478852088da683ab";

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
      "url": "https://ipproject-f3a0.restdb.io/rest/login",
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
    const APIKEY = "63ef3c6e478852088da683ab";
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
      "url": "https://ipproject-f3a0.restdb.io/rest/login ",
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
        "url": "https://ipproject-f3a0.restdb.io/rest/login ",
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
  const APIKEY = "63ef3c6e478852088da683ab";
  let userEmail = sessionStorage.getItem("userEmail");
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://ipproject-f3a0.restdb.io/rest/login",
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
  });
  var username = sessionStorage.getItem("username");
  var lobbyUsername = document.querySelector("#LobbyInven0")
  if (username.length > 0) {
  lobbyUsername.innerHTML = lobbyUsername.innerHTML.replace("username", username);
}
});




/* for posting page*/
function postSubmit() {
  const APIKEY = "63ef3c6e478852088da683ab";
  let caption = $("#caption").val();
  let title = $("#title").val();
  let tag = $("#tag").val();

  if (!caption || !title) {
    alert("Please fill in both caption and title fields.");
    return;
  }

  let jsondata = {
    "caption": caption,
    "title": title,
    "tag": tag,
  };

  var captionsettings = {
    "async": true,
    "crossDomain": true,
    "url": "https://ipproject-f3a0.restdb.io/rest/posts",
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
    console.log(response);
    $("#postSubmit").prop("disabled", false);
    if (response.hasOwnProperty("caption") && response.caption != null && 
        response.hasOwnProperty("title") && response.title != null) {
      // Store caption, title, and tag values in session storage
      sessionStorage.setItem("caption", caption);
      sessionStorage.setItem("title", title);
      sessionStorage.setItem("tag", tag);
      
      // Redirect to community page
      window.location.href = "Community.html";
    } else {
      alert("error");
    }
  }).fail(function() {
    alert("error");
  });
}
$(document).ready(function() {
  const APIKEY = "63ef3c6e478852088da683ab";
  let cusername = sessionStorage.getItem("username");
  let caption = sessionStorage.getItem("caption");
  let title = sessionStorage.getItem("title");
  let tag = sessionStorage.getItem("tag");
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://ipproject-f3a0.restdb.io/rest/posts",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": APIKEY,
      "cache-control": "no-cache",
    },
  };
  $.ajax(settings).done(function(response) {
    console.log("response: ", response);
    let user, cap, tit, tg;
    for (let i = 0; i < response.length; i++) {
      console.log("response[i].username: ", response[i].username);
      if (response[i].username === cusername) {
        user = response[i];
        break;
      }
    }
    console.log("user: ", user);
    for (let i = 0; i < response.length; i++) {
      if (response[i].caption === caption) {
        cap = response[i];
        break;
      }
    }
    console.log("cap: ", cap);
    for (let i = 0; i < response.length; i++) {
      if (response[i].title === title) {
        tit = response[i];
        break;
      }
    }
    console.log("tit: ", tit);
    for (let i = 0; i < response.length; i++) {
      if (response[i].tag === tag) {
        tg = response[i];
        break;
      }
    }
  });
  var commUsername = document.querySelector("#cusername");
  if (cusername.length>0) {
    commUsername.innerHTML = commUsername.innerHTML.replace("cusername",cusername)
  }

  var commTag = document.querySelector("#tag");
  commTag.innerHTML = tag;

  var commTitle = document.querySelector("#title");
  commTitle.innerHTML = title;

  var commCaption = document.querySelector("#caption");
  commCaption.innerHTML = caption;
})


function upvote() {
  let buttonHome = document.querySelector('.triangle-up');
  let countButtonHomeClicks = parseInt(localStorage.getItem('upvoteCount') || 0);
  let countDisplay = document.getElementById('num');
  let cusername = sessionStorage.getItem("username");

  countDisplay.innerText = ` ${countButtonHomeClicks}`;

  buttonHome.addEventListener('click', function() {
    countButtonHomeClicks += 1;
    localStorage.setItem('upvoteCount', countButtonHomeClicks);
    countDisplay.innerText = ` ${countButtonHomeClicks}`;

    const APIKEY = "63ef3c6e478852088da683ab";
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://ipproject-f3a0.restdb.io/rest/posts",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache",
      },
      "data": JSON.stringify({
        "username": cusername,
        "upvoteCount": countButtonHomeClicks
      })
    };

    $.ajax(settings).done(function(response) {
      console.log(response);
    });

    console.log(countButtonHomeClicks);
  });
}




var countDownDate = new Date("Nov 8, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);




/*$(document).ready(function() {
  const APIKEY = "63de48653bc6b255ed0c464c";
  let cusername = sessionStorage.getItem("username");
  let caption = sessionStorage.getItem("caption");
  let title = sessionStorage.getItem("title");
  let tag = sessionStorage.getItem("tag");
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://ipproject-81b0.restdb.io/rest/posts",
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
      if (response[i].username === cusername) {
        user = response[i];
        break;
      }
    }
    let caption;
    for (let i = 0; i < response.length; i++) {
      if (response[i].caption === caption) {
        caption = response[i];
        break;
      }
    }
    let title;
    for (let i = 0; i < response.length; i++) {
      if (response[i].title === title) {
        title = response[i];
        break;
      }
    }
    let tag;
    for (let i = 0; i < response.length; i++) {
      if (response[i].tag === tag) {
        tag = response[i];
        break;
      }
    }
  });
})
var caption = sessionStorage.getItem("caption");
var ccaption = document.querySelector("#caption")
for (let i = 0; i < caption.length; i++) {
  if(sessionStorage.getItem("caption")== null){
    ccaption.innerHTML = ccaption.innerHTML.replace("caption",caption);
    break;
  }
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




