function newBox(){return $("<article>").attr("class", "rectangle").css({backgroundColor: "#"+((1<<24)*Math.random()|0).toString(16)});}

$(function(){
for(i=0; i<33; i++) $("main").append(newBox());
$("main").on("click",".rectangle",function(){
	 $(this).is(":last-child") ? $("main").prepend(newBox()) : $(this).toggleClass("whiteStar");});
});

