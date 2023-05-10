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
