$('.spoiler').hide();
$('.spoilerButton').on('click', function () {
  $('.spoilerButton').hide();
  $('.spoiler').slideToggle(900);
});
