$(document).on("ready", function() {

	$(".section").each(function(index, section){
		var $section = $(section)
		$section.attr("data-section", index)
		$($(".content")[index]).attr("data-section", index)
	})


	//show content on click - specific to that header
	$(".section").on("click", function(){
		$(".section").removeClass("active")
		$(this).addClass("active")

		$(".content").removeClass("active")
		
		$(".content[data-tab='" + $(this).attr("data-tab") + "']").addClass("active")

	})


	//show first section content at start
	$(".section:eq(0), .content:eq(0)").addClass("active")


})