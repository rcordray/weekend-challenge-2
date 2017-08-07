console.log('javascript has been sourced');


$(document).ready(function() {

    // to add
    $("#add").click(function() {
        var a = $("#first").val();
        var b = $("#second").val();
        $("#result").val(+a + +b);
    });

    // to subtract
    $("#subtract").click(function() {
        var a = $("#first").val();
        var b = $("#second").val();
        $("#result").val(+a - +b);
    });

    // to multiply
    $("#multiply").click(function() {
        var a = $("#first").val();
        var b = $("#second").val();
        $("#result").val(+a * +b);
    });

    // to divide
    $("#divsion").click(function() {
        var a = $("#first").val();
        var b = $("#second").val();
        $("#result").val(+a / +b);
    });

    // for reset
    $("#reset").click(function() {
        $("#first").val("");
        $("#second").val("");
        $("#result").val("");
    })

})