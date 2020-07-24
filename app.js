$(document).ready(function() {
    $('.nav-button').click(function() {
      $('.nav-button').toggleClass('change');
    });
  
    $(window).scroll(function() {
      let position = $(this).scrollTop();
      if(position >= 200) {
        $('.nav-menu').addClass('custom-navbar');
      } else {
        $('.nav-menu').removeClass('custom-navbar');
      }
    });
  
    $(window).scroll(function() {
      let position = $(this).scrollTop();
      if(position >= 650) {
        $('.camera-img').addClass('fromLeft');
        $('.mission-text').addClass('fromRight');
      } else {
        $('.camera-img').removeClass('fromLeft');
        $('.mission-text').removeClass('fromRight');
      }
    });
  
    $('.gallery-list-item').click(function() {
      let value = $(this).attr('data-filter');
      if(value === 'all') {
        $('.filter').show(300);
      } else {
        $('.filter').not('.' + value).hide(300);
        $('.filter').filter('.' + value).show(300);
      }
    });
  
    $('.gallery-list-item').click(function() {
      $(this).addClass('active-item').siblings().removeClass('active-item');
    });
  
    $(window).scroll(function() {
      let position = $(this).scrollTop();
      if(position >= 4300) {
        $('.card-1').addClass('moveFromLeft');
        $('.card-2').addClass('moveFromBottom');
        $('.card-3').addClass('moveFromRight');
      } else {
        $('.card-1').removeClass('moveFromLeft');
        $('.card-2').removeClass('moveFromBottom');
        $('.card-3').removeClass('moveFromRight');
      }
    });
  });
var firstName = "";
		var lastName = "";
		var email = "";
		var dType = "";
		var receipt = "";
		var anon = "";
		var list = "";
		var amount = "";
		
		$('.set-amount').autoGrow(0);
		
		/*
			if(isiPad || jQuery.browser.mobile){
				$('#team').hide()
				$('.team-mobile').show();	
			}else{
				$('#team').show()
				$('.team-mobile').hide();
			}
		*/
		
		//Set & Highlight Donation Amount
		$(".button").click(function(){
			$(".button").removeClass("selected");
			$(this).addClass("selected");
			
			$(this).find("input").focus();
		});
		
		//Grow the donation box if they type more than 4 numbers
		$(".set-amount").keyup(function(){
			
			if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
		       this.value = this.value.replace(/[^0-9\.]/g, '');
		    }

		});
		
		
		$("input").on("change", function(){
			// $(".donation-box").css("height", "500px");
			
			firstName = $("#firstName").val();
			lastName = $("#lastName").val();
			email = $("#email").val();
			
			if ( $("#one-time").prop( "checked" ) ){
				dType = "One-Time";
			}
			if ( $("#monthly").prop( "checked" ) ){
				dType = "Monthly";
			}

		});  