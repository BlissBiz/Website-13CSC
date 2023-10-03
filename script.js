$(document).ready(function() {
  const carousel = $('.carousel');
  const prevButton = $('#prevButton');
  const nextButton = $('#nextButton');
  const carouselItems = $('.carousel-item');
  const dots = $('.dot');
  let currentIndex = 0;

  prevButton.on('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
  });

  nextButton.on('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
  });

  dots.each((index, dot) => {
    $(dot).on('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });

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
});