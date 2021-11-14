$(document).ready(function () {
  $("#page-top").hide();
  $(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('#page-top').fadeIn();
          } else {
              $('#page-top').fadeOut();
          }
      });

      $('#page-top a').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
  });
});