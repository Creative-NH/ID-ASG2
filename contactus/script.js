//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
  if (sessionStorage["loggedin"]!="t"){
    $(".contactlist").hide();
  }
  //what kind of interface we want at the start 
  const APIKEY = "63d3454c3bc6b255ed0c4348";
  getContacts(false,"");
  $("#update-contact-container").hide();
  $("#add-update-msg").hide();
  $("#updated").hide();

  //[STEP 1]: Create our submit form listener
  $("#contact-submit").on("click", function(e) {
    //prevent default action of the button 
    e.preventDefault();
    
    //[STEP 2]: let's retrieve form data
    //for now we assume all information is valid
    //you are to do your own data validation
    if (/[0-9]+/.test($("#contact-name").val()) || /[A-z]+/.test($("#contact-number").val()) || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test($("#contact-email").val())){
      $("#error").show();
    }
    else{
    $("#error").hide();
    let contactRole = $("input[name='contact-role']:checked").val();
    let contactName = $("#contact-name").val();
    let contactEmail = $("#contact-email").val();
    let contactNum = $("#contact-number").val();
    //[STEP 3]: get form values when user clicks on send
    //Adapted from restdb api
    let jsondata = {
      "role": contactRole,
      "name": contactName,
      "email": contactEmail,
      "number": contactNum,
    };

    //[STEP 4]: Create our AJAX settings. Take note of API key
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://idasg2-c017.restdb.io/rest/contact",
      "method": "POST", //[cher] we will use post to send info
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata),
      "beforeSend": function(){
        //@TODO use loading bar instead
        //disable our button or show loading bar
        $("#contact-submit").prop("disabled", true);
        //clear our form using the form id and triggering it's reset feature
        $("#add-contact-form").trigger("reset");
      }
    }

    //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
    $.ajax(settings).done(function(response) {
      console.log(response);
      
      $("#contact-submit").prop("disabled", false);
      
      //@TODO update frontend UI 
      $("#add-update-msg").show().fadeOut(3000);

      //update our table 
      getContacts(false,"");
    });
    }
  });//end click 


  //[STEP] 6
  //let's create a function to allow you to retrieve all the information in your contacts
  //by default we only retrieve 10 results
  function getContacts(search,searchterm,limit = 10, all = true) {

    //[STEP 7]: Create our AJAX settings
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://idasg2-c017.restdb.io//rest/contact",
      "method": "GET", //[cher] we will use GET to retrieve info
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
    }

    //[STEP 8]: Make our AJAX calls
    //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
    //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
    $.ajax(settings).done(function(response) {
      
      let content = "";
      if (search==false){
      for (var i = 0; i < response.length && i < limit; i++) {
        //console.log(response[i]);
        //[METHOD 1]
        //let's run our loop and slowly append content
        //we can use the normal string append += method
        /*
        content += "<tr><td>" + response[i].name + "</td>" +
          "<td>" + response[i].email + "</td>" +
          "<td>" + response[i].message + "</td>
          "<td>Del</td><td>Update</td</tr>";
        */

        //[METHOD 2]
        //using our template literal method using backticks
        //take note that we can't use += for template literal strings
        //we use ${content} because -> content += content 
        //we want to add on previous content at the same time
        content = `${content}<tr id='${response[i]._id}'>
        <td>${response[i].role}</td>
        <td>${response[i].name}</td>
        <td>${response[i].email}</td>
        <td>${response[i].number}</td>
        <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-role='${response[i].role}' data-name='${response[i].name}' data-email='${response[i].email}' data-number='${response[i].number}'>Update</a></td></tr>`;

      }
      $("#total-contacts").html(response.length);
      }
      else{
        var numresults = 0
        for (var i = 0; i < response.length && i < limit; i++) {
          if (response[i].name.includes(searchterm)){
            numresults=numresults+1;
          content = `${content}<tr id='${response[i]._id}'>
        <td>${response[i].role}</td>
        <td>${response[i].name}</td>
        <td>${response[i].email}</td>
        <td>${response[i].number}</td>
        <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-role='${response[i].role}' data-name='${response[i].name}' data-email='${response[i].email}' data-number='${response[i].number}'>Update</a></td></tr>`;
          }
        }
        $("#total-contacts").html(numresults);
      }

      //[STEP 9]: Update our HTML content
      //let's dump the content into our table body
      $("#contact-list tbody").html(content);

      
    });


  }

  //[STEP 10]: Create our update listener
  //here we tap onto our previous table when we click on update
  //this is a delegation feature of jquery
  //because our content is dynamic in nature, we listen in on the main container which is "#contact-list". For each row we have a class .update to help us
  $("#contact-list").on("click", ".update", function(e) {
    e.preventDefault();
    //update our update form values
    let contactName = $(this).data("name");
    let contactEmail = $(this).data("email");
    let contactNum = $(this).data("number");
    let contactId = $(this).data("id");

    //[STEP 11]: Load in our data from the selected row and add it to our update contact form 
    $("#update-contact-name").val(contactName);
    $("#update-contact-email").val(contactEmail);
    $("#update-contact-number").val(contactNum);
    $("#update-contact-id").val(contactId);
    $("#update-contact-container").show();

  });//end contact-list listener for update function

  //[STEP 12]: Here we load in our contact form data
  //Update form listener
  $("#update-contact-submit").on("click", function(e) {
    e.preventDefault();
    //retrieve all my update form values
    if (/[0-9]+/.test($("#update-contact-name").val()) || /[A-z]+/.test($("#update-contact-number").val()) || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test($("#update-contact-email").val())){
      $("#updateerror").show();
    }
    else{
    $("#updateerror").hide();
    let contactRole = $("input[name='update-contact-role']:checked").val();
    let contactName = $("#update-contact-name").val();
    let contactEmail = $("#update-contact-email").val();
    let contactNum = $("#update-contact-number").val();
    let contactId = $("#update-contact-id").val();
    $("#updated").show().fadeOut(5000);

    //[STEP 12a]: We call our update form function which makes an AJAX call to our RESTDB to update the selected information
    updateForm(contactId, contactRole, contactName, contactEmail, contactNum);
    }
  });//end updatecontactform listener

  //[STEP 13]: function that makes an AJAX call and process it 
  //UPDATE Based on the ID chosen
  function updateForm(id, contactRole, contactName, contactEmail, contactNum) {
    //@TODO create validation methods for id etc. 

    var jsondata = { "role": contactRole, "name": contactName, "email": contactEmail, "number": contactNum};
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": `https://idasg2-c017.restdb.io//rest/contact/${id}`,//update based on the ID
      "method": "PUT",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata)
    }

    //[STEP 13a]: send our AJAX request and hide the update contact form
    $.ajax(settings).done(function(response) {
      console.log(response);
      
      $("#update-contact-container").fadeOut(5000);
      //update our contacts table
      getContacts(false,"");
    });
  }//end updateform function


$("#contact-list").on("click", ".delete", function(e) {
  e.preventDefault();
  let id = $(this).data("id");
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://idasg2-c017.restdb.io//rest/contact/${id}`,
    "method": "DELETE",
    "headers": {
      "content-type": "application/json",
      "x-apikey": APIKEY,
      "cache-control": "no-cache"
    }
  }
  $.ajax(settings).done(function(response) {
    console.log(response);
    getContacts(false,"");
  });
});
$("#searchsubmit").click(function(){
  let searchterm=$("#search").val();
  getContacts(true,searchterm);
})
})