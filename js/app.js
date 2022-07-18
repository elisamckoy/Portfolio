$('.mode-btn').on('click', function () {
	if ($('html').hasClass('dark-mode')) {
		$('html').removeClass('dark-mode');
		$('html').addClass('light-mode');
	} else if ($('html').hasClass('light-mode')){
		$('html').removeClass('light-mode');
		$('html').addClass('dark-mode');
	}
});