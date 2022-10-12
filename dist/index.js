/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/edit.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/edit.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pencil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pencil */ "./node_modules/@wordpress/icons/build-module/library/pencil.js");
/**
 * Internal dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = (_pencil__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=edit.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/pencil.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/pencil.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const pencil = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pencil);
//# sourceMappingURL=pencil.js.map

/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _typoConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typoConstants */ "./src/typoConstants.js");


const {
  generateDimensionsAttributes,
  generateTypographyAttributes,
  generateBackgroundAttributes,
  generateBorderShadowAttributes,
  generateResponsiveRangeAttributes
} = window.EBOpenverseControls;
const attributes = {
  resOption: {
    type: "string",
    default: "Desktop"
  },
  // blockId attribute for making unique className and other uniqueness
  blockId: {
    type: "string"
  },
  blockRoot: {
    type: "string",
    default: "essential_block"
  },
  blockMeta: {
    type: "object"
  },
  apiKey: {
    type: "string"
  },
  apiInfo: {
    type: "object",
    default: {
      email: "",
      name: ""
    }
  },
  imageurl: {
    type: "string"
  },
  imageAttr: {
    type: "object",
    default: {
      title: "",
      foreignUrl: "",
      creator: "",
      creatorUrl: "",
      license: "",
      licenseUrl: "",
      licenseVersion: ""
    }
  },
  selectedImgIndex: {
    type: "number"
  },
  displayAttribution: {
    type: "boolean",
    default: true
  },
  attributionColor: {
    type: "string",
    default: "#211C70"
  },
  attributionBGColor: {
    type: "string",
    default: ""
  },
  horizontalAlign: {
    type: "string",
    default: "center"
  },
  verticalAlign: {
    type: "string",
    default: "bottom"
  },
  imageAlign: {
    type: "string",
    default: "0 auto"
  },
  textAlign: {
    type: "string",
    default: "left"
  },
  hoverEffect: {
    type: "string",
    default: "no-effect"
  },
  stylePreset: {
    type: "string",
    default: "rounded"
  },
  complexStyle: {
    type: "boolean",
    default: false
  },
  attributionStyle: {
    type: "string",
    default: "attribution-style-1"
  },
  autoFit: {
    type: "boolean",
    default: true
  },
  enableLink: {
    type: "boolean",
    default: false
  },
  imageLink: {
    type: "string",
    default: ""
  },
  openInNewTab: {
    type: "boolean",
    default: false
  },
  // typography attributes ⬇
  ...generateTypographyAttributes(Object.values(_typoConstants__WEBPACK_IMPORTED_MODULE_1__)),
  // margin padding attributes ⬇
  ...generateDimensionsAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.WRAPPER_MARGIN),
  ...generateDimensionsAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.WRAPPER_PADDING),
  ...generateDimensionsAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTION_MARGIN, {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    isLinked: false
  }),
  ...generateDimensionsAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTION_PADDING, {
    top: 15,
    bottom: 15,
    right: 30,
    left: 30,
    isLinked: false
  }),
  // border shadow attributes ⬇
  ...generateBorderShadowAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.WRAPPER_BORDER_SHADOW, {
    bdrDefaults: {
      top: 1,
      bottom: 1,
      right: 1,
      left: 1
    },
    defaultBdrColor: "#C1CDE1",
    defaultBdrStyle: "solid",
    rdsDefaults: {
      top: 15,
      bottom: 15,
      right: 15,
      left: 15
    }
    // noShadow: true,
    // noBorder: true,
  }),

  ...generateBorderShadowAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_BORDER_SHADOW, {
    defaultBdrColor: "#AE62D1",
    bdrDefaults: {
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    rdsDefaults: {
      top: 15,
      bottom: 15,
      right: 15,
      left: 15
    }
    // noShadow: true,
    // noBorder: true,
  }),

  // background attributes ⬇
  ...generateBackgroundAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.WRAPPER_BG, {
    defaultBgGradient: "linear-gradient(45deg,#ffffff,#ffffff)",
    noOverlay: true
  }),
  // range controller Separator Line Grid Column
  ...generateResponsiveRangeAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_WIDTH, {
    // defaultRange: 300,
  }),
  // range controller Separator Image Gap
  ...generateResponsiveRangeAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_HEIGHT, {
    // defaultRange: 300,
  }),
  // range controller Separator Caption Width
  ...generateResponsiveRangeAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTION_WIDTH)
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ATTRIBUTION_MARGIN": function() { return /* binding */ ATTRIBUTION_MARGIN; },
/* harmony export */   "ATTRIBUTION_PADDING": function() { return /* binding */ ATTRIBUTION_PADDING; },
/* harmony export */   "ATTRIBUTION_STYLES": function() { return /* binding */ ATTRIBUTION_STYLES; },
/* harmony export */   "ATTRIBUTION_TYPOGRAPHY": function() { return /* binding */ ATTRIBUTION_TYPOGRAPHY; },
/* harmony export */   "ATTRIBUTION_WIDTH": function() { return /* binding */ ATTRIBUTION_WIDTH; },
/* harmony export */   "FILTER_ASPECT_RATIO": function() { return /* binding */ FILTER_ASPECT_RATIO; },
/* harmony export */   "FILTER_CATEGORY": function() { return /* binding */ FILTER_CATEGORY; },
/* harmony export */   "FILTER_EXTENSION": function() { return /* binding */ FILTER_EXTENSION; },
/* harmony export */   "FILTER_LICENSES": function() { return /* binding */ FILTER_LICENSES; },
/* harmony export */   "FILTER_LICENSE_TYPE": function() { return /* binding */ FILTER_LICENSE_TYPE; },
/* harmony export */   "FILTER_SIZE": function() { return /* binding */ FILTER_SIZE; },
/* harmony export */   "HORIZONTAL_ALIGN": function() { return /* binding */ HORIZONTAL_ALIGN; },
/* harmony export */   "HOVER_EFFECT": function() { return /* binding */ HOVER_EFFECT; },
/* harmony export */   "IMAGE_BORDER_SHADOW": function() { return /* binding */ IMAGE_BORDER_SHADOW; },
/* harmony export */   "IMAGE_HEIGHT": function() { return /* binding */ IMAGE_HEIGHT; },
/* harmony export */   "IMAGE_WIDTH": function() { return /* binding */ IMAGE_WIDTH; },
/* harmony export */   "SIZE_UNIT_TYPES": function() { return /* binding */ SIZE_UNIT_TYPES; },
/* harmony export */   "STYLES": function() { return /* binding */ STYLES; },
/* harmony export */   "TEXT_ALIGN": function() { return /* binding */ TEXT_ALIGN; },
/* harmony export */   "UNIT_TYPES": function() { return /* binding */ UNIT_TYPES; },
/* harmony export */   "VERTICAL_ALIGN": function() { return /* binding */ VERTICAL_ALIGN; },
/* harmony export */   "VERTICAL_ALIGN_CAP_2": function() { return /* binding */ VERTICAL_ALIGN_CAP_2; },
/* harmony export */   "WRAPPER_BG": function() { return /* binding */ WRAPPER_BG; },
/* harmony export */   "WRAPPER_BORDER_SHADOW": function() { return /* binding */ WRAPPER_BORDER_SHADOW; },
/* harmony export */   "WRAPPER_MARGIN": function() { return /* binding */ WRAPPER_MARGIN; },
/* harmony export */   "WRAPPER_PADDING": function() { return /* binding */ WRAPPER_PADDING; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


// the consts defined here should be unique from one another
const WRAPPER_BG = "wrprBg";
const WRAPPER_MARGIN = "wrpMargin";
const WRAPPER_PADDING = "wrpPadding";
const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
const IMAGE_WIDTH = "width";
const IMAGE_HEIGHT = "height";
const IMAGE_BORDER_SHADOW = "imgBorderShadow";
const ATTRIBUTION_MARGIN = "captionMargin";
const ATTRIBUTION_PADDING = "captionPadding";
const ATTRIBUTION_TYPOGRAPHY = "captionTypo";
const ATTRIBUTION_WIDTH = "captionWidth";
const VERTICAL_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "eb-open-verse-block"),
  value: "top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Middle", "eb-open-verse-block"),
  value: "middle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "eb-open-verse-block"),
  value: "bottom"
}];
const VERTICAL_ALIGN_CAP_2 = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "eb-open-verse-block"),
  value: "top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "eb-open-verse-block"),
  value: "bottom"
}];
const HORIZONTAL_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "eb-open-verse-block"),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "eb-open-verse-block"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "eb-open-verse-block"),
  value: "right"
}];
const TEXT_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "eb-open-verse-block"),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "eb-open-verse-block"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "eb-open-verse-block"),
  value: "right"
}];
const HOVER_EFFECT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No Effect", "eb-open-verse-block"),
  value: "no-effect"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom In", "eb-open-verse-block"),
  value: "zoom-in"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom Out", "eb-open-verse-block"),
  value: "zoom-out"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide", "eb-open-verse-block"),
  value: "slide"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Blur", "eb-open-verse-block"),
  value: "blur"
}];
const UNIT_TYPES = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}];
const SIZE_UNIT_TYPES = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
const STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rounded", "eb-open-verse-block"),
  value: "rounded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Square", "eb-open-verse-block"),
  value: "square"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Circle", "eb-open-verse-block"),
  value: "circle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Octagon", "eb-open-verse-block"),
  value: "octagon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rhombus", "eb-open-verse-block"),
  value: "rhombus"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Triangle", "eb-open-verse-block"),
  value: "triangle"
}];
const ATTRIBUTION_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Style 1", "eb-open-verse-block"),
  value: "attribution-style-1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Style 2", "eb-open-verse-block"),
  value: "attribution-style-2"
}];
const FILTER_LICENSES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Public Domain Mark", "eb-open-verse-block"),
  value: "pdm"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("CC0", "eb-open-verse-block"),
  value: "cc0"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("CC BY", "eb-open-verse-block"),
  value: "by"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("CC BY-SA", "eb-open-verse-block"),
  value: "by-sa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("CC BY-ND", "eb-open-verse-block"),
  value: "by-nd"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("CC BY-NC", "eb-open-verse-block"),
  value: "by-nc"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("CC BY-NC-SA", "eb-open-verse-block"),
  value: "by-nc-sa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("CC BY-NC-ND", "eb-open-verse-block"),
  value: "by-nc-nd"
}];
const FILTER_LICENSE_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Use commercially", "eb-open-verse-block"),
  value: "commercial"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Modify or adapt", "eb-open-verse-block"),
  value: "modification"
}];
const FILTER_CATEGORY = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Photographs", "eb-open-verse-block"),
  value: "photograph"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Illustrations", "eb-open-verse-block"),
  value: "illustration"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Digitized Artworks", "eb-open-verse-block"),
  value: "digitized_artwork"
}];
const FILTER_SIZE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Small", "eb-open-verse-block"),
  value: "small"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Medium", "eb-open-verse-block"),
  value: "medium"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large", "eb-open-verse-block"),
  value: "large"
}];
const FILTER_EXTENSION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("JPEG", "eb-open-verse-block"),
  value: "jpg"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("SVG", "eb-open-verse-block"),
  value: "svg"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PNG", "eb-open-verse-block"),
  value: "png"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("GIF", "eb-open-verse-block"),
  value: "gif"
}];
const FILTER_ASPECT_RATIO = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tall", "eb-open-verse-block"),
  value: "tall"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wide", "eb-open-verse-block"),
  value: "wide"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Square", "eb-open-verse-block"),
  value: "square"
}];

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/edit.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./src/style.js");
/* harmony import */ var _template_components_searchModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./template-components/searchModal */ "./src/template-components/searchModal.js");
/* harmony import */ var _template_components_displayImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template-components/displayImage */ "./src/template-components/displayImage.js");
/* harmony import */ var _template_components_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./template-components/search */ "./src/template-components/search.js");
/* harmony import */ var _template_components_icons_openverseMainIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./template-components/icons/openverseMainIcon */ "./src/template-components/icons/openverseMainIcon.js");
/* harmony import */ var _template_components_apiInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./template-components/apiInfo */ "./src/template-components/apiInfo.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);

/**
 * WordPress dependencies
 */







/**
 * Internal depencencies
 */



const {
  duplicateBlockIdFix
} = window.EBOpenverseControls;






