/* global $ */
$(function(){
    let formData, operator, result;
    let decflag = false;  //小数点フラグ

    $(".buttonNum").click(function() {
        formData = $("#calForm").text();
        let number = $(this).val();
        if(formData === "0"){
            $("#calForm").text(number);
                if(number == 00){
                    $("#calForm").text(0);
                }
        } else {
            $("#calForm").text(formData + number);
        }
    });

    $(".buttonCal").click(function(){
        formData = $("#calForm").text();
        let last2Number = formData.slice(-2);
        operator = $(this).val();
        if(formData.slice(-1) == "." && 
           isNaN(last2Number.slice(0,1)) == false ){
            decflag = false;
            $("#calForm").text(formData.slice(0,-1) + operator);
            return;
        }
        if(formData.slice(-1) == "." && 
           isNaN(last2Number.slice(0,1))){
            return;
        }
        if(isNaN(formData.slice(-1))) {
            $("#calForm").text(formData.slice(0,-1) + operator);
        }
        else if(formData === "0" && operator == "-"){
            $("#calForm").text(operator);
        } else {
            decflag = false;
            $("#calForm").text(formData + operator);
        }
    });

    $(".buttonDec").click(function(){
        if(decflag == false) {
            formData = $("#calForm").text();
            operator = $(this).val();
            $("#calForm").text(formData + operator);
            decflag = true;
        }
    });

    $("#buttonEq").click(function() {
        formData = $("#calForm").text();
        result = eval(formData);
        console.log(formData + " の計算結果 " + result);
        $("#calForm").text(result);
        if(Number.isInteger(result)){
            decflag = false;
        } else {
            decflag = true;
        }
    });
    
    $("#buttonAC").click(function(){
        $("#calForm").text(0);
        decflag = false;
    });
});