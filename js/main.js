(function ($) {
  $(document).ready(function () {
    
    const $body = $('body');
    const $navigations = $('.navigations');
    const $langToggle = $('.lang');

    // Проверяем наличие класса языка в localStorage и применяем его к body
    const savedLangClass = localStorage.getItem('langClass');
    if (savedLangClass) {
      // Применяем сохраненный класс только если он существует
      $body.removeClass('lang-ukr lang-eng').addClass(savedLangClass);
    } else {
      // Убедитесь, что по умолчанию установлен класс lang-ukr
      $body.addClass('lang-ukr');
      localStorage.setItem('langClass', 'lang-ukr'); // Сохраняем язык по умолчанию
    }

    // Функция для переключения классов языка
    function toggleLanguageClass() {
      if ($body.hasClass('lang-ukr')) {
        $body.removeClass('lang-ukr').addClass('lang-eng'); // Переключаем на английский
        localStorage.setItem('langClass', 'lang-eng'); // Сохраняем состояние
      } else {
        $body.removeClass('lang-eng').addClass('lang-ukr'); // Переключаем на украинский
        localStorage.setItem('langClass', 'lang-ukr'); // Сохраняем состояние
      }
    }

    // Обработчик клика на элемент с классом lang
    $langToggle.click(toggleLanguageClass);

    // Функция для добавления класса активного элемента в навигации
    function setActiveMenuItem() {
      const currentPath = window.location.pathname; // Получаем текущий путь
      $('nav .nav-item').each(function () {
        const linkPath = $(this).attr('href'); // Получаем href элемента
        if (currentPath.includes(linkPath)) { // Проверяем, совпадает ли путь
          $(this).addClass('active'); // Добавляем класс active
        }
      });
    }

    setActiveMenuItem(); // Вызов функции при загрузке страницы

    // Функция для изменения высоты изображений и видео
    function resizeMedia() {
      $('.eimage-link img, .portfolio-video').each(function () {
        $(this).css('height', $(this).width() + 'px');
      });
    }

    // Работа с навигацией
    const navToggle = $('.nav-toggle');
    navToggle.click(function () {
      const isActive = navToggle.hasClass('active');
      navToggle.toggleClass('active', !isActive);
      $navigations.toggleClass('active', !isActive);
    });

    // Удаляем класс active у навигации при клике на элемент nav .lang
    $('nav .lang').click(function () {
      navToggle.removeClass('active');
      $navigations.removeClass('active');
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
      $('body').addClass('no-scroll'); // Добавляем класс no-scroll к body
    });

    $('.close').click(function () {
      const modal = $(this).closest('.modal');
      modal.find('.modal-content').removeClass('show');
      modal.removeClass('show');
      $('body').removeClass('no-scroll'); // Убираем класс no-scroll у body
    });

    // Закрытие при клике вне модального окна
    $(window).click(function (event) {
      $('.modal').each(function () {
        if ($(event.target).is(this)) {
          $(this).find('.modal-content').removeClass('show');
          $(this).removeClass('show');
          $('body').removeClass('no-scroll'); // Убираем класс no-scroll у body при клике вне
        }
      });
    });

  });
})(jQuery);