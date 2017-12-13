//Creating new Box (article) with class rectangle and setting random background color.
function newBox(){return $("<article>").attr("class", "rectangle").css({backgroundColor: "#"+((1<<24)*Math.random()|0).toString(16)});}
//The Document Ready Event.
$(function(){
//Creating 65\3=33 Boxes with random color (dev_65).
for(i=0; i<33; i++) $("main").append(newBox());
//Operating attach a click event to every ".rectangle" class in "main" elemnt.
$("main").on("click",".rectangle",function(){
	 $(this).is(":last-child") ? $("main").prepend(newBox()) : $(this).toggleClass("whiteStar");});
});
