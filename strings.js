let i=0;

$('body').append("<h2>" +i+ "</h2>");


$('.increase').on('click', () => {
  // do something
  $('h2').text(i++);
  
});

$('.decrease').on('click', () => {
  // do something
  $('h2').text(i--);
  
});
