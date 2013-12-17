    // single keys
    Mousetrap.bind('4', function() { console.log('4'); });
    Mousetrap.bind("?", function() { console.log('show shortcuts!'); });
    Mousetrap.bind('esc', function() { console.log('escape'); }, 'keyup');


    Mousetrap.bind('a',  function() {playMusic('a'); keyboardAnimate('c65') });
    Mousetrap.bind('b',  function() {playMusic('b'); });

    // Mousetrap.bind('b',  playMusic('b'));
    // Mousetrap.bind('c',  playMusic('c'));
    // Mousetrap.bind('d',  playMusic('d'));
    // Mousetrap.bind('e',  playMusic('e'));
    // Mousetrap.bind('f',  playMusic('f'));
    // Mousetrap.bind('g',  playMusic('g'));
    // Mousetrap.bind('h',  playMusic('h'));
    // Mousetrap.bind('i',  playMusic('i'));
    // Mousetrap.bind('j',  playMusic('j'));
    // Mousetrap.bind('k',  playMusic('k'));
    // Mousetrap.bind('l',  playMusic('l'));





function playMusic(key) {
    console.log(key);
    console.log('in play music');
}

function keyboardAnimate(keyClass) {
    //keyClass.keyUp();
    // var elements = document.getElementsByClassName(keyClass);
    // console.log(elements);
    // elements[0].keyup();
    $('.c65').keydown();
    $('.c65').click();
    $('.c65').addClass('keydown');
    console.log('in animate');
}









    // combinations
    //Mousetrap.bind('command+shift+K', function() { console.log('command shift k'); });

    // map multiple combinations to the same callback
    // Mousetrap.bind(['command+k', 'ctrl+k'], function() {
    //     console.log('command k or control k');

    //     // return false to prevent default browser behavior
    //     // and stop event from bubbling
    //     return false;
    // });

    // gmail style sequences
    //Mousetrap.bind('g i', function() { console.log('go to inbox'); });
    //Mousetrap.bind('* a', function() { console.log('select all'); });

    // konami code!
    //Mousetrap.bind('up up down down left right left right b a enter', function() {
    //    console.log('konami code');
    //});