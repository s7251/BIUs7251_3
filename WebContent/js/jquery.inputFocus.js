(function($) {
	$.fn.inputFocus = function(method, options) {

		var settings = $.extend({
			'inputText' : "Podaj wartość",
			'color' : 'red'
		}, options);
		var inputText = settings.inputText;
		var color = settings.color;
		this.val(inputText);

		var methods = {

			show : function() {
				$(this).focus(function() {

					if ($(this).val() === inputText) {
						$(this).val("");
					}
				});
				$(this).blur(function() {
					if ($(this).val() === "") {
						$(this).val(inputText);
					}
				});
			},
			showColor : function() {
				$(this).focus(function() {

					if ($(this).val() === inputText) {
						$(this).val("");
					}
				});
				$(this).blur(function() {
					if ($(this).val() === "") {
						$(this).val(inputText);
					}
				});
				$(this).css({
					'color' : color
				});
			}
		};

		// Chaining
		return this.each(function() {

			if (methods[method]) {
				return methods[method].apply(this, Array.prototype.slice.call(
						arguments, 1));
			} else {
				$.error('Method ' + method
						+ ' does not exist on jQuery.inputFocus');
			}
		});
	};
})(jQuery);