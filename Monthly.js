var $ = function (id) 
{
    return document.getElementById(id);
}



var calculate = function ()
{
var floatMonthlyPayment, intLoanTerm, floatTotalCost
floatMonthlyPayment = parseFloat($("monthly_payment").value);
intLoanTerm = parseFloat($("loan_length").value);
floatTotalCost = parseFloat(floatMonthlyPayment * intLoanTerm);
$("total_cost").value = floatTotalCost
 }
 
 window.onload = function () 
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("monthly_payment").focus();
}