function Edit(props) {
  const {
    attributes,
    setAttributes,
    className,
    clientId,
    isSelected
  } = props;
  const {
    resOption,
    blockId,
    blockMeta,
    horizontalAlign,
    verticalAlign,
    stylePreset,
    attributionStyle,
    hoverEffect,
    imageAlign,
    classHook,
    imageurl,
    apiInfo
  } = attributes;
  const [loadingApi, setLoadingApi] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [openverseRegError, setOpenverseRegError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    status: false
  });
  const [showForm, setShowForm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [openverseData, setOpenverseData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [openverseImage, setOpenverseImage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [openverseError, setOpenverseError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    status: false,
    type: ""
  });
  const [openverseModal, setOpenverseModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [pagination, setPagination] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [totalPages, setTotalPages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(1);

  // search
  const [q, setQ] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [filterData, setFilterData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    licenseType: [],
    licenses: [],
    category: [],
    extension: [],
    aspectRatio: [],
    size: []
  });

  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const BLOCK_PREFIX = "eb-openverse";
    duplicateBlockIdFix({
      BLOCK_PREFIX,
      blockId,
      setAttributes,
      select: _wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select,
      clientId
    });
  }, []);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, `eb-guten-block-main-parent-wrapper`)
  });
  const setimageAlign = newAlign => {
    switch (newAlign) {
      case "left":
        setAttributes({
          imageAlign: "0"
        });
        break;
      case "right":
        setAttributes({
          imageAlign: "0 0 0 auto"
        });
        break;
      default:
        setAttributes({
          imageAlign: "0 auto"
        });
    }
  };

  //Initial UseEffect
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLoadingApi(true);
    //Get Openverse Email, Name
    let data = new FormData();
    data.append("action", "openverse_email_name_DB");
    data.append("openverse_nonce", EssentialBlocksLocalize.openverse_nonce);
    fetch(EssentialBlocksLocalize.ajax_url, {
      method: "POST",
      body: data
    }) // wrapped
    .then(res => res.text()).then(data => {
      const response = JSON.parse(data);
      if (response.success && response.data) {
        if (response.data.client_id) {
          setShowForm(false);
        } else {
          setShowForm(true);
        }
        setAttributes({
          apiInfo: {
            ...apiInfo,
            email: response.data.email,
            name: response.data.name
          }
        });
        setLoadingApi(false);
      }
    }).catch(err => console.log(err));
  }, []);
  const openverseDataFetch = event => {
    if (event) {
      setLoading(true);
      let data = new FormData();
      data.append("action", "eb_get_collections");
      data.append("openverse_nonce", EssentialBlocksLocalize.openverse_nonce);

      // search
      data.append("openverseQ", q);
      data.append("openverseFilterLicensesType", filterData.licenseType);
      data.append("openverseFilterLicenses", filterData.licenses);
      data.append("openverseFilterImgtype", filterData.category);
      data.append("openverseFilterExtension", filterData.extension);
      data.append("openverseFilterRatio", filterData.aspectRatio);
      data.append("openverseFilterSize", filterData.size);
      data.append("openversePage", pagination);
      fetch(EssentialBlocksLocalize.ajax_url, {
        method: "POST",
        body: data
      }) // wrapped
      .then(res => res.text()).then(data => {
        const response = JSON.parse(data);
        if (response.success) {
          const responseData = JSON.parse(response.data);
          if (responseData.result_count == 0) {
            setOpenverseError({
              status: true,
              message: "We couldn't find anything."
            });
          } else {
            const passData = responseData.results;
            setOpenverseData(passData);
            setOpenverseError({
              status: false
            });
          }
          setTotalPages(responseData.page_count);
          setLoading(false);
        } else {
          const error = typeof response.data === "object" ? response.data : JSON.parse(response.data);
          console.log(error);
          setOpenverseError({
            status: true,
            message: typeof error === "string" ? error : "Request was throttled."
          });
          setLoading(false);
        }
      }).catch(err => console.log(err));
    }
  };

  // fetch
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_13__.isEmpty)(q)) {
      openverseDataFetch(true);
    }
  }, [filterData]);

  // fetch pagination data
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (pagination > 1) {
      setLoading(true);
      let data = new FormData();
      data.append("action", "eb_get_collections");
      data.append("openverse_nonce", EssentialBlocksLocalize.openverse_nonce);

      // search
      data.append("openverseQ", q);
      data.append("openverseFilterLicensesType", filterData.licenseType);
      data.append("openverseFilterLicenses", filterData.licenses);
      data.append("openverseFilterImgtype", filterData.category);
      data.append("openverseFilterExtension", filterData.extension);
      data.append("openverseFilterRatio", filterData.aspectRatio);
      data.append("openverseFilterSize", filterData.size);
      data.append("openversePage", pagination);
      fetch(EssentialBlocksLocalize.ajax_url, {
        method: "POST",
        body: data
      }) // wrapped
      .then(res => res.text()).then(data => {
        const response = JSON.parse(data);
        if (response.success) {
          const responseData = JSON.parse(response.data);
          const passData = responseData.results;
          setTotalPages(responseData.page_count);
          setOpenverseData([...openverseData, ...passData]);
          setLoading(false);
          setOpenverseError({
            status: false
          });
        } else {
          const error = typeof response.data === "object" ? response.data : JSON.parse(response.data);
          console.log(error);
          setOpenverseError({
            status: true,
            message: typeof error === "string" ? error : "Request was throttled."
          });
          setLoading(false);
        }
      }).catch(err => console.log(err));
    }
  }, [pagination]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isSelected && imageurl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockAlignmentToolbar, {
    value: imageAlign,
    onChange: newAlign => setimageAlign(newAlign),
    controls: ["left", "center", "right"]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_7__["default"], props), imageurl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Toolbar, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    className: "components-toolbar__control",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Replace Image", "eb-open-verse-block"),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__["default"],
    onClick: () => setOpenverseModal(true)
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `eb-parent-wrapper eb-parent-${blockId} ${classHook}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `eb-openverse-wrapper ${blockId} img-style-${stylePreset} ${attributionStyle} ${hoverEffect}`,
    "data-id": blockId
  }, imageurl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_template_components_displayImage__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attributes: attributes
  }), !imageurl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "openverse-placheholderbox"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "openverse-placheholderbox__label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_template_components_icons_openverseMainIcon__WEBPACK_IMPORTED_MODULE_11__.OpenverseMainIcon, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `eb-openverse-form-wrapper ${loadingApi ? "loading-circle" : ""}`
  }, showForm && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "openverse-placheholderbox__description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Provide your Email ID & unique project Name to get access to Openverse  using API, these are required field", "eb-open-verse-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      color: "#ff0000"
    }
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_template_components_apiInfo__WEBPACK_IMPORTED_MODULE_12__.ApiInfo, {
    attributes: attributes,
    setAttributes: setAttributes,
    loadingApi: loadingApi,
    setLoadingApi: setLoadingApi,
    openverseRegError: openverseRegError,
    setOpenverseRegError: setOpenverseRegError,
    setShowForm: setShowForm
  })), !showForm && !loadingApi && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, openverseRegError.status && openverseRegError.type == "Success" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-alert eb-alert-success"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Hurray!"), " You have generated an API successfully! Please verify your email to enjoy uninterrupted access to", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "eb-alert-warning"
  }, "Without verifying your email you can get access to Openverse as anonymous and your search limit will be 100 requests/ day and 5 requests/ hr.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "openverse-placheholderbox__description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Explore more than 600 million creative works", "eb-open-verse-block")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_template_components_search__WEBPACK_IMPORTED_MODULE_10__["default"], {
    setOpenverseModal: setOpenverseModal,
    openverseDataFetch: openverseDataFetch,
    q: q,
    setQ: setQ,
    componentClassName: "openverse-search-section"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "openverse-placheholderbox__note"
  }, "All Openverse content is under a", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://creativecommons.org/licenses/"
  }, " ", "Creative Commons license"), " ", "or is in the public domain."))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_template_components_searchModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    trigger: openverseModal,
    setTrigger: setOpenverseModal,
    loading: loading,
    openverseData: openverseData,
    q: q,
    setQ: setQ,
    filterData: filterData,
    setFilterData: setFilterData,
    setOpenverseImage: setOpenverseImage,
    attributes: attributes,
    setAttributes: setAttributes,
    pagination: pagination,
    setPagination: setPagination,
    totalPages: totalPages,
    openverseError: openverseError,
    setOpenverseModal: setOpenverseModal,
    openverseDataFetch: openverseDataFetch
  })))));
}

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const example = {
  attributes: {
    image: {
      url: "https://essential-blocks.com/wp-content/uploads/2022/03/advanced-images.jpg"
    },
    displayAttribution: true,
    attributionColor: "#000000",
    widthRange: "100",
    widthUnit: "%",
    heightRange: "350"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (example);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenverseIcon": function() { return /* binding */ OpenverseIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const OpenverseIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "60",
  height: "60",
  viewBox: "0 0 60 60",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  "clip-path": "url(#clip0_1546_12)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6.25 7.5C6.94036 7.5 7.5 6.94036 7.5 6.25C7.5 5.55964 6.94036 5 6.25 5C5.55964 5 5 5.55964 5 6.25C5 6.94036 5.55964 7.5 6.25 7.5Z",
  fill: "url(#paint0_linear_1546_12)"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10 7.5C10.6904 7.5 11.25 6.94036 11.25 6.25C11.25 5.55964 10.6904 5 10 5C9.30964 5 8.75 5.55964 8.75 6.25C8.75 6.94036 9.30964 7.5 10 7.5Z",
  fill: "url(#paint1_linear_1546_12)"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M13.75 7.5C14.4404 7.5 15 6.94036 15 6.25C15 5.55964 14.4404 5 13.75 5C13.0596 5 12.5 5.55964 12.5 6.25C12.5 6.94036 13.0596 7.5 13.75 7.5Z",
  fill: "url(#paint2_linear_1546_12)"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M56.25 0H3.75C2.75544 0 1.80161 0.395088 1.09835 1.09835C0.395088 1.80161 0 2.75544 0 3.75L0 11.25C0 11.5815 0.131696 11.8995 0.366117 12.1339C0.600537 12.3683 0.918479 12.5 1.25 12.5H53.75C54.0815 12.5 54.3995 12.3683 54.6339 12.1339C54.8683 11.8995 55 11.5815 55 11.25C55 10.9185 54.8683 10.6005 54.6339 10.3661C54.3995 10.1317 54.0815 10 53.75 10H2.5V3.75C2.5 3.41848 2.6317 3.10054 2.86612 2.86612C3.10054 2.6317 3.41848 2.5 3.75 2.5H56.25C56.5815 2.5 56.8995 2.6317 57.1339 2.86612C57.3683 3.10054 57.5 3.41848 57.5 3.75V56.25C57.5 56.5815 57.3683 56.8995 57.1339 57.1339C56.8995 57.3683 56.5815 57.5 56.25 57.5H3.75C3.41848 57.5 3.10054 57.3683 2.86612 57.1339C2.6317 56.8995 2.5 56.5815 2.5 56.25V16.25C2.5 15.9185 2.3683 15.6005 2.13388 15.3661C1.89946 15.1317 1.58152 15 1.25 15C0.918479 15 0.600537 15.1317 0.366117 15.3661C0.131696 15.6005 0 15.9185 0 16.25L0 56.25C0 57.2446 0.395088 58.1984 1.09835 58.9016C1.80161 59.6049 2.75544 60 3.75 60H56.25C57.2446 60 58.1984 59.6049 58.9016 58.9016C59.6049 58.1984 60 57.2446 60 56.25V3.75C60 2.75544 59.6049 1.80161 58.9016 1.09835C58.1984 0.395088 57.2446 0 56.25 0V0Z",
  fill: "url(#paint3_linear_1546_12)"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32 24C32 22.8954 32.8954 22 34 22H42C43.1046 22 44 22.8954 44 24V32C44 33.1046 43.1046 34 42 34H34C32.8954 34 32 33.1046 32 32V24Z",
  fill: "#275EFF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M24 24C24 22.8954 24.8954 22 26 22H30V34H26C24.8954 34 24 33.1046 24 32V24Z",
  fill: "#275EFF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16 24C16 22.8954 16.8954 22 18 22H22V34H18C16.8954 34 16 33.1046 16 32V24Z",
  fill: "#275EFF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M24 37.9999C24 36.8954 24.8954 35.9999 26 35.9999H30V47.9999H26C24.8954 47.9999 24 47.1045 24 45.9999V37.9999Z",
  fill: "#275EFF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16 37.9999C16 36.8954 16.8954 35.9999 18 35.9999H22V47.9999H18C16.8954 47.9999 16 47.1045 16 45.9999V37.9999Z",
  fill: "#275EFF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32 37.9999C32 36.8954 32.8954 35.9999 34 35.9999H42C43.1046 35.9999 44 36.8954 44 37.9999V45.9999C44 47.1045 43.1046 47.9999 42 47.9999H34C32.8954 47.9999 32 47.1045 32 45.9999V37.9999Z",
  fill: "#275EFF"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
  id: "paint0_linear_1546_12",
  x1: "7.5",
  y1: "6.47949",
  x2: "5",
  y2: "6.47949",
  gradientUnits: "userSpaceOnUse"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#275EFF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#A913FF"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
  id: "paint1_linear_1546_12",
  x1: "11.25",
  y1: "6.47949",
  x2: "8.75",
  y2: "6.47949",
  gradientUnits: "userSpaceOnUse"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#275EFF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#A913FF"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
  id: "paint2_linear_1546_12",
  x1: "15",
  y1: "6.47949",
  x2: "12.5",
  y2: "6.47949",
  gradientUnits: "userSpaceOnUse"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#275EFF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#A913FF"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
  id: "paint3_linear_1546_12",
  x1: "60",
  y1: "35.5078",
  x2: "0",
  y2: "35.5078",
  gradientUnits: "userSpaceOnUse"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  "stop-color": "#275EFF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "1",
  "stop-color": "#A913FF"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "clip0_1546_12"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "60",
  height: "60",
  fill: "white"
}))));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example */ "./src/example.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../block.json */ "./block.json");








const {
  ebConditionalRegisterBlockType
} = EBOpenverseControls;
const {
  name,
  category
} = _block_json__WEBPACK_IMPORTED_MODULE_7__;
ebConditionalRegisterBlockType(_block_json__WEBPACK_IMPORTED_MODULE_7__, {
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Openverse", "eb-open-verse-block"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Openverse block", "eb-open-verse-block"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Openverse image", "eb-open-verse-block"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("EB Openverse block", "eb-open-verse-block"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("eb open verse block", "eb-open-verse-block"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("essential blocks", "eb-open-verse-block")],
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__.OpenverseIcon,
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/constants.js");

/**
 * WordPress dependencies
 */




/**
 * Internal depencencies
 */



const {
  ResponsiveDimensionsControl,
  TypographyDropdown,
  BorderShadowControl,
  ResponsiveRangeController,
  BackgroundControl,
  ColorControl,
  AdvancedControls
} = window.EBOpenverseControls;
function Inspector(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    resOption,
    displayAttribution,
    attributionColor,
    textAlign,
    stylePreset,
    attributionStyle,
    hoverEffect,
    complexStyle,
    autoFit
  } = attributes;
  const changeStyle = selected => {
    setAttributes({
      stylePreset: selected
    });
    const complexLayouts = ["octagon", "rhombus", "triangle"];
    if (complexLayouts.includes(selected)) {
      setAttributes({
        complexStyle: true
      });
    } else {
      setAttributes({
        complexStyle: false
      });
    }

    //
    switch (selected) {
      case "rounded":
        setAttributes({
          imgBorderShadowRds_Bottom: "15",
          imgBorderShadowRds_Top: "15",
          imgBorderShadowRds_Left: "15",
          imgBorderShadowRds_Right: "15",
          imgBorderShadowRds_Unit: "px"
        });
        break;
      case "square":
        setAttributes({
          imgBorderShadowRds_Bottom: "0",
          imgBorderShadowRds_Top: "0",
          imgBorderShadowRds_Left: "0",
          imgBorderShadowRds_Right: "0",
          imgBorderShadowRds_Unit: "px"
        });
        break;
      case "circle":
        setAttributes({
          imgBorderShadowRds_Bottom: "50",
          imgBorderShadowRds_Top: "50",
          imgBorderShadowRds_Left: "50",
          imgBorderShadowRds_Right: "50",
          imgBorderShadowRds_Unit: "%"
        });
        break;
      default:
        return false;
    }
  };
  const checkAttribution = selected => {
    if (selected) {
      setAttributes({
        displayAttribution: selected,
        wrpBorderShadowBdr_Bottom: "1",
        wrpBorderShadowBdr_Left: "1",
        wrpBorderShadowBdr_Right: "1",
        wrpBorderShadowBdr_Top: "1",
        wrpBorderShadowBdr_Unit: "px",
        wrpBorderShadowBdr_isLinked: true,
        wrpBorderShadowborderColor: "#C1CDE1",
        wrpBorderShadowborderStyle: "solid",
        wrpBorderShadowRds_Bottom: "15",
        wrpBorderShadowRds_Left: "15",
        wrpBorderShadowRds_Right: "15",
        wrpBorderShadowRds_Top: "15",
        wrpBorderShadowRds_Unit: "px",
        wrpBorderShadowRds_isLinked: true
      });
    } else {
      setAttributes({
        displayAttribution: selected,
        wrpBorderShadowBdr_Bottom: "0",
        wrpBorderShadowBdr_Left: "0",
        wrpBorderShadowBdr_Right: "0",
        wrpBorderShadowBdr_Top: "0",
        wrpBorderShadowBdr_Unit: "px",
        wrpBorderShadowBdr_isLinked: true,
        wrpBorderShadowborderColor: "#C1CDE1",
        wrpBorderShadowborderStyle: "none",
        wrpBorderShadowRds_Bottom: "0",
        wrpBorderShadowRds_Left: "0",
        wrpBorderShadowRds_Right: "0",
        wrpBorderShadowRds_Top: "0",
        wrpBorderShadowRds_Unit: "px",
        wrpBorderShadowRds_isLinked: true
      });
    }
  };
  const changCaptionStyle = selected => {
    switch (selected) {
      case "attribution-style-1":
        setAttributes({
          attributionStyle: selected,
          textAlign: "left",
          attributionColor: "#211C70",
          captionPaddingBottom: "15",
          captionPaddingLeft: "30",
          captionPaddingRight: "30",
          captionPaddingTop: "15",
          captionPaddingUnit: "px",
          captionPaddingisLinked: false,
          wrpBorderShadowBdr_Bottom: "1",
          wrpBorderShadowBdr_Left: "1",
          wrpBorderShadowBdr_Right: "1",
          wrpBorderShadowBdr_Top: "1",
          wrpBorderShadowBdr_Unit: "px",
          wrpBorderShadowBdr_isLinked: true,
          wrpBorderShadowborderColor: "#C1CDE1",
          wrpBorderShadowborderStyle: "solid",
          wrpBorderShadowRds_Bottom: "15",
          wrpBorderShadowRds_Left: "15",
          wrpBorderShadowRds_Right: "15",
          wrpBorderShadowRds_Top: "15",
          wrpBorderShadowRds_Unit: "px",
          wrpBorderShadowRds_isLinked: true
        });
        break;
      case "attribution-style-2":
        setAttributes({
          attributionStyle: selected,
          textAlign: "center",
          attributionColor: "#2673FF",
          captionPaddingBottom: "15",
          captionPaddingLeft: "10",
          captionPaddingRight: "10",
          captionPaddingTop: "15",
          captionPaddingUnit: "px",
          captionPaddingisLinked: false,
          wrpBorderShadowBdr_Bottom: "0",
          wrpBorderShadowBdr_Left: "0",
          wrpBorderShadowBdr_Right: "0",
          wrpBorderShadowBdr_Top: "0",
          wrpBorderShadowBdr_Unit: "px",
          wrpBorderShadowBdr_isLinked: true,
          wrpBorderShadowborderColor: "#C1CDE1",
          wrpBorderShadowborderStyle: "none",
          wrpBorderShadowRds_Bottom: "0",
          wrpBorderShadowRds_Left: "0",
          wrpBorderShadowRds_Right: "0",
          wrpBorderShadowRds_Top: "0",
          wrpBorderShadowRds_Unit: "px",
          wrpBorderShadowRds_isLinked: true
        });
        break;
      default:
        setAttributes({
          attributionStyle: selected
        });
    }
  };
  const resRequiredProps = {
    setAttributes,
    resOption,
    attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"]
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-panel-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab"
    // onSelect={onSelect}
    ,
    tabs: [{
      name: "general",
      title: "General",
      className: "eb-tab general"
    }, {
      name: "styles",
      title: "Style",
      className: "eb-tab styles"
    }, {
      name: "advance",
      title: "Advanced",
      className: "eb-tab advance"
    }]
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-tab-controls" + tab.name
  }, tab.name === "general" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("General", "eb-open-verse-block"),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Styles", "eb-open-verse-block"),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border won't work", "eb-open-verse-block"),
    value: stylePreset,
    options: _constants__WEBPACK_IMPORTED_MODULE_5__.STYLES,
    onChange: stylePreset => changeStyle(stylePreset)
  }), stylePreset === "circle" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "Please use equal \"Height\" & \"Width\" for perfect Circle shape.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveRangeController, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "eb-open-verse-block"),
    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.IMAGE_WIDTH,
    resRequiredProps: resRequiredProps,
    min: 1,
    max: 1000,
    step: 1,
    units: _constants__WEBPACK_IMPORTED_MODULE_5__.SIZE_UNIT_TYPES
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveRangeController, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height", "eb-open-verse-block"),
    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.IMAGE_HEIGHT,
    resRequiredProps: resRequiredProps,
    min: 0,
    max: 1000,
    step: 1,
    units: _constants__WEBPACK_IMPORTED_MODULE_5__.SIZE_UNIT_TYPES
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Auto Fit Image?", "eb-open-verse-block"),
    checked: autoFit,
    onChange: autoFit => setAttributes({
      autoFit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover Effect", "eb-open-verse-block"),
    value: hoverEffect,
    options: _constants__WEBPACK_IMPORTED_MODULE_5__.HOVER_EFFECT,
    onChange: hoverEffect => setAttributes({
      hoverEffect
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display Attribution", "eb-open-verse-block"),
    checked: displayAttribution,
    onChange: () => checkAttribution(!displayAttribution)
  }), displayAttribution && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Attribution Styles", "eb-open-verse-block"),
    value: attributionStyle,
    options: _constants__WEBPACK_IMPORTED_MODULE_5__.ATTRIBUTION_STYLES,
    onChange: attributionStyle => changCaptionStyle(attributionStyle)
  }))), tab.name === "styles" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Settings", "eb-open-verse-block")
  }, !complexStyle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "eb-control-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border", "eb-open-verse-block"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BorderShadowControl, {
    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.IMAGE_BORDER_SHADOW,
    resRequiredProps: resRequiredProps
    // noShadow
    // noBorder
  })), complexStyle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "Border Style doesn't support for \"", stylePreset, " ", "style\"."))), displayAttribution && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Caption Styles", "eb-open-verse-block")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color Controls", "eb-open-verse-block"),
    className: "eb-subpanel",
    initialOpen: true,
    disableAlpha: false,
    colorSettings: [{
      value: attributionColor,
      onChange: newColor => setAttributes({
        attributionColor: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Color", "eb-open-verse-block")
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TypographyDropdown, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography", "eb-open-verse-block"),
    typographyPrefixConstant: _constants__WEBPACK_IMPORTED_MODULE_5__.ATTRIBUTION_TYPOGRAPHY,
    resRequiredProps: resRequiredProps
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveRangeController, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "eb-open-verse-block"),
    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ATTRIBUTION_WIDTH,
    resRequiredProps: resRequiredProps,
    units: _constants__WEBPACK_IMPORTED_MODULE_5__.UNIT_TYPES,
    min: 0,
    max: 300,
    step: 1
  }), displayAttribution && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Align", "eb-open-verse-block")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_5__.TEXT_ALIGN.map(item => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button
  // isLarge
  , {
    isPrimary: textAlign === item.value,
    isSecondary: textAlign !== item.value,
    onClick: () => setAttributes({
      textAlign: item.value
    })
  }, item.label)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ATTRIBUTION_MARGIN,
    baseLabel: "Margin"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ATTRIBUTION_PADDING,
    baseLabel: "Padding"
  })))), tab.name === "advance" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.WRAPPER_MARGIN,
    baseLabel: "Margin"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.WRAPPER_PADDING,
    baseLabel: "Padding"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "eb-open-verse-block"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BackgroundControl, {
    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.WRAPPER_BG,
    resRequiredProps: resRequiredProps,
    noOverlay: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border & Shadow"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BorderShadowControl, {
    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.WRAPPER_BORDER_SHADOW,
    resRequiredProps: resRequiredProps
    // noShadow
    // noBorder
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AdvancedControls, {
    attributes: attributes,
    setAttributes: setAttributes
  }))))));
}
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



const save = _ref => {
  let {
    attributes
  } = _ref;
  const {
    blockId,
    horizontalAlign,
    verticalAlign,
    verticalAlignCap2,
    stylePreset,
    displayAttribution,
    attributionStyle,
    hoverEffect,
    classHook,
    imageurl,
    imageAttr
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), imageurl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `eb-parent-wrapper eb-parent-${blockId} ${classHook}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: `eb-openverse-wrapper ${blockId} img-style-${stylePreset} ${attributionStyle}  ${hoverEffect}`,
    "data-id": blockId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageurl,
    alt: imageAttr.title
  })), displayAttribution && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-attribution"
  }, imageAttr.title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, imageAttr.foreignUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: imageAttr.foreignUrl
  }, imageAttr.title), !imageAttr.foreignUrl && imageAttr.title), imageAttr.creator && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" By ", "eb-open-verse-block"), imageAttr.creatorUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: imageAttr.creatorUrl
  }, imageAttr.creator), !imageAttr.creatorUrl && imageAttr.creator), imageAttr.creator && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" By ", "eb-open-verse-block"), imageAttr.licenseUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" is licensed under ", "eb-open-verse-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: imageAttr.licenseUrl,
    className: "licensed-wrap"
  }, imageAttr.license + " " + imageAttr.licenseVersion)), !imageAttr.licenseUrl && imageAttr.license + " " + imageAttr.licenseVersion, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" .", "eb-open-verse-block")))))));
};
/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Style; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");

/**
 * WordPress dependencies
 */


const {
  softMinifyCssStrings,
  generateTypographyStyles,
  generateDimensionsControlStyles,
  generateBorderShadowStyles,
  generateResponsiveRangeStyles,
  generateBackgroundControlStyles,
  // mimmikCssForPreviewBtnClick,
  duplicateBlockIdFix
} = window.EBOpenverseControls;
function Style(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    resOption,
    blockId,
    blockMeta,
    displayAttribution,
    attributionColor,
    attributionBGColor,
    horizontalAlign,
    verticalAlign,
    verticalAlignCap2,
    textAlign,
    stylePreset,
    attributionStyle,
    hoverEffect,
    imageAlign,
    complexStyle,
    autoFit,
    classHook,
    imageurl
  } = attributes;

  /**
   * CSS/styling Codes Starts from Here
   */

  // Caption Typography
  const {
    typoStylesDesktop: attributionTypographyDesktop,
    typoStylesTab: attributionTypographyTab,
    typoStylesMobile: attributionTypographyMobile
  } = generateTypographyStyles({
    attributes,
    prefixConstant: _constants__WEBPACK_IMPORTED_MODULE_1__.ATTRIBUTION_TYPOGRAPHY,
    defaultFontSize: 16
  });

  /* Wrapper Margin */
  const {
    dimensionStylesDesktop: wrapperMarginDesktop,
    dimensionStylesTab: wrapperMarginTab,
    dimensionStylesMobile: wrapperMarginMobile
  } = generateDimensionsControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.WRAPPER_MARGIN,
    styleFor: "margin",
    attributes
  });

  /* Wrapper Padding */
  const {
    dimensionStylesDesktop: wrapperPaddingDesktop,
    dimensionStylesTab: wrapperPaddingTab,
    dimensionStylesMobile: wrapperPaddingMobile
  } = generateDimensionsControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.WRAPPER_PADDING,
    styleFor: "padding",
    attributes
  });

  /* Caption Margin */
  const {
    dimensionStylesDesktop: attributionMarginDesktop,
    dimensionStylesTab: attributionMarginTab,
    dimensionStylesMobile: attributionMarginMobile
  } = generateDimensionsControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ATTRIBUTION_MARGIN,
    styleFor: "margin",
    attributes
  });

  /* Caption Padding */
  const {
    dimensionStylesDesktop: attributionPaddingDesktop,
    dimensionStylesTab: attributionPaddingTab,
    dimensionStylesMobile: attributionPaddingMobile
  } = generateDimensionsControlStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ATTRIBUTION_PADDING,
    styleFor: "padding",
    attributes
  });

  // range controller Separator Line Width
  const {
    rangeStylesDesktop: imageWidthDesktop,
    rangeStylesTab: imageWidthTab,
    rangeStylesMobile: imageWidthMobile
  } = generateResponsiveRangeStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_WIDTH,
    property: "",
    attributes
  });

  // range controller Separator Line Width
  const {
    rangeStylesDesktop: imageHeightDesktop,
    rangeStylesTab: imageHeightTab,
    rangeStylesMobile: imageHeightMobile
  } = generateResponsiveRangeStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_HEIGHT,
    property: "",
    attributes
  });

  // range controller Separator Line Grid Column Margin Bottom
  const {
    rangeStylesDesktop: attributionWidthDesktop,
    rangeStylesTab: attributionWidthTab,
    rangeStylesMobile: attributionWidthMobile
  } = generateResponsiveRangeStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ATTRIBUTION_WIDTH,
    property: "width",
    attributes
  });

  //Generate Background
  const {
    backgroundStylesDesktop: wrapperBackgroundStylesDesktop,
    hoverBackgroundStylesDesktop: wrapperHoverBackgroundStylesDesktop,
    backgroundStylesTab: wrapperBackgroundStylesTab,
    hoverBackgroundStylesTab: wrapperHoverBackgroundStylesTab,
    backgroundStylesMobile: wrapperBackgroundStylesMobile,
    hoverBackgroundStylesMobile: wrapperHoverBackgroundStylesMobile,
    bgTransitionStyle: wrapperBgTransitionStyle
  } = generateBackgroundControlStyles({
    attributes,
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.WRAPPER_BG,
    noOverlay: true
  });

  // generateBorderShadowStyles for Wrapper ⬇
  const {
    styesDesktop: wrapperBDShadowDesktop,
    styesTab: wrapperBDShadowTab,
    styesMobile: wrapperBDShadowMobile,
    stylesHoverDesktop: wrapperBDShadowHoverDesktop,
    stylesHoverTab: wrapperBDShadowHoverTab,
    stylesHoverMobile: wrapperBDShadowHoverMobile,
    transitionStyle: wrapperBDShadowTransitionStyle
  } = generateBorderShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.WRAPPER_BORDER_SHADOW,
    attributes
    // noShadow: true,
    // noBorder: true,
  });

  // generateBorderShadowStyles for Images ⬇
  const {
    styesDesktop: imageBDShadowDesktop,
    styesTab: imageBDShadowTab,
    styesMobile: imageBDShadowMobile,
    stylesHoverDesktop: imageBDShadowHoverDesktop,
    stylesHoverTab: imageBDShadowHoverTab,
    stylesHoverMobile: imageBDShadowHoverMobile,
    transitionStyle: imageBDShadowTransitionStyle
  } = generateBorderShadowStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_BORDER_SHADOW,
    attributes
    // noShadow: true,
    // noBorder: true,
  });

  // Openverse popup styleso ⬇
  const openversePopup = `
	.eb-openverse-grid {
		display: grid;
		grid-template-columns: repeat(6, minmax(0, 1fr));
		gap: 10px;
		align-items: stretch;
   }
	.eb-openverse-grid .eb-openverse-grid-item {
		cursor: pointer;
		border: 3px solid transparent;
   }

   .eb_openverse_item_thumbnail img {
		max-width: 100%;
		height: 100px;
   }
	.eb-openverse-grid .eb-openverse-grid-item.selected {
		border-color: #007cba;
   }
	.openverse-modal-open #adminmenumain, .openverse-modal-open .interface-interface-skeleton__header, .openverse-modal-open .interface-interface-skeleton__footer {
		// visibility: hidden;
   }
	.openverse-placheholderbox {
		padding: 20px;
		border: 1px solid;
   }
	.openverse-placheholderbox .openverse-placheholderbox__label {
		font-size: 25px;
		font-weight: 400;
		display: flex;
		align-items: center;
		margin-bottom: 15px;
   }
	.openverse-placheholderbox .openverse-placheholderbox__label svg {
		margin-right: 10px;
   }
	.openverse-placheholderbox__description {
		font-size: 15px;
		font-weight: 400;
		padding: 0;
		margin-bottom: 10px;
   }
   .openverse-placheholderbox__note {
		font-size: 13px;
	}
	
	.openverse-modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.2);
		z-index: 160000;
		display: flex;
		justify-content: center;
		align-items: center;
   }
	.openverse-modal__inner {
		overflow: hidden;
		position: relative;
        top: 25px;
		left: -50px;
		width: 60%;
		height: 70vh;
		background-color: #fff;
   }
	.openverse-modal__header {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 60px;
		z-index: 200;
		padding: 15px;
		box-sizing: border-box;
   }
	.title-section {
		padding: 0;
		margin: 0;
		font-size: 19px;
		font-weight: 500;
		line-height: 1.2rem;
		display: inline-block;
   }
	.close-btn {
		position: absolute;
		top: 16px;
		right: 16px;
		cursor: pointer;
		margin: 0;
		padding: 0;
		border: 1px solid transparent;
		background: 0 0;
		color: #646970;
		z-index: 1000;
		cursor: pointer;
		outline: 0;
		transition: color 0.1s ease-in-out, background 0.1s ease-in-out;
   }
	.openverse-modal__content {
		position: absolute;
		top: 61px;
		left: 0;
		right: 0;
		bottom: 61px;
		height: auto;
		width: auto;
		margin: 0;
		overflow: auto;
		background: #fff;
		border-top: 1px solid #dcdcde;
   }
	.search-section {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		height: 75px;
		padding: 15px;
		box-sizing: border-box;
		border: 0 solid #dcdcde;
		overflow: hidden;
		border-bottom: 1px solid #dcdcde;
		display: flex;
		
   }
	.search-section .openverse-search-input, .search-section .openverse-search-btn {
		height: 45px;
   }
	
	.search-result-section {
		position: absolute;
		top: 75px;
		left: 0;
		bottom: 0;
		overflow: auto;
		outline: 0;
		width: 100%;
		display: grid;
		grid-template-columns: 75% 25%;
   }
	.search-content {
		padding: 15px;
   }
	.search-filter {
		background-color: #f3f2f2;
		border-left: 1px solid #dcdcde;
		padding: 15px;
   }
	.openverse-modal__footer {
		top: auto;
		bottom: 0;
		height: auto;
		overflow: visible;
		border-top: 1px solid #dcdcde;
		position: absolute;
		left: 0;
		right: 0;
		z-index: 100;
		height: 61px;
		padding: 15px;
		box-sizing: border-box;
		border-top: 1px solid #dcdcde;
		text-align: right;
   }
	.openverse-modal__footer button {
		font-size: 13px;
		background: #2673FF;
		color: #fff;
		outline: 1px solid #000 0;
		text-decoration: none;
		text-shadow: none;
		white-space: nowrap;
		align-items: center;
		-webkit-appearance: none;
		border: 0;
		border-radius: 0;
		box-sizing: border-box;
		cursor: pointer;
		font-family: inherit;
		font-weight: 400;
		text-align: center;
		height: 35px;
		margin: 0;
		padding: 3px 20px;
		text-decoration: none;
		transition: box-shadow 0.1s linear;
   }
	.openverse-modal__footer button:disabled {
		color: #a7aaad !important;
		background: #f6f7f7 !important;
		border: 1px solid #dcdcde !important;
		box-shadow: none !important;
		text-shadow: none !important;
		cursor: default;
   }
	
	`;

  // wrapper styles css in strings ⬇
  const wrapperStylesDesktop = `
		.eb-openverse-wrapper.${blockId}{
			${wrapperMarginDesktop}
			${wrapperPaddingDesktop}
			${wrapperBDShadowDesktop}
			${wrapperBackgroundStylesDesktop}
			transition:${wrapperBgTransitionStyle}, ${wrapperBDShadowTransitionStyle};
		}
		.eb-openverse-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverDesktop}
			${wrapperHoverBackgroundStylesDesktop}
		}
	`;
  const wrapperStylesTab = `
		.eb-openverse-wrapper.${blockId}{
			${wrapperMarginTab}
			${wrapperPaddingTab}
			${wrapperBDShadowTab}
			${wrapperBackgroundStylesTab}
		}
		.eb-openverse-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverTab}
			${wrapperHoverBackgroundStylesTab}
		}
	`;
  const wrapperStylesMobile = `
		.eb-openverse-wrapper.${blockId}{
			${wrapperMarginMobile}
			${wrapperPaddingMobile}
			${wrapperBDShadowMobile}
			${wrapperBackgroundStylesMobile}
		}
		.eb-openverse-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverMobile}
			${wrapperHoverBackgroundStylesMobile}
		}
	`;
  const imageStylesDesktop = `
		.eb-openverse-wrapper.${blockId} .image-wrapper{
			width${imageWidthDesktop || ": auto"};
			height${imageHeightDesktop || ": auto"};
			${!complexStyle ? imageBDShadowDesktop : ""}
			transition: transform 0.5s, ${imageBDShadowTransitionStyle};
			margin: ${imageAlign};
		}

		.eb-openverse-wrapper.${blockId} .image-wrapper img{
			transition: transform 0.5s, ${imageBDShadowTransitionStyle};
			${autoFit ? "object-fit: cover;" : ""}
		}

		.eb-openverse-wrapper.${blockId} .image-attribution{
			color: ${attributionColor};
			text-align: ${textAlign};
			${attributionMarginDesktop}
			${attributionPaddingDesktop}
			${attributionTypographyDesktop}
			${attributionWidthDesktop}
		}
		
		.eb-openverse-wrapper.${blockId} .image-wrapper:hover {
			${!complexStyle ? imageBDShadowHoverDesktop : ""}
		}
		${!displayAttribution ? ` .eb-openverse-wrapper.${blockId} .image-attribution {display:none;} ` : ""}
	`;
  const imageStylesTab = `
		.eb-openverse-wrapper.${blockId} .image-wrapper{
			width${imageWidthTab || ": auto"};
			height${imageHeightTab || ": auto"};
		}
		.eb-openverse-wrapper.${blockId} .image-wrapper:hover {
			${!complexStyle ? imageBDShadowHoverTab : ""}
		}
		.eb-openverse-wrapper.${blockId} .image-attribution {
			${attributionMarginTab}
			${attributionPaddingTab}
			${attributionTypographyTab}
			${attributionWidthTab}
		}
	`;
  const imageStylesMobile = `
		.eb-openverse-wrapper.${blockId} .image-wrapper img{
			${!complexStyle ? imageBDShadowMobile : ""}
		}
		.eb-openverse-wrapper.${blockId} .image-wrapper:hover {
			${!complexStyle ? imageBDShadowHoverMobile : ""}
		}
		.eb-openverse-wrapper.${blockId} .image-wrapper .image-attribution {
			${attributionMarginMobile}
			${attributionPaddingMobile}
			${attributionTypographyMobile}
			${attributionWidthMobile}
		}
		.eb-openverse-wrapper.${blockId} .image-wrapper{
			width${imageWidthMobile || ": auto"};
			height${imageHeightMobile || ": auto"};
		}
	`;

  // all css styles for large screen width (desktop/laptop) in strings ⬇
  const editAllStyles = softMinifyCssStrings(`
		${openversePopup}
	`);

  // all css styles for large screen width (desktop/laptop) in strings ⬇
  const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
		${imageStylesDesktop}
	`);

  // all css styles for Tab in strings ⬇
  const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
		${imageStylesTab}
	`);

  // all css styles for Mobile in strings ⬇
  const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
		${imageStylesMobile}
	`);

  // Set All Style in "blockMeta" Attribute
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const styleObject = {
      desktop: desktopAllStyles,
      tab: tabAllStyles,
      mobile: mobileAllStyles
    };
    if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
      setAttributes({
        blockMeta: styleObject
      });
    }
  }, [attributes]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
                ${editAllStyles}

                ${desktopAllStyles}

                /* mimmikcssStart */

                ${resOption === "Tablet" ? tabAllStyles : " "}
                ${resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " "}

                /* mimmikcssEnd */

                @media all and (max-width: 1024px) {	

                    /* tabcssStart */			
                    ${softMinifyCssStrings(tabAllStyles)}
                    /* tabcssEnd */			
                
                }
                
                @media all and (max-width: 767px) {
                    
                    /* mobcssStart */			
                    ${softMinifyCssStrings(mobileAllStyles)}
                    /* mobcssEnd */			
                
                }
                `);
}

