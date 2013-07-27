$(document).ready(function(){
	$("#content").load("design.html");
});

$('a').click(function(){
	var page = $(this).attr('href');
	$("#content").load(page);
	
	return false;
});