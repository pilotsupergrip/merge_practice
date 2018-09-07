$(document).ready(function() {
    
    $("#courseTable").append("<tr>") ;
    $("#courseTable").append("<th>SESSION</th>") ;
    $("#courseTable").append("<th>TIME</th>") ;
    $("#courseTable").append("<th>TOPIC</th>") ;
    $("#courseTable").append("</tr>") ;

    $( "input[type=date]" ).change(function() {
        var inputDate = $( "input[type=date]" ).val();
        var splitText = inputDate.split("-");
        console.log(splitText[1]);
        setMonthAndDay(splitText[1],splitText[2]);
        setTable();
    });
     
});

function setTable(){
    
    $("#courseTable").empty();
    
    $("#courseTable").append("<tr>");
    $("#courseTable").append("<th>Session</th>");
    $("#courseTable").append("<th>TIME</th>");
    $("#courseTable").append("<th>TOPIC</th>");
    $("#courseTable").append("</tr>");
    

    var topicCount = topic.length;
    var secondUnit = 1000 ;
    var minuteUnit = secondUnit * 60 ;
    var hourUnit = minuteUnit * 60 ;
    var dayUnit = hourUnit * 24 ;
    
    for(var x=0;x<topicCount;x++)
    { 
            $("#courseTable").append("<tr><td>"+(x+1)+"</td><td>"+(new Date((startDate.getTime()+x*7*dayUnit))).toLocaleDateString().slice(5)+"</td><td>"+topic[x]+"</td></tr>") ;
  
    }
    
    $("tr:odd").addClass("odd") ;
    $("tr:even").addClass("even") ;
 
   
    
}/*)*/;