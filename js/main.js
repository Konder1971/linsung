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

	let top = $('.top');
	$(window).scroll(function() {
		if($(this).scrollTop() > 10) {
			top.addClass('top_fixed');
		} else {
			top.removeClass('top_fixed');
		}
	});

	let parent = document.querySelectorAll('.navlink')
	//let linkdown = document.querySelectorAll('.dropdown')
	if($(window).width() < 1025) {
		for(let i=0; i < parent.length; i++) {
		  parent[i].onclick = function(e) {
		  // e.preventDefault()
		  if( parent[i].classList.contains('active') ) {
			parent[i].classList.remove('active')
		  } else {
			  for(let i=0; i < parent.length; i++) {
				parent[i].classList.remove('active')
			  }
			  parent[i].classList.add('active')
			}
		  }
		}
	} else {
		for(let i=0; i < parent.length; i++) {
			parent[i].onclick = function(e) {
				return true;
			};
			parent[i].classList.remove('active')
		}
	};
	$(window).resize(function() {
		if($(window).width() < 1025) {
			for(let i=0; i < parent.length; i++) {
				parent[i].onclick = function(e) {
				// e.preventDefault()
				if( parent[i].classList.contains('active') ) {
					parent[i].classList.remove('active')
				} else {
						for(let i=0; i < parent.length; i++) {
							parent[i].classList.remove('active')
						}
						parent[i].classList.add('active')
					}
				}
			}
		} else {
			for(let i=0; i < parent.length; i++) {
				parent[i].onclick = function(e) {
					return true;
				};
				parent[i].classList.remove('active')
			}
		};
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


	if($(".select").length > 0){
		$(".select").selectmenu();
	}


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




