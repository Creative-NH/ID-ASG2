var current = (Math.round(3 * 100) / 100).toFixed(2);
// Current value will be retrieved from api
var target = localStorage.getItem('target','0');
if (target == null){
    target=0;
}
$(document).ready(function () {
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
    $("#current").text("Current GPA: " + current);
    $("#target").text("Target GPA: " + target);
    determineMessage();
    hideFormMessages();
    $("button").click(function(){
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