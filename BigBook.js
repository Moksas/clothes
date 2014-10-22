$(document).ready(function(){
	$("#flipbook").turn({
	    width: 800,
	    height: 550,
	    autoCenter: true
	});
});

$(document).bind('keydown', function(e){
	if (e.keyCode==37)
		$('#flipbook').turn('previous');
	else if (e.keyCode==39)
		$('#flipbook').turn('next');
	else if (e.keyCode==27)
		$('#BigBook').fadeOut("fast");
		
});
