(function () {
	$('.sub').click(function (e) {
		e.preventDefault();
		var input = $('input[type=text]');
		if (!input[0].value) return alert('联系人不能为空');
		if (!input[1].value) return alert('联系方式不能为空');
		if (!$('textarea')[0].value) return alert('留言内容不能为空');
		alert('提交成功，感谢反馈');
		$('form.sug')[0].submit();
	});
})()