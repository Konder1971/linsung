(function ($) {
  $(document).ready(function () {
    
    // Функция для изменения высоты изображений и видео
    function resizeMedia() {
      $('.eimage-link img, .portfolio-video').each(function () {
        $(this).css('height', $(this).width() + 'px');
      });
    }

    // Работа с навигацией
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

    // Фиксированная навигация при прокрутке
    const top = $('.navigations');
    const scrollThreshold = 161;

    function handleScroll() {
      const scrollTop = $(this).scrollTop();
      top.toggleClass('navigations_fixed', scrollTop > scrollThreshold);
    }

    let lastTimeout = null;
    $(window).scroll(function () {
      clearTimeout(lastTimeout);
      lastTimeout = setTimeout(handleScroll, 10);
    });

    resizeMedia(); // Изменение размера изображений и видео при загрузке
    $(window).resize(resizeMedia); // Изменение размера при изменении окна

    // Работа с модальными окнами
    $('.openModal').click(function () {
      const modalId = $(this).data('modal');
      const modal = $('#' + modalId);
      modal.addClass('show');
      modal.find('.modal-content').addClass('show');
    });

    $('.close').click(function () {
      const modal = $(this).closest('.modal');
      modal.find('.modal-content').removeClass('show');
      modal.removeClass('show');
    });

    // Закрытие при клике вне модального окна
    $(window).click(function (event) {
      $('.modal').each(function () {
        if ($(event.target).is(this)) {
          $(this).find('.modal-content').removeClass('show');
          $(this).removeClass('show');
        }
      });
    });

  });
})(jQuery);
