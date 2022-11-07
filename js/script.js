//слайдер
const swiper = new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerView: 2,
	loop: true,
})
//маска телефона
$(function () {
	$("#phone").mask("+7(999) 999-9999");
});

//проверка формы
$('.form__body').submit(function () {
	var form = $(this);
	var field = [];
	form.find('input[data-validate]').each(function () {
	  field.push('input[data-validate]');
	  var value = $(this).val(),
			line = $(this).closest('.form-item');
	  for(var i=0;i<field.length;i++) {
		 if( !value ) {
			line.addClass('some-form__line-required');
			setTimeout(function() {
			  line.removeClass('some-form__line-required')
			}.bind(this),2000);
			event.preventDefault();
		 }
	  }
	});
 });