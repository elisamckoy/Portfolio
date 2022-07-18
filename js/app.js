$('.mode-btn').on('click', function () {
	if ($('html').hasClass('dark-mode')) {
		$('html').removeClass('dark-mode');
		$('html').addClass('light-mode');
		$('.dark-mode-btn').removeClass('d-none');
		$('.light-mode-btn').addClass('d-none');
	} else if ($('html').hasClass('light-mode')){
		$('html').removeClass('light-mode');
		$('html').addClass('dark-mode');
		$('.dark-mode-btn').addClass('d-none');
		$('.light-mode-btn').removeClass('d-none');
	}
});