//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

//this function performs all the circle, triangle, and circle calculations and prints the results
var do_it = function () 
{
	//lines 12-18 declares and sets variables with respective DOM input. lines 19-25 declare variables needed for calculations
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);
	
	
		
		//alert ("The Rectangle area is " + floatRectArea.toFixed(2) + " and the perimeter is " + floatRectPerim.toFixed(2) + "\n\n" +
		//	"The Triangle area is " + floatTriangleArea.toFixed(2) + " and the perimeter is " + floatTrianglePerim.toFixed(2) + "\n\n" +
		//	"The Circle area is " + floatCircleArea.toFixed(2) + " and the circumference is " + floatCircleCircum.toFixed(2));
	
			alert ("The Rectangle area is " + rectArea(floatRectWidth,floatRectHeight) + 
	" and the perimeter is " + rectPerim (floatRectWidth,floatRectHeight) + 
	"\n\n" + "The Triangle area is " + 	triangleArea(floatTriSide1,floatTriSide2,floatTriSide3) + 
	" and the perimeter is " + 
	trianglePerim(floatTriSide1,floatTriSide2,floatTriSide3) + "\n\n" +
	"The Circle area is " + circleArea(floatRadius) + 
	" and the circumference is " + circleCircum(floatRadius));

};

/*
 * the calcCircleCircum function is activated when the calc_circle_cirum button on the DOM
 * is clicked.  It reads the radius information from the DOM and then reports the circle
 * circumference in an alert box, using the circleCircum function to perform the calculation
 */
var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};

/*
 * the circleCircum function accepts some input for radius and then calculates the circumference
 * using the 2 * pi * radius formula.  The circumference value is returned, but note that it has been
 * converted to a string with 2 decimal points [the toFixed() method in JavaScript takes a number and 
 * lops off everything after the desired decimal points, and then for some unexplicable reason converts
 * the resulting number into a string]
 */
function circleCircum(floatRadius_par)
{
	var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);
	return floatCircum.toFixed(2);
};
var calcRectArea = function()
{
	var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
	alert ("The rectangle area is " + rectArea(floatRectWidth, floatRectHeight));
};

function rectArea(width, height)
{
	var floatRectArea = width * height;
	return floatRectArea.toFixed(2);
};

var calcRectPerim = function()
{
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);
	alert("The rectangle perimeter is " + rectPerim(floatRectWidth, floatRectHeight));
};

function rectPerim(width, height)
{
	var floatRectPerim = (2 * width) + (2 * height);
	return floatRectPerim.toFixed(2);
};

var calcS = function()
{
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	alert("The average side length of the triangle is " + s(floatTriSide1, floatTriSide2, floatTriSide3));
};

function s(side1, side2, side3) 
{
	var floatS = ((side1 * side2 * side3)/2);
	return floatS.toFixed(2);
};

var calcTriangleArea = function()
{
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatS = ((floatTriSide1 + floatTriSide2 + floatTriSide3)/2);
	alert("The area of the triangle is " + triangleArea(floatTriSide1, floatTriSide2, floatTriSide3, floatS));

};

function triangleArea(side1, side2, side3, s)
{
	var floatTriangleArea = Math.sqrt((s*(s-side1)*(s-side2)*(s-side3)));
	return floatTriangleArea.toFixed(2);
};

var calcTrianglePerim = function()
{
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	alert("The triangle perimeter is " + trianglePerim(floatTriSide1, floatTriSide2, floatTriSide3));

};

function trianglePerim(side1, side2, side3)
{
	var floatTrianglePerim = side1 + side2 + side3;
	return floatTrianglePerim.toFixed(2);
};

var calcCircleArea = function()
{
	var floatRadius = parseFloat($("radius").value);
	alert("The circle area is " + circleArea(floatRadius));
};

function circleArea(radius)
{
	var floatCircleArea = Math.PI * Math.pow(radius,2);
	return floatCircleArea.toFixed(2);
};


window.onload = function () 
{
    //lines 51-56 clear the DOM values..
//    $("rect_width").value = "";
//    $("rect_height").value = "";
//    $("tri_side1").value = "";
//    $("tri_side2").value = "";
//    $("tri_side3").value = "";
//    $("radius").value = "";
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = do_it; // runs the do_it function when clicked
    $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
    $("calc_rect_area").onclick = calcRectArea;
	$("calc_rect_perim").onclick = calcRectPerim;
	$("calc_tri_area").onclick = calcTriangleArea;
	$("calc_tri_perim").onclick = calcTrianglePerim;
	$("calc_circle_area").onclick = calcCircleArea; 
};
