var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }, autoplay: {
        delay: 3000, // 设置轮播切换时间为3秒
    },
});