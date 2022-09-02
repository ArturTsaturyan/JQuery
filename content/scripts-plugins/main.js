//Messages carousel
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 28,
    responsiveClass: true,
    navText: ["<div class='messagesAndEventsPrevLinkLine'><div class='messagesAndEventsPrevLink sectionSquareGray animationSeven'><img src='./content/images/articaleCarouselImage/prevLink.svg' alt='PrevLink'></div><div class='messagesAndEventsLine sectionLine animationSevenLine'></div></div>", "<div class='messagesAndEventsNextLinkLine'><div class='messagesAndEventsNextLink sectionSquareGray animationSeven'><img src='./content/images/articaleCarouselImage/nextLink.svg' alt='NextLink'></div><div class='messagesAndEventsLine sectionLine animationSevenLine'></div></div>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })

  $('.owl-carousel-one').owlCarousel({
    loop: true,
    nav: true,
    margin: 28,
    responsiveClass: true,
    navText:["<div class='messagesAndEventsEventsPrevLinkLine'><div class='messagesAndEventsPrevLink sectionSquareGray'><img src='./content/images/articaleCarouselImage/prevLink.svg' alt='PrevLink'></div><div class='messagesAndEventsLine sectionLine'></div></div>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })



  //Smooth scroll effect

  var scrolled = $(window).scrollTop()
  $('.parallax').each(function (index) {
    var imageSrc = $(this).data('image-src')
    var imageHeight = $(this).data('height')
    $(this).css('background-image', 'url(' + imageSrc + ')')
    $(this).css('height', imageHeight)
    var initY = $(this).offset().top
    var height = $(this).height()
    var diff = scrolled - initY
    var ratio = Math.round((diff / height) * 100)
    $(this).css('background-position', 'center ' + parseInt(-(ratio * 1.5)) + 'px')
  })

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop()
    $('.parallax').each(function (index, element) {
      var initY = $(this).offset().top
      var height = $(this).height()
      var endY = initY + $(this).height()

      var visible = isInViewport(this)
      if (visible) {
        var diff = scrolled - initY
        var ratio = Math.round((diff / height) * 100)
        $(this).css('background-position', 'center ' + parseInt(-(ratio * 1.5)) + 'px')
      }
    })
  })

  //Find out more link smooth scroll until the new section

  $("#findOutMore").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top,
      }, 200, function () {


        window.location.hash = hash;
      });
    }
  });

 
})

function isInViewport(node) {
  var rect = node.getBoundingClientRect()
  return (
    (rect.height > 0 || rect.width > 0) &&
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