/***/ }),

/***/ "./src/template-components/apiInfo.js":
/*!********************************************!*\
  !*** ./src/template-components/apiInfo.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiInfo": function() { return /* binding */ ApiInfo; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



const ApiInfo = props => {
  const {
    attributes,
    setAttributes,
    loadingApi,
    setLoadingApi,
    openverseRegError,
    setOpenverseRegError,
    setShowForm
  } = props;
  const {
    apiInfo
  } = attributes;

  // email validation
  const [emailError, setEmailError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);

    // return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  }

  const handleEmailChange = e => {
    var email = e.target.value;
    setAttributes({
      apiInfo: {
        ...apiInfo,
        email: email
      }
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isValidEmail(apiInfo.email)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }
  }, [apiInfo.email]);
  const handleNameChange = e => {
    var name = e.target.value;
    setAttributes({
      apiInfo: {
        ...apiInfo,
        name: name
      }
    });
  };

  // Generate API
  const generateAPI = () => {
    setLoadingApi(true);
    let data = new FormData();
    data.append("action", "eb_get_registration");
    data.append("openverse_reg_nonce", EssentialBlocksLocalize.openverse_reg_nonce);
    // search
    data.append("openverseEmail", apiInfo.email);
    data.append("openverseName", apiInfo.name);
    fetch(EssentialBlocksLocalize.ajax_url, {
      method: "POST",
      body: data
    }) // wrapped
    .then(res => res.json()).then(data => {
      if (data.hasOwnProperty("client_id")) {
        setOpenverseRegError({
          status: true,
          type: "Success",
          message: data.msg
        });
        let apiData = new FormData();
        apiData.append("action", "eb_openverse_token");
        apiData.append("openverse_auth_nonce", EssentialBlocksLocalize.openverse_auth_nonce);
        return fetch(EssentialBlocksLocalize.ajax_url, {
          method: "POST",
          body: apiData
        });
      } else {
        setLoadingApi(false);
        setOpenverseRegError({
          status: true,
          type: "Error",
          message: data.name[0]
        });
      }
    }).then(response => response.json()).then(responseData => {
      // console.log(typeof responseData, responseData);
      setShowForm(false);
      setLoadingApi(false);
    }).catch(err => console.log(err));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "api-info"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "mail",
    name: "mail-form",
    id: "mail-form",
    class: "openverse-input",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("user@example.com", "eb-open-verse-block"),
    defaultValue: !apiInfo.email ? "" : apiInfo.email,
    onChange: e => handleEmailChange(e)
  }), apiInfo.email && emailError && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "eb-alert-error"
  }, emailError), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    id: "name",
    className: "openverse-input",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("My amazing project", "eb-open-verse-block"),
    defaultValue: !apiInfo.name ? "" : apiInfo.name,
    onChange: e => handleNameChange(e)
  }), openverseRegError.status && openverseRegError.type == "Error" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "eb-alert-error"
  }, openverseRegError.message), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "openverse-api-btn",
    disabled: apiInfo.email && !emailError && apiInfo.name ? false : true,
    onClick: generateAPI
  }, loadingApi ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Generating ........", "eb-open-verse-block") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Generate API", "eb-open-verse-block")));
};

/***/ }),

/***/ "./src/template-components/displayImage.js":
/*!*************************************************!*\
  !*** ./src/template-components/displayImage.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DisplayImage; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


function DisplayImage(props) {
  const {
    attributes
  } = props;
  const {
    imageurl,
    imageAttr,
    displayAttribution
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageurl,
    alt: imageAttr.title
  })), displayAttribution && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-attribution"
  }, imageAttr.title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, imageAttr.foreignUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: imageAttr.foreignUrl
  }, imageAttr.title), !imageAttr.foreignUrl && imageAttr.title), imageAttr.creator && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" By ", "eb-open-verse-block"), imageAttr.creatorUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: imageAttr.creatorUrl
  }, imageAttr.creator), !imageAttr.creatorUrl && imageAttr.creator), imageAttr.creator && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" By ", "eb-open-verse-block"), imageAttr.licenseUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" is licensed under ", "eb-open-verse-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: imageAttr.licenseUrl,
    className: "licensed-wrap"
  }, imageAttr.license + " " + imageAttr.licenseVersion)), !imageAttr.licenseUrl && imageAttr.license + " " + imageAttr.licenseVersion, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" .", "eb-open-verse-block")))));
}

/***/ }),

/***/ "./src/template-components/icons/loading-item.js":
/*!*******************************************************!*\
  !*** ./src/template-components/icons/loading-item.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingItem": function() { return /* binding */ LoadingItem; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


