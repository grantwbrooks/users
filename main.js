$(document).ready(function(){

    $("form").submit(function(){
        var first = $("#first_name").val();
        var last = $("#last_name").val();
        var email = $("#email").val();
        var contact = $("#number").val();
        $("#tablebody").append("<tr><td>"+first+"</td><td>"+last+"</td><td>"+email+"</td><td>"+contact+"</td></tr>");
        // below code clears value from input boxes
        $("#first_name").val("");
        $("#last_name").val("");
        $("#email").val("");
        $("#number").val("");
        return false;
    })

});
