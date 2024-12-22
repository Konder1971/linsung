(function ($) {
  $(document).ready(function () {
    const $body = $('body');
    const $navigations = $('.navigations');
    const $langToggle = $('.lang');
    const $modalCloseButtons = $('.close');
    const navToggle = $('.nav-toggle');

    // Фиксированная навигация при прокрутке
    function handleScroll() {
      $('.navigations').toggleClass('navigations_fixed', $(window).scrollTop() > 239);
    }
    $(window).on('scroll', handleScroll);
    $(window).trigger('scroll');
    
    // Установить сохранённый язык из localStorage или использовать по умолчанию
    const savedLangClass = localStorage.getItem('langClass') || 'lang-ukr';
    $body.removeClass('lang-ukr lang-eng').addClass(savedLangClass);
    localStorage.setItem('langClass', savedLangClass);

    // Функция для переключения класса языка
    function toggleLanguageClass() {
      const newLangClass = $body.hasClass('lang-ukr') ? 'lang-eng' : 'lang-ukr';
      $body.removeClass('lang-ukr lang-eng').addClass(newLangClass);
      localStorage.setItem('langClass', newLangClass);
    }

    // Событие для переключения языка
    $langToggle.on('click', toggleLanguageClass);

    // Функция изменения размера медиа
    function resizeMedia() {
      $('.eimage-link, .portfolio-video').each(function () {
        $(this).css('height', $(this).width() + 'px');
      });
    }

    // Функциональность переключения навигации
    navToggle.on('click', function () {
      const isActive = navToggle.toggleClass('active').hasClass('active');
      $navigations.toggleClass('active', isActive);
    });

    // Удалить класс active при клике на язык
    $('nav').on('click', '.lang', function () {
      navToggle.removeClass('active');
      $navigations.removeClass('active');
    });

    resizeMedia();
    $(window).resize(resizeMedia);

    // Функциональность модальных окон
    function handleModalClick(event) {
      event.preventDefault();
      const modalId = $(event.target).data('modal');
      const $modal = $('#' + modalId);
      $modal.addClass('show').find('.modal-content').addClass('show');
      $body.addClass('no-scroll');
    }
    function handleResize() {
        if ($(window).width() > 767) {
            $('.openModal').off('click').on('click', handleModalClick);
        } else {
            $('.openModal').off('click').on('click', function (event) {
                event.preventDefault();
            });
        }
    }
    handleResize();
    $(window).resize(handleResize);


    // Закрытие модального окна по клику
    $modalCloseButtons.on('click', function () {
      const $modal = $(this).closest('.modal');
      $modal.removeClass('show').find('.modal-content').removeClass('show');
      $body.removeClass('no-scroll');
    });

    // Закрытие модального окна при клике вне его
    $(window).on('click', function (event) {
      $('.modal').each(function () {
        if ($(event.target).is(this)) {
          $(this).removeClass('show').find('.modal-content').removeClass('show');
          $body.removeClass('no-scroll');
        }
      });
    });

    // проверка видимости и проверка при прокрутке/изменении размера
    function checkVisibility() {
      $('.eimage-link, .d3-pic').each(function () {
        const $this = $(this);
        const elementTop = $this.offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();

        if (elementTop < windowBottom && elementTop + $this.outerHeight() > $(window).scrollTop()) {
          $this.addClass('visible').removeClass('hidden');
        } else {
          $this.removeClass('visible').addClass('hidden');
        }
      });
    }
    checkVisibility();
    $(window).on('scroll resize', checkVisibility);

    // Получить текущий год
    const currentYear = new Date().getFullYear();
    $('span').filter(function() {
        return $(this).text().includes('©');
    }).text(`© ${currentYear}`);

    // смена картинки
    setInterval(function() {
      $('.l2').each(function() {
        $(this).toggleClass('l2-img');
      });
    }, 3000);

    AOS.init({
      duration: 1000,
      once: true,
    }); 

  });
})(jQuery);