const LoadingItem = props => {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !function (t, e) {
      "object" == typeof exports && "undefined" != "object" ? module.exports = e() : "function" == typeof define && __webpack_require__.amdO ? define(e) : ((t = "undefined" != typeof globalThis ? globalThis : t || self).__SVGATOR_PLAYER__ = t.__SVGATOR_PLAYER__ || {}, t.__SVGATOR_PLAYER__["91c80d77"] = e());
    }(undefined, function () {
      "use strict";

      function t(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })), n.push.apply(n, r);
        }
        return n;
      }
      function e(e) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {};
          n % 2 ? t(Object(r), !0).forEach(function (t) {
            u(e, t, r[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
        }
        return e;
      }
      function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t;
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        })(t);
      }
      function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }
      function o(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
      }
      function u(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t;
      }
      function a(t) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
      }
      function s(t, e) {
        return (s = Object.setPrototypeOf || function (t, e) {
          return t.__proto__ = e, t;
        })(t, e);
      }
      function l() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function f(t, e, n) {
        return (f = l() ? Reflect.construct : function (t, e, n) {
          var r = [null];
          r.push.apply(r, e);
          var i = new (Function.bind.apply(t, r))();
          return n && s(i, n.prototype), i;
        }).apply(null, arguments);
      }
      function c(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function (t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }(t);
      }
      function h(t, e, n) {
        return (h = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
          var r = function (t, e) {
            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = a(t)););
            return t;
          }(t, e);
          if (r) {
            var i = Object.getOwnPropertyDescriptor(r, e);
            return i.get ? i.get.call(n) : i.value;
          }
        })(t, e, n || t);
      }
      function v(t) {
        return function (t) {
          if (Array.isArray(t)) return y(t);
        }(t) || function (t) {
          if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
        }(t) || function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return y(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e);
        }(t) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      Number.isInteger || (Number.isInteger = function (t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
      }), Number.EPSILON || (Number.EPSILON = 2220446049250313e-31);
      var d = g(Math.pow(10, -6));
      function g(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        if (Number.isInteger(t)) return t;
        var n = Math.pow(10, e);
        return Math.round((+t + Number.EPSILON) * n) / n;
      }
      function p(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d;
        return Math.abs(t - e) < n;
      }
      var m = Math.PI / 180;
      function b(t) {
        return t;
      }
      function k(t, e, n) {
        var r = 1 - n;
        return 3 * n * r * (t * r + e * n) + n * n * n;
      }
      function w() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return t < 0 || t > 1 || n < 0 || n > 1 ? null : p(t, e) && p(n, r) ? b : function (i) {
          if (i <= 0) return t > 0 ? i * e / t : 0 === e && n > 0 ? i * r / n : 0;
          if (i >= 1) return n < 1 ? 1 + (i - 1) * (r - 1) / (n - 1) : 1 === n && t < 1 ? 1 + (i - 1) * (e - 1) / (t - 1) : 1;
          for (var o, u = 0, a = 1; u < a;) {
            var s = k(t, n, o = (u + a) / 2);
            if (p(i, s)) break;
            s < i ? u = o : a = o;
          }
          return k(e, r, o);
        };
      }
      function x() {
        return 1;
      }
      function A(t) {
        return 1 === t ? 1 : 0;
      }
      function _() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (1 === t) {
          if (0 === e) return A;
          if (1 === e) return x;
        }
        var n = 1 / t;
        return function (t) {
          return t >= 1 ? 1 : (t += e * n) - t % n;
        };
      }
      var O = Math.sin,
        S = Math.cos,
        E = Math.acos,
        P = Math.asin,
        M = Math.tan,
        j = Math.atan2,
        B = Math.PI / 180,
        T = 180 / Math.PI,
        I = Math.sqrt,
        R = function () {
          function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
              u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
              a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            r(this, t), this.m = [e, n, i, o, u, a], this.i = null, this.w = null, this.s = null;
          }
          return o(t, [{
            key: "determinant",
            get: function () {
              var t = this.m;
              return t[0] * t[3] - t[1] * t[2];
            }
          }, {
            key: "isIdentity",
            get: function () {
              if (null === this.i) {
                var t = this.m;
                this.i = 1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3] && 0 === t[4] && 0 === t[5];
              }
              return this.i;
            }
          }, {
            key: "point",
            value: function (t, e) {
              var n = this.m;
              return {
                x: n[0] * t + n[2] * e + n[4],
                y: n[1] * t + n[3] * e + n[5]
              };
            }
          }, {
            key: "translateSelf",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
              if (!t && !e) return this;
              var n = this.m;
              return n[4] += n[0] * t + n[2] * e, n[5] += n[1] * t + n[3] * e, this.w = this.s = this.i = null, this;
            }
          }, {
            key: "rotateSelf",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
              if (t %= 360) {
                var e = O(t *= B),
                  n = S(t),
                  r = this.m,
                  i = r[0],
                  o = r[1];
                r[0] = i * n + r[2] * e, r[1] = o * n + r[3] * e, r[2] = r[2] * n - i * e, r[3] = r[3] * n - o * e, this.w = this.s = this.i = null;
              }
              return this;
            }
          }, {
            key: "scaleSelf",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
              if (1 !== t || 1 !== e) {
                var n = this.m;
                n[0] *= t, n[1] *= t, n[2] *= e, n[3] *= e, this.w = this.s = this.i = null;
              }
              return this;
            }
          }, {
            key: "skewSelf",
            value: function (t, e) {
              if (e %= 360, (t %= 360) || e) {
                var n = this.m,
                  r = n[0],
                  i = n[1],
                  o = n[2],
                  u = n[3];
                t && (t = M(t * B), n[2] += r * t, n[3] += i * t), e && (e = M(e * B), n[0] += o * e, n[1] += u * e), this.w = this.s = this.i = null;
              }
              return this;
            }
          }, {
            key: "resetSelf",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                u = this.m;
              return u[0] = t, u[1] = e, u[2] = n, u[3] = r, u[4] = i, u[5] = o, this.w = this.s = this.i = null, this;
            }
          }, {
            key: "recomposeSelf",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              return this.isIdentity || this.resetSelf(), t && (t.x || t.y) && this.translateSelf(t.x, t.y), e && this.rotateSelf(e), n && (n.x && this.skewSelf(n.x, 0), n.y && this.skewSelf(0, n.y)), !r || 1 === r.x && 1 === r.y || this.scaleSelf(r.x, r.y), i && (i.x || i.y) && this.translateSelf(i.x, i.y), this;
            }
          }, {
            key: "decompose",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = this.m,
                r = n[0] * n[0] + n[1] * n[1],
                i = [[n[0], n[1]], [n[2], n[3]]],
                o = I(r);
              if (0 === o) return {
                origin: {
                  x: g(n[4]),
                  y: g(n[5])
                },
                translate: {
                  x: g(t),
                  y: g(e)
                },
                scale: {
                  x: 0,
                  y: 0
                },
                skew: {
                  x: 0,
                  y: 0
                },
                rotate: 0
              };
              i[0][0] /= o, i[0][1] /= o;
              var u = n[0] * n[3] - n[1] * n[2] < 0;
              u && (o = -o);
              var a = i[0][0] * i[1][0] + i[0][1] * i[1][1];
              i[1][0] -= i[0][0] * a, i[1][1] -= i[0][1] * a;
              var s = I(i[1][0] * i[1][0] + i[1][1] * i[1][1]);
              if (0 === s) return {
                origin: {
                  x: g(n[4]),
                  y: g(n[5])
                },
                translate: {
                  x: g(t),
                  y: g(e)
                },
                scale: {
                  x: g(o),
                  y: 0
                },
                skew: {
                  x: 0,
                  y: 0
                },
                rotate: 0
              };
              i[1][0] /= s, i[1][1] /= s, a /= s;
              var l = 0;
              return i[1][1] < 0 ? (l = E(i[1][1]) * T, i[0][1] < 0 && (l = 360 - l)) : l = P(i[0][1]) * T, u && (l = -l), a = j(a, I(i[0][0] * i[0][0] + i[0][1] * i[0][1])) * T, u && (a = -a), {
                origin: {
                  x: g(n[4]),
                  y: g(n[5])
                },
                translate: {
                  x: g(t),
                  y: g(e)
                },
                scale: {
                  x: g(o),
                  y: g(s)
                },
                skew: {
                  x: g(a),
                  y: 0
                },
                rotate: g(l)
              };
            }
          }, {
            key: "clone",
            value: function () {
              var t = this.m;
              return new this.constructor(t[0], t[1], t[2], t[3], t[4], t[5]);
            }
          }, {
            key: "toString",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : " ";
              if (null === this.s) {
                var e = this.m.map(function (t) {
                  return g(t);
                });
                1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3] ? this.s = "translate(" + e[4] + t + e[5] + ")" : this.s = "matrix(" + e.join(t) + ")";
              }
              return this.s;
            }
          }], [{
            key: "create",
            value: function (t) {
              return t ? Array.isArray(t) ? f(this, v(t)) : t instanceof this ? t.clone() : new this().recomposeSelf(t.origin, t.rotate, t.skew, t.scale, t.translate) : new this();
            }
          }]), t;
        }();
      function N(t, e, n) {
        return t >= 0.5 ? n : e;
      }
      function F(t, e, n) {
        return 0 === t || e === n ? e : t * (n - e) + e;
      }
      function C(t, e, n) {
        var r = F(t, e, n);
        return r <= 0 ? 0 : r;
      }
      function L(t, e, n) {
        var r = F(t, e, n);
        return r <= 0 ? 0 : r >= 1 ? 1 : r;
      }
      function D(t, e, n) {
        return 0 === t ? e : 1 === t ? n : {
          x: F(t, e.x, n.x),
          y: F(t, e.y, n.y)
        };
      }
      function q(t, e, n) {
        return 0 === t ? e : 1 === t ? n : {
          x: C(t, e.x, n.x),
          y: C(t, e.y, n.y)
        };
      }
      function V(t, e, n) {
        var r = function (t, e, n) {
          return Math.round(F(t, e, n));
        }(t, e, n);
        return r <= 0 ? 0 : r >= 255 ? 255 : r;
      }
      function z(t, e, n) {
        return 0 === t ? e : 1 === t ? n : {
          r: V(t, e.r, n.r),
          g: V(t, e.g, n.g),
          b: V(t, e.b, n.b),
          a: F(t, null == e.a ? 1 : e.a, null == n.a ? 1 : n.a)
        };
      }
      function Y(t, e, n) {
        var r = e.length;
        if (r !== n.length) return N(t, e, n);
        for (var i = new Array(r), o = 0; o < r; o++) i[o] = F(t, e[o], n[o]);
        return i;
      }
      function G(t, e) {
        for (var n = [], r = 0; r < t; r++) n.push(e);
        return n;
      }
      function U(t, e) {
        if (--e <= 0) return t;
        var n = (t = Object.assign([], t)).length;
        do {
          for (var r = 0; r < n; r++) t.push(t[r]);
        } while (--e > 0);
        return t;
      }
      var $,
        W = function () {
          function t(e) {
            r(this, t), this.list = e, this.length = e.length;
          }
          return o(t, [{
            key: "setAttribute",
            value: function (t, e) {
              for (var n = this.list, r = 0; r < this.length; r++) n[r].setAttribute(t, e);
            }
          }, {
            key: "removeAttribute",
            value: function (t) {
              for (var e = this.list, n = 0; n < this.length; n++) e[n].removeAttribute(t);
            }
          }, {
            key: "style",
            value: function (t, e) {
              for (var n = this.list, r = 0; r < this.length; r++) n[r].style[t] = e;
            }
          }]), t;
        }(),
        H = /-./g,
        Q = function (t, e) {
          return e.toUpperCase();
        };
      function X(t) {
        return "function" == typeof t ? t : N;
      }
      function J(t) {
        return t ? "function" == typeof t ? t : Array.isArray(t) ? function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
          if (!Array.isArray(t)) return e;
          switch (t.length) {
            case 1:
              return _(t[0]) || e;
            case 2:
              return _(t[0], t[1]) || e;
            case 4:
              return w(t[0], t[1], t[2], t[3]) || e;
          }
          return e;
        }(t, null) : function (t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
          switch (t) {
            case "linear":
              return b;
            case "steps":
              return _(e.steps || 1, e.jump || 0) || n;
            case "bezier":
            case "cubic-bezier":
              return w(e.x1 || 0, e.y1 || 0, e.x2 || 0, e.y2 || 0) || n;
          }
          return n;
        }(t.type, t.value, null) : null;
      }
      function K(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = e.length - 1;
        if (t <= e[0].t) return r ? [0, 0, e[0].v] : e[0].v;
        if (t >= e[i].t) return r ? [i, 1, e[i].v] : e[i].v;
        var o,
          u = e[0],
          a = null;
        for (o = 1; o <= i; o++) {
          if (!(t > e[o].t)) {
            a = e[o];
            break;
          }
          u = e[o];
        }
        return null == a ? r ? [i, 1, e[i].v] : e[i].v : u.t === a.t ? r ? [o, 1, a.v] : a.v : (t = (t - u.t) / (a.t - u.t), u.e && (t = u.e(t)), r ? [o, t, n(t, u.v, a.v)] : n(t, u.v, a.v));
      }
      function Z(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return t && t.length ? "function" != typeof e ? null : ("function" != typeof n && (n = null), function (r) {
          var i = K(r, t, e);
          return null != i && n && (i = n(i)), i;
        }) : null;
      }
      function tt(t, e) {
        return t.t - e.t;
      }
      function et(t, e, r, i, o) {
        var u,
          a = "@" === r[0],
          s = "#" === r[0],
          l = $[r],
          f = N;
        switch (a ? (u = r.substr(1), r = u.replace(H, Q)) : s && (r = r.substr(1)), n(l)) {
          case "function":
            if (f = l(i, o, K, J, r, a, e, t), s) return f;
            break;
          case "string":
            f = Z(i, X(l));
            break;
          case "object":
            if ((f = Z(i, X(l.i), l.f)) && "function" == typeof l.u) return l.u(e, f, r, a, t);
        }
        return f ? function (t, e, n) {
          if (arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) return t instanceof W ? function (r) {
            return t.style(e, n(r));
          } : function (r) {
            return t.style[e] = n(r);
          };
          if (Array.isArray(e)) {
            var r = e.length;
            return function (i) {
              var o = n(i);
              if (null == o) for (var u = 0; u < r; u++) t[u].removeAttribute(e);else for (var a = 0; a < r; a++) t[a].setAttribute(e, o);
            };
          }
          return function (r) {
            var i = n(r);
            null == i ? t.removeAttribute(e) : t.setAttribute(e, i);
          };
        }(e, r, f, a) : null;
      }
      function nt(t, e, r, i) {
        if (!i || "object" !== n(i)) return null;
        var o = null,
          u = null;
        return Array.isArray(i) ? u = function (t) {
          if (!t || !t.length) return null;
          for (var e = 0; e < t.length; e++) t[e].e && (t[e].e = J(t[e].e));
          return t.sort(tt);
        }(i) : (u = i.keys, o = i.data || null), u ? et(t, e, r, u, o) : null;
      }
      function rt(t, e, n) {
        if (!n) return null;
        var r = [];
        for (var i in n) if (n.hasOwnProperty(i)) {
          var o = nt(t, e, i, n[i]);
          o && r.push(o);
        }
        return r.length ? r : null;
      }
      function it(t, e) {
        if (!e.settings.duration || e.settings.duration < 0) return null;
        var n,
          r,
          i,
          o,
          u,
          a = function (t, e) {
            if (!e) return null;
            var n = [];
            if (Array.isArray(e)) for (var r = e.length, i = 0; i < r; i++) {
              var o = e[i];
              if (2 === o.length) {
                var u = null;
                if ("string" == typeof o[0]) u = t.getElementById(o[0]);else if (Array.isArray(o[0])) {
                  u = [];
                  for (var a = 0; a < o[0].length; a++) if ("string" == typeof o[0][a]) {
                    var s = t.getElementById(o[0][a]);
                    s && u.push(s);
                  }
                  u = u.length ? 1 === u.length ? u[0] : new W(u) : null;
                }
                if (u) {
                  var l = rt(t, u, o[1]);
                  l && (n = n.concat(l));
                }
              }
            } else for (var f in e) if (e.hasOwnProperty(f)) {
              var c = t.getElementById(f);
              if (c) {
                var h = rt(t, c, e[f]);
                h && (n = n.concat(h));
              }
            }
            return n.length ? n : null;
          }(t, e.elements);
        return a ? (n = a, r = e.settings, i = r.duration, o = n.length, u = null, function (t, e) {
          var a = r.iterations || 1 / 0,
            s = (r.alternate && a % 2 == 0) ^ r.direction > 0 ? i : 0,
            l = t % i,
            f = 1 + (t - l) / i;
          e *= r.direction, r.alternate && f % 2 == 0 && (e = -e);
          var c = !1;
          if (f > a) l = s, c = !0, -1 === r.fill && (l = r.direction > 0 ? 0 : i);else if (e < 0 && (l = i - l), l === u) return !1;
          u = l;
          for (var h = 0; h < o; h++) n[h](l);
          return c;
        }) : null;
      }
      function ot(t, e) {
        if ($ = e, !t || !t.root || !Array.isArray(t.animations)) return null;
        var n = function (t) {
          for (var e = document.getElementsByTagName("svg"), n = 0; n < e.length; n++) if (e[n].id === t.root && !e[n].svgatorAnimation) return e[n].svgatorAnimation = !0, e[n];
          return null;
        }(t);
        if (!n) return null;
        var r = t.animations.map(function (t) {
          return it(n, t);
        }).filter(function (t) {
          return !!t;
        });
        return r.length ? {
          svg: n,
          animations: r,
          animationSettings: t.animationSettings,
          options: t.options || void 0
        } : null;
      }
      function ut(t) {
        return +("0x" + (t.replace(/[^0-9a-fA-F]+/g, "") || 27));
      }
      function at(t, e, n) {
        return !t || !n || e > t.length ? t : t.substring(0, e) + at(t.substring(e + 1), n, n);
      }
      function st(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 27;
        return !t || t % e ? t % e : st(t / e, e);
      }
      function lt(t, e, n) {
        if (t && t.length) {
          var r = ut(n),
            i = ut(e),
            o = st(r) + 5,
            u = at(t, st(r, 5), o);
          return u = u.replace(/\x7c$/g, "==").replace(/\x2f$/g, "="), u = function (t, e, n) {
            var r = +("0x" + t.substring(0, 4));
            t = t.substring(4);
            for (var i = e % r + n % 27, o = [], u = 0; u < t.length; u += 2) if ("|" !== t[u]) {
              var a = +("0x" + t[u] + t[u + 1]) - i;
              o.push(a);
            } else {
              var s = +("0x" + t.substring(u + 1, u + 1 + 4)) - i;
              u += 3, o.push(s);
            }
            return String.fromCharCode.apply(String, o);
          }(u = (u = atob(u)).replace(/[\x41-\x5A]/g, ""), i, r), u = JSON.parse(u);
        }
      }
      var ft = [{
          key: "alternate",
          def: !1
        }, {
          key: "fill",
          def: 1
        }, {
          key: "iterations",
          def: 0
        }, {
          key: "direction",
          def: 1
        }, {
          key: "speed",
          def: 1
        }, {
          key: "fps",
          def: 100
        }],
        ct = function () {
          function t(e, n) {
            var i = this,
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            r(this, t), this._id = 0, this._running = !1, this._rollingBack = !1, this._animations = e, this._settings = n, (!o || o < "2022-05-02") && delete this._settings.speed, ft.forEach(function (t) {
              i._settings[t.key] = i._settings[t.key] || t.def;
            }), this.duration = n.duration, this.offset = n.offset || 0, this.rollbackStartOffset = 0;
          }
          return o(t, [{
            key: "alternate",
            get: function () {
              return this._settings.alternate;
            }
          }, {
            key: "fill",
            get: function () {
              return this._settings.fill;
            }
          }, {
            key: "iterations",
            get: function () {
              return this._settings.iterations;
            }
          }, {
            key: "direction",
            get: function () {
              return this._settings.direction;
            }
          }, {
            key: "speed",
            get: function () {
              return this._settings.speed;
            }
          }, {
            key: "fps",
            get: function () {
              return this._settings.fps;
            }
          }, {
            key: "maxFiniteDuration",
            get: function () {
              return this.iterations > 0 ? this.iterations * this.duration : this.duration;
            }
          }, {
            key: "_apply",
            value: function (t) {
              for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = this._animations, r = n.length, i = 0, o = 0; o < r; o++) e[o] ? i++ : (e[o] = n[o](t, 1), e[o] && i++);
              return i;
            }
          }, {
            key: "_rollback",
            value: function (t) {
              var e = this,
                n = 1 / 0,
                r = null;
              this.rollbackStartOffset = t, this._rollingBack = !0, this._running = !0;
              this._id = window.requestAnimationFrame(function i(o) {
                if (e._rollingBack) {
                  null == r && (r = o);
                  var u = Math.round(t - (o - r) * e.speed);
                  if (u > e.duration && n !== 1 / 0) {
                    var a = !!e.alternate && u / e.duration % 2 > 1,
                      s = u % e.duration;
                    u = (s += a ? e.duration : 0) || e.duration;
                  }
                  var l = (e.fps ? 1e3 / e.fps : 0) * e.speed,
                    f = Math.max(0, u);
                  f < n - l && (e.offset = f, n = f, e._apply(f));
                  var c = e.iterations > 0 && -1 === e.fill && u >= e.maxFiniteDuration;
                  (u <= 0 || e.offset < u || c) && e.stop(), e._id = window.requestAnimationFrame(i);
                }
              });
            }
          }, {
            key: "_start",
            value: function () {
              var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                n = -1 / 0,
                r = null,
                i = {};
              this._running = !0;
              var o = function o(u) {
                null == r && (r = u);
                var a = Math.round((u - r) * t.speed + e),
                  s = (t.fps ? 1e3 / t.fps : 0) * t.speed;
                if (a > n + s && !t._rollingBack && (t.offset = a, n = a, t._apply(a, i) === t._animations.length)) return void t.pause(!0);
                t._id = window.requestAnimationFrame(o);
              };
              this._id = window.requestAnimationFrame(o);
            }
          }, {
            key: "_pause",
            value: function () {
              this._id && window.cancelAnimationFrame(this._id), this._running = !1;
            }
          }, {
            key: "play",
            value: function () {
              if (!this._running) return this._rollingBack ? this._rollback(this.offset) : this._start(this.offset);
            }
          }, {
            key: "stop",
            value: function () {
              this._pause(), this.offset = 0, this.rollbackStartOffset = 0, this._rollingBack = !1, this._apply(0);
            }
          }, {
            key: "reachedToEnd",
            value: function () {
              return this.iterations > 0 && this.offset >= this.iterations * this.duration;
            }
          }, {
            key: "restart",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              this.stop(t), this.play(t);
            }
          }, {
            key: "pause",
            value: function () {
              this._pause();
            }
          }, {
            key: "reverse",
            value: function () {
              this.direction = -this.direction;
            }
          }], [{
            key: "build",
            value: function (t, e) {
              delete t.animationSettings, t.options = lt(t.options, t.root, "91c80d77"), t.animations.map(function (e) {
                e.settings = lt(e.s, t.root, "91c80d77"), delete e.s, t.animationSettings || (t.animationSettings = e.settings);
              });
              var n = t.version;
              if (!(t = ot(t, e))) return null;
              var r = t.options || {},
                i = new this(t.animations, t.animationSettings, n);
              return {
                el: t.svg,
                options: r,
                player: i
              };
            }
          }, {
            key: "push",
            value: function (t) {
              return this.build(t);
            }
          }, {
            key: "init",
            value: function () {
              var t = this,
                e = window.__SVGATOR_PLAYER__ && window.__SVGATOR_PLAYER__["91c80d77"];
              Array.isArray(e) && e.splice(0).forEach(function (e) {
                return t.build(e);
              });
            }
          }]), t;
        }();
      !function () {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (e) {
          var n = Date.now(),
            r = Math.max(0, 16 - (n - t)),
            i = window.setTimeout(function () {
              e(n + r);
            }, r);
          return t = n + r, i;
        }, window.cancelAnimationFrame = window.clearTimeout);
      }();
      var ht = function (t, e) {
          var n = !1,
            r = null;
          return function (i) {
            n && clearTimeout(n), n = setTimeout(function () {
              return function () {
                for (var i = 0, o = window.innerHeight, u = 0, a = window.innerWidth, s = t.parentNode; s instanceof Element;) {
                  var l = window.getComputedStyle(s);
                  if ("visible" !== l.overflowY || "visible" !== l.overflowX) {
                    var f = s.getBoundingClientRect();
                    "visible" !== l.overflowY && (i = Math.max(i, f.top), o = Math.min(o, f.bottom)), "visible" !== l.overflowX && (u = Math.max(u, f.left), a = Math.min(a, f.right));
                  }
                  if (s === s.parentNode) break;
                  s = s.parentNode;
                }
                n = !1;
                var c = t.getBoundingClientRect(),
                  h = Math.min(c.height, Math.max(0, i - c.top)),
                  v = Math.min(c.height, Math.max(0, c.bottom - o)),
                  y = Math.min(c.width, Math.max(0, u - c.left)),
                  d = Math.min(c.width, Math.max(0, c.right - a)),
                  g = (c.height - h - v) / c.height,
                  p = (c.width - y - d) / c.width,
                  m = Math.round(g * p * 100);
                null !== r && r === m || (r = m, e(m));
              }();
            }, 100);
          };
        },
        vt = function () {
          function t(e, n, i) {
            r(this, t), n = Math.max(1, n || 1), n = Math.min(n, 100), this.el = e, this._handlers = [], this.onThresholdChange = i && i.call ? i : function () {}, this.thresholdPercent = n || 1, this.currentVisibility = null, this.visibilityCalculator = ht(e, this.onVisibilityUpdate.bind(this)), this.bindScrollWatchers(), this.visibilityCalculator();
          }
          return o(t, [{
            key: "bindScrollWatchers",
            value: function () {
              for (var t = this.el.parentNode; t && (this._handlers.push({
                element: t,
                event: "scroll",
                handler: this.visibilityCalculator
              }), t.addEventListener("scroll", this.visibilityCalculator), t !== t.parentNode && t !== document);) t = t.parentNode;
            }
          }, {
            key: "onVisibilityUpdate",
            value: function (t) {
              var e = this.currentVisibility >= this.thresholdPercent,
                n = t >= this.thresholdPercent;
              if (null === this.currentVisibility || e !== n) return this.currentVisibility = t, void this.onThresholdChange(n);
              this.currentVisibility = t;
            }
          }, {
            key: "destruct",
            value: function () {
              this._handlers.forEach(function (t) {
                t.element.removeEventListener(t.event, t.handler);
              });
            }
          }]), t;
        }();
      function yt(t) {
        return g(t) + "";
      }
      function dt(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
        return t && t.length ? t.map(yt).join(e) : "";
      }
      function gt(t) {
        return yt(t.x) + "," + yt(t.y);
      }
      function pt(t) {
        if (!t) return "transparent";
        if (null == t.a || t.a >= 1) {
          var e = function (t) {
              return 1 === (t = parseInt(t).toString(16)).length ? "0" + t : t;
            },
            n = function (t) {
              return t.charAt(0) === t.charAt(1);
            },
            r = e(t.r),
            i = e(t.g),
            o = e(t.b);
          return n(r) && n(i) && n(o) && (r = r.charAt(0), i = i.charAt(0), o = o.charAt(0)), "#" + r + i + o;
        }
        return "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")";
      }
      function mt(t) {
        return t ? "url(#" + t + ")" : "none";
      }
      var bt = {
          f: null,
          i: q,
          u: function (t, e) {
            return function (n) {
              var r = e(n);
              t.setAttribute("rx", yt(r.x)), t.setAttribute("ry", yt(r.y));
            };
          }
        },
        kt = {
          f: null,
          i: function (t, e, n) {
            return 0 === t ? e : 1 === t ? n : {
              width: C(t, e.width, n.width),
              height: C(t, e.height, n.height)
            };
          },
          u: function (t, e) {
            return function (n) {
              var r = e(n);
              t.setAttribute("width", yt(r.width)), t.setAttribute("height", yt(r.height));
            };
          }
        };
      Object.freeze({
        M: 2,
        L: 2,
        Z: 0,
        H: 1,
        V: 1,
        C: 6,
        Q: 4,
        T: 2,
        S: 4,
        A: 7
      });
      var wt = {},
        xt = null;
      function At(t) {
        var e = function () {
          if (xt) return xt;
          if ("object" !== ("undefined" == typeof document ? "undefined" : n(document)) || !document.createElementNS) return {};
          var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          return t && t.style ? (t.style.position = "absolute", t.style.opacity = "0.01", t.style.zIndex = "-9999", t.style.left = "-9999px", t.style.width = "1px", t.style.height = "1px", xt = {
            svg: t
          }) : {};
        }().svg;
        if (!e) return function (t) {
          return null;
        };
        var r = document.createElementNS(e.namespaceURI, "path");
        r.setAttributeNS(null, "d", t), r.setAttributeNS(null, "fill", "none"), r.setAttributeNS(null, "stroke", "none"), e.appendChild(r);
        var i = r.getTotalLength();
        return function (t) {
          var e = r.getPointAtLength(i * t);
          return {
            x: e.x,
            y: e.y
          };
        };
      }
      function _t(t) {
        return wt[t] ? wt[t] : wt[t] = At(t);
      }
      function Ot(t, e, n, r) {
        if (!t || !r) return !1;
        var i = ["M", t.x, t.y];
        if (e && n && (i.push("C"), i.push(e.x), i.push(e.y), i.push(n.x), i.push(n.y)), e ? !n : n) {
          var o = e || n;
          i.push("Q"), i.push(o.x), i.push(o.y);
        }
        return e || n || i.push("L"), i.push(r.x), i.push(r.y), i.join(" ");
      }
      function St(t, e, n, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          o = Ot(t, e, n, r),
          u = _t(o);
        try {
          return u(i);
        } catch (t) {
          return null;
        }
      }
      function Et(t, e, n) {
        return t + (e - t) * n;
      }
      function Pt(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = {
            x: Et(t.x, e.x, n),
            y: Et(t.y, e.y, n)
          };
        return r && (i.a = Mt(t, e)), i;
      }
      function Mt(t, e) {
        return Math.atan2(e.y - t.y, e.x - t.x);
      }
      function jt(t, e, n, r) {
        var i = 1 - r;
        return i * i * t + 2 * i * r * e + r * r * n;
      }
      function Bt(t, e, n, r) {
        return 2 * (1 - r) * (e - t) + 2 * r * (n - e);
      }
      function Tt(t, e, n, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          o = St(t, e, null, n, r);
        return o || (o = {
          x: jt(t.x, e.x, n.x, r),
          y: jt(t.y, e.y, n.y, r)
        }), i && (o.a = It(t, e, n, r)), o;
      }
      function It(t, e, n, r) {
        return Math.atan2(Bt(t.y, e.y, n.y, r), Bt(t.x, e.x, n.x, r));
      }
      function Rt(t, e, n, r, i) {
        var o = i * i;
        return i * o * (r - t + 3 * (e - n)) + 3 * o * (t + n - 2 * e) + 3 * i * (e - t) + t;
      }
      function Nt(t, e, n, r, i) {
        var o = 1 - i;
        return 3 * (o * o * (e - t) + 2 * o * i * (n - e) + i * i * (r - n));
      }
      function Ft(t, e, n, r, i) {
        var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          u = St(t, e, n, r, i);
        return u || (u = {
          x: Rt(t.x, e.x, n.x, r.x, i),
          y: Rt(t.y, e.y, n.y, r.y, i)
        }), o && (u.a = Ct(t, e, n, r, i)), u;
      }
      function Ct(t, e, n, r, i) {
        return Math.atan2(Nt(t.y, e.y, n.y, r.y, i), Nt(t.x, e.x, n.x, r.x, i));
      }
      function Lt(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (qt(e)) {
          if (Vt(n)) return Tt(e, n.start, n, t, r);
        } else if (qt(n)) {
          if (zt(e)) return Tt(e, e.end, n, t, r);
        } else {
          if (zt(e)) return Vt(n) ? Ft(e, e.end, n.start, n, t, r) : Tt(e, e.end, n, t, r);
          if (Vt(n)) return Tt(e, n.start, n, t, r);
        }
        return Pt(e, n, t, r);
      }
      function Dt(t, e, n) {
        var r = Lt(t, e, n, !0);
        return r.a = function (t) {
          return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? t + Math.PI : t;
        }(r.a) / m, r;
      }
      function qt(t) {
        return !t.type || "corner" === t.type;
      }
      function Vt(t) {
        return null != t.start && !qt(t);
      }
      function zt(t) {
        return null != t.end && !qt(t);
      }
      var Yt = new R();
      var Gt = {
          f: function (t) {
            return t ? t.join(" ") : "";
          },
          i: function (t, e, r) {
            if (0 === t) return e;
            if (1 === t) return r;
            var i = e.length;
            if (i !== r.length) return N(t, e, r);
            for (var o, u = new Array(i), a = 0; a < i; a++) {
              if ((o = n(e[a])) !== n(r[a])) return N(t, e, r);
              if ("number" === o) u[a] = F(t, e[a], r[a]);else {
                if (e[a] !== r[a]) return N(t, e, r);
                u[a] = e[a];
              }
            }
            return u;
          }
        },
        Ut = {
          f: null,
          i: Y,
          u: function (t, e) {
            return function (n) {
              var r = e(n);
              t.setAttribute("x1", yt(r[0])), t.setAttribute("y1", yt(r[1])), t.setAttribute("x2", yt(r[2])), t.setAttribute("y2", yt(r[3]));
            };
          }
        },
        $t = {
          f: yt,
          i: F
        },
        Wt = {
          f: yt,
          i: L
        },
        Ht = {
          f: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
            return t && t.length > 0 && (t = t.map(function (t) {
              return g(t, 4);
            })), dt(t, e);
          },
          i: function (t, e, n) {
            var r,
              i,
              o,
              u = e.length,
              a = n.length;
            if (u !== a) if (0 === u) e = G(u = a, 0);else if (0 === a) a = u, n = G(u, 0);else {
              var s = (o = (r = u) * (i = a) / function (t, e) {
                for (var n; e;) n = e, e = t % e, t = n;
                return t || 1;
              }(r, i)) < 0 ? -o : o;
              e = U(e, Math.floor(s / u)), n = U(n, Math.floor(s / a)), u = a = s;
            }
            for (var l = [], f = 0; f < u; f++) l.push(g(C(t, e[f], n[f])));
            return l;
          }
        };
      function Qt(t, e, n) {
        return t.map(function (t) {
          return function (t, e, n) {
            var r = t.v;
            if (!r || "g" !== r.t || r.s || !r.v || !r.r) return t;
            var i = n.getElementById(r.r),
              o = i && i.querySelectorAll("stop") || [];
            return r.s = r.v.map(function (t, e) {
              var n = o[e] && o[e].getAttribute("offset");
              return {
                c: t,
                o: n = g(parseInt(n) / 100)
              };
            }), delete r.v, t;
          }(t, 0, n);
        });
      }
      var Xt = {
        gt: "gradientTransform",
        c: {
          x: "cx",
          y: "cy"
        },
        rd: "r",
        f: {
          x: "x1",
          y: "y1"
        },
        to: {
          x: "x2",
          y: "y2"
        }
      };
      function Jt(t, e, r, i, o, u, a, s) {
        return Qt(t, 0, s), e = function (t, e, n) {
          for (var r, i, o, u = t.length - 1, a = {}, s = 0; s <= u; s++) (r = t[s]).e && (r.e = e(r.e)), r.v && "g" === (i = r.v).t && i.r && (o = n.getElementById(i.r)) && (a[i.r] = {
            e: o,
            s: o.querySelectorAll("stop")
          });
          return a;
        }(t, i, s), function (i) {
          var o = r(i, t, Kt);
          if (!o) return "none";
          if ("c" === o.t) return pt(o.v);
          if ("g" === o.t) {
            if (!e[o.r]) return mt(o.r);
            var u = e[o.r];
            return function (t, e) {
              for (var n = t.s, r = n.length; r < e.length; r++) {
                var i = n[n.length - 1].cloneNode();
                i.id = ee(i.id), t.e.appendChild(i), n = t.s = t.e.querySelectorAll("stop");
              }
              for (var o = 0, u = n.length, a = e.length - 1; o < u; o++) n[o].setAttribute("stop-color", pt(e[Math.min(o, a)].c)), n[o].setAttribute("offset", e[Math.min(o, a)].o);
            }(u, o.s), Object.keys(Xt).forEach(function (t) {
              if (void 0 !== o[t]) if ("object" !== n(Xt[t])) {
                var e,
                  r = "gt" === t ? (e = o[t], Array.isArray(e) ? "matrix(" + e.join(" ") + ")" : "") : o[t],
                  i = Xt[t];
                u.e.setAttribute(i, r);
              } else Object.keys(Xt[t]).forEach(function (e) {
                if (void 0 !== o[t][e]) {
                  var n = o[t][e],
                    r = Xt[t][e];
                  u.e.setAttribute(r, n);
                }
              });
            }), mt(o.r);
          }
          return "none";
        };
      }
      function Kt(t, n, r) {
        if (0 === t) return n;
        if (1 === t) return r;
        if (n && r) {
          var i = n.t;
          if (i === r.t) switch (n.t) {
            case "c":
              return {
                t: i,
                v: z(t, n.v, r.v)
              };
            case "g":
              if (n.r === r.r) {
                var o = {
                  t: i,
                  s: Zt(t, n.s, r.s),
                  r: n.r
                };
                return n.gt && r.gt && (o.gt = Y(t, n.gt, r.gt)), n.c ? (o.c = D(t, n.c, r.c), o.rd = C(t, n.rd, r.rd)) : n.f && (o.f = D(t, n.f, r.f), o.to = D(t, n.to, r.to)), o;
              }
          }
          if ("c" === n.t && "g" === r.t || "c" === r.t && "g" === n.t) {
            var u = "c" === n.t ? n : r,
              a = "g" === n.t ? e({}, n) : e({}, r),
              s = a.s.map(function (t) {
                return {
                  c: u.v,
                  o: t.o
                };
              });
            return a.s = "c" === n.t ? Zt(t, s, a.s) : Zt(t, a.s, s), a;
          }
        }
        return N(t, n, r);
      }
      function Zt(t, e, n) {
        if (e.length === n.length) return e.map(function (e, r) {
          return te(t, e, n[r]);
        });
        for (var r = Math.max(e.length, n.length), i = [], o = 0; o < r; o++) {
          var u = te(t, e[Math.min(o, e.length - 1)], n[Math.min(o, n.length - 1)]);
          i.push(u);
        }
        return i;
      }
      function te(t, e, n) {
        return {
          o: L(t, e.o, n.o || 0),
          c: z(t, e.c, n.c || {})
        };
      }
      function ee(t) {
        return t.replace(/-fill-([0-9]+)$/, function (t, e) {
          return "-fill-" + (+e + 1);
        });
      }
      var ne = {
        blur: q,
        brightness: C,
        contrast: C,
        "drop-shadow": function (t, e, n) {
          return 0 === t ? e : 1 === t ? n : {
            blur: q(t, e.blur, n.blur),
            offset: D(t, e.offset, n.offset),
            color: z(t, e.color, n.color)
          };
        },
        grayscale: C,
        "hue-rotate": F,
        invert: C,
        opacity: C,
        saturate: C,
        sepia: C
      };
      function re(t, e, n) {
        if (0 === t) return e;
        if (1 === t) return n;
        var r = e.length;
        if (r !== n.length) return N(t, e, n);
        for (var i, o = [], u = 0; u < r; u++) {
          if (e[u].type !== n[u].type) return e;
          if (!(i = ne[e[u].type])) return N(t, e, n);
          o.push({
            type: e.type,
            value: i(t, e[u].value, n[u].value)
          });
        }
        return o;
      }
      var ie = {
        blur: function (t) {
          return t ? function (e) {
            t.setAttribute("stdDeviation", gt(e));
          } : null;
        },
        brightness: function (t, e, n) {
          return (t = ue(n, e)) ? function (e) {
            e = yt(e), t.map(function (t) {
              return t.setAttribute("slope", e);
            });
          } : null;
        },
        contrast: function (t, e, n) {
          return (t = ue(n, e)) ? function (e) {
            var n = yt((1 - e) / 2);
            e = yt(e), t.map(function (t) {
              t.setAttribute("slope", e), t.setAttribute("intercept", n);
            });
          } : null;
        },
        "drop-shadow": function (t, e, n) {
          var r = n.getElementById(e + "-blur");
          if (!r) return null;
          var i = n.getElementById(e + "-offset");
          if (!i) return null;
          var o = n.getElementById(e + "-flood");
          return o ? function (t) {
            r.setAttribute("stdDeviation", gt(t.blur)), i.setAttribute("dx", yt(t.offset.x)), i.setAttribute("dy", yt(t.offset.y)), o.setAttribute("flood-color", pt(t.color));
          } : null;
        },
        grayscale: function (t) {
          return t ? function (e) {
            t.setAttribute("values", dt(function (t) {
              return [0.2126 + 0.7874 * (t = 1 - t), 0.7152 - 0.7152 * t, 0.0722 - 0.0722 * t, 0, 0, 0.2126 - 0.2126 * t, 0.7152 + 0.2848 * t, 0.0722 - 0.0722 * t, 0, 0, 0.2126 - 0.2126 * t, 0.7152 - 0.7152 * t, 0.0722 + 0.9278 * t, 0, 0, 0, 0, 0, 1, 0];
            }(e)));
          } : null;
        },
        "hue-rotate": function (t) {
          return t ? function (e) {
            return t.setAttribute("values", yt(e));
          } : null;
        },
        invert: function (t, e, n) {
          return (t = ue(n, e)) ? function (e) {
            e = yt(e) + " " + yt(1 - e), t.map(function (t) {
              return t.setAttribute("tableValues", e);
            });
          } : null;
        },
        opacity: function (t, e, n) {
          return (t = n.getElementById(e + "-A")) ? function (e) {
            return t.setAttribute("tableValues", "0 " + yt(e));
          } : null;
        },
        saturate: function (t) {
          return t ? function (e) {
            return t.setAttribute("values", yt(e));
          } : null;
        },
        sepia: function (t) {
          return t ? function (e) {
            return t.setAttribute("values", dt(function (t) {
              return [0.393 + 0.607 * (t = 1 - t), 0.769 - 0.769 * t, 0.189 - 0.189 * t, 0, 0, 0.349 - 0.349 * t, 0.686 + 0.314 * t, 0.168 - 0.168 * t, 0, 0, 0.272 - 0.272 * t, 0.534 - 0.534 * t, 0.131 + 0.869 * t, 0, 0, 0, 0, 0, 1, 0];
            }(e)));
          } : null;
        }
      };
      var oe = ["R", "G", "B"];
      function ue(t, e) {
        var n = oe.map(function (n) {
          return t.getElementById(e + "-" + n) || null;
        });
        return -1 !== n.indexOf(null) ? null : n;
      }
      var ae = {
          fill: Jt,
          "fill-opacity": Wt,
          stroke: Jt,
          "stroke-opacity": Wt,
          "stroke-width": $t,
          "stroke-dashoffset": {
            f: yt,
            i: F
          },
          "stroke-dasharray": Ht,
          opacity: Wt,
          transform: function (t, e, r, i) {
            if (!(t = function (t, e) {
              if (!t || "object" !== n(t)) return null;
              var r = !1;
              for (var i in t) t.hasOwnProperty(i) && (t[i] && t[i].length ? (t[i].forEach(function (t) {
                t.e && (t.e = e(t.e));
              }), r = !0) : delete t[i]);
              return r ? t : null;
            }(t, i))) return null;
            var o = function (n, i, o) {
              var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              return t[n] ? r(i, t[n], o) : e && e[n] ? e[n] : u;
            };
            return e && e.a && t.o ? function (e) {
              var n = r(e, t.o, Dt);
              return Yt.recomposeSelf(n, o("r", e, F, 0) + n.a, o("k", e, D), o("s", e, D), o("t", e, D)).toString();
            } : function (t) {
              return Yt.recomposeSelf(o("o", t, Lt, null), o("r", t, F, 0), o("k", t, D), o("s", t, D), o("t", t, D)).toString();
            };
          },
          "#filter": function (t, e, n, r, i, o, u, a) {
            if (!e.items || !t || !t.length) return null;
            var s = function (t, e) {
              var n = (t = t.map(function (t) {
                return t && ie[t[0]] ? (e.getElementById(t[1]), ie[t[0]](e.getElementById(t[1]), t[1], e)) : null;
              })).length;
              return function (e) {
                for (var r = 0; r < n; r++) t[r] && t[r](e[r].value);
              };
            }(e.items, a);
            return s ? (t = function (t, e) {
              return t.map(function (t) {
                return t.e = e(t.e), t;
              });
            }(t, r), function (e) {
              s(n(e, t, re));
            }) : null;
          },
          "#line": Ut,
          points: {
            f: dt,
            i: Y
          },
          d: Gt,
          r: $t,
          "#size": kt,
          "#radius": bt,
          _: function (t, e) {
            if (Array.isArray(t)) for (var n = 0; n < t.length; n++) this[t[n]] = e;else this[t] = e;
          }
        },
        se = {
          currentTime: "offset",
          duration: "duration",
          hasEnded: function () {
            return this.reachedToEnd();
          },
          isAlternate: "alternate",
          isPlaying: "_running",
          isRollingBack: "_rollingBack",
          state: function (t, e) {
            return e.isPlaying ? e.isRollingBack ? "rollback" : "playing" : e.hasEnded ? "ended" : "paused";
          },
          totalTime: "maxFiniteDuration",
          iterations: "iterations",
          direction: "direction",
          fill: "fill",
          isReversed: function (t, e) {
            return -1 === e.direction;
          },
          isBackwards: function (t, e) {
            return -1 === e.fill;
          },
          isInfinite: function (t, e) {
            return 0 === e.iterations;
          },
          speed: "speed",
          fps: "fps"
        },
        le = {
          destruct: "destruct",
          pause: "pause",
          play: function (t, e) {
            return fe(t, e.hasEnded ? "restart" : "play", e);
          },
          restart: "restart",
          reverse: function (t, e) {
            return fe(t, "reverse", e, [!0]);
          },
          seek: "seek",
          seekBy: "seekBy",
          seekTo: "seekTo",
          stop: "stop",
          toggle: "toggle",
          togglePlay: "toggle",
          set: "set"
        };
      function fe(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
        return function () {
          var i,
            o = Array.prototype.slice.call(arguments);
          return o.unshift.apply(o, v(r)), (i = t[e]).call.apply(i, [t].concat(v(o))), n;
        };
      }
      var ce = function t(e) {
        r(this, t);
        var n = {},
          i = ["on", "off"],
          o = {
            get: function (t, e, r) {
              return se[e] ? "function" == typeof se[e] ? se[e].call(t, t, r) : t[se[e]] : le[e] ? "function" == typeof le[e] ? le[e].call(t, t, r) : fe(t, le[e], r) : -1 !== i.indexOf(e) ? n[e] : "ready" === e ? function (t) {
                return t && t.call(r, r), r;
              } : void 0;
            },
            set: function (t, e, r) {
              return -1 !== i.indexOf(e) && (n[e] = r);
            },
            ownKeys: function (t) {
              return Object.keys(se);
            },
            has: function (t, e) {
              return void 0 !== se[e];
            }
          };
        if ("function" == typeof Proxy) return new Proxy(e, o);
        var u = Object.keys(se).concat(Object.keys(le)).concat(i),
          a = {};
        return u.forEach(function (t) {
          var n = {
            enumerable: !1,
            configurable: !1,
            get: function () {
              return o.get(e, t, a);
            }
          };
          -1 !== i.indexOf(t) && (n.set = function (n) {
            return o.set(e, t, n);
          }), Object.defineProperty(a, t, n);
        }), a;
      };
      function he(t) {
        t || (t = this);
        var e = {};
        this.on = function (t, n) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return "function" == typeof n && (t.split(/[, ]+/g).forEach(function (t) {
            return e[t] = e[t] || [], r ? e[t].unshift(n) : e[t].push(n);
          }), !0);
        }, this.off = function (t, n) {
          for (var r in e) if (e.hasOwnProperty(r) && r.substr(0, t.length) === t) if (n) for (var i = 0; i < e[r].length; i++) e[r][i] === n && (e[r][i] = null);else e[r] = null;
        }, this.trigger = function () {
          var n,
            r = Array.prototype.slice.call(arguments),
            i = r[0],
            o = r.slice(1);
          t: for (var u in e) if (e.hasOwnProperty(u) && e[u] && (u === i || u.substr(0, i.length + 1) === i + ".")) for (var a = 0; a < e[u].length; a++) if (e[u][a] && !1 === (n = e[u][a].apply(t, o))) break t;
          return n;
        };
      }
      var ve = !0,
        ye = ["iterations", "speed", "fps", "direction", "fill", "alternate"],
        de = function (t) {
          !function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), e && s(t, e);
          }(u, t);
          var e,
            n,
            i = (e = u, n = l(), function () {
              var t,
                r = a(e);
              if (n) {
                var i = a(this).constructor;
                t = Reflect.construct(r, arguments, i);
              } else t = r.apply(this, arguments);
              return c(this, t);
            });
          function u(t, e) {
            var n,
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return r(this, u), (n = i.call(this, t, e, o))._handlers = [], n;
          }
          return o(u, [{
            key: "_adjustOffset",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                e = this.alternate ? 2 * this.duration : this.duration;
              if (t) {
                if (!this._rollingBack && 0 === this.offset) return void (this.offset = e);
                this._rollingBack && (this.offset, this.maxFiniteDuration);
              }
              !this._rollingBack || this.rollbackStartOffset <= this.duration ? 0 !== this.iterations && (this.offset = Math.min(this.offset, this.maxFiniteDuration)) : (this.offset = this.rollbackStartOffset - (this.rollbackStartOffset - this.offset) % e, this.rollbackStartOffset = 0);
            }
          }, {
            key: "reverse",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (!this._running) return this._adjustOffset(t), this._rollingBack = !this._rollingBack, t && this.play(!1), void this.trigger("reverse", this.offset);
              this.pause(!1, !1), this._adjustOffset(), this._rollingBack = !this._rollingBack, this.play(!1), this.trigger("reverse", this.offset);
            }
          }, {
            key: "play",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ve,
                e = h(a(u.prototype), "play", this).call(this);
              return t === ve && this.trigger("play", this.offset), e;
            }
          }, {
            key: "pause",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ve,
                n = h(a(u.prototype), "pause", this).call(this);
              return e === ve && this.trigger(t ? "end" : "pause", this.offset), n;
            }
          }, {
            key: "restart",
            value: function () {
              var t = h(a(u.prototype), "restart", this).call(this, !1);
              return this.trigger("restart", this.offset), t;
            }
          }, {
            key: "stop",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ve,
                e = h(a(u.prototype), "stop", this).call(this);
              return t === ve && this.trigger("stop", this.offset), e;
            }
          }, {
            key: "_apply",
            value: function (t) {
              var e = this,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ve,
                r = h(a(u.prototype), "_apply", this).call(this, t);
              if (n === ve) {
                var i = function () {
                  return e.trigger("keyframe", t);
                };
                window.requestAnimationFrame(i);
              }
              return r;
            }
          }, {
            key: "seekTo",
            value: function (t) {
              var e,
                n,
                r,
                i = this._running;
              i && this.pause(!1, !1), this.offset = this.iterations > 0 ? (e = t, n = 0, r = this.maxFiniteDuration, e < n ? n : e > r ? r : e) : Math.max(t, 0), this._apply(this.offset), i && this.play(!1);
            }
          }, {
            key: "seek",
            value: function (t) {
              return this.seekTo(Math.round(t / 100 * this.maxFiniteDuration));
            }
          }, {
            key: "seekBy",
            value: function (t) {
              return this.seekTo(this.offset + t);
            }
          }, {
            key: "toggle",
            value: function () {
              return this._running ? this.pause() : this.reachedToEnd() ? this.restart() : this.play();
            }
          }, {
            key: "set",
            value: function (t, e) {
              if (ye.includes(t)) {
                var n = this._running;
                n && this.pause(!1, !1), this._settings[t] = e, n ? this.play(!1) : this._apply(this.offset, {}, !1);
              }
            }
          }, {
            key: "destruct",
            value: function () {
              var t = this;
              this.stop(), this._handlers.forEach(function (t) {
                t.element ? t.element.removeEventListener(t.event, t.handler) : t.callback && t.callback.call && t.callback.call();
              });
              var e = function () {},
                n = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
              n.push.apply(n, v(Object.getOwnPropertyNames(this))), n.forEach(function (n) {
                "function" == typeof t[n] ? t[n] = e : delete t[n];
              });
            }
          }], [{
            key: "build",
            value: function (t) {
              var e = h(a(u), "build", this).call(this, t, ae);
              if (!e) return null;
              var n = e.el,
                r = e.options,
                i = e.player,
                o = new ce(i),
                s = new he(o);
              o.on = s.on, o.off = s.off, i.trigger = s.trigger;
              var l = n.svgatorPlayer && n.svgatorPlayer.ready && n.svgatorPlayer.ready.call && n.svgatorPlayer.ready.call();
              n.svgatorPlayer = o, function (t, e, n) {
                if ("click" === n.start) {
                  var r = function () {
                    switch (n.click) {
                      case "freeze":
                        return !t._running && t.reachedToEnd() ? t.restart() : t.toggle();
                      case "restart":
                        return t.offset > 0 ? t.restart() : t.play();
                      case "reverse":
                        return t._running ? t.reverse() : t.reachedToEnd() ? 1 === t.fill ? t.reverse(!0) : t.restart() : t.play();
                      case "none":
                      default:
                        if (t._running) return;
                        return t.reachedToEnd() ? t.restart() : t.play();
                    }
                  };
                  return t._handlers.push({
                    element: e,
                    event: "click",
                    handler: r
                  }), void e.addEventListener("click", r);
                }
                if ("hover" === n.start) {
                  var i = function () {
                    return t.reachedToEnd() ? t.restart() : t._rollingBack ? t.reverse() : t.play();
                  };
                  t._handlers.push({
                    element: e,
                    event: "mouseenter",
                    handler: i
                  }), e.addEventListener("mouseenter", i);
                  var o = function () {
                    switch (n.hover) {
                      case "freeze":
                        return t.pause();
                      case "reset":
                        return t.stop();
                      case "reverse":
                        if (t.reverse(), t._running) return;
                        return t.play();
                      case "none":
                      default:
                        return;
                    }
                  };
                  return t._handlers.push({
                    element: e,
                    event: "mouseleave",
                    handler: o
                  }), void e.addEventListener("mouseleave", o);
                }
                if ("scroll" === n.start) {
                  var u = new vt(e, n.scroll || 25, function (e) {
                    e ? t.reachedToEnd() ? t.restart() : t.play() : t.pause();
                  });
                  return void t._handlers.push({
                    callback: function () {
                      return u.destruct();
                    }
                  });
                }
                if ("programmatic" === n.start) return;
                t.play();
              }(i, n, r), function (t, e, n) {
                var r;
                "function" == typeof Event ? r = new Event("ready") : (r = document.createEvent("Event")).initEvent("ready", !0, !0);
                if (t.dispatchEvent(r), !n || !n.length) return;
                n.forEach(function (t) {
                  return e.ready(t);
                });
              }(n, n.svgatorPlayer, l);
            }
          }]), u;
        }(ct);
      return de.init(), de;
    });
    (function (s, i, o, w, a, b) {
      if (!document.getElementById(i.root)) {
        return;
      }
      (a = document.getElementById(i.root)).svgatorPlayer = {
        ready: function (a) {
          b = [];
          return function (c) {
            return c ? (b.push(c), a.svgatorPlayer) : b;
          };
        }(a)
      };
      w[o] = w[o] || {};
      w[o][s] = w[o][s] || [];
      w[o][s].push(i);
    })("91c80d77", {
      root: "eSVi1URbIc71",
      version: "2022-05-04",
      animations: [{
        elements: {
          eSVi1URbIc712: {
            transform: {
              data: {
                s: {
                  x: 1.965405,
                  y: 1.965405
                },
                t: {
                  x: -14.654189,
                  y: -81.264256
                }
              },
              keys: {
                o: [{
                  t: 0,
                  v: {
                    x: -38.68472,
                    y: 76.329181,
                    type: "corner"
                  }
                }, {
                  t: 500,
                  v: {
                    x: 181.090679,
                    y: 76.329181,
                    type: "corner"
                  }
                }]
              }
            }
          }
        },
        s: "MDAA1M1E4NTJjNBmU3ZjdjNmI3LZTczNzlENzgHyYzQ0M2IzYTQNhM2EzNjJjNAmU3MzdjNmY2TZDdlNzM3OTcQ4MmM0NDNiMzQYyYzczN2VFNMmY3YzZiN2U3IMzc5Nzg3ZDJJjNDRTM2EzNlBEyYzcwVjczNMzY3NjJjNDQzSYjM2MmM2YlEP3NjdlNmZQN2PM3ODZiN2VZNRmYyYzQ0NzA2PYjc2SzdkNmZUDMzYyYzdkN2SE2Zlk2ZjZlMSmM0NDNiODc/R"
      }],
      options: "MDXAxMDgyMjk3YWTdiNjg3OTdiURTI5NDFIMjkW3Mzc2Njg2YjEI5ODQ/"
    }, "__SVGATOR_PLAYER__", window);
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "eSVi1URbIc71",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 150 150",
    "shape-rendering": "geometricPrecision",
    "text-rendering": "geometricPrecision"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "eSVi1URbIc712-fill",
    x1: "0",
    y1: "0.5",
    x2: "0.5",
    y2: "0.5",
    spreadMethod: "reflect",
    gradientUnits: "objectBoundingBox",
    gradientTransform: "translate(0 0)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    id: "eSVi1URbIc712-fill-0",
    offset: "0%",
    "stop-color": "rgba(213,224,249,0)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    id: "eSVi1URbIc712-fill-1",
    offset: "100%",
    "stop-color": "rgba(213,224,249,0.6)"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "150",
    height: "150",
    rx: "3",
    ry: "3",
    fill: "#dee6f7"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#eSVi1URbIc79)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M54.6132,97.0869c-5.5366,0-10.4614-3.5449-12.2497-8.8225l-.121-.3976c-.4217-1.3976-.5984-2.573-.5984-3.7489v-23.5799l-8.39,28.0063c-1.079,4.1194,1.3799,8.39,5.5055,9.528L92.2374,112.394c.6675.173,1.3349.256,1.9922.256c3.4443,0,6.5914-2.286,7.4734-5.655l3.116-9.9081h-50.2058Z",
    fill: "#eef3ff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M64.1239,60.7736c3.8147,0,6.9164-3.1024,6.9164-6.9171s-3.1017-6.917-6.9164-6.917c-3.8148,0-6.9171,3.1023-6.9171,6.917s3.1023,6.9171,6.9171,6.9171Z",
    fill: "#eef3ff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M107.354,36.5642h-51.8766c-4.7652,0-8.6458,3.8806-8.6458,8.6465v38.0421c0,4.7659,3.8806,8.6465,8.6458,8.6465h51.8766c4.766,0,8.646-3.8806,8.646-8.6465v-38.0421c0-4.7659-3.88-8.6465-8.646-8.6465ZM55.4774,43.4813h51.8766c.955,0,1.729.7744,1.729,1.7294v24.5513L98.1582,57.0139c-1.1589-1.3589-2.8364-2.0853-4.638-2.1265-1.7915.0102-3.4721.8055-4.6202,2.1822L76.055,72.4869l-4.1845-4.1744c-2.3652-2.3652-6.2148-2.3652-8.5768,0l-9.5451,9.5419v-32.6437c0-.955.7745-1.7294,1.7288-1.7294Z",
    fill: "#eef3ff"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "eSVi1URbIc79"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "83",
    height: "83",
    rx: "0",
    ry: "0",
    transform: "translate(33 33)",
    fill: "#fff"
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    mask: "url(#eSVi1URbIc713)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    id: "eSVi1URbIc712",
    width: "29.308378",
    height: "162.528513",
    rx: "0",
    ry: "0",
    transform: "matrix(1.965405 0 0 1.965405-67.486136-83.387994)",
    fill: "url(#eSVi1URbIc712-fill)",
    "stroke-width": "0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
    id: "eSVi1URbIc713",
    "mask-type": "luminance"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "150",
    height: "150",
    rx: "3",
    ry: "3",
    fill: "#dee6f7"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#eSVi1URbIc721)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M54.6132,97.0869c-5.5366,0-10.4614-3.5449-12.2497-8.8225l-.121-.3976c-.4217-1.3976-.5984-2.573-.5984-3.7489v-23.5799l-8.39,28.0063c-1.079,4.1194,1.3799,8.39,5.5055,9.528L92.2374,112.394c.6675.173,1.3349.256,1.9922.256c3.4443,0,6.5914-2.286,7.4734-5.655l3.116-9.9081h-50.2058Z",
    fill: "#eef3ff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M64.1239,60.7736c3.8147,0,6.9164-3.1024,6.9164-6.9171s-3.1017-6.917-6.9164-6.917c-3.8148,0-6.9171,3.1023-6.9171,6.917s3.1023,6.9171,6.9171,6.9171Z",
    fill: "#eef3ff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M107.354,36.5642h-51.8766c-4.7652,0-8.6458,3.8806-8.6458,8.6465v38.0421c0,4.7659,3.8806,8.6465,8.6458,8.6465h51.8766c4.766,0,8.646-3.8806,8.646-8.6465v-38.0421c0-4.7659-3.88-8.6465-8.646-8.6465ZM55.4774,43.4813h51.8766c.955,0,1.729.7744,1.729,1.7294v24.5513L98.1582,57.0139c-1.1589-1.3589-2.8364-2.0853-4.638-2.1265-1.7915.0102-3.4721.8055-4.6202,2.1822L76.055,72.4869l-4.1845-4.1744c-2.3652-2.3652-6.2148-2.3652-8.5768,0l-9.5451,9.5419v-32.6437c0-.955.7745-1.7294,1.7288-1.7294Z",
    fill: "#eef3ff"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "eSVi1URbIc721"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "83",
    height: "83",
    rx: "0",
    ry: "0",
    transform: "translate(33 33)",
    fill: "#fff"
  })))))));
};

