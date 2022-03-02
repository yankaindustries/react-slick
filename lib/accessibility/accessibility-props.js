"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var accessibilityProps = {
  arrowsPlacement: null,
  // beforeSlides | afterSlides | split
  useAutoplayToggleButton: true,
  useGroupRole: true,
  instructionsText: null,
  playIcon: /*#__PURE__*/ _react["default"].createElement("span", {
    className: "slick-play-icon",
    "aria-hidden": "true"
  }),
  pauseIcon: /*#__PURE__*/ _react["default"].createElement("span", {
    className: "slick-pause-icon",
    "aria-hidden": "true"
  }),
  nextArrow: /*#__PURE__*/ _react["default"].createElement(
    "button",
    {
      className: "slick-next",
      type: "button"
    },
    /*#__PURE__*/ _react["default"].createElement("span", {
      className: "slick-next-icon",
      "aria-hidden": "true"
    }),
    /*#__PURE__*/ _react["default"].createElement(
      "span",
      {
        className: "slick-sr-only"
      },
      "Next"
    )
  ),
  prevArrow: /*#__PURE__*/ _react["default"].createElement(
    "button",
    {
      className: "slick-prev",
      type: "button"
    },
    /*#__PURE__*/ _react["default"].createElement("span", {
      className: "slick-prev-icon",
      "aria-hidden": "true"
    }),
    /*#__PURE__*/ _react["default"].createElement(
      "span",
      {
        className: "slick-sr-only"
      },
      "Previous"
    )
  ),
  regionLabel: "carousel",
  focusOnSelect: false
};
var _default = accessibilityProps;
exports["default"] = _default;
