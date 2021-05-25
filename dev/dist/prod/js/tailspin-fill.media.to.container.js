
// This function looks for either images or videos with a particular class and then fills out the image to its
// relative container to always make sure there are zero gaps with images and their containers at any and all
// resolutions. Can be used for banners, card background images, etc.

// Use the class 'js-fill-media-to-container' on any img or video element to make sure it fills its immediate container

function fillMediaToContainer() {

  // create array of images/videos with class 'js-fill-media-to-container'
  var selectors = [
    '.js-fill-media-to-container',
  ].join();

  var mediaArr = document.querySelectorAll(selectors);

  if (mediaArr.length) {
    mediaArr.forEach((item, i)=> {
      
      var mediaContainer = item.closest("span, div, section, article");

      // get aspect ratio of image or video
      var mediaAspectRatio = item.clientWidth / item.clientHeight; // get item's height including padding

      // get aspect ratio of its container
      var mediaContainerAspectRatio = mediaContainer.clientWidth / mediaContainer.clientHeight;

      setTimeout(function() {
        item.classList.add("fade-in");
      }, 300);

      // if container is smaller than media, fill image horizontally. Else stretch vertically.
      if (mediaContainerAspectRatio < mediaAspectRatio) {
        item.classList.remove("fill-horizontally");
        item.classList.add('fill-vertically');
      } else {
        item.classList.remove("fill-vertically");
        item.classList.add("fill-horizontally");
      }
    });
  }
}

window.addEventListener('load', fillMediaToContainer);
window.addEventListener('resize', fillMediaToContainer);
