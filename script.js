var loggedin = sessionStorage["loggedin"];
$(document).ready(function () {
    const APIKEY = "63db6b5c3bc6b255ed0c4574";
    let users = getUsers();
    $("#message").hide();
    if (loggedin!="t"){
        $("header").hide();
        $("#maincontent").hide();
        $("#signin").show();
    }
    $("#contact-submit").click(function(e){
        e.preventDefault();
        let studentid=$("#student-id").val();
        let password=$("#password").val();
        if(users[studentid]==password){
            $("#signin").hide();
            $("header").show();
            sessionStorage["loggedin"]="t";
            $("#maincontent").show();
        }
        else{
            $("#message").show();
            document.querySelector("form").reset();
        }
    })

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