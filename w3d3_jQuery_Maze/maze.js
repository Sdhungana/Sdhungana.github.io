"use strict";

$(function () {
  let start = $("#start");
  let end = $("#end");
  let maze = $("#maze");
  let boundary = $(".boundary");
  let gameStart = false;
  maze.mouseleave(function () {
    loss();
  });

  start.click(function () {
    $("#status").text("Move mouse to End in order to win the game");
    gameStart = true;
    if (boundary.hasClass("youlose")) {
      boundary.removeClass("youlose");
    }
    boundary.mousemove(function () {
      loss();
    });
  });

  end.mousemove(function () {
    if (gameStart == true) won();
    else if (gameStart && boundary.hasClass("youlose")) loss();
  });

  function won() {
    gameStart = false;
    $("#status").text("Hurray!!! you won! :)");
  }

  function loss() {
    if (gameStart) {
      gameStart = false;
      boundary.addClass("youlose");
      $("#status").text("Opps!!You lose the game :( Try next time");
    }
  }
});
