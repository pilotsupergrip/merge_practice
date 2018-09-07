$(document).ready(function(){
    //建立currentQuiz, 儲存目前作答到第幾題
    var currentQuiz=null;
    //當按下按鈕後, 要做的事情放在這裡面
    $("#startButton").click(function()
    {
        //如果還沒開始作答就從這裡開始
        if(currentQuiz==null)
        {
            //設定目前作答到第零題
            currentQuiz=0;
            //顯示題目
            $("#question").text(questions[0].question);
            //每次顯示選項前先將該區域清空 可以試著不做這一步
            $("#options").empty();
            //將一個一個選項內容 添加至選項區塊
            for(var x=0; x<questions[0].answers.length; x++)
            {
                $("#options").append("<input name='options' type='radio' value="+x+">"+"<label>"+questions[0].answers[x][0]+
                "</label><br><br>");
            }
            //將按鈕上的文字換成Next或下一題
            $("#startButton").attr("value","Next");
        }
        else  //如果已經開始作答就從這裡繼續
        {
           //巡訪每個選項是否有被選取
            $.each($(":radio"),function(i,val){
                console.log(i);
                console.log(val);
                if(val.checked)
                {
                    //使用者所選取的項目是否已經產生最終結果A~D
                    if(isNaN(questions[currentQuiz].answers[i][1]))
                    {
                        //通往最終結果
                        var finalResult = questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                        currentQuiz=null;
                        $("#startButton").attr("value","Restart");
                    }
                    else
                    {
                        currentQuiz=questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        for(var x=0; x<questions[0].answers.length; x++)

                        {
                            $("#options").append("<input name='options' type='radio' value="+x+">"+"<label>"+questions[currentQuiz].answers[x][0]+
                            "</label><br><br>");
                        }
                        
                    }
                    //完成後可跳出迴圈
                    return false;
                }
            });
        }
    });
    
});
