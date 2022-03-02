"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccessibilityAutoPlayToggle = AccessibilityAutoPlayToggle;
exports.AccessibilityInstructions = AccessibilityInstructions;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function AccessibilityInstructions(_ref) {
  var instructions = _ref.instructions;
  return /*#__PURE__*/ _react["default"].createElement(
    "p",
    {
      className: "slick-instructions slick-sr-only"
    },
    instructions
  );
}

function AccessibilityAutoPlayToggle(_ref2) {
  var isAutoPlaying = _ref2.isAutoPlaying,
    onToggle = _ref2.onToggle;
  return /*#__PURE__*/ _react["default"].createElement(
    "button",
    {
      type: "button",
      className: "slick-autoplay-toggle-button",
      onClick: onToggle
    },
    isAutoPlaying
      ? /*#__PURE__*/ _react["default"].createElement("span", {
          className: "slick-pause-icon",
          "aria-hidden": "true"
        })
      : /*#__PURE__*/ _react["default"].createElement("span", {
          className: "slick-play-icon",
          "aria-hidden": "true"
        }),
    isAutoPlaying
      ? /*#__PURE__*/ _react["default"].createElement(
          "span",
          {
            className: "slick-pause-text slick-sr-only"
          },
          "Pause"
        )
      : /*#__PURE__*/ _react["default"].createElement(
          "span",
          {
            className: "slick-play-text slick-sr-only"
          },
          "Play"
        )
  );
}