/***/ }),

/***/ "./src/template-components/icons/noDataIcon.js":
/*!*****************************************************!*\
  !*** ./src/template-components/icons/noDataIcon.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoDataIcon": function() { return /* binding */ NoDataIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


const NoDataIcon = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "301",
    height: "170",
    viewBox: "0 0 301 170",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M216.63 143.584H77.1725C76.4512 143.584 75.8662 142.999 75.8662 142.277V58.5242C75.8662 54.1166 79.4484 50.5344 83.84 50.5344H209.955C214.354 50.5344 217.937 54.1166 217.937 58.5242V142.277C217.937 142.999 217.352 143.584 216.63 143.584V143.584Z",
    fill: "#F2F2F2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M183.076 40.2365C183.397 38.9783 184.182 37.9285 185.296 37.2633C186.201 36.7264 187.227 36.502 188.253 36.6062C188.493 36.6303 188.726 36.6703 188.958 36.7344C191.547 37.3916 193.117 40.0281 192.468 42.6166C191.811 45.2051 189.175 46.7758 186.586 46.1267C183.998 45.4696 182.427 42.833 183.076 40.2445V40.2365Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M160.18 38.2651V44.548C160.18 44.7323 160.293 44.8926 160.469 44.9567L165.421 46.6637C165.99 49.1159 166.96 51.4159 168.25 53.4995L165.95 58.2117C165.87 58.38 165.902 58.5723 166.031 58.7085L170.47 63.1563C170.598 63.2845 170.799 63.3165 170.959 63.2364L175.671 60.9444C177.747 62.2347 180.047 63.2043 182.499 63.7813L184.206 68.7339C184.262 68.9102 184.43 69.0224 184.615 69.0224H190.898C191.082 69.0224 191.242 68.9102 191.306 68.7339L193.013 63.7813C195.466 63.2124 197.766 62.2427 199.849 60.9524L204.561 63.2524C204.73 63.3326 204.922 63.3005 205.058 63.1723L209.506 58.7326C209.634 58.6044 209.666 58.404 209.586 58.2357L207.294 53.5235C208.584 51.4479 209.554 49.148 210.131 46.6957L215.084 44.9887C215.26 44.9327 215.372 44.7644 215.372 44.58V38.2971C215.372 38.1128 215.26 37.9525 215.084 37.8884L210.131 36.1815C209.562 33.7292 208.592 31.4292 207.302 29.3456L209.602 24.6334C209.682 24.4652 209.65 24.2728 209.522 24.1366L205.082 19.6889C204.954 19.5607 204.754 19.5286 204.585 19.6087L199.873 21.9007C197.798 20.6105 195.498 19.6408 193.045 19.0638L191.338 14.1112C191.282 13.9349 191.114 13.8227 190.93 13.8227H184.647C184.462 13.8227 184.302 13.9349 184.238 14.1112L182.531 19.0638C180.079 19.6328 177.779 20.6025 175.695 21.8927L170.983 19.5927C170.815 19.5126 170.622 19.5446 170.486 19.6728L166.039 24.1125C165.91 24.2408 165.878 24.4411 165.958 24.6014L168.25 29.3136C166.96 31.3892 165.99 33.6892 165.413 36.1414L160.461 37.8484C160.285 37.9045 160.172 38.0728 160.172 38.2571L160.18 38.2651ZM176.713 30.3313C179.646 27.3982 183.549 25.7875 187.7 25.7875C196.259 25.7875 203.231 32.7676 203.223 41.3344C203.223 41.8633 203.199 42.3922 203.143 42.9132C202.91 45.1731 202.189 47.3609 201.019 49.3082C200.915 49.4845 200.691 49.5406 200.514 49.4365C200.386 49.3643 200.322 49.2201 200.338 49.0839C200.338 49.0278 200.362 48.9797 200.386 48.9316C201.5 47.0724 202.189 44.9887 202.414 42.833C202.462 42.3361 202.494 41.8313 202.494 41.3344C202.494 33.1763 195.874 26.5327 187.708 26.5247C183.757 26.5247 180.039 28.0554 177.242 30.8522C174.806 33.2804 173.323 36.4139 172.979 39.7877C172.93 40.2926 172.898 40.7975 172.898 41.3104C172.898 44.2274 173.74 46.9522 175.206 49.2441C177.835 53.3713 182.443 56.112 187.684 56.1201C188.742 56.1201 189.792 56.0079 190.818 55.7915C191.018 55.7514 191.21 55.8716 191.258 56.072C191.266 56.112 191.266 56.1521 191.258 56.1842C191.242 56.3364 191.13 56.4727 190.97 56.5047C190.906 56.5207 190.85 56.5288 190.785 56.5448C190.753 56.5448 190.721 56.5608 190.689 56.5608H190.657C189.848 56.7211 189.014 56.8173 188.189 56.8413C188.021 56.8413 187.852 56.8413 187.684 56.8413C187.147 56.8413 186.618 56.8173 186.089 56.7612C182.539 56.4005 179.253 54.8458 176.705 52.2894C173.772 49.3563 172.161 45.4536 172.161 41.3024C172.161 40.7654 172.185 40.2365 172.241 39.7076C172.602 36.1654 174.165 32.8798 176.713 30.3233V30.3313ZM187.139 47.7135C186.835 47.6814 186.53 47.6253 186.226 47.5532C182.852 46.6957 180.8 43.2577 181.65 39.8759C182.066 38.241 183.092 36.8627 184.543 35.9972C185.993 35.1317 187.692 34.8832 189.327 35.2999C192.701 36.1574 194.752 39.5954 193.903 42.9773C193.126 46.0466 190.208 48.026 187.139 47.7135V47.7135Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M210.948 65.4082V69.6155C210.948 69.7357 211.02 69.8479 211.141 69.8879L214.45 71.0339C214.835 72.6768 215.476 74.2154 216.342 75.6098L214.803 78.7593C214.747 78.8715 214.771 78.9997 214.859 79.0879L217.832 82.061C217.92 82.1492 218.049 82.1732 218.161 82.1171L221.31 80.5865C222.705 81.452 224.235 82.1011 225.878 82.4858L227.016 85.7955C227.056 85.9077 227.168 85.9878 227.289 85.9878H231.496C231.616 85.9878 231.728 85.9157 231.768 85.7955L232.914 82.4858C234.557 82.1011 236.096 81.46 237.49 80.5945L240.64 82.1332C240.752 82.1893 240.88 82.1652 240.968 82.0771L243.941 79.1039C244.03 79.0157 244.054 78.8875 243.998 78.7753L242.467 75.6259C243.332 74.2315 243.982 72.7008 244.366 71.058L247.676 69.92C247.796 69.8799 247.868 69.7677 247.868 69.6475V65.4402C247.868 65.32 247.796 65.2078 247.676 65.1677L244.366 64.0218C243.982 62.3789 243.34 60.8402 242.475 59.4458L244.014 56.2964C244.07 56.1842 244.046 56.0559 243.957 55.9678L240.984 52.9946C240.896 52.9065 240.768 52.8824 240.656 52.9385L237.506 54.4692C236.112 53.6037 234.581 52.9546 232.938 52.5699L231.8 49.2601C231.76 49.148 231.648 49.0678 231.528 49.0678H227.321C227.2 49.0678 227.088 49.1399 227.048 49.2601L225.902 52.5699C224.259 52.9546 222.721 53.5957 221.326 54.4612L218.177 52.9225C218.065 52.8664 217.936 52.8904 217.848 52.9786L214.875 55.9518C214.787 56.0399 214.763 56.1681 214.819 56.2803L216.35 59.4298C215.484 60.8242 214.835 62.3549 214.45 63.9977L211.141 65.1357C211.02 65.1757 210.948 65.2879 210.948 65.4082ZM221.783 59.8706C223.811 57.851 226.503 56.7371 229.364 56.7371C232.225 56.7371 234.918 57.8591 236.937 59.8786C238.957 61.9061 240.071 64.5987 240.071 67.4597C240.071 67.8203 240.055 68.189 240.015 68.5496C239.854 70.1123 239.358 71.6189 238.548 72.9653C238.388 73.2377 238.035 73.3179 237.771 73.1576C237.578 73.0374 237.474 72.821 237.498 72.6126C237.498 72.5325 237.53 72.4524 237.578 72.3802C238.3 71.1782 238.748 69.8318 238.893 68.4374C238.925 68.1169 238.941 67.7883 238.941 67.4677C238.941 64.9113 237.947 62.5071 236.144 60.696C234.333 58.8848 231.929 57.8911 229.372 57.8831C226.816 57.8831 224.412 58.8768 222.6 60.68C221.022 62.2507 220.06 64.2782 219.844 66.466C219.812 66.7946 219.796 67.1231 219.796 67.4517C219.796 70.0081 220.789 72.4123 222.592 74.2234C222.608 74.2395 222.624 74.2555 222.641 74.2715L222.657 74.2876C223.282 74.9046 223.971 75.3053 224.716 75.722C226.086 76.4914 227.641 76.8119 229.252 76.8119C229.292 76.8119 228.779 76.8119 228.779 76.8119V77.0043C229.917 77.0043 230.438 76.9482 231.103 76.8119C231.408 76.7478 231.856 76.9482 231.929 77.2607C231.945 77.3168 232.017 77.3889 232.009 77.445C231.985 77.6854 231.849 77.8938 231.6 77.9419C231.568 77.9419 231.552 77.9579 231.52 77.9659C230.807 78.1102 230.085 78.1823 229.356 78.1823C228.988 78.1823 228.627 78.1663 228.274 78.1262C222.873 77.5733 218.65 72.9973 218.658 67.4597C218.658 67.0911 218.682 66.7224 218.714 66.3618C218.962 63.9176 220.036 61.6496 221.799 59.8866L221.783 59.8706ZM231.616 71.2182C230.815 71.6991 229.901 71.8994 228.988 71.8032C228.779 71.7792 228.571 71.7471 228.362 71.691C227.249 71.4106 226.311 70.7134 225.718 69.7196C225.133 68.7339 224.965 67.5719 225.245 66.458C225.83 64.158 228.17 62.7636 230.47 63.3406C232.77 63.9256 234.165 66.2656 233.588 68.5656C233.307 69.6796 232.61 70.6172 231.616 71.2022V71.2182Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M226.695 69.1426C226.263 68.4134 226.142 67.5639 226.343 66.7465C226.735 65.2078 228.194 64.2141 229.733 64.3744C229.885 64.3904 230.037 64.4144 230.189 64.4545C231.88 64.8872 232.906 66.6102 232.481 68.3012C232.273 69.1186 231.76 69.8078 231.031 70.2405C230.302 70.6733 229.452 70.7935 228.635 70.5931C227.817 70.3848 227.128 69.8719 226.695 69.1426Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M77.1723 147.446C74.2873 147.446 71.5386 145.162 71.5386 142.277V58.5242C71.5386 51.9608 77.2845 47.1846 83.8399 47.1846H209.955C216.518 47.1846 221.919 51.9608 221.919 58.5242V142.277C221.919 145.162 219.507 147.446 216.622 147.446H77.1723Z",
    fill: "white"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M135.152 20.1136H110.301C109.636 20.1136 109.099 19.5767 109.099 18.9115V5.36002C109.099 4.69487 109.636 4.15794 110.301 4.15794H135.152C135.817 4.15794 136.354 4.69487 136.354 5.36002V18.9115C136.354 19.5767 135.817 20.1136 135.152 20.1136V20.1136ZM110.301 4.67083C109.925 4.67083 109.612 4.97536 109.612 5.36002V18.9115C109.612 19.2882 109.917 19.6007 110.301 19.6007H135.152C135.529 19.6007 135.833 19.2962 135.833 18.9115V5.36002C135.833 4.98337 135.529 4.67083 135.152 4.67083H110.301V4.67083Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M136.09 9.7837H109.356C109.211 9.7837 109.099 9.6715 109.099 9.52725V7.45967C109.099 7.31542 109.211 7.20322 109.356 7.20322H136.09C136.234 7.20322 136.346 7.31542 136.346 7.45967V9.52725C136.346 9.6715 136.234 9.7837 136.09 9.7837V9.7837ZM109.612 9.27081H135.833V7.71611H109.612V9.27081Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M128.918 16.7077C127.868 16.7077 127.011 15.8502 127.011 14.8004C127.011 13.7506 127.868 12.9011 128.918 12.9011C129.415 12.9011 129.88 13.0934 130.232 13.43C130.28 13.4781 130.312 13.5422 130.312 13.6143C130.312 13.6865 130.28 13.7506 130.232 13.7987C129.96 14.0551 129.808 14.4237 129.808 14.8004C129.808 15.177 129.96 15.5377 130.232 15.8021C130.28 15.8502 130.312 15.9143 130.312 15.9865C130.312 16.0586 130.28 16.1227 130.232 16.1708C129.88 16.5154 129.407 16.6997 128.918 16.6997V16.7077ZM128.918 13.414C128.149 13.414 127.532 14.0391 127.532 14.8004C127.532 15.5617 128.157 16.1948 128.918 16.1948C129.199 16.1948 129.463 16.1147 129.687 15.9624C129.431 15.6338 129.295 15.2251 129.295 14.8004C129.295 14.3757 129.439 13.9669 129.687 13.6384C129.463 13.4861 129.199 13.406 128.918 13.406V13.414Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M131.193 16.7077C130.144 16.7077 129.286 15.8502 129.286 14.8004C129.286 13.7506 130.144 12.9011 131.193 12.9011C132.243 12.9011 133.101 13.7586 133.101 14.8004C133.101 15.8422 132.243 16.7077 131.193 16.7077ZM131.193 13.414C130.424 13.414 129.807 14.0391 129.807 14.8004C129.807 15.5617 130.432 16.1948 131.193 16.1948C131.955 16.1948 132.58 15.5697 132.58 14.8004C132.58 14.0311 131.955 13.414 131.193 13.414Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M121.882 12.9171H110.775C110.63 12.9171 110.518 12.8049 110.518 12.6607C110.518 12.5164 110.63 12.4042 110.775 12.4042H121.882C122.026 12.4042 122.138 12.5164 122.138 12.6607C122.138 12.8049 122.026 12.9171 121.882 12.9171V12.9171Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M121.882 16.0185H110.775C110.63 16.0185 110.518 15.9063 110.518 15.7621C110.518 15.6178 110.63 15.5056 110.775 15.5056H121.882C122.026 15.5056 122.138 15.6178 122.138 15.7621C122.138 15.9063 122.026 16.0185 121.882 16.0185V16.0185Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M112.569 6.19347H111.167C111.022 6.19347 110.91 6.08127 110.91 5.93702C110.91 5.79277 111.022 5.68058 111.167 5.68058H112.569C112.713 5.68058 112.825 5.79277 112.825 5.93702C112.825 6.08127 112.713 6.19347 112.569 6.19347Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M115.463 6.19347H114.06C113.916 6.19347 113.804 6.08127 113.804 5.93702C113.804 5.79277 113.916 5.68058 114.06 5.68058H115.463C115.607 5.68058 115.719 5.79277 115.719 5.93702C115.719 6.08127 115.607 6.19347 115.463 6.19347Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M118.347 6.19347H116.945C116.801 6.19347 116.688 6.08127 116.688 5.93702C116.688 5.79277 116.801 5.68058 116.945 5.68058H118.347C118.492 5.68058 118.604 5.79277 118.604 5.93702C118.604 6.08127 118.492 6.19347 118.347 6.19347Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M109.356 16.1387H106.247C105.589 16.1387 105.044 15.6018 105.044 14.9446V1.39315C105.044 0.736006 105.581 0.199074 106.247 0.199074H131.098C131.755 0.199074 132.292 0.736006 132.292 1.39315V4.4224C132.292 4.56665 132.179 4.67884 132.035 4.67884H110.294C109.917 4.67884 109.604 4.98337 109.604 5.36804V15.8903C109.604 16.0345 109.492 16.1467 109.348 16.1467L109.356 16.1387ZM106.247 0.703949C105.87 0.703949 105.565 1.00848 105.565 1.38513V14.9446C105.565 15.3213 105.87 15.6258 106.247 15.6258H109.091V5.36002C109.091 4.69487 109.628 4.15794 110.294 4.15794H131.779V1.38513C131.779 1.00848 131.474 0.703949 131.098 0.703949H106.247V0.703949Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M51.3519 117.186C49.9975 117.186 48.8916 116.08 48.8916 114.726C48.8916 113.371 49.9975 112.265 51.3519 112.265C52.7062 112.265 53.8121 113.371 53.8121 114.726C53.8121 116.08 52.7062 117.186 51.3519 117.186ZM51.3519 113.163C50.4944 113.163 49.7892 113.86 49.7892 114.726C49.7892 115.591 50.4864 116.28 51.3519 116.28C52.2174 116.28 52.9146 115.583 52.9146 114.726C52.9146 113.868 52.2174 113.163 51.3519 113.163Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M24.754 141.989C24.5055 141.989 24.3052 141.789 24.3052 141.54V135.313C24.3052 135.065 24.5055 134.865 24.754 134.865C25.0024 134.865 25.2027 135.065 25.2027 135.313V141.54C25.2027 141.789 25.0024 141.989 24.754 141.989Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M27.8631 138.88H21.6363C21.3879 138.88 21.1875 138.679 21.1875 138.431C21.1875 138.182 21.3879 137.982 21.6363 137.982H27.8631C28.1115 137.982 28.3119 138.182 28.3119 138.431C28.3119 138.679 28.1115 138.88 27.8631 138.88Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.8179 51.3758C10.5695 51.3758 10.3691 51.1755 10.3691 50.927V44.7002C10.3691 44.4518 10.5695 44.2515 10.8179 44.2515C11.0664 44.2515 11.2667 44.4518 11.2667 44.7002V50.927C11.2667 51.1755 11.0664 51.3758 10.8179 51.3758Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M13.927 48.2664H7.70025C7.45182 48.2664 7.25146 48.0661 7.25146 47.8177C7.25146 47.5692 7.45182 47.3689 7.70025 47.3689H13.927C14.1755 47.3689 14.3758 47.5692 14.3758 47.8177C14.3758 48.0661 14.1755 48.2664 13.927 48.2664Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M54.309 81.6443H31.285C30.7401 81.6443 30.2993 81.2036 30.2993 80.6586C30.2993 80.1137 30.7401 79.6729 31.285 79.6729H54.309C54.8539 79.6729 55.2947 80.1137 55.2947 80.6586C55.2947 81.2036 54.8539 81.6443 54.309 81.6443Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M19.256 100.725H1.64147C1.09653 100.725 0.655762 100.285 0.655762 99.7397C0.655762 99.1948 1.09653 98.754 1.64147 98.754H19.256C19.801 98.754 20.2417 99.1948 20.2417 99.7397C20.2417 100.285 19.801 100.725 19.256 100.725Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M57.554 48.2183C57.3938 48.2183 57.2495 48.0821 57.2495 47.9218V41.3825C57.2495 41.2222 57.3857 41.086 57.546 41.086H64.0533C64.1415 41.086 64.2216 41.1261 64.2777 41.1902C64.3819 41.3104 64.3819 41.4947 64.2777 41.5989L57.7704 48.1302C57.7143 48.1863 57.6422 48.2183 57.5621 48.2183H57.554ZM57.8425 41.679V47.2166L63.3641 41.679H57.8425Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M57.5464 48.2184H38.0245C37.8643 48.2184 37.728 48.0821 37.728 47.9218V12.5164C37.728 12.3562 37.8643 12.2199 38.0245 12.2199H64.0537C64.214 12.2199 64.3502 12.3562 64.3502 12.5164V41.3825C64.3502 41.5428 64.214 41.679 64.0537 41.679H57.8429V47.9218C57.8429 48.0821 57.7067 48.2184 57.5464 48.2184V48.2184ZM38.3211 47.6253H57.2499V41.3825C57.2499 41.2222 57.3861 41.086 57.5464 41.086H63.7572V12.8049H38.3211V47.6173V47.6253ZM45.3012 41.4226C44.8444 41.4226 44.3956 41.1902 44.1472 40.7734L43.2095 39.2187C43.0252 38.9142 42.9691 38.5536 43.0573 38.201C43.1454 37.8484 43.3618 37.5519 43.6663 37.3675L54.5572 30.7721C54.6133 30.74 54.6774 30.724 54.7415 30.732L57.7788 31.0526C57.867 31.0606 57.9471 31.1087 57.9952 31.1888C58.0433 31.2609 58.0513 31.3571 58.0272 31.4453L57.0175 34.4745C56.9934 34.5386 56.9534 34.5947 56.8893 34.6348L46.928 40.6693C46.928 40.6693 46.9039 40.6773 46.8959 40.6853L45.9984 41.2382C45.782 41.3665 45.5416 41.4306 45.3012 41.4306V41.4226ZM54.7736 31.3251L43.9628 37.8724C43.7945 37.9766 43.6743 38.1369 43.6182 38.3372C43.5702 38.5376 43.6022 38.7379 43.7064 38.9062L44.644 40.4609C44.8604 40.8215 45.3252 40.9337 45.6858 40.7173L46.6074 40.1484C46.6074 40.1484 46.6315 40.1323 46.6475 40.1323L56.4886 34.17L57.346 31.5975L54.7736 31.3251V31.3251Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M56.745 34.6669C56.6408 34.6669 56.5446 34.6108 56.4885 34.5226L54.461 31.1728C54.4049 31.0766 54.4049 30.9564 54.461 30.8602C54.5251 30.7641 54.6293 30.716 54.7415 30.724L57.7788 31.0446C57.8669 31.0526 57.9471 31.1007 57.9951 31.1808C58.0432 31.2529 58.0512 31.3491 58.0272 31.4373L57.0175 34.4665C56.9774 34.5787 56.8812 34.6508 56.769 34.6669C56.761 34.6669 56.745 34.6669 56.737 34.6669H56.745ZM55.2784 31.3812L56.6648 33.6731L57.354 31.6055L55.2784 31.3812V31.3812Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M46.7841 40.7013C46.6799 40.7013 46.5837 40.6452 46.5276 40.5571L45.5098 38.8822C45.4537 38.794 45.4537 38.6738 45.5098 38.5856C45.5419 38.5296 45.59 38.4895 45.6461 38.4574L55.5833 32.439C55.6474 32.3989 55.7276 32.3829 55.8077 32.4069C55.8878 32.423 55.952 32.471 55.992 32.5432L57.0018 34.2181C57.0899 34.3543 57.0418 34.5386 56.9056 34.6268L46.9443 40.6613C46.8963 40.6853 46.8482 40.7013 46.7921 40.7013H46.7841ZM46.167 38.8341L46.8802 39.9961L56.3366 34.2662L55.6314 33.0961L46.167 38.8261V38.8341Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M45.7658 39.0344C45.6616 39.0344 45.5574 38.9783 45.5093 38.8902L44.5076 37.2233C44.4675 37.1672 44.4515 37.0951 44.4595 37.0229C44.4675 36.9348 44.5236 36.8546 44.5958 36.8066L54.565 30.7721C54.7013 30.6839 54.8856 30.732 54.9738 30.8683L55.9915 32.5432C56.0316 32.6073 56.0476 32.6874 56.0236 32.7676C56.0075 32.8477 55.9595 32.9118 55.8873 32.9519L45.9261 38.9863C45.878 39.0104 45.8299 39.0264 45.7738 39.0264L45.7658 39.0344ZM45.1567 37.1592L45.862 38.3372L55.3264 32.6073L54.6131 31.4373L45.1567 37.1672V37.1592Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M45.3014 41.4226C44.8446 41.4226 44.3958 41.1902 44.1474 40.7734L43.2097 39.2187C43.0254 38.9142 42.9693 38.5536 43.0575 38.201C43.1456 37.8484 43.362 37.5519 43.6665 37.3675L44.5961 36.8066C44.7164 36.7344 44.8686 36.7585 44.9648 36.8546C44.9808 36.8707 44.9968 36.8947 45.0049 36.9107L47.0324 40.2525C47.1205 40.3888 47.0724 40.5731 46.9362 40.6612L46.0066 41.2302C45.7902 41.3585 45.5498 41.4226 45.3094 41.4226H45.3014ZM44.6442 37.4637L43.9711 37.8724C43.8028 37.9766 43.6826 38.1369 43.6265 38.3372C43.5784 38.5376 43.6104 38.7379 43.7146 38.9062L44.6522 40.4609C44.8686 40.8215 45.3334 40.9337 45.694 40.7173L46.3672 40.3086L45.5819 39.0104L44.6442 37.4557V37.4637Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M57.5464 48.2184H38.0245C37.8643 48.2184 37.728 48.0821 37.728 47.9218V12.5164C37.728 12.3562 37.8643 12.2199 38.0245 12.2199H64.0537C64.214 12.2199 64.3502 12.3562 64.3502 12.5164V41.3825C64.3502 41.5428 64.214 41.679 64.0537 41.679H57.8429V47.9218C57.8429 48.0821 57.7067 48.2184 57.5464 48.2184V48.2184ZM38.3211 47.6253H57.2499V41.3825C57.2499 41.2222 57.3861 41.086 57.5464 41.086H63.7572V12.8049H38.3211V47.6173V47.6253Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M57.5542 48.2183C57.4821 48.2183 57.402 48.1863 57.3459 48.1302C57.2337 48.018 57.2337 47.8257 57.3459 47.7135L63.8532 41.1821C63.9653 41.0699 64.1577 41.0699 64.2699 41.1821C64.3821 41.2943 64.3821 41.4867 64.2699 41.5989L57.7626 48.1302C57.7065 48.1863 57.6263 48.2183 57.5542 48.2183Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M59.654 19.3283H42.1276C41.9673 19.3283 41.8311 19.192 41.8311 19.0317C41.8311 18.8715 41.9673 18.7352 42.1276 18.7352H59.654C59.8142 18.7352 59.9505 18.8715 59.9505 19.0317C59.9505 19.192 59.8142 19.3283 59.654 19.3283Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M59.654 24.0324H42.1276C41.9673 24.0324 41.8311 23.8962 41.8311 23.7359C41.8311 23.5756 41.9673 23.4394 42.1276 23.4394H59.654C59.8142 23.4394 59.9505 23.5756 59.9505 23.7359C59.9505 23.8962 59.8142 24.0324 59.654 24.0324Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M59.654 28.7285H42.1276C41.9673 28.7285 41.8311 28.5923 41.8311 28.432C41.8311 28.2718 41.9673 28.1355 42.1276 28.1355H59.654C59.8142 28.1355 59.9505 28.2718 59.9505 28.432C59.9505 28.5923 59.8142 28.7285 59.654 28.7285Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M45.3014 41.4226C44.8446 41.4226 44.3958 41.1902 44.1474 40.7734L43.2097 39.2187C43.0254 38.9142 42.9693 38.5536 43.0575 38.201C43.1456 37.8484 43.362 37.5519 43.6665 37.3675L54.5574 30.7721C54.6135 30.74 54.6776 30.724 54.7417 30.732L57.779 31.0526C57.8672 31.0606 57.9473 31.1087 57.9954 31.1888C58.0435 31.2609 58.0515 31.3571 58.0274 31.4453L57.0177 34.4745C56.9936 34.5386 56.9536 34.5947 56.8895 34.6348L46.9282 40.6693C46.9282 40.6693 46.9041 40.6773 46.8961 40.6853L45.9986 41.2382C45.7822 41.3665 45.5418 41.4306 45.3014 41.4306V41.4226ZM54.7738 31.3251L43.963 37.8724C43.7948 37.9766 43.6745 38.1369 43.6184 38.3372C43.5704 38.5376 43.6024 38.7379 43.7066 38.9062L44.6442 40.4609C44.8606 40.8215 45.3254 40.9337 45.686 40.7173L46.6076 40.1484C46.6076 40.1484 46.6317 40.1323 46.6477 40.1323L56.4888 34.17L57.3463 31.5975L54.7738 31.3251V31.3251Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M46.7838 40.7093C46.7116 40.7093 46.6395 40.6853 46.5914 40.6372C46.5674 40.6132 46.5434 40.5891 46.5273 40.5651L44.4998 37.2153C44.4117 37.079 44.4597 36.8947 44.604 36.8066C44.7402 36.7184 44.9245 36.7665 45.0127 36.9107L47.0162 40.2205C47.0562 40.2686 47.0803 40.3327 47.0803 40.4048C47.0803 40.5651 46.944 40.7013 46.7838 40.7013V40.7093Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M56.745 34.6669C56.6489 34.6669 56.5447 34.6188 56.4886 34.5226L54.4611 31.1728C54.3729 31.0366 54.421 30.8522 54.5572 30.7641C54.6935 30.6839 54.8778 30.724 54.9659 30.8602L56.9935 34.2101C57.0816 34.3463 57.0335 34.5306 56.8973 34.6188C56.8492 34.6508 56.7931 34.6588 56.745 34.6588V34.6669Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M45.7659 39.0344C45.6697 39.0344 45.5655 38.9863 45.5094 38.8902C45.4213 38.7539 45.4693 38.5696 45.6056 38.4815L55.5669 32.447C55.7031 32.3589 55.8874 32.4069 55.9756 32.5432C56.0637 32.6794 56.0156 32.8637 55.8794 32.9519L45.9181 38.9863C45.87 39.0184 45.8139 39.0264 45.7659 39.0264V39.0344Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M244.543 96.1254C243.188 96.1254 242.083 95.0195 242.083 93.6652C242.083 92.3108 243.188 91.2049 244.543 91.2049C245.897 91.2049 247.003 92.3108 247.003 93.6652C247.003 95.0195 245.897 96.1254 244.543 96.1254ZM244.543 92.1025C243.685 92.1025 242.98 92.7997 242.98 93.6652C242.98 94.5307 243.677 95.2279 244.543 95.2279C245.408 95.2279 246.106 94.5307 246.106 93.6652C246.106 92.7997 245.408 92.1025 244.543 92.1025Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M285.718 69.0304C285.469 69.0304 285.269 68.8301 285.269 68.5817V62.3549C285.269 62.1064 285.469 61.9061 285.718 61.9061C285.966 61.9061 286.167 62.1064 286.167 62.3549V68.5817C286.167 68.8301 285.966 69.0304 285.718 69.0304Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M288.827 65.921H282.601C282.352 65.921 282.152 65.7207 282.152 65.4723C282.152 65.2238 282.352 65.0235 282.601 65.0235H288.827C289.076 65.0235 289.276 65.2238 289.276 65.4723C289.276 65.7207 289.076 65.921 288.827 65.921Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M284.668 28.961C284.42 28.961 284.219 28.7606 284.219 28.5122V22.2854C284.219 22.0369 284.42 21.8366 284.668 21.8366C284.916 21.8366 285.117 22.0369 285.117 22.2854V28.5122C285.117 28.7606 284.916 28.961 284.668 28.961Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M257.573 25.9397H251.346C251.098 25.9397 250.897 25.7394 250.897 25.4909C250.897 25.2425 251.098 25.0422 251.346 25.0422H257.573C257.821 25.0422 258.022 25.2425 258.022 25.4909C258.022 25.7394 257.821 25.9397 257.573 25.9397Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M299.052 116.369H259.641C258.794 116.369 258.11 115.286 258.11 113.964C258.11 112.643 258.799 111.56 259.641 111.56H299.052C299.899 111.56 300.584 112.643 300.584 113.964C300.584 115.286 299.894 116.369 299.052 116.369ZM259.641 112.452C259.109 112.452 258.678 113.128 258.678 113.964C258.678 114.8 259.109 115.477 259.641 115.477H299.052C299.585 115.477 300.016 114.8 300.016 113.964C300.016 113.128 299.585 112.452 299.052 112.452H259.641Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M299.67 98.3373H282.056C281.511 98.3373 281.07 97.8965 281.07 97.3516C281.07 96.8066 281.511 96.3658 282.056 96.3658H299.67C300.215 96.3658 300.656 96.8066 300.656 97.3516C300.656 97.8965 300.215 98.3373 299.67 98.3373Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M278.353 163.987H249.847C249.102 163.987 248.493 163.378 248.493 162.625V143.407C248.493 142.654 249.102 142.045 249.847 142.045H278.353C279.098 142.045 279.707 142.654 279.707 143.407V162.625C279.707 163.378 279.098 163.987 278.353 163.987ZM249.847 142.558C249.383 142.558 249.006 142.935 249.006 143.407V162.625C249.006 163.09 249.383 163.474 249.847 163.474H278.353C278.818 163.474 279.194 163.098 279.194 162.625V143.407C279.194 142.943 278.818 142.558 278.353 142.558H249.847Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M279.459 146.485H248.758C248.614 146.485 248.501 146.373 248.501 146.228C248.501 146.084 248.614 145.972 248.758 145.972H279.459C279.603 145.972 279.716 146.084 279.716 146.228C279.716 146.373 279.603 146.485 279.459 146.485Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M251.675 145.339H250.048C249.904 145.339 249.792 145.227 249.792 145.082V143.455C249.792 143.311 249.904 143.199 250.048 143.199H251.675C251.82 143.199 251.932 143.311 251.932 143.455V145.082C251.932 145.227 251.82 145.339 251.675 145.339ZM250.305 144.826H251.419V143.712H250.305V144.826Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M254.832 145.339H253.206C253.061 145.339 252.949 145.227 252.949 145.082V143.455C252.949 143.311 253.061 143.199 253.206 143.199H254.832C254.977 143.199 255.089 143.311 255.089 143.455V145.082C255.089 145.227 254.977 145.339 254.832 145.339ZM253.47 144.826H254.576V143.712H253.47V144.826Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M257.99 145.339H256.363C256.219 145.339 256.107 145.227 256.107 145.082V143.455C256.107 143.311 256.219 143.199 256.363 143.199H257.99C258.134 143.199 258.247 143.311 258.247 143.455V145.082C258.247 145.227 258.134 145.339 257.99 145.339ZM256.62 144.826H257.734V143.712H256.62V144.826Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M260.138 160.445C260.082 160.445 260.026 160.429 259.978 160.389L253.542 155.036C253.486 154.987 253.446 154.915 253.446 154.835C253.446 154.755 253.478 154.683 253.542 154.635L259.633 149.57C259.745 149.482 259.905 149.498 259.994 149.602C260.082 149.714 260.066 149.875 259.962 149.963L254.103 154.835L260.306 159.988C260.418 160.076 260.426 160.237 260.338 160.349C260.29 160.413 260.218 160.445 260.138 160.445V160.445Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M268.071 160.445C267.999 160.445 267.927 160.413 267.871 160.349C267.783 160.237 267.799 160.076 267.903 159.988L274.106 154.835L268.247 149.963C268.135 149.875 268.127 149.714 268.215 149.602C268.303 149.49 268.464 149.482 268.576 149.57L274.666 154.635C274.723 154.683 274.763 154.755 274.763 154.835C274.763 154.915 274.731 154.987 274.666 155.036L268.231 160.389C268.183 160.429 268.127 160.445 268.071 160.445V160.445Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M260.883 161.599C260.883 161.599 260.802 161.591 260.77 161.575C260.642 161.511 260.594 161.359 260.658 161.23L267.037 148.512C267.101 148.384 267.254 148.336 267.382 148.4C267.51 148.464 267.558 148.616 267.494 148.745L261.115 161.463C261.067 161.551 260.979 161.607 260.883 161.607V161.599Z",
    fill: "#E6E6E6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M209.963 50.6065H83.8481C79.4484 50.6065 76.0986 54.1246 76.0986 58.5242V142.277C76.0986 142.999 76.4512 144.025 77.1725 144.025H216.63C217.352 144.025 218.506 142.999 218.506 142.277V58.5242C218.506 54.1166 214.354 50.6065 209.955 50.6065H209.963ZM215.092 141.749H78.3746V58.5242C78.3746 55.5591 80.8829 54.0204 83.84 54.0204H209.955C212.912 54.0204 215.084 55.5591 215.084 58.5242V141.749H215.092Z",
    fill: "#F2F2F2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M85.7633 59.1173H208.055C208.777 59.1173 209.362 59.7023 209.362 60.4235V133.703C209.362 134.424 208.777 135.009 208.055 135.009H85.7633C85.042 135.009 84.457 134.424 84.457 133.703V60.4235C84.457 59.7023 85.042 59.1173 85.7633 59.1173Z",
    fill: "#F2F2F2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    filter: "url(#filter0_d_14_1273)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
    id: "path-56-outside-1_14_1273",
    maskUnits: "userSpaceOnUse",
    x: "110.656",
    y: "81.2442",
    width: "62",
    height: "23",
    fill: "black"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    fill: "white",
    x: "110.656",
    y: "81.2442",
    width: "62",
    height: "23"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M119.471 98.3641C117.913 98.3641 116.547 98.0227 115.375 97.3399C114.217 96.6572 113.304 95.7146 112.636 94.5123C111.983 93.2951 111.656 91.8924 111.656 90.3042C111.656 88.7159 111.983 87.3207 112.636 86.1183C113.304 84.9012 114.217 83.9512 115.375 83.2684C116.547 82.5856 117.913 82.2442 119.471 82.2442C121.015 82.2442 122.373 82.5856 123.546 83.2684C124.718 83.9512 125.631 84.9012 126.284 86.1183C126.938 87.3207 127.264 88.7159 127.264 90.3042C127.264 91.8924 126.938 93.2951 126.284 94.5123C125.631 95.7146 124.718 96.6572 123.546 97.3399C122.373 98.0227 121.015 98.3641 119.471 98.3641ZM119.471 95.8037C120.956 95.8037 122.136 95.3138 123.011 94.3342C123.902 93.3545 124.347 92.0112 124.347 90.3042C124.347 88.5972 123.902 87.2539 123.011 86.2742C122.136 85.2945 120.956 84.8047 119.471 84.8047C117.987 84.8047 116.799 85.2945 115.909 86.2742C115.018 87.2539 114.573 88.5972 114.573 90.3042C114.573 92.0112 115.018 93.3545 115.909 94.3342C116.799 95.3138 117.987 95.8037 119.471 95.8037Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M134.567 98.3641C133.499 98.3641 132.534 98.1192 131.673 97.6294C130.827 97.1396 130.151 96.4642 129.647 95.6033C129.157 94.7275 128.912 93.7182 128.912 92.5752C128.912 91.4323 129.164 90.4303 129.669 89.5694C130.174 88.6937 130.849 88.0109 131.695 87.521C132.556 87.0312 133.521 86.7863 134.59 86.7863C135.644 86.7863 136.594 87.0312 137.44 87.521C138.3 88.0109 138.976 88.6937 139.466 89.5694C139.97 90.4303 140.223 91.4323 140.223 92.5752C140.223 93.7182 139.97 94.7275 139.466 95.6033C138.976 96.4642 138.3 97.1396 137.44 97.6294C136.579 98.1192 135.621 98.3641 134.567 98.3641ZM134.567 95.8927C135.31 95.8927 135.955 95.6181 136.504 95.0689C137.054 94.5049 137.328 93.6736 137.328 92.5752C137.328 91.4768 137.054 90.653 136.504 90.1038C135.955 89.5397 135.317 89.2577 134.59 89.2577C133.833 89.2577 133.18 89.5397 132.63 90.1038C132.096 90.653 131.829 91.4768 131.829 92.5752C131.829 93.6736 132.096 94.5049 132.63 95.0689C133.18 95.6181 133.825 95.8927 134.567 95.8927Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M142.326 102.995V87.0535H144.864L145.175 88.6343C145.532 88.1445 145.999 87.714 146.578 87.3429C147.172 86.9718 147.936 86.7863 148.871 86.7863C149.911 86.7863 150.838 87.0386 151.655 87.5433C152.471 88.048 153.117 88.7382 153.592 89.614C154.067 90.4897 154.304 91.4842 154.304 92.5975C154.304 93.7107 154.067 94.7052 153.592 95.581C153.117 96.4419 152.471 97.1247 151.655 97.6294C150.838 98.1192 149.911 98.3641 148.871 98.3641C148.04 98.3641 147.313 98.2083 146.69 97.8966C146.066 97.5849 145.561 97.147 145.175 96.5829V102.995H142.326ZM148.27 95.8705C149.176 95.8705 149.925 95.5662 150.519 94.9576C151.113 94.349 151.41 93.5623 151.41 92.5975C151.41 91.6327 151.113 90.8385 150.519 90.2151C149.925 89.5917 149.176 89.28 148.27 89.28C147.35 89.28 146.593 89.5917 145.999 90.2151C145.42 90.8237 145.131 91.6104 145.131 92.5752C145.131 93.54 145.42 94.3342 145.999 94.9576C146.593 95.5662 147.35 95.8705 148.27 95.8705Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M160.969 98.3641C159.989 98.3641 159.129 98.2083 158.386 97.8966C157.644 97.57 157.05 97.1247 156.605 96.5607C156.16 95.9966 155.893 95.3435 155.804 94.6013H158.676C158.765 95.0318 159.002 95.4029 159.388 95.7146C159.789 96.0115 160.301 96.1599 160.925 96.1599C161.548 96.1599 162.001 96.0337 162.283 95.7814C162.58 95.5291 162.728 95.2396 162.728 94.9131C162.728 94.4381 162.52 94.1189 162.105 93.9557C161.689 93.7775 161.11 93.6068 160.368 93.4436C159.893 93.3397 159.411 93.2135 158.921 93.0651C158.431 92.9166 157.978 92.7311 157.563 92.5084C157.162 92.2709 156.835 91.9741 156.583 91.6178C156.331 91.2467 156.204 90.794 156.204 90.2597C156.204 89.28 156.59 88.4562 157.362 87.7882C158.149 87.1203 159.247 86.7863 160.657 86.7863C161.964 86.7863 163.003 87.0906 163.774 87.6992C164.561 88.3077 165.029 89.1464 165.177 90.2151H162.483C162.32 89.3987 161.704 88.9905 160.635 88.9905C160.101 88.9905 159.685 89.0944 159.388 89.3023C159.106 89.5101 158.965 89.7698 158.965 90.0815C158.965 90.4081 159.18 90.6678 159.611 90.8608C160.041 91.0538 160.613 91.2319 161.325 91.3952C162.097 91.5733 162.802 91.7737 163.441 91.9963C164.094 92.2041 164.613 92.5233 164.999 92.9537C165.385 93.3693 165.578 93.9705 165.578 94.7572C165.593 95.44 165.415 96.056 165.044 96.6052C164.673 97.1544 164.138 97.5849 163.441 97.8966C162.743 98.2083 161.919 98.3641 160.969 98.3641Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M168.258 93.1764L167.947 82.5114H170.997L170.663 93.1764H168.258ZM169.528 98.2528C168.993 98.2528 168.555 98.0895 168.214 97.763C167.887 97.4364 167.724 97.0431 167.724 96.5829C167.724 96.1079 167.887 95.7072 168.214 95.3806C168.555 95.0541 168.993 94.8908 169.528 94.8908C170.032 94.8908 170.448 95.0541 170.774 95.3806C171.116 95.7072 171.287 96.1079 171.287 96.5829C171.287 97.0431 171.116 97.4364 170.774 97.763C170.448 98.0895 170.032 98.2528 169.528 98.2528Z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M119.471 98.3641C117.913 98.3641 116.547 98.0227 115.375 97.3399C114.217 96.6572 113.304 95.7146 112.636 94.5123C111.983 93.2951 111.656 91.8924 111.656 90.3042C111.656 88.7159 111.983 87.3207 112.636 86.1183C113.304 84.9012 114.217 83.9512 115.375 83.2684C116.547 82.5856 117.913 82.2442 119.471 82.2442C121.015 82.2442 122.373 82.5856 123.546 83.2684C124.718 83.9512 125.631 84.9012 126.284 86.1183C126.938 87.3207 127.264 88.7159 127.264 90.3042C127.264 91.8924 126.938 93.2951 126.284 94.5123C125.631 95.7146 124.718 96.6572 123.546 97.3399C122.373 98.0227 121.015 98.3641 119.471 98.3641ZM119.471 95.8037C120.956 95.8037 122.136 95.3138 123.011 94.3342C123.902 93.3545 124.347 92.0112 124.347 90.3042C124.347 88.5972 123.902 87.2539 123.011 86.2742C122.136 85.2945 120.956 84.8047 119.471 84.8047C117.987 84.8047 116.799 85.2945 115.909 86.2742C115.018 87.2539 114.573 88.5972 114.573 90.3042C114.573 92.0112 115.018 93.3545 115.909 94.3342C116.799 95.3138 117.987 95.8037 119.471 95.8037Z",
    fill: "#2673FF"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M134.567 98.3641C133.499 98.3641 132.534 98.1192 131.673 97.6294C130.827 97.1396 130.151 96.4642 129.647 95.6033C129.157 94.7275 128.912 93.7182 128.912 92.5752C128.912 91.4323 129.164 90.4303 129.669 89.5694C130.174 88.6937 130.849 88.0109 131.695 87.521C132.556 87.0312 133.521 86.7863 134.59 86.7863C135.644 86.7863 136.594 87.0312 137.44 87.521C138.3 88.0109 138.976 88.6937 139.466 89.5694C139.97 90.4303 140.223 91.4323 140.223 92.5752C140.223 93.7182 139.97 94.7275 139.466 95.6033C138.976 96.4642 138.3 97.1396 137.44 97.6294C136.579 98.1192 135.621 98.3641 134.567 98.3641ZM134.567 95.8927C135.31 95.8927 135.955 95.6181 136.504 95.0689C137.054 94.5049 137.328 93.6736 137.328 92.5752C137.328 91.4768 137.054 90.653 136.504 90.1038C135.955 89.5397 135.317 89.2577 134.59 89.2577C133.833 89.2577 133.18 89.5397 132.63 90.1038C132.096 90.653 131.829 91.4768 131.829 92.5752C131.829 93.6736 132.096 94.5049 132.63 95.0689C133.18 95.6181 133.825 95.8927 134.567 95.8927Z",
    fill: "#2673FF"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M142.326 102.995V87.0535H144.864L145.175 88.6343C145.532 88.1445 145.999 87.714 146.578 87.3429C147.172 86.9718 147.936 86.7863 148.871 86.7863C149.911 86.7863 150.838 87.0386 151.655 87.5433C152.471 88.048 153.117 88.7382 153.592 89.614C154.067 90.4897 154.304 91.4842 154.304 92.5975C154.304 93.7107 154.067 94.7052 153.592 95.581C153.117 96.4419 152.471 97.1247 151.655 97.6294C150.838 98.1192 149.911 98.3641 148.871 98.3641C148.04 98.3641 147.313 98.2083 146.69 97.8966C146.066 97.5849 145.561 97.147 145.175 96.5829V102.995H142.326ZM148.27 95.8705C149.176 95.8705 149.925 95.5662 150.519 94.9576C151.113 94.349 151.41 93.5623 151.41 92.5975C151.41 91.6327 151.113 90.8385 150.519 90.2151C149.925 89.5917 149.176 89.28 148.27 89.28C147.35 89.28 146.593 89.5917 145.999 90.2151C145.42 90.8237 145.131 91.6104 145.131 92.5752C145.131 93.54 145.42 94.3342 145.999 94.9576C146.593 95.5662 147.35 95.8705 148.27 95.8705Z",
    fill: "#2673FF"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M160.969 98.3641C159.989 98.3641 159.129 98.2083 158.386 97.8966C157.644 97.57 157.05 97.1247 156.605 96.5607C156.16 95.9966 155.893 95.3435 155.804 94.6013H158.676C158.765 95.0318 159.002 95.4029 159.388 95.7146C159.789 96.0115 160.301 96.1599 160.925 96.1599C161.548 96.1599 162.001 96.0337 162.283 95.7814C162.58 95.5291 162.728 95.2396 162.728 94.9131C162.728 94.4381 162.52 94.1189 162.105 93.9557C161.689 93.7775 161.11 93.6068 160.368 93.4436C159.893 93.3397 159.411 93.2135 158.921 93.0651C158.431 92.9166 157.978 92.7311 157.563 92.5084C157.162 92.2709 156.835 91.9741 156.583 91.6178C156.331 91.2467 156.204 90.794 156.204 90.2597C156.204 89.28 156.59 88.4562 157.362 87.7882C158.149 87.1203 159.247 86.7863 160.657 86.7863C161.964 86.7863 163.003 87.0906 163.774 87.6992C164.561 88.3077 165.029 89.1464 165.177 90.2151H162.483C162.32 89.3987 161.704 88.9905 160.635 88.9905C160.101 88.9905 159.685 89.0944 159.388 89.3023C159.106 89.5101 158.965 89.7698 158.965 90.0815C158.965 90.4081 159.18 90.6678 159.611 90.8608C160.041 91.0538 160.613 91.2319 161.325 91.3952C162.097 91.5733 162.802 91.7737 163.441 91.9963C164.094 92.2041 164.613 92.5233 164.999 92.9537C165.385 93.3693 165.578 93.9705 165.578 94.7572C165.593 95.44 165.415 96.056 165.044 96.6052C164.673 97.1544 164.138 97.5849 163.441 97.8966C162.743 98.2083 161.919 98.3641 160.969 98.3641Z",
    fill: "#2673FF"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M168.258 93.1764L167.947 82.5114H170.997L170.663 93.1764H168.258ZM169.528 98.2528C168.993 98.2528 168.555 98.0895 168.214 97.763C167.887 97.4364 167.724 97.0431 167.724 96.5829C167.724 96.1079 167.887 95.7072 168.214 95.3806C168.555 95.0541 168.993 94.8908 169.528 94.8908C170.032 94.8908 170.448 95.0541 170.774 95.3806C171.116 95.7072 171.287 96.1079 171.287 96.5829C171.287 97.0431 171.116 97.4364 170.774 97.763C170.448 98.0895 170.032 98.2528 169.528 98.2528Z",
    fill: "#2673FF"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M119.471 98.3641C117.913 98.3641 116.547 98.0227 115.375 97.3399C114.217 96.6572 113.304 95.7146 112.636 94.5123C111.983 93.2951 111.656 91.8924 111.656 90.3042C111.656 88.7159 111.983 87.3207 112.636 86.1183C113.304 84.9012 114.217 83.9512 115.375 83.2684C116.547 82.5856 117.913 82.2442 119.471 82.2442C121.015 82.2442 122.373 82.5856 123.546 83.2684C124.718 83.9512 125.631 84.9012 126.284 86.1183C126.938 87.3207 127.264 88.7159 127.264 90.3042C127.264 91.8924 126.938 93.2951 126.284 94.5123C125.631 95.7146 124.718 96.6572 123.546 97.3399C122.373 98.0227 121.015 98.3641 119.471 98.3641ZM119.471 95.8037C120.956 95.8037 122.136 95.3138 123.011 94.3342C123.902 93.3545 124.347 92.0112 124.347 90.3042C124.347 88.5972 123.902 87.2539 123.011 86.2742C122.136 85.2945 120.956 84.8047 119.471 84.8047C117.987 84.8047 116.799 85.2945 115.909 86.2742C115.018 87.2539 114.573 88.5972 114.573 90.3042C114.573 92.0112 115.018 93.3545 115.909 94.3342C116.799 95.3138 117.987 95.8037 119.471 95.8037Z",
    stroke: "white",
    "stroke-width": "2",
    mask: "url(#path-56-outside-1_14_1273)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M134.567 98.3641C133.499 98.3641 132.534 98.1192 131.673 97.6294C130.827 97.1396 130.151 96.4642 129.647 95.6033C129.157 94.7275 128.912 93.7182 128.912 92.5752C128.912 91.4323 129.164 90.4303 129.669 89.5694C130.174 88.6937 130.849 88.0109 131.695 87.521C132.556 87.0312 133.521 86.7863 134.59 86.7863C135.644 86.7863 136.594 87.0312 137.44 87.521C138.3 88.0109 138.976 88.6937 139.466 89.5694C139.97 90.4303 140.223 91.4323 140.223 92.5752C140.223 93.7182 139.97 94.7275 139.466 95.6033C138.976 96.4642 138.3 97.1396 137.44 97.6294C136.579 98.1192 135.621 98.3641 134.567 98.3641ZM134.567 95.8927C135.31 95.8927 135.955 95.6181 136.504 95.0689C137.054 94.5049 137.328 93.6736 137.328 92.5752C137.328 91.4768 137.054 90.653 136.504 90.1038C135.955 89.5397 135.317 89.2577 134.59 89.2577C133.833 89.2577 133.18 89.5397 132.63 90.1038C132.096 90.653 131.829 91.4768 131.829 92.5752C131.829 93.6736 132.096 94.5049 132.63 95.0689C133.18 95.6181 133.825 95.8927 134.567 95.8927Z",
    stroke: "white",
    "stroke-width": "2",
    mask: "url(#path-56-outside-1_14_1273)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M142.326 102.995V87.0535H144.864L145.175 88.6343C145.532 88.1445 145.999 87.714 146.578 87.3429C147.172 86.9718 147.936 86.7863 148.871 86.7863C149.911 86.7863 150.838 87.0386 151.655 87.5433C152.471 88.048 153.117 88.7382 153.592 89.614C154.067 90.4897 154.304 91.4842 154.304 92.5975C154.304 93.7107 154.067 94.7052 153.592 95.581C153.117 96.4419 152.471 97.1247 151.655 97.6294C150.838 98.1192 149.911 98.3641 148.871 98.3641C148.04 98.3641 147.313 98.2083 146.69 97.8966C146.066 97.5849 145.561 97.147 145.175 96.5829V102.995H142.326ZM148.27 95.8705C149.176 95.8705 149.925 95.5662 150.519 94.9576C151.113 94.349 151.41 93.5623 151.41 92.5975C151.41 91.6327 151.113 90.8385 150.519 90.2151C149.925 89.5917 149.176 89.28 148.27 89.28C147.35 89.28 146.593 89.5917 145.999 90.2151C145.42 90.8237 145.131 91.6104 145.131 92.5752C145.131 93.54 145.42 94.3342 145.999 94.9576C146.593 95.5662 147.35 95.8705 148.27 95.8705Z",
    stroke: "white",
    "stroke-width": "2",
    mask: "url(#path-56-outside-1_14_1273)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M160.969 98.3641C159.989 98.3641 159.129 98.2083 158.386 97.8966C157.644 97.57 157.05 97.1247 156.605 96.5607C156.16 95.9966 155.893 95.3435 155.804 94.6013H158.676C158.765 95.0318 159.002 95.4029 159.388 95.7146C159.789 96.0115 160.301 96.1599 160.925 96.1599C161.548 96.1599 162.001 96.0337 162.283 95.7814C162.58 95.5291 162.728 95.2396 162.728 94.9131C162.728 94.4381 162.52 94.1189 162.105 93.9557C161.689 93.7775 161.11 93.6068 160.368 93.4436C159.893 93.3397 159.411 93.2135 158.921 93.0651C158.431 92.9166 157.978 92.7311 157.563 92.5084C157.162 92.2709 156.835 91.9741 156.583 91.6178C156.331 91.2467 156.204 90.794 156.204 90.2597C156.204 89.28 156.59 88.4562 157.362 87.7882C158.149 87.1203 159.247 86.7863 160.657 86.7863C161.964 86.7863 163.003 87.0906 163.774 87.6992C164.561 88.3077 165.029 89.1464 165.177 90.2151H162.483C162.32 89.3987 161.704 88.9905 160.635 88.9905C160.101 88.9905 159.685 89.0944 159.388 89.3023C159.106 89.5101 158.965 89.7698 158.965 90.0815C158.965 90.4081 159.18 90.6678 159.611 90.8608C160.041 91.0538 160.613 91.2319 161.325 91.3952C162.097 91.5733 162.802 91.7737 163.441 91.9963C164.094 92.2041 164.613 92.5233 164.999 92.9537C165.385 93.3693 165.578 93.9705 165.578 94.7572C165.593 95.44 165.415 96.056 165.044 96.6052C164.673 97.1544 164.138 97.5849 163.441 97.8966C162.743 98.2083 161.919 98.3641 160.969 98.3641Z",
    stroke: "white",
    "stroke-width": "2",
    mask: "url(#path-56-outside-1_14_1273)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M168.258 93.1764L167.947 82.5114H170.997L170.663 93.1764H168.258ZM169.528 98.2528C168.993 98.2528 168.555 98.0895 168.214 97.763C167.887 97.4364 167.724 97.0431 167.724 96.5829C167.724 96.1079 167.887 95.7072 168.214 95.3806C168.555 95.0541 168.993 94.8908 169.528 94.8908C170.032 94.8908 170.448 95.0541 170.774 95.3806C171.116 95.7072 171.287 96.1079 171.287 96.5829C171.287 97.0431 171.116 97.4364 170.774 97.763C170.448 98.0895 170.032 98.2528 169.528 98.2528Z",
    stroke: "white",
    "stroke-width": "2",
    mask: "url(#path-56-outside-1_14_1273)"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M216.638 156.398H77.1722C71.8109 156.398 67.4434 152.936 67.4434 148.681V142.277C67.4434 141.556 68.0284 140.971 68.7496 140.971H225.053C225.774 140.971 226.359 141.556 226.359 142.277V148.681C226.359 152.936 221.999 156.398 216.638 156.398ZM70.0559 143.584V148.681C70.0559 151.445 73.3175 153.785 77.1722 153.785H216.638C220.493 153.785 223.746 151.445 223.746 148.681V143.584H70.0559Z",
    fill: "#F2F2F2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M146.901 152.792C144.641 152.792 142.798 150.949 142.798 148.681C142.798 146.413 144.641 144.577 146.901 144.577C149.161 144.577 151.012 146.421 151.012 148.681C151.012 150.941 149.169 152.792 146.901 152.792ZM146.901 147.198C146.084 147.198 145.41 147.863 145.41 148.689C145.41 149.514 146.076 150.187 146.901 150.187C147.726 150.187 148.4 149.514 148.4 148.689C148.4 147.863 147.726 147.198 146.901 147.198Z",
    fill: "#F2F2F2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    filter: "url(#filter1_d_14_1273)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M109.205 116.489C102.449 109.252 91.0614 108.851 83.8169 115.615C76.5803 122.371 76.1796 133.759 82.9434 141.003C89.6991 148.24 101.087 148.64 108.331 141.877C115.568 135.121 115.969 123.733 109.205 116.489ZM105.19 138.511C99.8046 143.535 91.3339 143.247 86.3092 137.862C81.2845 132.476 81.573 124.006 86.9583 118.981C92.3437 113.956 100.814 114.245 105.839 119.63C110.864 125.015 110.575 133.486 105.19 138.511Z",
    fill: "white"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M110.542 128.739C110.642 120.852 104.331 114.378 96.4443 114.277C88.5579 114.177 82.0832 120.489 81.9827 128.375C81.8822 136.261 88.194 142.736 96.0804 142.836C103.967 142.937 110.441 136.625 110.542 128.739Z",
    fill: "#F2F2F2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    opacity: "0.35",
    d: "M87.0466 129.455C87.8566 129.455 88.5132 128.798 88.5132 127.989C88.5132 127.179 87.8566 126.522 87.0466 126.522C86.2367 126.522 85.5801 127.179 85.5801 127.989C85.5801 128.798 86.2367 129.455 87.0466 129.455Z",
    fill: "white"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M108.46 116.665C101.888 109.925 91.1018 109.789 84.3621 116.36C77.6224 122.932 77.4862 133.718 84.0576 140.458C90.629 147.198 101.416 147.334 108.155 140.763C114.895 134.191 115.031 123.405 108.46 116.665ZM86.037 138.527C80.5314 132.877 80.6436 123.837 86.2934 118.332C91.9432 112.826 100.983 112.938 106.488 118.588C111.994 124.238 111.882 133.278 106.232 138.783C100.582 144.289 91.5425 144.177 86.037 138.527Z",
    fill: "#CCCCCC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M63.7582 160.244C62.1474 158.594 62.1794 155.957 63.8303 154.346L76.1477 142.341L81.9738 148.32L69.6564 160.325C68.0055 161.935 65.369 161.903 63.7582 160.252V160.244Z",
    fill: "#CCCCCC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M85.8366 142.869L81.6802 138.605C80.8337 137.737 79.4435 137.719 78.5751 138.566L76.2166 140.865C75.3483 141.711 75.3306 143.101 76.1771 143.97L80.3334 148.234C81.18 149.102 82.5702 149.12 83.4385 148.273L85.797 145.974C86.6654 145.127 86.6831 143.737 85.8366 142.869Z",
    fill: "#FFFFFD"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("filter", {
    id: "filter0_d_14_1273",
    x: "110.656",
    y: "81.2442",
    width: "62.6304",
    height: "24.7511",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feOffset", {
    dx: "1",
    dy: "2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.757726 0 0 0 0 0.795391 0 0 0 0 0.895833 0 0 0 1 0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_14_1273"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow_14_1273",
    result: "shape"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("filter", {
    id: "filter1_d_14_1273",
    x: "58.5708",
    y: "106.791",
    width: "63.4585",
    height: "62.7211",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feOffset", {
    dx: "2",
    dy: "2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feGaussianBlur", {
    stdDeviation: "3"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_14_1273"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow_14_1273",
    result: "shape"
  }))));
};

/***/ }),

