$(document).ready(function () {
    
   $(".our-partners").owlCarousel({
     margin:30,
     loop:true,
     autoWidth:true,
     items:3,
     nav:true
   });

   $(".site-slider").owlCarousel({
     margin:0,
     loop:true,
     autoWidth:true,
     items:1,
     nav:true,
       mouseDrag:false,
   touchDrag:false,
   });
   $(".display-slider-block").owlCarousel({
     margin:0,
     loop:true,
     autoWidth:true,
     items:1,
     nav:false,
       mouseDrag:false,
   touchDrag:false,
   });

   $(".site-slider .owl-next").click(function(){
        $('.display-slider-block .owl-next').trigger('click');
        $('.noise-block').show();
        setTimeout(function()
        {
            $('.noise-block').hide();
        }, 500);
   });
   $(".site-slider .owl-prev").click(function(){
        $('.display-slider-block .owl-prev').trigger('click');
       $('.noise-block').show();
        setTimeout(function()
        {
            $('.noise-block').hide();
        }, 500);
   });

   $(".top-titler").addClass("animate-text-left");
   $(".top-text").addClass("animate-text-right");

   $(window).scroll(function(){
       var Top = $(window).scrollTop() + $(window).height();
       var TopHowork = $('.howork-block').offset().top;
       var TopSale = $(".sale-block").offset().top;
       var TopConv = $(".slider-block").offset().top;
       console.log(TopConv);
       if (Top-300 > TopConv){
           $('.conv-item1 .conv-count').animate({ num: 57 - 3/* - начало */ }, {
               duration: 3000,
               step: function (num){
                   this.innerHTML = (num + 3).toFixed(0) + '%'
               }
           });
           $('.conv-item2 .conv-count').animate({ num: 146 - 3/* - начало */ }, {
               duration: 3000,
               step: function (num){
                   this.innerHTML = (num + 3).toFixed(0) + '%'
               }
           });
           $(".arr-up").addClass("arr-up-in");
       }
       if (Top-200 > TopHowork){
           $(".howork-dec").addClass("howork-dec-in");
           $(".howork-item").addClass("howork-in");
       }
       if (Top-300 > TopSale){
           $(".phone-block").addClass("phone-up");
       }
       console.log(TopHowork);
       console.log(Top);
   })
    // $('select,input[type="radio"],input[type="checkbox"]').styler();
});



