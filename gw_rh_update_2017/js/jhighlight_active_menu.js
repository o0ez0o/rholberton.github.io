// JavaScript Document
$(document).ready(function() {
	re = /(\w+)\.html/i;
	if (page = window.location.href.match(re)) {
		re2 = new RegExp(page[1]);
		$("a").each(function() {
			if ($(this).attr("href").match(re2)) {
				$(this).parent().addClass("active");
			}
		})
	}
})