/***/ "./src/template-components/icons/openverseMainIcon.js":
/*!************************************************************!*\
  !*** ./src/template-components/icons/openverseMainIcon.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenverseMainIcon": function() { return /* binding */ OpenverseMainIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


const OpenverseMainIcon = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "30",
    height: "42",
    viewBox: "0 0 50 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-[70px] w-[70px] me-6 xl:me-7"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "logo",
    fill: "currentColor"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M37.5589 18.795C42.7146 18.795 46.8942 14.5876 46.8942 9.3975C46.8942 4.2074 42.7146 0 37.5589 0C32.4031 0 28.2236 4.2074 28.2236 9.3975C28.2236 14.5876 32.4031 18.795 37.5589 18.795Z",
    class: "circle"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0.999969 9.3975C0.999969 14.5687 5.17217 18.795 10.3353 18.795V0C5.17217 0 0.999969 4.2 0.999969 9.3975Z",
    class: "circle"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.6118 9.3975C14.6118 14.5687 18.784 18.795 23.9471 18.795V0C18.8101 0 14.6118 4.2 14.6118 9.3975Z",
    class: "circle"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M37.5589 41.9212C42.7146 41.9212 46.8942 37.7138 46.8942 32.5238C46.8942 27.3337 42.7146 23.1263 37.5589 23.1263C32.4031 23.1263 28.2236 27.3337 28.2236 32.5238C28.2236 37.7138 32.4031 41.9212 37.5589 41.9212Z",
    class: "circle"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.6118 32.5238C14.6118 37.695 18.784 41.9213 23.9471 41.9213V23.1525C18.8101 23.1525 14.6118 27.3525 14.6118 32.5238Z",
    class: "circle"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0.999969 32.6025C0.999969 37.8 5.17217 42 10.3353 42V23.2312C5.17217 23.2312 0.999969 27.4312 0.999969 32.6025Z",
    class: "circle"
  }))), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Openverse", "eb-open-verse-block"));
};

