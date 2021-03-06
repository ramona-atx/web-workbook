'use strict';

$(document).ready(function () {
  var $block = null;
  let $blocksize = 200;

  let numofdiscs = 4;
  let move = 1;
  let minmoves = 2 ** numofdiscs - 1;


  $('[data-stack]').click(function () {
    // If you do not have a disc, pick up a disc
    if (!$block) {
      $blocksize = $(this).children().last().attr('data-block');
      $block = $(this).children().last().detach();

      // If you do have a disc, place it
    } else {
      // test block stacking levels
      let $baseblock = $(this).children().last().attr('data-block');
      // if the stack is blank or the botom disc is larger
      if (!($baseblock) || ($baseblock - $blocksize > 0)) {
        $(this).append($block);
        $block = null;


        //check for win
        if (move >= minmoves) {
          let check = $(this).children().length;
          console.log(`on ${move} of ${minmoves}, ${check} against ${numofdiscs}`);
          if (check === numofdiscs) {
            $('#announce-game-won').text("won");
          }
        }
        move++;
      };
    };
  });

  $('div').last().after(`<p>Enjoy the basic game?  Try <a href="index2.html">Towers of Hanoi 2</a></p>`)
  $('p').css({
    "fontSize": ".85em",
    "display": "flex",
    "justifyContent": "center"
  });
});
