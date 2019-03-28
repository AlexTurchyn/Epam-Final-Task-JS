"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAdvBoard = setAdvBoard;

var _index = require("./AdvArray/index");

var _advertisement = require("./advertisement");

function setAdvBoard(idArray, boardID) {
  var board = document.getElementById(boardID);

  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fn, scope) {
      for (var i = 0, len = this.length; i < len; ++i) {
        fn.call(scope, this[i], i, this);
      }
    };
  }

  var _loop = function _loop(i) {
    _index.advertisementArray.forEach(function (item) {
      if (item.id == idArray[i]) {
        var adv = (0, _advertisement.setAdv)(item);
        board.appendChild(adv);
      }
    });
  };

  for (var i = 0; i < idArray.length; i++) {
    _loop(i);
  }
}