/***/ }),

/***/ "./src/template-components/items.js":
/*!******************************************!*\
  !*** ./src/template-components/items.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Items; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function Items(props) {
  const {
    data,
    selectItem,
    setSelectItem
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-openverse-grid"
  }, typeof data === "object" && data.map(item => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `eb-openverse-grid-item ${selectItem == item ? "selected" : ""}`,
    onClick: () => setSelectItem(item)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb_openverse_item_thumbnail"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: item.url
  })))));
}

/***/ }),

/***/ "./src/template-components/loading.js":
/*!********************************************!*\
  !*** ./src/template-components/loading.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Loading; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_loading_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/loading-item */ "./src/template-components/icons/loading-item.js");



function Loading(props) {
  const {
    limit
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-openverse-grid openverse_loading"
  }, (0,lodash__WEBPACK_IMPORTED_MODULE_1__.times)(limit, i => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "eb-openverse-grid-item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icons_loading_item__WEBPACK_IMPORTED_MODULE_2__.LoadingItem, null));
  }));
}

/***/ }),

/***/ "./src/template-components/noData.js":
/*!*******************************************!*\
  !*** ./src/template-components/noData.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NoData; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_noDataIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/noDataIcon */ "./src/template-components/icons/noDataIcon.js");



function NoData(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-openverse-no-data"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icons_noDataIcon__WEBPACK_IMPORTED_MODULE_2__.NoDataIcon, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("We couldn't find anything", "eb-open-verse-block")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Try a different query or use one of the external sources to expand your search.", "eb-open-verse-block")));
}

