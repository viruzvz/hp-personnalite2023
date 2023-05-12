$(document).on('click', '.nav-item', function(){
  $(this).addClass('active').siblings().removeClass('active')
})