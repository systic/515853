(function($) {
  // Init highlight.js
  //hljs.initHighlightingOnLoad();
  // When DOM ready
  $(document).ready(function() {
    // Checkbox Styling Handlers
    $('.form-container').jqTransform();


    /*-splash's pageload simulation--*/
    if(!window.location.pathname.localeCompare('/app/')){
      loadingPercentage($('.load-percentage'),function(){
        $('body').addClass('loaded');
      });
    }


    /*--Intro Carrousel Initialization and functionality-*/

    $('.intro-steps').slick({
        dots: true,
        arrows: false,
        infinite: false
    });


    $('.intro-next').on('click',function(e){
      e.preventDefault();
      $('.intro-steps').slick('slickNext');
    });

    $('.intro-steps').on('beforeChange', function(event, slick, currentSlide, nextSlide){
       if(nextSlide===2){
          $('.nav-buttons').addClass('last-step');
       }else{
          $('.nav-buttons').removeClass('last-step');
       }
    });


    /*--Internal Pages Functionality -*/

    $('.sign-up-as .nav-buttons a').on('click',function(e){
      e.preventDefault();
      $('.page-container').addClass('page-open');
      $('.sing-up-type').html($(this).data('registerAs'));
   });

    

    $('.sign-up-submit').on('click',function(e){
      e.preventDefault();
      if($('.input-field').hasClass('error')){
        $('.overlay').show();
        $('.success-popup').show();        
      }else{
        $('.input-field').addClass('error');        
      }
      
   });

   $('.page-container .back-icon').on('click',function(e){
      e.preventDefault();
      $('.page-container').removeClass('page-open');
   });


    $('.filter-icon').on('click',function(e){
      e.preventDefault();
      $('.page-container').addClass('page-open');
   });


   /*--Nav menu functionality--*/

   $('.menu-icon').on('click',function(e){
      e.preventDefault();
      $('body').toggleClass('shifted');
   });

   /*--Login User handle--*/
   $('.nav-buttons .login').on('click',function(e){
        e.preventDefault();
        var user = $('#user').val().toLowerCase();
        switch(user){
          case 'retailer':
            window.open('dashboard.html','_self');
            break;
          case 'agent':
            window.open('agent-dashboard.html','_self');
            break;
        }
     });


   /*---Section Header Collapsible functionality--*/

    $('.section-header h2').on('click',function(e){
      e.preventDefault();
      $(this).parents('section').find('.section-content').slideToggle();
      $(this).parents('.section-header').toggleClass('collapsed');
   });


    /*--Header Tools Functionality--*/

    $('.dashboard-header .settings-icon').on('click',function(e){
      e.preventDefault();
      $(this).parents('.dashboard-header').addClass('activated-settings');
   });


    /*--Dashboard Setting functionality Sortable, Disabled--*/

    $('.settings-done').on('click',function(e){
      e.preventDefault();
      if ($(".header-dropdown").is(":visible") == true) { 
        $(".header-dropdown").hide();
      }
      if ($(".overlay").is(":visible") == true) { 
        $(".overlay").hide();
      }
      $(this).parents('.dashboard-header').removeClass('activated-settings');
      
      
   });

   $('.toggle-button').on('click',function(e){
      e.preventDefault();
      $(this).toggleClass('checked');
      $(this).parents('section').addClass('section-disabled');
      var toggleData = $(this).parents('section').data('disable');
      $('.header-dropdown a[data-toggle="'+toggleData+'"]').toggleClass('section-disabled');
   });

   $( ".drag-container" ).sortable({
        handle: ".drag-icon",
   });

   $('.dropdown-icon>a').on('click',function(e){
      e.preventDefault();
      $(this).siblings('.header-dropdown').slideToggle();
      $('.overlay').toggle();      
   });

   $('.header-dropdown a').on('click',function(e){
      e.preventDefault();
      var toggleData = $(this).data('toggle');
      $(this).toggleClass('section-disabled');
      $('.main-container').find('section[data-disable="'+toggleData+'"]').toggleClass('section-disabled');
      $('section[data-disable="'+toggleData+'"] .toggle-button').toggleClass('checked');
   });




    

    setTimeout(function() {
        $('body').removeClass('loaded'); 
    }, 500);
    

    /*--Tabs functionality--*/
    $('.tabs ul li').on('click',function(e){
      if(!$(this).hasClass('active')){
         $('.tabs ul li.active').removeClass('active');
         $(this).addClass('active');
         $('.section-tab.tab-active').removeClass('tab-active');
         $('.section-tab[data-tab="'+$(this).data('tab')+'"]').addClass('tab-active');
      }    
   });


    /*--Section View functionality--*/
    /*--Options on every sections that are displayed when clicking on icon that are placed at the top right--*/
    $('.section-view .view-icon').on('click',function(e){
        e.preventDefault();
        $(this).siblings('.section-view-options').show();
        $(this).parents('section').addClass('section-disabled');
   });

   $('.section-view .select').on('click',function(e){
        e.preventDefault();
        $(this).siblings('.section-view-options').show();
   });

   $('.section-view-options li a').on('click',function(e){
        e.preventDefault();
        $(this).parents('.section-view-options').hide();
        $(this).parents('section').removeClass('section-disabled');
   });
  
   

   /*--Inventoty change view of section's--*/


    $('.inventory-header .change-view-icon').on('click',function(e){
      e.preventDefault();
      $('.inventory-product').toggleClass('preview-changed');
      $(this).toggleClass('preview-changed');
   });

    $('.btn-options').on('click',function(e){
      e.preventDefault();
      $('.inventory-options-popup').show();
      $('.overlay').show();
   });


    /*-Pop up functionality--*/

    $('.popup-close').on('click',function(e){
      e.preventDefault();
      $('.inventory-options-popup').hide();
      $('.overlay').hide();
   });

    $('.inquiry-submit').on('click',function(e){
      e.preventDefault();
      $('.inquiry-success').show();
      $('.overlay').show();
   });

    

    /*--Chart shifting functionality--*/
    $('.filter-monthly').on('click',function(e){
       
       if(!$(this).hasClass('active')){
          $('#chart-month').show();
          $('#chart-week').hide();
          $('.filter-weekly').removeClass('active');
          $(this).addClass('active');
       }
   });


    $('.filter-weekly').on('click',function(e){
       if(!$(this).hasClass('active')){
          $('#chart-month').hide();
          $('#chart-week').show();
          $('.filter-monthly').removeClass('active');
          $(this).addClass('active');
       }
   });
      
  });
})(jQuery);


/*--Loading simulation helper function-*/


var loadingPercentage = function($el,callback){
  if(this.loaded == undefined){
    this.loaded = 0;
    this.callback= callback;
  }
  var rand = Math.round(Math.random() * (1000 - 500)) + 500;
  this.loaded += (rand/100);
  if(loaded < 100){
    setTimeout(function() {
            $el.html(parseInt(loaded)+'%');
            loadingPercentage($el);  
    }, rand);
  }else{
    $el.html('100%');
    this.callback();
  }
};