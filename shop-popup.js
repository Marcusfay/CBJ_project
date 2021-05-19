export default component((node, ctx) => {
    const shopImages = node.querySelectorAll('.js-shop-image')
    const shopOverlay = node.querySelector('.js-shop-overlay')
    const shopPopup = node.querySelector('.js-shop-popup')
    const shopPopupInner = shopPopup.querySelector('.js-shop-popup-inner')
    const shopPopupVideo = shopPopup.querySelector('.js-shop-popup-video')
    const shopDrawers = node.querySelectorAll('.js-shop-image')
       
    // For all the images on the influencer page, listen for a click on the image
    // Then insert the products from that image onto the slide-in and show the slide-in
    shopImages.forEach(image => {
        image.addEventListener('click', () => {
            const productList = image.querySelector('.js-shop-products').innerHTML
            shopPopupInner.innerHTML = productList
            shopPopup.classList.add('open')
            document.body.classList.add('no-scroll')
            if(shopPopupVideo) {
                shopPopupVideo.play();
            }
        })
    });
    
    // Listen if user clicks outside the slide-in to close the slide-in back in
    shopOverlay.addEventListener('click', () => {
        shopPopup.classList.remove('open')
        document.body.classList.remove('no-scroll')
        if(shopPopupVideo) {
            shopPopupVideo.pause();
        }
    });
});
