document.addEventListener('DOMContentLoaded', function() {
  var images = [
    'pexels-bri-schneiter-346529.jpg',
    'pexels-irina-iriser-1379636.jpg',
    'pexels-james-wheeler-1519088.jpg',
    'pexels-quang-nguyen-vinh-2131614.jpg',
    'pexels-rizknas-2835562.jpg'
  ];
  var index = 0;

  // Function to change the background image

  function changeBackgroundImage() {
    document.body.style.backgroundImage = 'url(' + images[index] + ')';
    index = (index + 1) % images.length;
  }

  // Initial call to set the background image
  changeBackgroundImage();

  // Change background image every 2 seconds
  setInterval(changeBackgroundImage, 2000);
});
