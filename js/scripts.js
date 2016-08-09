$(".fadeeffect .clickable").click(function() {
  $("#grounds").fadeToggle("slow");
});

$(".slide .clickable").click(function() {
  $("#brewing").slideToggle();
});

$(".animate .clickable").click(function() {
  $("#coffee").animate({
        height: '300px',
        width: '300px'
    });
});
