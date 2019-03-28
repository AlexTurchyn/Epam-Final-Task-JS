"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numID = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Id =
/*#__PURE__*/
function () {
  function Id() {
    _classCallCheck(this, Id);

    this.id = 0;
  }

  _createClass(Id, [{
    key: "itemID",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }]);

  return Id;
}();

var numID = new Id();
exports.numID = numID;