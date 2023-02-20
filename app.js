const toggler = document.querySelector('.navbar-toggler-icon');
const navBarNav = document.querySelector('.navbar')

// Smooth scrolling
$("nav a").on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top }, 500);
});


let open = 0
toggler.onclick = function () {
  let setOpen = open
  if (document.body.scrollTop < 120) {
    navBarNav.classList.toggle("background");
  }
  if (open == 0) {
     open = 1
  } else {
    open = 0
  }

  }

document.body.onscroll = function () {

  if (!open) {
    if (document.body.scrollTop > 120) {
      navBarNav.classList.add('background')
    } else {
       navBarNav.classList.remove("background");
    }
  }
 
}

if (document.body.scrollTop > 120) {
    navBarNav.classList.add("background");
  }
