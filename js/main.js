$(document).ready(function(){
    //数字ボタン押下時の表示処理関数
    let subMemoryNum = 0;
    function pressSum(num){
        if((displayChar == 0) && (num != "00") && (num != ".")){
            displayChar = num;
            subMemoryNum = num;
        }else if((displayChar == 0) && (num == ".")){
            displayChar = "0.";
        }else if((displayChar == 0) && (num == "00")){
            displayChar = 0;
            subMemoryNum = 0;
        }else{
            displayChar = displayChar + num;
            subMemoryNum += num;
        }
        $(".cal-num").text(displayChar);  
    }

    //計算ボタン押下時の表示処理関数
    let memoryNum1; //１つ目の値記録用変数
    let memoryNum2;//２つ目の値記録用変数
    let solution;  //解記録用変数
    function pressCal(calSymbol){
        if(flagCal == 0){
            memoryNum1 = Number(subMemoryNum);
            subMemoryNum = 0;
            displayChar += calSymbol;
            switch(calSymbol){
                case "+":
                    flagCal = 1;
                    break;
                case "-":
                    flagCal = 2;
                    break;
                case "*":
                    flagCal = 3;
                    break;
                case "/":
                    flagCal = 4;
                    break;
            }
        }else{
            alert("=ボタンを押してください。");
 
        }
        $(".cal-num").text(displayChar);  
    }

    //数字ボタン処理
    let displayChar = $(".cal-num").text();
    $(".1").click(function(){
        pressSum("1");
    });

    $(".2").click(function(){
        pressSum("2");
    });

    $(".3").click(function(){
        pressSum("3");
    });

    $(".4").click(function(){
        pressSum("4");
    });

    $(".5").click(function(){
        pressSum("5");
    });

    $(".6").click(function(){
        pressSum("6");
    });

    $(".7").click(function(){
        pressSum("7");
    });

    $(".8").click(function(){
        pressSum("8");
    });

    $(".9").click(function(){
        pressSum("9");
    });

    $(".0").click(function(){
        pressSum("0");
    });

    $(".00").click(function(){
        pressSum("00");
    });

    $(".point").click(function(){
        pressSum(".");
    });


    //計算ボタン処理
    let flagCal = 0; //計算フラグ（0:未入力 1:足し算 2:引き算 3:掛け算 4:割り算）
    $(".addition").click(function(){
        pressCal("+");
    });

    $(".subtraction").click(function(){
        pressCal("-");
    });

    $(".multiplication").click(function(){
        pressCal("*");
    });

    $(".division").click(function(){
        pressCal("/");
    });

    $(".equal").click(function(){
            memoryNum2 = Number(subMemoryNum);

            switch(flagCal){
                case 1:
                    solution = memoryNum1 + memoryNum2;
                    displayChar = solution;
                    break;
                case 2:
                    solution = memoryNum1 - memoryNum2;
                    displayChar = solution;
                    break;
                case 3:
                    solution = memoryNum1 * memoryNum2;
                    displayChar = solution;
                    break;
                case 4:
                    solution = memoryNum1 / memoryNum2;
                    displayChar = solution;
                    break;
                default:
            }
            flagCal = 0;
            subMemoryNum = solution;
            memoryNum1 = 0;
            memoryNum2 = 0;

            $(".cal-num").text(displayChar); 
    });

    $(".AC").click(function(){
        flagCal = 0;
        subMemoryNum = 0;
        displayChar = 0;
        memoryNum1 = 0;
        memoryNum2 = 0;
        solution = 0;
        $(".cal-num").text(displayChar);
    });

});