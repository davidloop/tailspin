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