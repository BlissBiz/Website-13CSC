$(document).ready(function() {
  const blackRectangle = $('.black-rectangle');
  const infoContainers = $('.info-container');
  const carousel = $('.carousel');
  const prevButton = $('#prevButton');
  const nextButton = $('#nextButton');
  const dots = $('.dot');

  const threshold = 200;
  let currentIndex = 0;

  // Function to update the carousel
  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.css('transform', `translateX(${offset}%)`);

    // Update active dot
    dots.each((index, dot) => {
      if (index === currentIndex) {
        $(dot).addClass('active');
      } else {
        $(dot).removeClass('active');
      }
    });
  }

  // Function to apply slide-in animation
  function applySlideInAnimation() {
    infoContainers.css('transform', 'translateX(0)');
  }

  // Scroll event
  $(window).on('scroll', () => {
    // Get the scroll position
    const scrollPosition = $(window).scrollTop();

    if (scrollPosition > threshold) {
      applySlideInAnimation();
    }
  });

  // Previous button click event
  prevButton.on('click', () => {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length;
    updateCarousel();
  });

  // Next button click event
  nextButton.on('click', () => {
    currentIndex = (currentIndex + 1) % dots.length;
    updateCarousel();
  });

  // Dot click events
  dots.each((index, dot) => {
    $(dot).on('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });
});
