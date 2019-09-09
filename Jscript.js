
// set variable for x, y, and result
var x = 0;
var y = 0;
var result = 0;
var firstNumber = "0";
var secondNumber = "0";
var operator = "";
var checker = false;
​
// dom selectors
var firstNum = $("#first-number");
var secondNum = $("#second-number");
var operate = $("#operator")
​
​
// function for addition
​
//function for subtraction
​
// function for multiplication
​
// function for division
​
// function for exponents
​
// function to clear
​
​
​
​
//listen
$(".number").on("click",function(){
//    console.log($(this).val());
​
        if(checker){
            secondNumber += ($(this).val());   
    
              secondNum.text(parseInt(secondNumber))
        }else{
            firstNumber += ($(this).val());   
            //        console.log(parseInt(firstNumber));
                    firstNum.text(parseInt(firstNumber))
        }
})
​
$(".operator").on("click",function(){
            operator += ($(this).val());     
            operate.text(parseInt(operate))          
            checker = true;
    })