if (sessionStorage["loggedin"]!="t"){
    window.location.href = "../index.html";
}
var current = sessionStorage["gpa"];
current = (Math.round(current * 100) / 100).toFixed(2);
var studentid = sessionStorage["studentid"];
var course = sessionStorage["course"];
var target = localStorage.getItem('target','0');
if (target == null){
    target=0;
}
$(document).ready(function () {
    const APIKEY = "63db6b5c3bc6b255ed0c4574";
    function hideFormMessages(){
        $("#error").hide();
        $("#success").hide();
    }
    function determineMessage(){
        if (current>=target){
            if (target<3 && current-target <= 0.101){
                $("#message").text("You did it, aim higher!");
            }
            else{
                $("#message").text("You did it!");
            }
        }
        else if (target-current <= 0.101){
            $("#message").text("Almost there!");
        }
        else{
            $("#message").text("You can do it!");
        }
    }
    function displayYears(){
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://idasg2-d588.restdb.io/rest/studentgrades",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            },
        }
        $.ajax(settings).done(function(response) {
            let content = ``;
            for (var i = 0; i < response.length; i++) {
                if (response[i].studentid==studentid){
                    content=`<span>${response[i].year}&nbsp; </span>${content}`;
                }
            }
            $("#years").html(content);
        });
    }
    function retrieveGrades(year){
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://idasg2-d588.restdb.io/rest/studentgrades",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            },
        }
        $.ajax(settings).done(function(response) {
            let content = ``;
            for (var i = 0; i < response.length; i++) {
                if (response[i].studentid==studentid && response[i].year==year){
                    content=`${content}<table><tr><th>Module</th><th>Grade</th></tr>`;
                    if (response[i].module1!=""){
                        content=`${content}<tr><td>${response[i].module1.split(",")[0]}</td><td>${response[i].module1.split(",")[1]}</td></tr>`;
                    }
                    if (response[i].module2!=""){
                        content=`${content}<tr><td>${response[i].module2.split(",")[0]}</td><td>${response[i].module2.split(",")[1]}</td></tr>`;
                    }
                    if (response[i].module3!=""){
                        content=`${content}<tr><td>${response[i].module3.split(",")[0]}</td><td>${response[i].module3.split(",")[1]}</td></tr>`;
                    }
                    if (response[i].module4!=""){
                        content=`${content}<tr><td>${response[i].module4.split(",")[0]}</td><td>${response[i].module4.split(",")[1]}</td></tr>`;
                    }
                    if (response[i].module5!=""){
                        content=`${content}<tr><td>${response[i].module5.split(",")[0]}</td><td>${response[i].module5.split(",")[1]}</td></tr>`;
                    }
                    if (response[i].module6!=""){
                        content=`${content}<tr><td>${response[i].module6.split(",")[0]}</td><td>${response[i].module6.split(",")[1]}</td></tr>`;
                    }
                    if (response[i].module7!=""){
                        content=`${content}<tr><td>${response[i].module7.split(",")[0]}</td><td>${response[i].module7.split(",")[1]}</td></tr>`;
                    }
                    if (response[i].module8!=""){
                        content=`${content}<tr><td>${response[i].module8.split(",")[0]}</td><td>${response[i].module8.split(",")[1]}</td></tr>`;
                    }
                }
            }
            $("#tables").html(content);
        });
    }
    displayYears();
    $("#course").text("Course: " + course);
    $("#current").text("Current GPA: " + current);
    $("#target").text("Target GPA: " + target);
    determineMessage();
    hideFormMessages();
    $("#year").click(function(){
        var value = $("#yearinput").val();
        retrieveGrades(value);
    });
    $("#gpa").click(function(){
        $("#error").hide();
        hideFormMessages();
        var value = $("#goal").val();
        if (value>4 || value<=0){
            value=target;
            $("#error").show();
        }
        else{
            value = (Math.round(value * 100) / 100).toFixed(2);
            if (value!=target){
                target=value;
                localStorage.setItem('target',target);
                determineMessage();
                $("#success").show();
            }
        }
        $("#target").text("Target GPA: " + value);
    });
});