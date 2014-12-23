(function($) {
	$.fn.mCheck = function(options) {
		var settings = $.extend({
			// Settings here!
		}, options);
		
		var originalCheckbox = $(this);
		if(originalCheckbox.attr('type') != 'checkbox') {
			console.error('The object in selector is not of type \'checkbox\'!');
			return false;
		}
		
		originalCheckbox.hide();
		var newCheckbox = originalCheckbox.wrap($('<span class="mCheck"></span>')).parent();
		var newCheckboxInner = $('<span class="mCheckState"></span>').prependTo(newCheckbox);
		newCheckbox.outerWidth(originalCheckbox.width());
		newCheckbox.outerHeight(originalCheckbox.height());
		
		originalCheckbox.change(function() {
			newCheckboxInner.removeClass('mCheckOn mCheckOff');
			newCheckboxInner.addClass(originalCheckbox.prop('checked') ? 'mCheckOn' : 'mCheckOff');
		}).trigger('change');
		
		newCheckbox.off('click').click(function() {
			originalCheckbox.prop('checked', !originalCheckbox.prop('checked')).change();
		});
		
		return originalCheckbox;
	};
} (jQuery));