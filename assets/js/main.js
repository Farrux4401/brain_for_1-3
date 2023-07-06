// swiper
var gallery = new Swiper(".gallery-one-swiper .swiper", {});



// light gallery
$('.the_life_of_our_pizzerias_gallery').magnificPopup({
    delegate: 'a', 
    verticalFit: true,
    type: 'image',
    midClick: true,
    gallery: {
        enabled: true
    },
});