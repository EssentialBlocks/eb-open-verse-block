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
    default: false
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
  verticalAlignCap2: {
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
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    } // noShadow: true,
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
    } // noShadow: true,
    // noBorder: true,

  }),
  // background attributes ⬇
  ...generateBackgroundAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.WRAPPER_BG, {
    defaultBgGradient: "linear-gradient(45deg,#ffffff,#ffffff)",
    noOverlay: true
  }),
  // range controller Separator Line Grid Column
  ...generateResponsiveRangeAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_WIDTH, {// defaultRange: 300,
  }),
  // range controller Separator Image Gap
  ...generateResponsiveRangeAttributes(_constants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_HEIGHT, {// defaultRange: 300,
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
/* harmony export */   "WRAPPER_BG": function() { return /* binding */ WRAPPER_BG; },
/* harmony export */   "WRAPPER_MARGIN": function() { return /* binding */ WRAPPER_MARGIN; },
/* harmony export */   "WRAPPER_PADDING": function() { return /* binding */ WRAPPER_PADDING; },
/* harmony export */   "WRAPPER_BORDER_SHADOW": function() { return /* binding */ WRAPPER_BORDER_SHADOW; },
/* harmony export */   "IMAGE_WIDTH": function() { return /* binding */ IMAGE_WIDTH; },
/* harmony export */   "IMAGE_HEIGHT": function() { return /* binding */ IMAGE_HEIGHT; },
/* harmony export */   "IMAGE_BORDER_SHADOW": function() { return /* binding */ IMAGE_BORDER_SHADOW; },
/* harmony export */   "ATTRIBUTION_MARGIN": function() { return /* binding */ ATTRIBUTION_MARGIN; },
/* harmony export */   "ATTRIBUTION_PADDING": function() { return /* binding */ ATTRIBUTION_PADDING; },
/* harmony export */   "ATTRIBUTION_TYPOGRAPHY": function() { return /* binding */ ATTRIBUTION_TYPOGRAPHY; },
/* harmony export */   "ATTRIBUTION_WIDTH": function() { return /* binding */ ATTRIBUTION_WIDTH; },
/* harmony export */   "VERTICAL_ALIGN": function() { return /* binding */ VERTICAL_ALIGN; },
/* harmony export */   "VERTICAL_ALIGN_CAP_2": function() { return /* binding */ VERTICAL_ALIGN_CAP_2; },
/* harmony export */   "HORIZONTAL_ALIGN": function() { return /* binding */ HORIZONTAL_ALIGN; },
/* harmony export */   "TEXT_ALIGN": function() { return /* binding */ TEXT_ALIGN; },
/* harmony export */   "HOVER_EFFECT": function() { return /* binding */ HOVER_EFFECT; },
/* harmony export */   "UNIT_TYPES": function() { return /* binding */ UNIT_TYPES; },
/* harmony export */   "SIZE_UNIT_TYPES": function() { return /* binding */ SIZE_UNIT_TYPES; },
/* harmony export */   "STYLES": function() { return /* binding */ STYLES; },
/* harmony export */   "ATTRIBUTION_STYLES": function() { return /* binding */ ATTRIBUTION_STYLES; },
/* harmony export */   "FILTER_LICENSES": function() { return /* binding */ FILTER_LICENSES; },
/* harmony export */   "FILTER_LICENSE_TYPE": function() { return /* binding */ FILTER_LICENSE_TYPE; },
/* harmony export */   "FILTER_CATEGORY": function() { return /* binding */ FILTER_CATEGORY; },
/* harmony export */   "FILTER_SIZE": function() { return /* binding */ FILTER_SIZE; },
/* harmony export */   "FILTER_EXTENSION": function() { return /* binding */ FILTER_EXTENSION; },
/* harmony export */   "FILTER_ASPECT_RATIO": function() { return /* binding */ FILTER_ASPECT_RATIO; }
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
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "essential-blocks"),
  value: "top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Middle", "essential-blocks"),
  value: "middle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "essential-blocks"),
  value: "bottom"
}];
const VERTICAL_ALIGN_CAP_2 = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "essential-blocks"),
  value: "top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "essential-blocks"),
  value: "bottom"
}];
const HORIZONTAL_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "essential-blocks"),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "essential-blocks"),
  value: "right"
}];
const TEXT_ALIGN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "essential-blocks"),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "essential-blocks"),
  value: "right"
}];
const HOVER_EFFECT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No Effect", "essential-blocks"),
  value: "no-effect"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom In", "essential-blocks"),
  value: "zoom-in"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom Out", "essential-blocks"),
  value: "zoom-out"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide", "essential-blocks"),
  value: "slide"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Blur", "essential-blocks"),
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
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rounded", "essential-blocks"),
  value: "rounded"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Square", "essential-blocks"),
  value: "square"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Circle", "essential-blocks"),
  value: "circle"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Octagon", "essential-blocks"),
  value: "octagon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rhombus", "essential-blocks"),
  value: "rhombus"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Triangle", "essential-blocks"),
  value: "triangle"
}];
const ATTRIBUTION_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Style 1", "essential-blocks"),
  value: "attribution-style-1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Style 2", "essential-blocks"),
  value: "attribution-style-2"
}];
const FILTER_LICENSES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Public Domain Mark", "essential-blocks"),
  value: "pdm"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("CC0", "essential-blocks"),
  value: "cc0"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("CC BY", "essential-blocks"),
  value: "by"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("CC BY-SA", "essential-blocks"),
  value: "by-sa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("CC BY-ND", "essential-blocks"),
  value: "by-nd"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("CC BY-NC", "essential-blocks"),
  value: "by-nc"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("CC BY-NC-SA", "essential-blocks"),
  value: "by-nc-sa"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("CC BY-NC-ND", "essential-blocks"),
  value: "by-nc-nd"
}];
const FILTER_LICENSE_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Use commercially", "essential-blocks"),
  value: "commercial"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Modify or adapt", "essential-blocks"),
  value: "modification"
}];
const FILTER_CATEGORY = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Photographs", "essential-blocks"),
  value: "photograph"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Illustrations", "essential-blocks"),
  value: "illustration"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Digitized Artworks", "essential-blocks"),
  value: "digitized_artwork"
}];
const FILTER_SIZE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Small", "essential-blocks"),
  value: "small"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Medium", "essential-blocks"),
  value: "medium"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large", "essential-blocks"),
  value: "large"
}];
const FILTER_EXTENSION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("JPEG", "essential-blocks"),
  value: "jpg"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("SVG", "essential-blocks"),
  value: "svg"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("PNG", "essential-blocks"),
  value: "png"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("GIF", "essential-blocks"),
  value: "gif"
}];
const FILTER_ASPECT_RATIO = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tall", "essential-blocks"),
  value: "tall"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wide", "essential-blocks"),
  value: "wide"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Square", "essential-blocks"),
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
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style */ "./src/style.js");
/* harmony import */ var _template_components_searchModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template-components/searchModal */ "./src/template-components/searchModal.js");
/* harmony import */ var _template_components_displayImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./template-components/displayImage */ "./src/template-components/displayImage.js");
/* harmony import */ var _template_components_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./template-components/search */ "./src/template-components/search.js");
/* harmony import */ var _template_components_icons_openverseMainIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./template-components/icons/openverseMainIcon */ "./src/template-components/icons/openverseMainIcon.js");
/* harmony import */ var _template_components_apiInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./template-components/apiInfo */ "./src/template-components/apiInfo.js");


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
    imageurl,
    apiKey,
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
  const [totalPages, setTotalPages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(1); // search

  const [q, setQ] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [filterData, setFilterData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    licenseType: [],
    licenses: [],
    category: [],
    extension: [],
    aspectRatio: [],
    size: []
  }); // this useEffect is for creating a unique id for each block's unique className by a random unique number

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const BLOCK_PREFIX = "eb-openverse";
    duplicateBlockIdFix({
      BLOCK_PREFIX,
      blockId,
      setAttributes,
      select: _wordpress_data__WEBPACK_IMPORTED_MODULE_5__.select,
      clientId
    });
  }, []);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, `eb-guten-block-main-parent-wrapper`)
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
  }; //Initial UseEffect


  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLoadingApi(true); //Get Openverse Email, Name

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
          apiInfo: { ...apiInfo,
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
      data.append("openverse_nonce", EssentialBlocksLocalize.openverse_nonce); // search

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
  }; // fetch


  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    openverseDataFetch(true);
  }, [filterData]); // fetch pagination data

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (pagination > 1) {
      setLoading(true);
      let data = new FormData();
      data.append("action", "eb_get_collections");
      data.append("openverse_nonce", EssentialBlocksLocalize.openverse_nonce); // search

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isSelected && imageurl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_7__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockAlignmentToolbar, {
    value: imageAlign,
    onChange: newAlign => setimageAlign(newAlign),
    controls: ["left", "center", "right"]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_style__WEBPACK_IMPORTED_MODULE_8__["default"], props), imageurl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Toolbar, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    className: "components-toolbar__control",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Replace Image", "essential-blocks"),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__["default"],
    onClick: () => setOpenverseModal(true)
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `eb-parent-wrapper eb-parent-${blockId} ${classHook}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `eb-openverse-wrapper ${blockId} img-style-${stylePreset} ${attributionStyle} attribution-horizontal-${horizontalAlign} attribution-vertical-${verticalAlign} ${verticalAlignCap2} ${hoverEffect}`,
    "data-id": blockId
  }, imageurl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_template_components_displayImage__WEBPACK_IMPORTED_MODULE_10__["default"], {
    attributes: attributes
  }), !imageurl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "openverse-placheholderbox"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "openverse-placheholderbox__label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_template_components_icons_openverseMainIcon__WEBPACK_IMPORTED_MODULE_12__.OpenverseMainIcon, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `eb-openverse-form-wrapper ${loadingApi ? "loading-circle" : ""}`
  }, showForm && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "openverse-placheholderbox__description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Provide your Email ID & unique project Name to get access to Openverse  using API, these are required field", "essential-blocks"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      color: "#ff0000"
    }
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_template_components_apiInfo__WEBPACK_IMPORTED_MODULE_13__.ApiInfo, {
    attributes: attributes,
    setAttributes: setAttributes,
    loadingApi: loadingApi,
    setLoadingApi: setLoadingApi,
    openverseRegError: openverseRegError,
    setOpenverseRegError: setOpenverseRegError,
    setShowForm: setShowForm
  })), !showForm && !loadingApi && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, openverseRegError.status && openverseRegError.type == "Success" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-alert eb-alert-success"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Congratulations!"), " You have generated a API. Please verify your Email", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "eb-alert-warning"
  }, "Without verifying your email ID, you can get access to Openverse as anonymous & your searching limit will be 100 requests/day and 5 requests/hr.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "openverse-placheholderbox__description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Explore more than 600 million creative works", "essential-blocks")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_template_components_search__WEBPACK_IMPORTED_MODULE_11__["default"], {
    setOpenverseModal: setOpenverseModal,
    openverseDataFetch: openverseDataFetch,
    q: q,
    setQ: setQ,
    componentClassName: "openverse-search-section"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "openverse-placheholderbox__note"
  }, "All Openverse content is under a", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://creativecommons.org/licenses/"
  }, " ", "Creative Commons license"), " ", "or is in the public domain."))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_template_components_searchModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "39.4814",
  cy: "41.9259",
  r: "6.51852",
  fill: "#275EFF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "39.4814",
  cy: "26.5185",
  r: "6.51852",
  fill: "#275EFF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M30 20C28.2711 20 26.6131 20.6868 25.3907 21.9092C24.1682 23.1317 23.4814 24.7897 23.4814 26.5185C23.4814 28.2473 24.1682 29.9054 25.3907 31.1278C26.6131 32.3503 28.2711 33.037 30 33.037L30 26.5185L30 20Z",
  fill: "#275EFF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M30 35.4074C28.2711 35.4074 26.6131 36.1566 25.3907 37.4902C24.1682 38.8238 23.4814 40.6325 23.4814 42.5185C23.4814 44.4045 24.1682 46.2132 25.3907 47.5468C26.6131 48.8804 28.2711 49.6296 30 49.6296L30 42.5185L30 35.4074Z",
  fill: "#275EFF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M20.5185 20C18.7897 20 17.1317 20.6868 15.9092 21.9092C14.6868 23.1317 14 24.7897 14 26.5185C14 28.2473 14.6868 29.9054 15.9092 31.1278C17.1317 32.3503 18.7897 33.037 20.5185 33.037L20.5185 26.5185L20.5185 20Z",
  fill: "#275EFF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M20.5185 35.4074C18.7897 35.4074 17.1317 36.1566 15.9092 37.4902C14.6868 38.8238 14 40.6325 14 42.5185C14 44.4045 14.6868 46.2132 15.9092 47.5468C17.1317 48.8804 18.7897 49.6296 20.5185 49.6296L20.5185 42.5185L20.5185 35.4074Z",
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
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Openverse", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Openverse block", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Openverse image", "essential-blocks")],
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
    attributionBGColor,
    horizontalAlign,
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
    } //


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
    console.log("checkvalue", selected);

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
    activeClass: "active-tab" // onSelect={onSelect}
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
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("General", "essential-blocks"),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Styles", "essential-blocks"),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border won't work", "essential-blocks"),
    value: stylePreset,
    options: _constants__WEBPACK_IMPORTED_MODULE_5__.STYLES,
    onChange: stylePreset => changeStyle(stylePreset)
  }), stylePreset === "circle" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "Please use equal \"Height\" & \"Width\" for perfect Circle shape.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveRangeController, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "essential-blocks"),
    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.IMAGE_WIDTH,
    resRequiredProps: resRequiredProps,
    min: 1,
    max: 1000,
    step: 1,
    units: _constants__WEBPACK_IMPORTED_MODULE_5__.SIZE_UNIT_TYPES
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveRangeController, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height", "essential-blocks"),
    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.IMAGE_HEIGHT,
    resRequiredProps: resRequiredProps,
    min: 0,
    max: 1000,
    step: 1,
    units: _constants__WEBPACK_IMPORTED_MODULE_5__.SIZE_UNIT_TYPES
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Auto Fit Image?", "essential-blocks"),
    checked: autoFit,
    onChange: autoFit => setAttributes({
      autoFit
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover Effect", "essential-blocks"),
    value: hoverEffect,
    options: _constants__WEBPACK_IMPORTED_MODULE_5__.HOVER_EFFECT,
    onChange: hoverEffect => setAttributes({
      hoverEffect
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display Attribution", "essential-blocks"),
    checked: displayAttribution,
    onChange: () => checkAttribution(!displayAttribution) // onChange={() =>
    // 	setAttributes({
    // 		displayAttribution: !displayAttribution,
    // 	})
    // }

  }), displayAttribution && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Attribution Styles", "essential-blocks"),
    value: attributionStyle,
    options: _constants__WEBPACK_IMPORTED_MODULE_5__.ATTRIBUTION_STYLES,
    onChange: attributionStyle => changCaptionStyle(attributionStyle)
  }))), tab.name === "styles" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Settings", "essential-blocks")
  }, !complexStyle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "eb-control-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border", "essential-blocks"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BorderShadowControl, {
    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.IMAGE_BORDER_SHADOW,
    resRequiredProps: resRequiredProps // noShadow
    // noBorder

  })), complexStyle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "Border Style doesn't support for \"", stylePreset, " ", "style\"."))), displayAttribution && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Caption Styles", "essential-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color Controls", "essential-blocks"),
    className: "eb-subpanel",
    initialOpen: true,
    disableAlpha: false,
    colorSettings: [{
      value: attributionColor,
      onChange: newColor => setAttributes({
        attributionColor: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Color", "essential-blocks")
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TypographyDropdown, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography", "essential-blocks"),
    typographyPrefixConstant: _constants__WEBPACK_IMPORTED_MODULE_5__.ATTRIBUTION_TYPOGRAPHY,
    resRequiredProps: resRequiredProps
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveRangeController, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "essential-blocks"),
    controlName: _constants__WEBPACK_IMPORTED_MODULE_5__.ATTRIBUTION_WIDTH,
    resRequiredProps: resRequiredProps,
    units: _constants__WEBPACK_IMPORTED_MODULE_5__.UNIT_TYPES,
    min: 0,
    max: 300,
    step: 1
  }), displayAttribution && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Align", "essential-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_5__.TEXT_ALIGN.map(item => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button // isLarge
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
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "essential-blocks"),
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
    resRequiredProps: resRequiredProps // noShadow
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
    className: `eb-openverse-wrapper ${blockId} img-style-${stylePreset} ${attributionStyle} attribution-horizontal-${horizontalAlign} attribution-vertical-${verticalAlign} ${verticalAlignCap2} ${hoverEffect}`,
    "data-id": blockId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageurl,
    alt: imageAttr.title
  }), displayAttribution && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-attribution"
  }, imageAttr.title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, imageAttr.foreignUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: imageAttr.foreignUrl
  }, imageAttr.title), !imageAttr.foreignUrl && imageAttr.title), imageAttr.creator && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" By ", "essential-blocks"), imageAttr.creatorUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: imageAttr.creatorUrl
  }, imageAttr.creator), !imageAttr.creatorUrl && imageAttr.creator), imageAttr.creator && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" By ", "essential-blocks"), imageAttr.licenseUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" is licensed under ", "essential-blocks"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: imageAttr.licenseUrl,
    className: "licensed-wrap"
  }, imageAttr.license + " " + imageAttr.licenseVersion)), !imageAttr.licenseUrl && imageAttr.license + " " + imageAttr.licenseVersion, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" .", "essential-blocks"))))))));
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
  }); // range controller Separator Line Width

  const {
    rangeStylesDesktop: imageWidthDesktop,
    rangeStylesTab: imageWidthTab,
    rangeStylesMobile: imageWidthMobile
  } = generateResponsiveRangeStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_WIDTH,
    property: "",
    attributes
  }); // range controller Separator Line Width

  const {
    rangeStylesDesktop: imageHeightDesktop,
    rangeStylesTab: imageHeightTab,
    rangeStylesMobile: imageHeightMobile
  } = generateResponsiveRangeStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_HEIGHT,
    property: "",
    attributes
  }); // range controller Separator Line Grid Column Margin Bottom

  const {
    rangeStylesDesktop: attributionWidthDesktop,
    rangeStylesTab: attributionWidthTab,
    rangeStylesMobile: attributionWidthMobile
  } = generateResponsiveRangeStyles({
    controlName: _constants__WEBPACK_IMPORTED_MODULE_1__.ATTRIBUTION_WIDTH,
    property: "width",
    attributes
  }); //Generate Background

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
  }); // generateBorderShadowStyles for Wrapper ⬇

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
    attributes // noShadow: true,
    // noBorder: true,

  }); // generateBorderShadowStyles for Images ⬇

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
    attributes // noShadow: true,
    // noBorder: true,

  }); // Openverse popup styleso ⬇

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
		height: 30px;
		z-index: 200;
		padding: 15px;
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
		height: 45px;
		padding: 15px;
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
		height: 30px;
		padding: 15px;
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
	
	`; // wrapper styles css in strings ⬇

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
		
		.eb-openverse-wrapper.${blockId}.attribution-style-1 .image-attribution {
			background-color: ${attributionBGColor};
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
	`; // all css styles for large screen width (desktop/laptop) in strings ⬇

  const editAllStyles = softMinifyCssStrings(`
		${openversePopup}
	`); // all css styles for large screen width (desktop/laptop) in strings ⬇

  const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
		${imageStylesDesktop}
	`); // all css styles for Tab in strings ⬇

  const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
		${imageStylesTab}
	`); // all css styles for Mobile in strings ⬇

  const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
		${imageStylesMobile}
	`); // Set All Style in "blockMeta" Attribute

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
  } = attributes; // email validation

  const [emailError, setEmailError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email); // return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  }

  const handleEmailChange = e => {
    var email = e.target.value;
    setAttributes({
      apiInfo: { ...apiInfo,
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
      apiInfo: { ...apiInfo,
        name: name
      }
    });
  }; // Generate API


  const generateAPI = () => {
    setLoadingApi(true);
    let data = new FormData();
    data.append("action", "eb_get_registration");
    data.append("openverse_reg_nonce", EssentialBlocksLocalize.openverse_reg_nonce); // search

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
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("user@example.com", "essential-blocks"),
    defaultValue: !apiInfo.email ? "" : apiInfo.email,
    onChange: e => handleEmailChange(e)
  }), apiInfo.email && emailError && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "eb-alert-error"
  }, emailError), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    id: "name",
    className: "openverse-input",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("My amazing project", "essential-blocks"),
    defaultValue: !apiInfo.name ? "" : apiInfo.name,
    onChange: e => handleNameChange(e)
  }), openverseRegError.status && openverseRegError.type == "Error" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "eb-alert-error"
  }, openverseRegError.message), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "openverse-api-btn",
    disabled: apiInfo.email && !emailError && apiInfo.name ? false : true,
    onClick: generateAPI
  }, loadingApi ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Generating ........", "essential-blocks") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Generate API", "essential-blocks")));
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
  }, imageAttr.title), !imageAttr.foreignUrl && imageAttr.title), imageAttr.creator && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" By ", "essential-blocks"), imageAttr.creatorUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: imageAttr.creatorUrl
  }, imageAttr.creator), !imageAttr.creatorUrl && imageAttr.creator), imageAttr.creator && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" By ", "essential-blocks"), imageAttr.licenseUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" is licensed under ", "essential-blocks"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: imageAttr.licenseUrl,
    className: "licensed-wrap"
  }, imageAttr.license + " " + imageAttr.licenseVersion)), !imageAttr.licenseUrl && imageAttr.license + " " + imageAttr.licenseVersion, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" .", "essential-blocks")))));
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
  }))), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Openverse", "essential-blocks"));
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

