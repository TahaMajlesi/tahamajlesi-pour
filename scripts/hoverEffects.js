$(document).ready(function() {
    $("#HTML").hover(function() {
        const html = new Typed('#HTML-typing', {
            strings: ['{ The backbone of every website, structuring content like a pro! }'],
            typeSpeed: 30,
            showCursor: false,
        });
        $("#HTML-typing").fadeIn(500)
    }, function() {
        $("#HTML-typing").fadeOut(500)
    })

    $("#CSS").hover(function() {
        const css = new Typed('#CSS-typing', {
            strings: ['{ Making the web beautiful with styles, colors, and layouts that pop! }'],
            typeSpeed: 30,
            showCursor: false,
        });
        $("#CSS-typing").fadeIn(500)
    }, function() {
        $("#CSS-typing").fadeOut(500)
    })

    $("#Sass").hover(function() {
        const sass = new Typed('#Sass-typing', {
            strings: ['{ Writing CSS with superpowers! It helps me keep my styles organized and efficient. }'],
            typeSpeed: 30,
            showCursor: false,
        });
        $("#Sass-typing").fadeIn(500)
    }, function() {
        $("#Sass-typing").fadeOut(500)
    })

    $("#Bootstrap").hover(function() {
        const bootstrap = new Typed('#Bootstrap-typing', {
            strings: ['{ Crafting responsive designs quickly with this amazing framework. }'],
            typeSpeed: 30,
            showCursor: false,
        });
        $("#Bootstrap-typing").fadeIn(500)
    }, function() {
        $("#Bootstrap-typing").fadeOut(500)
    })

    $("#Tailwind").hover(function() {
        const tailwind = new Typed('#Tailwind-typing', {
            strings: ['{ Using utility-first CSS to build custom designs without leaving my HTML. It is a game-changer! }'],
            typeSpeed: 30,
            showCursor: false,
        });
        $("#Tailwind-typing").fadeIn(500)
    }, function() {
        $("#Tailwind-typing").fadeOut(500)
    })

    $("#JavaScript").hover(function() {
        const javascript = new Typed('#JavaScript-typing', {
            strings: ['{ Adding interactivity and making websites come alive! From animations to dynamic content, I love it all! }'],
            typeSpeed: 30,
            showCursor: false,
        });
        $("#JavaScript-typing").fadeIn(500)
    }, function() {
        $("#JavaScript-typing").fadeOut(500)
    })

    $("#jQuery").hover(function() {
        const jquery = new Typed('#jQuery-typing', {
            strings: ['{ Simplifying JavaScript tasks and making DOM manipulation a breeze. It is my trusty sidekick! }'],
            typeSpeed: 30,
            showCursor: false,
        });
        $("#jQuery-typing").fadeIn(500)
    }, function() {
        $("#jQuery-typing").fadeOut(500)
    })
})