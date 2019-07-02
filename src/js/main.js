jQuery(function(){
    $('.carousel').carousel({
    interval: 3000
    })

    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 1000  // 1 second

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

    $('form button.calculate').click( e => {
        e.preventDefault()
        const option = Number($('form input:radio:checked').val())
        const v = Number($('form #input1').val())
        const f = Number($('form #input2').val())
        const q = Number($('form #input3').val())
        const res = $('form #result')
        const total = 0
        // console.log(option, v, f, q, total, typeof option === 'number')
        switch(option) {
            case 1:
                res.val((600 * v / (q * f)).toFixed(2) + ' L')
                break
            case 2:
                res.val((v * f * q / 600).toFixed(2) + ' L/min')
                break
            case 3:
                res.val((Math.pow(f * Math.sqrt(q) / v, 2).toFixed(2) + ' bar'))
                break
        }
    })
})