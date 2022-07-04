function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

(async () => {
    $(document).ready(async () => {
        if ($(window).width() < 576)
            $('.sidebar .toggler').click();

        let logo = $('a.logo');
        let logoImg = $('img.logo');
        let lottie = $('lottie-player');
        let gciSpan = $('a.logo>span');
        let main = $('main');
        await sleep(2000);
        lottie.trigger('play');
        await sleep(2000);
        gciSpan.css('opacity', 0);
        logoImg.css('opacity', 1);
        await sleep(2000);
        lottie.css('display', 'none');
        gciSpan.css('display', 'none');
        logo.css({
            top: '40px',
            left: '20px',
            width: '50px',
            height: '50px',
            transform: ' translate(0,-50%)',
        })
        await sleep(1000);
        $('.navbar').css({ width: '100%', paddingLeft: '80px' });
        logo.css("background", "transparent");
        await sleep(1000);
        main.css('opacity', 1);
        if ($(window).width() >= 576) {
            await sleep(3000);
            $('.sidebar .toggler').click();
        }
    })
})();

let queryParams = (() => {
    let tempObj = {};
    for ([key, value] of new URLSearchParams(window.location.search)) {
        tempObj[key] = value;
    }
    return tempObj;
})();
if (queryParams.allowspecialaccess == '987654321') {
    $('.chatbot').show();
    console.log("Granted");
} else {
    $('.chatbot').remove();
}

function showChatbot() {
    $('body').append(`<iframe allowfullscreen="true" id="ltk-frame" src="https://chat.leadstaker.com.br/" frameborder="0" style="position:fixed; bottom:0; right:0; display:block; max-width: 100vw; max-height: 100vh ; z-index: 99999999999;"></iframe><script>const flowId = "62b3ce0c5d193a0147d44ac5"; const ltkDemo = true;</script>
    <script src="https://chat.leadstaker.com.br/import/ltk-script.js"></script>`)
    console.clear();
    setInterval(() => {
        $("#ltk-frame").contents().find(".termsAgree a").css({ pointerEvents: "none" })
        console.clear();
    }, 3000)
}