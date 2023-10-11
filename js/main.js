(function ($) {
	if (isMac()) {
		$('body').addClass('mac');
	} else if (isiOS()) {
		$('body').addClass('ios');
	}

	$('.nav-toggle').click(function () {
		if ($('.nav-toggle').hasClass('active')) {
			$('.nav-toggle.active').removeClass('active');
			$('.navigations.active').removeClass('active');
			$('.navlink.active').removeClass('active');
		}
		else {
			$('.nav-toggle').addClass('active');
			$('.navigations').addClass('active');
		}
	});

	let top = $('.navigations');
	$(window).scroll(function() {
		if($(this).scrollTop() > 96) {
			top.addClass('navigations_fixed');
		} else {
			top.removeClass('navigations_fixed');
		}
	});

	document.addEventListener('DOMContentLoaded', () => {
		let toTopBtn = document.querySelector('.to-up');
		window.onscroll = function () {
			if (window.pageYOffset > 400) {
				toTopBtn.style.display = 'block'
			} else {
				toTopBtn.style.display = 'none'
			}
		}
		toTopBtn.addEventListener('click', function () {
			window.scrollBy({
				top: -document.documentElement.scrollHeight,
				behavior: 'smooth'
			});
		});
	});

	function isMac() {
		return navigator.platform.indexOf('Mac') > -1
	}
	function isWindows() {
		return navigator.platform.indexOf('Win') > -1
	}
	function isiOS() {
		return /(iPhone|iPod|iPad)/i.test(navigator.platform) && !window.MSStream;
	}

})(jQuery);



  // navigationsFixed start
  document.addEventListener('DOMContentLoaded', () => {
    let navigationsFixed = document.querySelector('body');
    window.onscroll = function () {
      if (window.pageYOffset > 96) {
        navigationsFixed.classList.add('navigationsFixed')
      } else {
        navigationsFixed.classList.remove('navigationsFixed')
      }
    }
  });
  // navigationsFixed stop




