$("#btn_cm").css({"background-color":"#E70000","color":"#ffffff"});
$("#cm").show();
var cm_input=document.getElementById("cm").value="";
var cm_input=document.getElementById("inch").value="";
var cm_input=document.getElementById("km").value="";
$(document).ready (function(){
    $("#btn_cm").click(function(){
        $(this).css({"background-color":"#E70000","color":"#ffffff"});
        $("#btn_inch").css({"background-color":"#ffffff","color":"#E70000"});
        $("#btn_km").css({"background-color":"#ffffff","color":"#E70000"});
        
        $("#cm").show();
        $("#km").hide();
        $("#inch").hide();

        $(".km-btn").hide();
        $(".inch-btn").hide();
        $(".cm-btn").show();
    });




    $("#btn_inch").click(function(){
        $(this).css({"background-color":"#E70000","color":"#ffffff"});
        $("#btn_cm").css({"background-color":"#ffffff","color":"#E70000"});
        $("#btn_km").css({"background-color":"#ffffff","color":"#E70000"});
        $("#inch").show();
        $("#km").hide();
        $("#cm").hide();
        $(".km-btn").hide();
        $(".cm-btn").hide();
        $(".inch-btn").show();
    });

    $("#btn_km").click(function(){
        $(this).css({"background-color":"#E70000","color":"#ffffff"});
        $("#btn_cm").css({"background-color":"#ffffff","color":"#E70000"});
        $("#btn_inch").css({"background-color":"#ffffff","color":"#E70000"});
        $("#km").show();
        $("#inch").hide();
        $("#cm").hide();
        $(".inch-btn").hide();
        $(".cm-btn").hide();
        $(".km-btn").show();
    });

//            btn end

});
function fun(){
//     var cm_input=document.getElementById("cm").value;
// var answer =cm_input-2;
// var result =document.getElementById("result");
// result.innerHTML=answer.toFixed(3);


var cm_inch=document.getElementById("inch").value;
var answer =cm_inch*2.54;
var result =document.getElementById("result");
result.innerHTML=answer.toFixed(3);

// var cm_km=document.getElementById("km").value;
// var answer =cm_km+15;
// var result =document.getElementById("result");
// result.innerHTML=answer.toFixed(3);




};

function fun2(){
    var cm_input=document.getElementById("cm").value;
    var answer =cm_input/2.54;
    var result =document.getElementById("result");
    result.innerHTML=answer.toFixed(3);
}
    
function fun3(){
    
var cm_km=document.getElementById("km").value;
var answer =cm_km*100000;
var result =document.getElementById("result");
result.innerHTML=answer.toFixed(3);

}