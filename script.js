// $(document).ready(function() {
//
//   $('h1').css("color", "peachpuff")
//     .append("<p>mother duckers</p>");
//
// });

$(document).ready(function() {

  $(".topnav").find('a').hover(function() {
    $(this).animate({opacity: 0.25}, "slow", function() {
      $(this).css({"background-image": "url(images2/home.jpg)"})
      .animate({opacity: 1});
    })
    })
      $(".topnav").find("a").on("click", "slow", function() {
        $(this).css({"backgroundColor": "rgba(159, 67, 9, 0.81)"})
    })

    $(".topnav").click("slow", function() {
      $(this).text("Clicked!");
    })
});
