$(document).ready(function(){

    /* gnb */
    const header = $('#header')
    const gnb = header.find('#gnb')
    const gnbLi = gnb.children('li')
    const dep1 = gnbLi.children('.dep1')
    const dep2 = gnbLi.children('.dep2')

    gnbLi.on('mouseenter',function(){
        dep2.stop().slideDown(300)
        header.addClass('on')
    })
    gnbLi.on('mouseleave',function(){
        dep2.stop().slideUp(300)
        header.removeClass('on')
    })
    
    /* swiper slide */
    const swiper = new Swiper('#main_slide', {
        loop: true,

        autoplay: {
            delay: 3500,
        },
    
        pagination: {
        el: '#main_slide .swiper-pagination',
        clickable: true,
        },
    
        navigation: {
        nextEl: '#main_slide .swiper-button-next',
        prevEl: '#main_slide .swiper-button-prev',
        },
    });

    /* tabmenu */
    const tabLink = $('.notice_wrap .tab_menu .tabs a')
    const  tabConList = $('.notice_wrap .tab_con .list')

    tabLink.on('click',function(e){
        e.preventDefault()
        tabConList.hide() 
        let tabConID= $(this).attr('data-tab')
        $(tabConID).show()

        tabLink.removeClass('on')
        $(this).addClass('on')
    })
})