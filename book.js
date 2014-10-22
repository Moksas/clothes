$(document).ready(function(){
	$('#Book').hover(
		function(){
			$(this).css("width", "120px");
		},
		function(){
			$(this).css("width", "100px");
		}
	);

	$('#Book').click(
		function(){
			$('#BigBook').fadeIn("slow");
		}
	);
});

