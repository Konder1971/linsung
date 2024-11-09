(function ($) {
  $(document).ready(function () {
    
    // Функция для изменения высоты изображений
    function resizeImages() {
      $('.eimage-link img').each(function () {
        $(this).css('height', $(this).width() + 'px');
      });
      $('.portfolio-video').each(function () {
        $(this).css('height', $(this).width() + 'px');
      });
    }

    const navToggle = $('.nav-toggle');
    const navigations = $('.navigations');
    navToggle.click(function () {
      const isActive = navToggle.hasClass('active');
      navToggle.toggleClass('active', !isActive);
      navigations.toggleClass('active', !isActive);
    });
    $('nav li > span').click(function () {
      navToggle.removeClass('active');
      navigations.removeClass('active');
    });

    let top = $('.navigations');
    const scrollThreshold = 161; // Пороговое значение для добавления класса
    // Функция для обработки прокрутки
    function handleScroll() {
      const scrollTop = $(this).scrollTop();
      top.toggleClass('navigations_fixed', scrollTop > scrollThreshold);
    }
    // Дебаунс для оптимизации события прокрутки
    let lastTimeout = null;
    $(window).scroll(function() {
      clearTimeout(lastTimeout);
      lastTimeout = setTimeout(handleScroll, 10); // Задержка 10ms
    });


    // Начальный вызов для установки высоты изображений
    resizeImages();
    // Вызов функции при изменении размера окна
    $(window).resize(resizeImages);
      // Открытие модального окна
      $('.openModal').click(function () {
        const modalId = $(this).data('modal');
        const modal = $('#' + modalId);
        modal.addClass('show');
        modal.find('.modal-content').addClass('show');
      });
      // Закрытие модального окна
      $('.close').click(function () {
          const modal = $(this).closest('.modal');
          modal.find('.modal-content').removeClass('show');
          modal.removeClass('show');
      });
      // Закрытие при клике вне модального окна
      $(window).click(function (event) {
          $('.modal').each(function() {
              if ($(event.target).is(this)) {
                  $(this).find('.modal-content').removeClass('show');
                  $(this).removeClass('show');
              }
          });
      });
    
  });
})(jQuery);





//(function ($) {
//	if (isMac()) {
//		$('body').addClass('mac');
//	} else if (isiOS()) {
//		$('body').addClass('ios');
//	}

//	$('.nav-toggle').click(function () {
//		if ($('.nav-toggle').hasClass('active')) {
//			$('.nav-toggle.active').removeClass('active');
//			$('.navigations.active').removeClass('active');
//			//$('.navlink.active').removeClass('active');
//		}
//		else {
//			$('.nav-toggle').addClass('active');
//			$('.navigations').addClass('active');
//		}
//	});

//  $('nav li > span').click(function () {
//    $('.nav-toggle.active').removeClass('active');
//    $('.navigations.active').removeClass('active');
//    //$('.navlink.active').removeClass('active');
//  });

//	let top = $('.navigations');
//	$(window).scroll(function() {
//		if($(this).scrollTop() > 96) {
//			top.addClass('navigations_fixed');
//		} else {
//			top.removeClass('navigations_fixed');
//		}
//	});

//	document.addEventListener('DOMContentLoaded', () => {
//		let toTopBtn = document.querySelector('.to-up');
//		window.onscroll = function () {
//			if (window.pageYOffset > 400) {
//				toTopBtn.style.display = 'block'
//			} else {
//				toTopBtn.style.display = 'none'
//			}
//		}
//		toTopBtn.addEventListener('click', function () {
//			window.scrollBy({
//				top: -document.documentElement.scrollHeight,
//				behavior: 'smooth'
//			});
//		});
//	});

//	function isMac() {
//		return navigator.platform.indexOf('Mac') > -1
//	}
//	function isWindows() {
//		return navigator.platform.indexOf('Win') > -1
//	}
//	function isiOS() {
//		return /(iPhone|iPod|iPad)/i.test(navigator.platform) && !window.MSStream;
//	}

//})(jQuery);



  // navigationsFixed start
  //document.addEventListener('DOMContentLoaded', () => {
  //  let navigationsFixed = document.querySelector('body');
  //  window.onscroll = function () {
  //    if (window.pageYOffset > 120) {
  //      navigationsFixed.classList.add('navigationsFixed')
  //    } else {
  //      navigationsFixed.classList.remove('navigationsFixed')
  //    }
  //  }
  //});
  // navigationsFixed stop




