import $ from "jquery";

// Anime elements
$(document).ready(function() {

  /** ---------------------------- //
   *  @group viewport trigger script 
   * for adding or removing classes from elements in view within viewport
  */
  
  var $animationElements = $('.animation-element');
  var $window = $(window);
  
  // ps: Let's FIRST disable triggering on small devices!
  var isMobile = window.matchMedia("only screen and (max-width: 768px)");
  if (isMobile.matches) {
    $animationElements.removeClass('animation-element');
  }
  
  function checkIfInView() {
  
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);
  
    $.each($animationElements, function () {
      var $element = $(this);
      var elementHeight = $element.outerHeight();
      var elementTopPosition = $element.offset().top;
      var elementBottomPosition = (elementTopPosition + elementHeight);
  
  //check to see if this current container is within viewport
      if ((elementBottomPosition >= windowTopPosition) &&
          (elementTopPosition <= windowBottomPosition)) {
          $element.addClass('in-view');
      } else {
          $element.removeClass('in-view');
      }
    });
  }
  
  $window.on('scroll resize', checkIfInView);
  $window.trigger('scroll');
});

// Navbar change scroll
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop()
    if(scroll > 50) {
      $(".nav-primary").addClass("on")
    }
    else {
      $(".nav-primary").removeClass("on")
    }
  })
})

// Voltar ao topo
var btn = $('.backtotop')

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show')
  } else {
    btn.removeClass('show')
  }
})

btn.on('click', function(e) {
  e.preventDefault()
  $('html, body').animate({scrollTop:0}, '300')
})

// Active menu
$(document).on('click', '.nav-item', function(){
  $(this).addClass('active').siblings().removeClass('active')
})