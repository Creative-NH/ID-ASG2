var loggedin = sessionStorage["loggedin"];
$(document).ready(function () {
    const APIKEY = "63e4ce24478852088da67f20";
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
                sessionStorage["studentid"]=studentid;
                sessionStorage["course"]=users["course"];
                sessionStorage["gpa"]=users["gpa"];
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
                        $("#message").text("No account with this student ID exists.");
                    }
                }
                $("#message").css("visibility","visible");
                document.querySelector("form").reset();
            }
        })
    }
    var cor = `<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_9aa9jkxv.json" background="transparent" speed="1" style="width: 50%; height: 50%;" autoplay></lottie-player>`
    var inc = `<lottie-player src="https://assets3.lottiefiles.com/packages/lf20_pqpmxbxp.json" background="transparent" speed="1" style="width: 50%; height: 50%;" autoplay></lottie-player>`
    var end1 = `<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_touohxv0.json" background="transparent" speed="1" style="width: 50%; height: 50%;" autoplay></lottie-player>`
    var end2 = `<lottie-player src="https://assets9.lottiefiles.com/packages/lf20_g9gACcXlja.json" background="transparent" speed="1" style="width: 50%; height: 50%;" autoplay></lottie-player>`
    var end3 = `<lottie-player src="https://assets2.lottiefiles.com/packages/lf20_5e4papxe.json" background="transparent" speed="1" style="width: 50%; height: 50%;" autoplay></lottie-player>`
    var correct=0;
    $("#start").click(function(){
        $("#intro").hide();
        $(".game").css("background-image","none")
        $(".game").css("background-color","rgb(30,30,30)")
        $("#gamecontent").html(`<br><br><br><br><br><br><h3>What is the total number of clubs and societies available to NP students? (1/4)</h3><form><input type="radio" id="q1oa" name="q1" value="56" required><label for="q1oa">56</label><br><br><input type="radio" id="q1ob" name="q1" value="80" required><label for="q1ob">80</label><br><br><input type="radio" id="q1oc" name="q1" value="25" required><label for="q1oc">25</label><br><br><input type="radio" id="q1od" name="q1" value="71" required><label for="q1od">71</label><br><br><input type=submit id="submitq1" value="Enter"></form>`)
        $("#submitq1").click(function(e){
            e.preventDefault()
            var ans=$("input[name='q1']:checked").val();
            if (ans=="80"){
                correct=correct+1
                $("#gamecontent").html(`<div class="gamemsgcontainer">${cor}<div class="gametext" id="qn2">Next</div></div>`)
            }
            else{
                $("#gamecontent").html(`<div class="gamemsgcontainer">${inc}<div class="gametext" id="qn2">Next</div></div>`)
            }
            $("#qn2").click(function(e){
                e.preventDefault()
                $("#gamecontent").html(`<br><br><br><br><br><br><h3>Where is Makan Place located at? (2/4)</h3><form><input type="radio" id="q2oa" name="q2" value="16" required><label for="q2oa">Block 16</label><br><br><input type="radio" id="q2ob" name="q2" value="52" required><label for="q2ob">Block 52</label><br><br><input type="radio" id="q2oc" name="q2" value="51" required><label for="q2oc">Block 51</label><br><br><input type="radio" id="q2od" name="q2" value="27" required><label for="q2od">Block 27</label><br><br><input type=submit id="submitq2" value="Enter"></form>`)
                $("#submitq2").click(function(){
                    var ans=$("input[name='q2']:checked").val();
                    if (ans=="51"){
                        correct=correct+1
                        $("#gamecontent").html(`<div class="gamemsgcontainer">${cor}<div class="gametext" id="qn3">Next</div></div>`)
                    }
                    else{
                        $("#gamecontent").html(`<div class="gamemsgcontainer">${inc}<div class="gametext" id="qn3">Next</div></div>`)
                    }
                    $("#qn3").click(function(e){
                        e.preventDefault()
                        $("#gamecontent").html(`<br><br><br><br><br><br><h3>How many PLP (Personalized Learning Pathway) minors can you choose from? (3/4)</h3><form><input type="radio" id="q3oa" name="q3" value="11" required><label for="q3oa">11</label><br><br><input type="radio" id="q3ob" name="q3" value="14" required><label for="q3ob">14</label><br><br><input type="radio" id="q3oc" name="q3" value="9" required><label for="q3oc">9</label><br><br><input type="radio" id="q3oc" name="q3" value="13" required><label for="q3oc">13</label><br><br><input type=submit id="submitq3" value="Enter"></form>`)
                        $("#submitq3").click(function(){
                            var ans=$("input[name='q3']:checked").val();
                            if (ans=="11"){
                                correct=correct+1
                                $("#gamecontent").html(`<div class="gamemsgcontainer">${cor}<div class="gametext" id="qn4">Next</div></div>`)
                            }
                            else{
                                $("#gamecontent").html(`<div class="gamemsgcontainer">${inc}<div class="gametext" id="qn4">Next</div></div>`)
                            }
                            $("#qn4").click(function(e){
                                e.preventDefault()
                                $("#gamecontent").html(`<br><br><br><br><br><br><h3>Which of the following foreign languages is not offered in NP? (4/4)</h3><form><input type="radio" id="q4oa" name="q4" value="fr" required><label for="q4oa">French</label><br><br><input type="radio" id="q4ob" name="q4" value="jp" required><label for="q4ob">Japanese</label><br><br><input type="radio" id="q4oc" name="q4" value="sp" required><label for="q4oc">Spanish</label><br><br><input type="radio" id="q4oc" name="q4" value="kr" required><label for="q4oc">Korean</label><br><br><input type=submit id="submitq4" value="Enter"></form>`)
                                $("#submitq4").click(function(e){
                                    e.preventDefault()
                                    var ans=$("input[name='q4']:checked").val();
                                    if (ans=="sp"){
                                        correct=correct+1
                                        $("#gamecontent").html(`<div class="gamemsgcontainer">${cor}<div class="gametext" id="result">Show results</div></div>`)
                                    }
                                    else{
                                        $("#gamecontent").html(`<div class="gamemsgcontainer">${inc}<div class="gametext" id="result">Show results</div></div>`)
                                    }
                                    $("#result").click(function(){
                                        var end = ``
                                        if (correct==4){
                                            end=end1
                                        }
                                        else if (correct>1){
                                            end=end2
                                        }
                                        else{
                                            end=end3
                                        }
                                        $("#gamecontent").html(`<div class="gamemsgcontainer">${end}<p class="gametext end">You got ${correct} out of 4 answers right.<br>Thank you for playing!</p></div>`)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })  
    })
    function getUsers(){
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://idasg2-81cd.restdb.io/rest/student",
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
                users["course"]=response[i].course;
                users["gpa"]=response[i].gpa;
            }
        });
        return users;
    }
})