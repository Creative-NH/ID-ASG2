var loggedin = sessionStorage["loggedin"];
$(document).ready(function () {
    const APIKEY = "63db6b5c3bc6b255ed0c4574";
    let users = getUsers();
    if (loggedin!="t"){
        $("body").css("background-color","black")
        $("header").hide();
        $("#maincontent").hide();
        $("#signin").show();
        $("#contact-submit").click(function(e){
            e.preventDefault();
            let studentid=$("#student-id").val();
            let password=$("#password").val();
            if(users[studentid]==password){
                $("body").css("background-color","rgb(16, 2, 55)")
                $("header").show();
                $("#maincontent").show();
                $("#signin").hide();
                sessionStorage["loggedin"]="t";
            }
            else{
                if (studentid=="" || password==""){
                    if (studentid=="" && password==""){
                        $("#message").text("Enter your student ID and password.");
                    }
                    else if (studentid==""){
                        $("#message").text("Enter your student ID.");
                    }
                    else{
                        $("#message").text("Enter your password.");
                    }
                }
                else{
                    if (users[studentid]!=null){
                        $("#message").text("Your password is incorrect.");
                    }
                    else{
                        $("#message").text("Your student ID does not exist.");
                    }
                }
                $("#message").css("visibility","visible");
                document.querySelector("form").reset();
            }
        })
    }
    function getUsers(){
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://idasg2-d588.restdb.io/rest/student",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            },
        }
        var users={}
        $.ajax(settings).done(function(response) {
            for (var i = 0; i < response.length; i++) {
                users[response[i].studentid]=response[i].password;
            }
        });
        return users;
    }
})