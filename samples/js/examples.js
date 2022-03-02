(function($) {

    // Sort example
	let asc = $(".js-example-sort-asc"),
        dsc = $(".js-example-sort-dsc");
    function sortAsc(e) {
        e.preventDefault();
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(dsc).css({
            'background' : 'white',
        });
        $(".js-example-sort-target").removeClass('flex-column-reverse').addClass('flex-column');
        $(".js-example-sort-target + p").hide();
        $(".js-example-sort-target + p").text('flex-column').delay(200).fadeIn();
    }
    function sortDsc(e) {
        e.preventDefault();
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(asc).css({
            'background' : 'white',
        });
        $(".js-example-sort-target").removeClass('flex-column').addClass('flex-column-reverse');
        $(".js-example-sort-target + p").hide();
        $(".js-example-sort-target + p").text('flex-column-reverse').delay(200).fadeIn();
    }
    $(asc).on('click', sortAsc);
    $(dsc).on('click', sortDsc);

    // Justify content example
    let jcA = $(".js-example-jc-a"),
        jcB = $(".js-example-jc-b"),
        jcC = $(".js-example-jc-c"),
        jcD = $(".js-example-jc-d"),
        jcE = $(".js-example-jc-e"),
        jcF = $(".js-example-jc-f"),
        jcTarget = $(".js-example-jc-target"),
        jcName = $(".js-example-jc-target + p");
    function jcTargetA(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(jcTarget).removeClass('justify-content-end justify-content-center justify-content-space-between justify-content-space-around justify-content-space-evenly');
        $(jcTarget).addClass('justify-content-start');
        $(jcName).hide();
        $(jcName).text('justify-content-start').delay(200).fadeIn();
    }
    function jcTargetB(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(jcTarget).removeClass('justify-content-start justify-content-center justify-content-space-between justify-content-space-around justify-content-space-evenly');
        $(jcTarget).addClass('justify-content-end');
        $(jcName).hide();
        $(jcName).text('justify-content-end').delay(200).fadeIn();
    }
    function jcTargetC(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(jcTarget).removeClass('justify-content-start justify-content-end justify-content-space-between justify-content-space-around justify-content-space-evenly');
        $(jcTarget).addClass('justify-content-center');
        $(jcName).hide();
        $(jcName).text('justify-content-center').delay(200).fadeIn();
    }
    function jcTargetD(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(jcTarget).removeClass('justify-content-start justify-content-end justify-content-center justify-content-space-around justify-content-space-evenly');
        $(jcTarget).addClass('justify-content-space-between');
        $(jcName).hide();
        $(jcName).text('justify-content-space-between').delay(200).fadeIn();
    }
    function jcTargetE(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(jcTarget).removeClass('justify-content-start justify-content-end justify-content-center justify-content-space-between justify-content-space-evenly');
        $(jcTarget).addClass('justify-content-space-around');
        $(jcName).hide();
        $(jcName).text('justify-content-space-around').delay(200).fadeIn();
    }
    function jcTargetF(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(jcTarget).removeClass('justify-content-start justify-content-end justify-content-center justify-content-space-between justify-content-space-around');
        $(jcTarget).addClass('justify-content-space-evenly');
        $(jcName).hide();
        $(jcName).text('justify-content-space-evenly').delay(200).fadeIn();
    }
    $(jcA).on('click', jcTargetA);
    $(jcB).on('click', jcTargetB);
    $(jcC).on('click', jcTargetC);
    $(jcD).on('click', jcTargetD);
    $(jcE).on('click', jcTargetE);
    $(jcF).on('click', jcTargetF);

    // Align items example
    let aiA = $(".js-example-ai-a"),
        aiB = $(".js-example-ai-b"),
        aiC = $(".js-example-ai-c"),
        aiD = $(".js-example-ai-d"),
        aiE = $(".js-example-ai-e"),
        aiTarget = $(".js-example-ai-target"),
        aiName = $(".js-example-ai-target + p");
    function aiTargetA(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(aiTarget).removeClass('align-items-end align-items-center align-items-baseline align-items-stretch');
        $(aiTarget).addClass('align-items-start');
        $(aiName).hide();
        $(aiName).text('align-items-start').delay(200).fadeIn();
    }
    function aiTargetB(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(aiTarget).removeClass('align-items-start align-items-center align-items-baseline align-items-stretch');
        $(aiTarget).addClass('align-items-end');
        $(aiName).hide();
        $(aiName).text('align-items-end').delay(200).fadeIn();
    }
    function aiTargetC(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(aiTarget).removeClass('align-items-start align-items-end align-items-baseline align-items-stretch');
        $(aiTarget).addClass('align-items-center');
        $(aiName).hide();
        $(aiName).text('align-items-center').delay(200).fadeIn();
    }
    function aiTargetD(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(aiTarget).removeClass('align-items-start align-items-end align-items-center align-items-stretch');
        $(aiTarget).addClass('align-items-baseline');
        $(aiName).hide();
        $(aiName).text('align-items-baseline').delay(200).fadeIn();
    }
    function aiTargetE(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(aiTarget).removeClass('align-items-start align-items-end align-items-center align-items-baseline');
        $(aiTarget).addClass('align-items-stretch');
        $(aiName).hide();
        $(aiName).text('align-items-stretch').delay(200).fadeIn();
    }
    $(aiA).on('click', aiTargetA);
    $(aiB).on('click', aiTargetB);
    $(aiC).on('click', aiTargetC);
    $(aiD).on('click', aiTargetD);
    $(aiE).on('click', aiTargetE);

    // Align self example
    let asA = $(".js-example-as-a"),
        asB = $(".js-example-as-b"),
        asC = $(".js-example-as-c"),
        asD = $(".js-example-as-d"),
        asE = $(".js-example-as-e"),
        asTarget = $(".js-example-as-target div"),
        asName = $(".js-example-as-target + p");
    function asTargetA(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(asTarget).removeClass('align-self-end align-self-center align-self-baseline align-self-stretch');
        $(asTarget).addClass('align-self-start');
        $(asName).hide();
        $(asName).text('align-self-start').delay(200).fadeIn();
    }
    function asTargetB(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(asTarget).removeClass('align-self-start align-self-center align-self-baseline align-self-stretch');
        $(asTarget).addClass('align-self-end');
        $(asName).hide();
        $(asName).text('align-self-end').delay(200).fadeIn();
    }
    function asTargetC(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(asTarget).removeClass('align-self-start align-self-end align-self-baseline align-self-stretch');
        $(asTarget).addClass('align-self-center');
        $(asName).hide();
        $(asName).text('align-self-center').delay(200).fadeIn();
    }
    function asTargetD(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(asTarget).removeClass('align-self-start align-self-end align-self-center align-self-stretch');
        $(asTarget).addClass('align-self-baseline');
        $(asName).hide();
        $(asName).text('align-self-baseline').delay(200).fadeIn();
    }
    function asTargetE(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(asTarget).removeClass('align-self-start align-self-end align-self-center align-self-baseline');
        $(asTarget).addClass('align-self-stretch');
        $(asName).hide();
        $(asName).text('align-self-stretch').delay(200).fadeIn();
    }
    $(asA).on('click', asTargetA);
    $(asB).on('click', asTargetB);
    $(asC).on('click', asTargetC);
    $(asD).on('click', asTargetD);
    $(asE).on('click', asTargetE);

    // Align content example
    let acA = $(".js-example-ac-a"),
        acB = $(".js-example-ac-b"),
        acC = $(".js-example-ac-c"),
        acD = $(".js-example-ac-d"),
        acE = $(".js-example-ac-e"),
        acF = $(".js-example-ac-f"),
        acG = $(".js-example-ac-g"),
        acTarget = $(".js-example-ac-target"),
        acName = $(".js-example-ac-target + p");
    function acTargetA(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(acTarget).removeClass('align-content-end align-content-center align-content-space-between align-content-space-around align-content-space-evenly align-content-stretch');
        $(acTarget).addClass('align-content-start');
        $(acName).hide();
        $(acName).text('align-content-start').delay(200).fadeIn();
    }
    function acTargetB(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(acTarget).removeClass('align-content-start align-content-center align-content-space-between align-content-space-around align-content-space-evenly align-content-stretch');
        $(acTarget).addClass('align-content-end');
        $(acName).hide();
        $(acName).text('align-content-end').delay(200).fadeIn();
    }
    function acTargetC(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(acTarget).removeClass('align-content-start align-content-end align-content-space-between align-content-space-around align-content-space-evenly align-content-stretch');
        $(acTarget).addClass('align-content-center');
        $(acName).hide();
        $(acName).text('align-content-center').delay(200).fadeIn();
    }
    function acTargetD(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(acTarget).removeClass('align-content-start align-content-end align-content-center align-content-space-around align-content-space-evenly align-content-stretch');
        $(acTarget).addClass('align-content-space-between');
        $(acName).hide();
        $(acName).text('align-content-space-between').delay(200).fadeIn();
    }
    function acTargetE(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(acTarget).removeClass('align-content-start align-content-end align-content-center align-content-space-between align-content-space-evenly align-content-stretch');
        $(acTarget).addClass('align-content-space-around');
        $(acName).hide();
        $(acName).text('align-content-space-around').delay(200).fadeIn();
    }
    function acTargetF(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(acTarget).removeClass('align-content-start align-content-end align-content-center align-content-space-between align-content-space-around align-content-stretch');
        $(acTarget).addClass('align-content-space-evenly');
        $(acName).hide();
        $(acName).text('align-content-space-evenly').delay(200).fadeIn();
    }
    function acTargetG(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(acTarget).removeClass('align-content-start align-content-end align-content-center align-content-space-between align-content-space-around align-content-evenly');
        $(acTarget).addClass('align-content-stretch');
        $(acName).hide();
        $(acName).text('align-content-stretch').delay(200).fadeIn();
    }
    $(acA).on('click', acTargetA);
    $(acB).on('click', acTargetB);
    $(acC).on('click', acTargetC);
    $(acD).on('click', acTargetD);
    $(acE).on('click', acTargetE);
    $(acF).on('click', acTargetF);
    $(acG).on('click', acTargetG);

    // Flex order example
    let foA = $(".js-example-fo-a"),
        foB = $(".js-example-fo-b"),
        foC = $(".js-example-fo-c"),
        foTarget = $(".js-example-fo-target"),
        foName = $(".js-example-fo-target + p");
    function foTargetA(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(foTarget).removeClass('reverse flipflop');
        $(foTarget).addClass('default');
        $(foName).hide();
        $(foName).text('default').delay(200).fadeIn();
    }
    function foTargetB(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(foTarget).removeClass('default flipflop');
        $(foTarget).addClass('reverse');
        $(foName).hide();
        $(foName).text('reverse').delay(200).fadeIn();
    }
    function foTargetC(e) {
        e.preventDefault();
        $(this).parent().find('a').css({
            'background' : 'white',
        });
        $(this).css({
            'background' : 'whitesmoke',
        });
        $(foTarget).removeClass('default reverse');
        $(foTarget).addClass('flipflop');
        $(foName).hide();
        $(foName).text('flipflop').delay(200).fadeIn();
    }
    $(foA).on('click', foTargetA);
    $(foB).on('click', foTargetB);
    $(foC).on('click', foTargetC);

    // Shake animation
    function boxShake(e) {
        e.preventDefault();
        $(".box-shake").addClass('shake');
        setTimeout(function() {
            $(".box-shake").removeClass('shake');
        }, 500);
    }
    $(".run-animation-box-shake").on('click', boxShake);	

    // Bounce animation
    function boxBounce(e) {
        e.preventDefault();
        $(".box-bounce").addClass('bounce');
        setTimeout(function() {
            $(".box-bounce").removeClass('bounce');
        }, 500);
    }
    $(".run-animation-box-bounce").on('click', boxBounce);

    // Fade animations
    let fades = [ '50', '100', '200', '300' ];
    $(".box-fadein").each(function(i, elem) {
        let theBoxFade = $(elem).addClass('box-fadein-' + fades[i]);
        let theEvent = $(elem).parents(".box-fadein-container").find('.run-animation-box-fadein').addClass('run-fadein-' + fades[i]);
        function runFade(e) {
            e.preventDefault();
            let newTarget = $(e.target).parents(".box-fadein-container").find(theBoxFade);
            $(newTarget).addClass('fade-in-' + fades[i]);
            setTimeout(function() {
                $(newTarget).removeClass('fade-in-' + fades[i]);
            }, 1500);
        }
        $(theEvent).on('click', runFade);
    });

    // Delay animations
    let delays = [ '10', '20', '40', '60', '80', '100' ];
    $(".box-delay").each(function(i, elem) {
        let theBoxDelay = $(elem).addClass('box-delay-' + delays[i]);
        let theEvent = $(elem).parents(".box-delay-container").find('.run-animation-box-delay').addClass('run-delay-' + delays[i]);
        function runDelay(e) {
            e.preventDefault();
            let newTarget = $(e.target).parents(".box-delay-container").find(theBoxDelay);
            $(newTarget).addClass('fade-in-100 delay-' + delays[i]);
            setTimeout(function() {
                $(newTarget).removeClass('fade-in-100 delay-' + delays[i]);
            }, 1500);
        }
        $(theEvent).on('click', runDelay);
    });

    // Easing how it works
    function boxSingle(e) {
        e.preventDefault();
        let el = $(e.target).parents(".easing-example-container").find(".box-single");
        if ($(el).hasClass('animate')) {
            $(el).removeClass('animate');
        } else {
            $(el).addClass('animate');
        }
    }
    $(".run-animation-single").on('click', boxSingle);

    function boxSingleAlt(e) {
        e.preventDefault();
        let el = $(e.target).parents(".easing-example-container-alt").find(".box-single");
        if ($(el).hasClass('animate')) {
            $(el).removeClass('animate');
        } else {
            $(el).addClass('animate');
        }
    }
    $(".run-animation-single-alt").on('click', boxSingleAlt);

    // Easing examples
    $(".animation-example").each( function() {
        $(this).find(".item-dot").addClass( $(this).find("span").text() );
    });

    function easeAnimation(e) {
        e.preventDefault();
        let el = $(e.target).parents(".animation-example").find(".item-dot");
        if ($(el).hasClass('left')) {
            $(el).removeClass('left');
        } else {
            $(el).addClass('left');
        }
    }
    $(".run-animation").on('click', easeAnimation);

    // Slide menu out
    function slideMenu(e) {
        e.preventDefault();
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(".menu-target").removeClass('open');
        } else {
            $(this).addClass('open');
            $(".menu-target").addClass('open');
        }
    }
    $(".menu-trigger").on('click', slideMenu);

    // Animate to each section
    function goToSection() {
        $("html, body").animate({
            scrollTop: $( $(this).attr("href") ).offset().top - 105
        }, 300);
        $(".menu-trigger").removeClass('open');
        $(".menu-target").removeClass('open');
    }
    $(".menu-target a").on('click', goToSection);

    // Back to top
    // This is plain JavaScript
    // John says it's the best
    const el = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        const scrolled = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if ( scrolled > 900 ) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });

    function scrollToTop(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    el.addEventListener('click', scrollToTop);

    // Year
    document.querySelector('.year').innerHTML = new Date().getFullYear();

})(jQuery);