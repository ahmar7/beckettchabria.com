$(document).ready(function () {
  $("#mbl-nav ul li a").click(function () {
    $("#mbl-nav ul li a").removeClass("active");
    $(this).addClass("active");
  });

  $("#burger-menu").click(function () {
    $("#mySidenav").css({
      width: "250px",
    });

    setInterval(function () {
      $("#mySidenav").css({
        transform: "translateX(0px)",
      });
      $("#mySidenav a").addClass(
        "animate__animated animate__heartBeat animate__delay-1s"
      );
    }, 3000);
  });

  $(".closebtn").click(function () {
    $("#mySidenav").css({
      width: "0",
      transform: "translateX(0px)",
    });
    $("#mySidenav").removeClass(
      "animate__animated animate__heartBeat animate__delay-1s"
    );
  });

  // $(".wb, .wd, .dm, .sp").hover(function () {

  //     var div = $(this);
  //     var h1 = $(this).find('h1');
  //     var p = $(this).find('p');

  //     h1.css({
  //         "font-size": "50px"
  //     });

  //     setTimeout(function () {
  //         div.css({
  //             "background-color": "rgb(153, 95, 50)",
  //             "transition": "4.70s",
  //             "transform": "rotate(360deg)"
  //         })
  //         h1.hide();
  //         p.css({
  //             "display": "block"
  //         })

  //     }, 250);

  // }, function () {

  //     var div = $(this);
  //     var h1 = $(this).find('h1');
  //     var p = $(this).find('p');

  //     div.css({
  //         "transform": "rotate(0deg)",
  //         "background-color": "rgb(17, 63, 65)"
  //     })

  //     h1.css({
  //         "font-size": "20px"
  //     });

  //     p.css({
  //         "display": "none"
  //     })

  //     h1.show();

  // });

  $(".wb, .wd, .dm, .sp").hover(
    function () {
      var div = $(this);
      var h1 = $(this).find("h1");
      var p = $(this).find("p");

      h1.hide();
      p.css({ display: "block" });
      div.css({ "background-color": "#CB6CE6" });
    },
    function () {
      var div = $(this);
      var h1 = $(this).find("h1");
      var p = $(this).find("p");

      div.css({ "background-color": "rgb(0, 0, 0)" });
      p.css({ display: "none" });
      h1.show();
    }
  );
});
window.addEventListener("scroll", function () {
  let header = this.document.querySelector("#nav");
  let about = this.document.querySelector("#main-about");
  let logo = this.document.querySelector("#logo");
  about.classList.toggle("about-color", window.scrollY > 710);
  header.classList.toggle("pinky", window.scrollY > 710);

  console.log(logo);
  if (window.scrollY > 1430) {
    header.classList.add("nav-bg");
    logo.classList.add("logo-color");
    logo.classList.remove("top-logo");
    header.classList.remove("pinky");
    about.classList.remove("about-color");
  } else {
    logo.classList.remove("logo-color");
    header.classList.remove("nav-bg");
    logo.classList.add("top-logo");
    about.classList.toggle("about-color", window.scrollY > 710);
  }
});
window.addEventListener("scroll", function () {
  let header = this.document.querySelector("#mbl-nav");

  let logo = this.document.querySelector("#mbl-logo");

  header.classList.toggle("pinky", window.scrollY > 510);

  if (window.scrollY > 1020) {
    logo.classList.add("logo-color");
    logo.classList.remove("top-logo");
    header.classList.add("nav-bg");
    header.classList.remove("pinky");
  } else {
    logo.classList.add("top-logo");
    logo.classList.remove("logo-color");
    header.classList.remove("nav-bg");
  }
});
window.addEventListener("scroll", function () {
  let header = this.document.querySelector("#mbl-nav");

  let logo = this.document.querySelector("#mbl-logo");

  if (window.scrollY > 1500) {
    logo.classList.remove("logo-color");
    logo.classList.add("top-logo");
    header.classList.remove("nav-bg");
    header.classList.add("pinky");
  } else {
  }
});
window.addEventListener("scroll", function () {
  let header = this.document.querySelector("#nav");
  let about = this.document.querySelector("#main-about");
  let logo = this.document.querySelector("#logo");
  let contact = this.document.querySelector("#contact-nav");
  if (window.scrollY > 2000) {
    header.classList.add("pinky");
    logo.classList.remove("logo-color");
    logo.classList.add("top-logo");
    contact.classList.add("about-color");
    header.classList.remove("nav-bg");
  } else {
    contact.classList.remove("about-color");
  }
});
