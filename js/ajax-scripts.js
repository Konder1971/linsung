(function($) {
	$(document).ready(function(){
		
		var isLoadingNI = false;
		var loadNIArea = false;
		var startNI = 0;
		var qtyNI = 12;
		var catNI = 'news-insights';
		var searchNI = '';
		if($('#newsContainer').length > 0){
			var catNI = $('#categoryName').text();
			if($('#searchText').length > 0){
				searchNI = $('#searchText').text();
			}
			loadMoreNewsInsights();
			
			$(window).on("scroll", function() {
				var scrollHeight = $(document).height()- $('footer').outerHeight()-$('.getMile').outerHeight();
			    var scrollPosition =  $(window).scrollTop()+$(window).height();
				if(!loadNIArea){
					if (scrollPosition >= scrollHeight ) {
						loadNIArea = true;
						loadMoreNewsInsights();
					}
				}
			});
			
		}
		
		function loadMoreNewsInsights(){
			if(!isLoadingNI){
				isLoadingNI = true;
				$('.loading').css('display', 'block');
				jQuery.get(millAjaxObj.url+'?action=loadallnews&category='+catNI+'&search='+searchNI+'&offset='+startNI+'&number='+qtyNI, function(data){	
						if(typeof data !== 'undefined' && data != ''){
							jQuery(data).insertBefore('.loading');
							startNI = startNI*1 + qtyNI*1;
							loadNIArea = false;		
							$('.c3b-img').css('height', '');
							
								$('.c3b-img').css({
								  height: $('.c3b-img').width()/1.67 + 'px'
								});

						}
						$('.loading').css('display', 'none');
					    isLoadingNI = false;	
				});
			}
		}
		
		
		var start = 0;
		var qtynews = 4;
		if($('#news').length > 0){
			var moreBtn = $('#loadMoreNews');
			loadMoreNews();
			
			moreBtn.click(function(){
				loadMoreNews();
				return false;
			});	
        }		
		
		function loadMoreNews(){
			$('.loading').css('display', 'block');
			jQuery.get(millAjaxObj.url+'?action=loadnews&offset='+start+'&number='+qtynews, function(data){				
				if(typeof data !== 'undefined' && data != ''){
					jQuery(data).insertBefore('.loading');
					start = start*1 + qtynews*1;
				}else{
					moreBtn.css('display', 'none');
				}
				$('.loading').css('display', 'none');
				var countDisplayedNews = $('.minn-block').length;
				if(typeof millie_news_count !== 'undefined' && countDisplayedNews >= millie_news_count){
					moreBtn.css('display', 'none');
				}
			});
		}
		
	});	
})( jQuery );