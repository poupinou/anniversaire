var bloc2 = "<li id='second'>pour ton anniversaire</li>";
var bloc3 = "<li id='third'>je te branche</li>";
var bloc4 = "<li id='fourth'>une lampe dans ta cuisine!!!!</li>";
var audio = $("#mysoundclip")[0];

$("ul").on("click", "li:eq(2)", function() {audio.play();});
$("ul").on("click", "li:first", function(){$("li:first").after(bloc2);});
$("ul").on("click", "li:eq(1)", function(){$("li:eq(1), #second").after(bloc3);});
$("ul").on("click", "li:eq(2)", function(){$("li:eq(2)").after(bloc4);});
$("#hornel, #horner").hide();
$("ul").on("click", "li:eq(2)", function(){$("#hornel, #horner").show()});
