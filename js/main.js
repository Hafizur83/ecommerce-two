//STICKY MENU
		var topbutton = document.getElementById("topbtn");
		window.onscroll = function(){scrollFunction()};
		function scrollFunction(){
			if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
				$("#header").addClass("sticky");
				topbutton.style.display = "block";
				
			}else{
				$("#header").removeClass("sticky");
				topbutton.style.display = "none";
			}
		}


$('.hero_catagories_all').click(function(){
    $('.hero_catagories ul').slideToggle(400)
})

$('.cart_button,.cart_close_btn').click(function(){
    $('.cart_area').toggleClass('show')
})
/*------------------
    Background Set
--------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

/*------------------
    Background Set
--------------------*/
  $('.product_details_small_pic img').click(function() {
      const bigImg = $('.product_details_pic_item>img');
      var src = $(this).attr('src');
        
      bigImg.attr('src',src)
  })
//Increment & Decrement Quantity
 var qty = document.querySelector('#quantity_box')
$('.qtybtn.inc').click(function(){
    qty.value = parseInt(qty.value) + 1
})
$('.qtybtn.dec').click(function(){
    if(qty.value <= 0){
        qty.value = 0
    }else{
        qty.value = parseInt(qty.value) - 1
    }
    
})

/*--------------------------
    Hero Slider
----------------------------*/

var hero_slider = new Swiper('.hero_slider', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    autoplay:true,
    });

/*--------------------------
    Brands Slider
----------------------------*/

var brands_slider = new Swiper('.brands_slider', {
    navigation: {
        nextEl: '.m-next',
        prevEl: '.m-prev',
    },
    //    autoplay:true,
    loop: true,
    breakpoints : {
        991: {
            slidesPerView: 6,
            spaceBetween :20
        },
        768: {
            slidesPerView: 4,
            spaceBetween :15
        },
        575: {
            slidesPerView: 3,
            spaceBetween :10
        },
        411: {
            slidesPerView: 2,
            spaceBetween :10
        },
        360: {
            slidesPerView: 2,
            spaceBetween :8
        }
    }
});

   /*-----------------------
        Categories Slider
    ------------------------*/
    $(".product_by_cat_slider").owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        autoplay:false,
        navText: ["<span class='icofont-simple-left'><span/>", "<span class='icofont-simple-right'><span/>"],
        margin: 0,
        smartSpeed: 1200,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoHeight: false,
        responsive: {
            0: {
                items: 2,
            },

            480: {
                items: 2,
            },

            768: {
                items: 3,
            },

            992: {
                items: 6,
            }
        }
    });


 /*-----------------------
        Price Slider
    ------------------------*/
const rangeSlider = $('#price-range');
const minprice = $('#price-range').data('min')
const maxprice = $('#price-range').data('max')

    rangeSlider.slider({
        range: true,
        min: minprice,
        max: maxprice,
        values: [minprice, maxprice],
        slide: function (event, ui ){
            $('#amount').val("$" + ui.values[0] + " - $" + ui.values[1])
        }
    });
$('#amount').val("$" + rangeSlider.slider('values',0)+ " " + "-" + " " +"$" + rangeSlider.slider('values',1))


//Mobile Menu
//  Mobile Menu
   $(document).on('click','.navbar-btn,.navbar-close',function(){
       if($('#header').hasClass("mobile-nav-active")){
            $('#header').removeClass('mobile-nav-active')
       }else{
           $('#header').addClass('mobile-nav-active')
       }
    });



//SCROLL TO TOP
	function topFunction(){
			window.scrollTo({top: 0, behavior:"smooth"});
		}












