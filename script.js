
function LoginPage_Login() {
  $(document).ready(function () {
    const APIKEY = "63db64973bc6b255ed0c456e";

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
      "url": "https://tutorial-9477.restdb.io/rest/login",
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
    
  
          let username = response[i].username;
    
 
          sessionStorage.setItem("username", username);
    
          //to the lobby page
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
    const APIKEY = "63db64973bc6b255ed0c456e";
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
      "url": "https://tutorial-9477.restdb.io/rest/login",
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
  
      // Only POST if both email and username are avail
      var postSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://tutorial-9477.restdb.io/rest/login",
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
  const APIKEY = "63db64973bc6b255ed0c456e";
  let userEmail = sessionStorage.getItem("userEmail");
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://tutorial-9477.restdb.io/rest/login",
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
  const APIKEY = "63db64973bc6b255ed0c456e";
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
    "url": "https://tutorial-9477.restdb.io/rest/posts",
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
      
      //to community page
      window.location.href = "Community.html";
    } else {
      alert("error");
    }
  }).fail(function() {
    alert("error");
  });
}
$(document).ready(function() {
  const APIKEY = "63db64973bc6b255ed0c456e";
  let cusername = sessionStorage.getItem("username");
  let caption = sessionStorage.getItem("caption");
  let title = sessionStorage.getItem("title");
  let tag = sessionStorage.getItem("tag");
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://tutorial-9477.restdb.io/rest/posts",
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
  let postId = sessionStorage.getItem("postId");

  countDisplay.innerText = ` ${countButtonHomeClicks}`;

  buttonHome.addEventListener('click', function() {
    countButtonHomeClicks += 1;
    localStorage.setItem('upvoteCount', countButtonHomeClicks);
    countDisplay.innerText = ` ${countButtonHomeClicks}`;

    const APIKEY = "63db64973bc6b255ed0c456e";
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://tutorial-9477.restdb.io/rest/posts" + postId,
      "method": "PUT",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache",
      },
      "data": JSON.stringify({
        "upvotes": countButtonHomeClicks
      })
    };

    $.ajax(settings).done(function(response) {
      console.log(response);
    });
  });
}




var countDownDate = new Date("Nov 8, 2023 00:00:00").getTime();


var x = setInterval(function() {

  // Get today date and time
  var now = new Date().getTime();
    

  var distance = countDownDate - now;
    

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, text will sho 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);



var btn = document.getElementById("shopb1");
var span = document.getElementsByClassName("close")[0];
var confirmBtn = document.querySelector(".confirm-button")

btn.addEventListener("click", function() {
  modal.style.display = "block";
});

span.onclick = function() {
  modal.style.display = "none";
};

confirmBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


var modal = document.getElementById("myModal");
var btn = document.getElementById("shopb2");
var span = document.getElementsByClassName("close")[0];
var confirmBtn = document.querySelector(".confirm-button")

btn.addEventListener("click", function() {
  modal.style.display = "block";
});

span.onclick = function() {
  modal.style.display = "none";
};

confirmBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


var modal = document.getElementById("myModal");
var btn = document.getElementById("shopb3");
var noBtn = document.querySelector(".no-button");
var confirmBtn = document.querySelector(".confirm-button")
btn.onclick = function() {
  modal.style.display = "block";
}


noBtn.onclick = function() {
  modal.style.display = "none";
}

confirmBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("shopb4");
var noBtn = document.querySelector(".no-button");
var confirmBtn = document.querySelector(".confirm-button")
btn.onclick = function() {
  modal.style.display = "block";
}


noBtn.onclick = function() {
  modal.style.display = "none";
}

confirmBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("shopb5");
var noBtn = document.querySelector(".no-button");
var confirmBtn = document.querySelector(".confirm-button")
btn.onclick = function() {
  modal.style.display = "block";
}


noBtn.onclick = function() {
  modal.style.display = "none";
}

confirmBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("shopb6");
var noBtn = document.querySelector(".no-button");
var confirmBtn = document.querySelector(".confirm-button")
btn.onclick = function() {
  modal.style.display = "block";
}


noBtn.onclick = function() {
  modal.style.display = "none";
}

confirmBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("shopb7");
var noBtn = document.querySelector(".no-button");
var confirmBtn = document.querySelector(".confirm-button")
btn.onclick = function() {
  modal.style.display = "block";
}


noBtn.onclick = function() {
  modal.style.display = "none";
}

confirmBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/
var modal = document.getElementById("myModal");
var btn = document.getElementById("shopb1");
var span = document.getElementsByClassName("close")[0];
var confirmBtn = document.querySelector(".confirm-button")

btn.addEventListener("click", function() {
  modal.style.display = "block";
});

span.onclick = function() {
  modal.style.display = "none";
};

confirmBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("shopb2");
var span1 = document.getElementsByClassName("close")[1];
var confirmBtn1 = document.querySelectorAll(".confirm-button")[1]

btn1.addEventListener("click", function() {
  modal1.style.display = "block";
});

span1.onclick = function() {
  modal1.style.display = "none";
};

confirmBtn1.onclick = function() {
  modal1.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("shopb3");
var span2 = document.getElementsByClassName("close")[2];
var confirmBtn2 = document.querySelectorAll(".confirm-button")[2]

btn2.addEventListener("click", function() {
  modal2.style.display = "block";
});

span2.onclick = function() {
  modal2.style.display = "none";
};

confirmBtn2.onclick = function() {
  modal2.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("shopb4");
var span3 = document.getElementsByClassName("close")[3];
var confirmBtn3 = document.querySelectorAll(".confirm-button")[3]

btn3.addEventListener("click", function() {
  modal3.style.display = "block";
});

span3.onclick = function() {
  modal3.style.display = "none";
};

confirmBtn3.onclick = function() {
  modal3.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};
var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("shopb5");
var span4 = document.getElementsByClassName("close")[4];
var confirmBtn4 = document.querySelectorAll(".confirm-button")[4]

btn4.addEventListener("click", function() {
  modal4.style.display = "block";
});

span4.onclick = function() {
  modal4.style.display = "none";
};

confirmBtn4.onclick = function() {
  modal4.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
};

var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("shopb6");
var span5 = document.getElementsByClassName("close")[5];
var confirmBtn5 = document.querySelectorAll(".confirm-button")[5]

btn5.addEventListener("click", function() {
  modal5.style.display = "block";
});

span5.onclick = function() {
  modal5.style.display = "none";
};

confirmBtn5.onclick = function() {
  modal5.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
};

var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("shopb7");
var span6 = document.getElementsByClassName("close")[6];
var confirmBtn6 = document.querySelectorAll(".confirm-button")[6]

btn6.addEventListener("click", function() {
  modal6.style.display = "block";
});

span6.onclick = function() {
  modal6.style.display = "none";
};

confirmBtn6.onclick = function() {
  modal6.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
};

  