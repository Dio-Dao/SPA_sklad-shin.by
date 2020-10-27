$(function () {

	$('.slider_inner, .news_slider-inner').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false
	});

	$('select').styler();

	$('.header_btn-menu').on('click', function () {
		$('.menu ul').slideToggle();

	})
// -------------* E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Ваше сообщение отправлено");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
// -------------* Cursor Custom
document.onmousemove = function () {
	document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="cursor_custom"></div');
	let cursor_custom = document.getElementById('cursor_custom');
	cursor_custom.style.position = 'fixed';
	cursor_custom.classList.add('bezier');
	document.onmousemove = function normal_size(event) {
		cursor_custom.style.left = event.clientX - 8 + 'px';
		cursor_custom.style.top = event.clientY - 8 + 'px';
	}
}
let div = document.querySelectorAll('.menu a,.default-btn,.header_btn');
for (let i = 0; i < div.length; i++) {
	div[i].onpointerenter = function () {
		cursor_custom.classList.remove('bezier');
		cursor_custom.classList.add('normal');
		cursor_custom.style.width = 70 + 'px';
		cursor_custom.style.height = 70 + 'px';
		cursor_custom.style.borderRadius = 50 + "px";
		document.onmousemove = function (event) {
			cursor_custom.style.left = event.clientX - 38 + 'px';
			cursor_custom.style.top = event.clientY - 38 + 'px';
		}
	}
	div[i].onpointerleave = function () {
		document.onmousemove = function (event) {
			cursor_custom.style.left = event.clientX - 8 + 'px';
			cursor_custom.style.top = event.clientY - 8 + 'px';
		}
		cursor_custom.classList.remove('normal');
		cursor_custom.classList.add('bezier');
		cursor_custom.style.width = 10 + 'px';
		cursor_custom.style.height = 10 + 'px';
	}
}
// -------------* Custom Rotate IMG
const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
	const card = cards[i];
	card.addEventListener('mousemove', startRotate);
	card.addEventListener('mouseout', stopRotate);
}
function startRotate(e) {
	const cardItem = this.querySelector('.card-item');
	// cardItem.innerText = e.offsetX + ' ' + e.offsetY;
	const halfHeight = cardItem.offsetHeight / 2;
	const halfWidth = cardItem.offsetWidth / 2;
	cardItem.style.transform = 'rotateX(' + -(e.offsetY - halfHeight) / 10 + 'deg) rotateY(' + (e.offsetX - halfWidth) / 10 + 'deg)';
}
function stopRotate(e) {
	const cardItem = this.querySelector('.card-item');
	cardItem.style.transform = 'rotate(0)';
}