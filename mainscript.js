var slideIndex = 0;
var slideshowTimer;

  function openSlideshow(index) {
    slideIndex = index;
    showSlides();
    document.getElementById('imageDiv').style.display = 'none';
    document.getElementById('slideshow').style.display = 'block';
    startSlideshowTimer();
  }

  function showSlides() {
    
    var i;
    var slides = document.getElementsByClassName('mySlides');

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    // Show the current slide
    slides[slideIndex].style.display = 'block';
    slideIndex++;

    // Reset to the first slide if at the end
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
  }

  function startSlideshowTimer() {
    slideshowTimer = setInterval(showSlides, 3000);
  }