function NoData(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-openverse-no-data"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "We couldn't find anything"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Try a different query or use one of the external sources to expand your search."));
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
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search for...", "essential-blocks"),
    value: q,
    onChange: e => setQ(e.target.value),
    onKeyPress: handleKeyPress
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "openverse-search-btn",
    onClick: handleSearch
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search", "essential-blocks")));
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
    // console.log(e.target);
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
    } = filterData; // console.log(`${value} is ${checked}`);
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
    } // Case 2  : The user unchecks the box
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
  }; // image upload


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
        console.log("Response", data);
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

  const [limit, setLimit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(12); // load more

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
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Media", "essential-blocks")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search Key:", "essential-blocks"), " "), q), loading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    limit: limit
  }), !loading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, openverseError.status && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "openverse-error"
  }, openverseError.message, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_noData__WEBPACK_IMPORTED_MODULE_6__["default"], null)), !openverseError.status && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_items__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: openverseData,
    selectItem: selectItem,
    setSelectItem: setSelectItem
  })), totalPages > pagination && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "loadmore-btn",
    onClick: loadMore
  }, loading ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Loading ...", "essential-blocks") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Load More", "essential-blocks"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "search-filter"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("FILTER BY", "essential-blocks")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "filters-form"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "filter-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("LICENSES", "essential-blocks")), _constants__WEBPACK_IMPORTED_MODULE_5__.FILTER_LICENSES.map((_ref, index) => {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("LICENSE TYPE", "essential-blocks")), _constants__WEBPACK_IMPORTED_MODULE_5__.FILTER_LICENSE_TYPE.map((_ref2, index) => {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Type", "essential-blocks")), _constants__WEBPACK_IMPORTED_MODULE_5__.FILTER_CATEGORY.map((_ref3, index) => {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Extension", "essential-blocks")), _constants__WEBPACK_IMPORTED_MODULE_5__.FILTER_EXTENSION.map((_ref4, index) => {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Aspect ratio", "essential-blocks")), _constants__WEBPACK_IMPORTED_MODULE_5__.FILTER_ASPECT_RATIO.map((_ref5, index) => {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Size", "essential-blocks")), _constants__WEBPACK_IMPORTED_MODULE_5__.FILTER_SIZE.map((_ref6, index) => {
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
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select", "essential-blocks"))))) : "";
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
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
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

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

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
module.exports = JSON.parse('{"apiVersion":"2","name":"openverse-block/openverse-block","title":"Openverse Block By Essential Blocks","category":"widgets","description":"Easily search & use royalty free images, stock photos, CC-licensed images, etc from Openverse for your website","textdomain":"openverse-block","editorScript":"file:./dist/index.js"}');

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
/******/ 		var chunkLoadingGlobal = self["webpackChunkopenverse_block"] = self["webpackChunkopenverse_block"] || [];
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