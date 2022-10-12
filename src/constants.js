import { __ } from "@wordpress/i18n";

// the consts defined here should be unique from one another
export const WRAPPER_BG = "wrprBg";
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
export const IMAGE_WIDTH = "width";
export const IMAGE_HEIGHT = "height";

export const IMAGE_BORDER_SHADOW = "imgBorderShadow";
export const ATTRIBUTION_MARGIN = "captionMargin";
export const ATTRIBUTION_PADDING = "captionPadding";
export const ATTRIBUTION_TYPOGRAPHY = "captionTypo";
export const ATTRIBUTION_WIDTH = "captionWidth";

export const VERTICAL_ALIGN = [
	{ label: __("Top", "eb-open-verse-block"), value: "top" },
	{ label: __("Middle", "eb-open-verse-block"), value: "middle" },
	{ label: __("Bottom", "eb-open-verse-block"), value: "bottom" },
];

export const VERTICAL_ALIGN_CAP_2 = [
	{ label: __("Top", "eb-open-verse-block"), value: "top" },
	{ label: __("Bottom", "eb-open-verse-block"), value: "bottom" },
];

export const HORIZONTAL_ALIGN = [
	{ label: __("Left", "eb-open-verse-block"), value: "left" },
	{ label: __("Center", "eb-open-verse-block"), value: "center" },
	{ label: __("Right", "eb-open-verse-block"), value: "right" },
];

export const TEXT_ALIGN = [
	{ label: __("Left", "eb-open-verse-block"), value: "left" },
	{ label: __("Center", "eb-open-verse-block"), value: "center" },
	{ label: __("Right", "eb-open-verse-block"), value: "right" },
];

export const HOVER_EFFECT = [
	{ label: __("No Effect", "eb-open-verse-block"), value: "no-effect" },
	{ label: __("Zoom In", "eb-open-verse-block"), value: "zoom-in" },
	{ label: __("Zoom Out", "eb-open-verse-block"), value: "zoom-out" },
	{ label: __("Slide", "eb-open-verse-block"), value: "slide" },
	{ label: __("Blur", "eb-open-verse-block"), value: "blur" },
];

export const UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
];

export const SIZE_UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];

export const STYLES = [
	{ label: __("Rounded", "eb-open-verse-block"), value: "rounded" },
	{ label: __("Square", "eb-open-verse-block"), value: "square" },
	{ label: __("Circle", "eb-open-verse-block"), value: "circle" },
	{ label: __("Octagon", "eb-open-verse-block"), value: "octagon" },
	{ label: __("Rhombus", "eb-open-verse-block"), value: "rhombus" },
	{ label: __("Triangle", "eb-open-verse-block"), value: "triangle" },
];

export const ATTRIBUTION_STYLES = [
	{ label: __("Style 1", "eb-open-verse-block"), value: "attribution-style-1" },
	{ label: __("Style 2", "eb-open-verse-block"), value: "attribution-style-2" },
];

export const FILTER_LICENSES = [
	{ label: __("Public Domain Mark", "eb-open-verse-block"), value: "pdm" },
	{ label: __("CC0", "eb-open-verse-block"), value: "cc0" },
	{ label: __("CC BY", "eb-open-verse-block"), value: "by" },
	{ label: __("CC BY-SA", "eb-open-verse-block"), value: "by-sa" },
	{ label: __("CC BY-ND", "eb-open-verse-block"), value: "by-nd" },
	{ label: __("CC BY-NC", "eb-open-verse-block"), value: "by-nc" },
	{ label: __("CC BY-NC-SA", "eb-open-verse-block"), value: "by-nc-sa" },
	{ label: __("CC BY-NC-ND", "eb-open-verse-block"), value: "by-nc-nd" },
];
export const FILTER_LICENSE_TYPE = [
	{
		label: __("Use commercially", "eb-open-verse-block"),
		value: "commercial",
	},
	{
		label: __("Modify or adapt", "eb-open-verse-block"),
		value: "modification",
	},
];

export const FILTER_CATEGORY = [
	{ label: __("Photographs", "eb-open-verse-block"), value: "photograph" },
	{ label: __("Illustrations", "eb-open-verse-block"), value: "illustration" },
	{
		label: __("Digitized Artworks", "eb-open-verse-block"),
		value: "digitized_artwork",
	},
];
export const FILTER_SIZE = [
	{ label: __("Small", "eb-open-verse-block"), value: "small" },
	{ label: __("Medium", "eb-open-verse-block"), value: "medium" },
	{ label: __("Large", "eb-open-verse-block"), value: "large" },
];
export const FILTER_EXTENSION = [
	{ label: __("JPEG", "eb-open-verse-block"), value: "jpg" },
	{ label: __("SVG", "eb-open-verse-block"), value: "svg" },
	{ label: __("PNG", "eb-open-verse-block"), value: "png" },
	{ label: __("GIF", "eb-open-verse-block"), value: "gif" },
];
export const FILTER_ASPECT_RATIO = [
	{ label: __("Tall", "eb-open-verse-block"), value: "tall" },
	{ label: __("Wide", "eb-open-verse-block"), value: "wide" },
	{ label: __("Square", "eb-open-verse-block"), value: "square" },
];
