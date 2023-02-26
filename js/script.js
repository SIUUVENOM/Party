$(".open-nav").click(function () {
  if ($(".side-nav").width() == "250") {
    closeNav();
  } else {
    $(".side-nav").animate({ width: "250px" }, function () {
      $(".side-nav ul li a,.icon").show();
    });
    $(".open-nav").animate({ left: "250px" });
  }
});

function closeNav() {
  $(".side-nav").animate({ width: "0px" }, function () {
    $(".side-nav ul li a,.icon").hide();
  });
  $(".open-nav").animate({ left: "0px" });
}

$(".icon i").click(function () {
  closeNav();
});

$(".singers h3").click(function () {
  $(this).next().slideToggle();
  $(".singers .singer").not($(this).next()).slideUp();
});

(function eventdate() {
  let event = new Date(2023, 4, 28).getTime();
  let timeFunc = setInterval(function () {
    let now = new Date().getTime();
    let timeLeft = event - now;
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    $(".day").html(days + "d");
    $(".hours").html(hours + "h");
    $(".minutes").html(minutes + "m");
    $(".seconds").html(seconds + "s");
  }, 1000);
})();

$(".contact textarea").keyup(function () {
  let x = [...$(".contact textarea").val()];
  if (x.length == 0) {
    $(".remining-charicter span").html("100");
  } else {
    if (x.length < 100) {
      $(".remining-charicter span").html(100 - x.length);
      $(".btn").removeAttr("disabled");
    } else {
      $(".remining-charicter span").html("your available character finished ");
      $(".btn").attr("disabled", "true");
    }
  }
});