/***/ }),

/***/ "./src/template-components/search.js":
/*!*******************************************!*\
  !*** ./src/template-components/search.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Search; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


function Search(props) {
  const {
    setQ,
    setOpenverseModal,
    q,
    componentClassName,
    openverseDataFetch
  } = props;
  const handleKeyPress = event => {
    if (event.key === "Enter" && event.target.value.length != 0) {
      setQ(event.target.value);
      openverseDataFetch(true);
      setOpenverseModal(true);
    }
  };
  const handleSearch = event => {
    if (q.length != 0) {
      openverseDataFetch(true);
      setOpenverseModal(true);
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: componentClassName
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "search",
    name: "search-form",
    id: "search-form",
    class: "openverse-search-input",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search for...", "eb-open-verse-block"),
    value: q,
    onChange: e => setQ(e.target.value),
    onKeyPress: handleKeyPress
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "openverse-search-btn",
    onClick: handleSearch
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search", "eb-open-verse-block")));
}

/***/ }),

/***/ "./src/template-components/searchModal.js":
/*!************************************************!*\
  !*** ./src/template-components/searchModal.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SeachModal; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items */ "./src/template-components/items.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ "./src/template-components/loading.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ "./src/template-components/search.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _noData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./noData */ "./src/template-components/noData.js");








function SeachModal(props) {
  const {
    data,
    loading,
    openverseData,
    q,
    setQ,
    filterData,
    setFilterData,
    setOpenverseImage,
    attributes,
    setAttributes,
    pagination,
    setPagination,
    totalPages,
    openverseError,
    setOpenverseModal,
    openverseDataFetch
  } = props;
  const handleChange = e => {
    // Destructuring
    const {
      value,
      checked,
      name
    } = e.target;
    const {
      licenses,
      licenseType,
      category,
      extension,
      aspectRatio,
      size
    } = filterData;

    // Case 1 : The user checks the box
    if (checked) {
      switch (name) {
        case "licenses":
          setFilterData({
            licenseType: [...licenseType],
            licenses: [...licenses, value],
            category: [...category],
            extension: [...extension],
            aspectRatio: [...aspectRatio],
            size: [...size]
          });
          break;
        case "licenseType":
          setFilterData({
            licenseType: [...licenseType, value],
            licenses: [...licenses],
            category: [...category],
            extension: [...extension],
            aspectRatio: [...aspectRatio],
            size: [...size]
          });
          break;
        case "category":
          setFilterData({
            licenseType: [...licenseType],
            licenses: [...licenses],
            category: [...category, value],
            extension: [...extension],
            aspectRatio: [...aspectRatio],
            size: [...size]
          });
          break;
        case "extension":
          setFilterData({
            licenseType: [...licenseType],
            licenses: [...licenses],
            category: [...category],
            extension: [...extension, value],
            aspectRatio: [...aspectRatio],
            size: [...size]
          });
          break;
        case "aspectRatio":
          setFilterData({
            licenseType: [...licenseType],
            licenses: [...licenses],
            category: [...category],
            extension: [...extension],
            aspectRatio: [...aspectRatio, value],
            size: [...size]
          });
          break;
        case "size":
          setFilterData({
            licenseType: [...licenseType],
            licenses: [...licenses],
            category: [...category],
            extension: [...extension],
            aspectRatio: [...aspectRatio],
            size: [...size, value]
          });
          break;
        default:
          return false;
      }
    }

    // Case 2  : The user unchecks the box
    else {
      switch (name) {
        case "licenses":
          setFilterData({
            licenseType: [...licenseType],
            licenses: licenses.filter(e => e !== value),
            category: [...category],
            extension: [...extension],
            aspectRatio: [...aspectRatio],
            size: [...size]
          });
          break;
        case "licenseType":
          setFilterData({
            licenseType: licenseType.filter(e => e !== value),
            licenses: [...licenses],
            category: [...category],
            extension: [...extension],
            aspectRatio: [...aspectRatio],
            size: [...size]
          });
          break;
        case "category":
          setFilterData({
            licenseType: [...licenseType],
            licenses: [...licenses],
            category: category.filter(e => e !== value),
            extension: [...extension],
            aspectRatio: [...aspectRatio],
            size: [...size]
          });
          break;
        case "extension":
          setFilterData({
            licenseType: [...licenseType],
            licenses: [...licenses],
            category: [...category],
            extension: extension.filter(e => e !== value),
            aspectRatio: [...aspectRatio],
            size: [...size]
          });
          break;
        case "aspectRatio":
          setFilterData({
            licenseType: [...licenseType],
            licenses: [...licenses],
            category: [...category],
            extension: [...extension],
            aspectRatio: aspectRatio.filter(e => e !== value),
            size: [...size]
          });
          break;
        case "size":
          setFilterData({
            licenseType: [...licenseType],
            licenses: [...licenses],
            category: [...category],
            extension: [...extension],
            aspectRatio: [...aspectRatio],
            size: size.filter(e => e !== value)
          });
          break;
        default:
          return false;
      }
    }
  };

  // image upload
  const [selectItem, setSelectItem] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const uploadImage = e => {
    if (selectItem) {
      let data = new FormData();
      data.append("action", "eb_get_item");
      data.append("openverse_item_nonce", EssentialBlocksLocalize.openverse_item_nonce);
      data.append("image_url", selectItem.url);
      fetch(EssentialBlocksLocalize.ajax_url, {
        method: "POST",
        body: data
      }) // wrapped
      .then(res => res.text()).then(data => {
        setAttributes({
          imageurl: data,
          imageAttr: {
            title: selectItem.title,
            foreignUrl: selectItem.foreign_landing_url,
            creator: selectItem.creator,
            creatorUrl: selectItem.creator_url,
            license: selectItem.license,
            licenseUrl: selectItem.license_url,
            licenseVersion: selectItem.license_version
          }
        });
        setOpenverseImage(data);
        props.setTrigger(false);
      }).catch(err => console.log(err));
    }
  };
  const [limit, setLimit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(12);

  // load more
  const loadMore = () => {
    if (pagination < totalPages) {
      setPagination(pagination => pagination + 1);
      setLimit(limit => limit + 12);
    } else {
      console.log("Load more not working");
    }
  };
  return props.trigger ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "openverse-modal"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "openverse-modal__inner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "openverse-modal__header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "title-section"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Media", "eb-open-verse-block")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "close-btn",
    onClick: () => props.setTrigger(false)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "dashicons dashicons-no"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "openverse-modal__content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_search__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setOpenverseModal: setOpenverseModal,
    openverseDataFetch: openverseDataFetch,
    q: q,
    setQ: setQ,
    componentClassName: "search-section openverse-search-section"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "search-result-section"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "search-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "search-key"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search Key:", "eb-open-verse-block"), " "), q), loading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    limit: limit
  }), !loading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, openverseError.status && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "openverse-error"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_noData__WEBPACK_IMPORTED_MODULE_6__["default"], null)), !openverseError.status && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_items__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: openverseData,
    selectItem: selectItem,
    setSelectItem: setSelectItem
  })), totalPages > pagination && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "loadmore-btn",
    onClick: loadMore
  }, loading ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Loading ...", "eb-open-verse-block") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Load More", "eb-open-verse-block"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "search-filter"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("FILTER BY", "eb-open-verse-block")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "filters-form"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "filter-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("LICENSES", "eb-open-verse-block")), _constants__WEBPACK_IMPORTED_MODULE_5__.FILTER_LICENSES.map((_ref, index) => {
    let {
      label,
      value
    } = _ref;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "filter-item-inner",
      key: index
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "form-check-input",
      type: "checkbox",
      name: "licenses",
      value: value,
      id: `licenses-${index}`,
      onChange: handleChange
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "form-check-label",
      htmlFor: `licenses-${index}`
    }, label));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "filter-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("LICENSE TYPE", "eb-open-verse-block")), _constants__WEBPACK_IMPORTED_MODULE_5__.FILTER_LICENSE_TYPE.map((_ref2, index) => {
    let {
      label,
      value
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "filter-item-inner",
      key: index
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "form-check-input",
      type: "checkbox",
      name: "licenseType",
      value: value,
      id: `licenseType-${index}`,
      onChange: handleChange
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "form-check-label",
      htmlFor: `licenseType-${index}`
    }, label));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "filter-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Type", "eb-open-verse-block")), _constants__WEBPACK_IMPORTED_MODULE_5__.FILTER_CATEGORY.map((_ref3, index) => {
    let {
      label,
      value
    } = _ref3;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "filter-item-inner",
      key: index
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "form-check-input",
      type: "checkbox",
      name: "category",
      value: value,
      id: `category-${index}`,
      onChange: handleChange
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "form-check-label",
      htmlFor: `category-${index}`
    }, label));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "filter-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Extension", "eb-open-verse-block")), _constants__WEBPACK_IMPORTED_MODULE_5__.FILTER_EXTENSION.map((_ref4, index) => {
    let {
      label,
      value
    } = _ref4;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "filter-item-inner",
      key: index
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "form-check-input",
      type: "checkbox",
      name: "extension",
      value: value,
      id: `extension-${index}`,
      onChange: handleChange
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "form-check-label",
      htmlFor: `extension-${index}`
    }, label));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "filter-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Aspect ratio", "eb-open-verse-block")), _constants__WEBPACK_IMPORTED_MODULE_5__.FILTER_ASPECT_RATIO.map((_ref5, index) => {
    let {
      label,
      value
    } = _ref5;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "filter-item-inner",
      key: index
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "form-check-input",
      type: "checkbox",
      name: "aspectRatio",
      value: value,
      id: `aspectRatio-${index}`,
      onChange: handleChange
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "form-check-label",
      htmlFor: `aspectRatio-${index}`
    }, label));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "filter-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Size", "eb-open-verse-block")), _constants__WEBPACK_IMPORTED_MODULE_5__.FILTER_SIZE.map((_ref6, index) => {
    let {
      label,
      value
    } = _ref6;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "filter-item-inner",
      key: index
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "form-check-input",
      type: "checkbox",
      name: "size",
      value: value,
      id: `size-${index}`,
      onChange: handleChange
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "form-check-label",
      htmlFor: `size-${index}`
    }, label));
  })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "openverse-modal__footer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "select-btn",
    disabled: !selectItem ? true : false,
    onClick: uploadImage
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select", "eb-open-verse-block"))))) : "";
}

/***/ }),

/***/ "./src/typoConstants.js":
/*!******************************!*\
  !*** ./src/typoConstants.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CAPTION_TYPOGRAPHY": function() { return /* binding */ CAPTION_TYPOGRAPHY; }
/* harmony export */ });
const CAPTION_TYPOGRAPHY = "captionTypo";

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":"2","name":"eb-open-verse-block/eb-open-verse-block","title":"EB Open Verse Block","category":"widgets","description":"Easily search & use royalty free images, stock photos, CC-licensed images from Openverse for your website","textdomain":"eb-open-verse-block","editorScript":"file:./dist/index.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"dist": 0,
/******/ 			"style-dist": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkeb_open_verse_block"] = self["webpackChunkeb_open_verse_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-dist"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map