$(document).ready(function(){
    $("input").click(function()
    {
        //$("H1").text($("li").eq(0).text()+", "+$("li").eq(1).text());
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        //console.log(randomChildNumber);
        //console.log(Math.PI);
        $("H1").text($("#choices li").eq(randomChildNumber).text());
    });
});
