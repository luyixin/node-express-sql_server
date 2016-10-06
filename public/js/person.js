(function () {
	var a = $('.person .panel-heading a');
	a.click(function () {
		var mark = $(this).parents('.panel').find('.panel-collapse');
		if (!mark.hasClass('in'))
			$(this).text('点击折叠');
		else
			$(this).text('点击展开');
	});
})()