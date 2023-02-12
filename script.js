

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
        }
  
        if (response[i].password === userPass) {
          passWrong = false;
        }
      }
      
      if (!emailWrong && !passWrong) {
        window.location.href = "Lobby.html";
      } else {
        let errorMessage = "Error: ";
        if (emailWrong || passWrong) {
          errorMessage += "Data is incorrect";
        }
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
/* for community page*/
async function postImageAndCaption(image, caption) {
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
}




