jQuery(function(){
    $('.carousel').carousel({
    interval: 1000
    })

    $('body').scrollspy({
        target: '#mainNav'
    });

    $('a.js-scroll-trigger').click(e => {
        e.preventDefault()
        const link = e.target.getAttribute('href').substr(1)
        // console.log(link, typeof link)
        document.querySelector(`section[id=${link}]`)
            .scrollIntoView({ block: 'start', behavior: 'smooth' })
    });

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar")
            var $topbar = $('.top-bar')
            if ($(this).scrollTop() > 0) $topbar.hide()
            else $topbar.show()
            $nav.toggleClass('animated fadeInDown fixed-top', $(this).scrollTop() > $nav.height())
        });
    });

    $('.single_service_part').hover(e => {
        const target = $(e.target).find('hr')
        const $hr = target
        $hr.css('border-top', '2px solid #fff')
    }, e => {
        const target = $(e.target).find('hr')
        const $hr = target
        $hr.css('border-top', '2px solid #fe5c24')        
    })
})