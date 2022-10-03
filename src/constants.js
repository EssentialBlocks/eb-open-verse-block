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
	{ label: __("Top", "essential-blocks"), value: "top" },
	{ label: __("Middle", "essential-blocks"), value: "middle" },
	{ label: __("Bottom", "essential-blocks"), value: "bottom" },
];

export const VERTICAL_ALIGN_CAP_2 = [
	{ label: __("Top", "essential-blocks"), value: "top" },
	{ label: __("Bottom", "essential-blocks"), value: "bottom" },
];

export const HORIZONTAL_ALIGN = [
	{ label: __("Left", "essential-blocks"), value: "left" },
	{ label: __("Center", "essential-blocks"), value: "center" },
	{ label: __("Right", "essential-blocks"), value: "right" },
];

export const TEXT_ALIGN = [
	{ label: __("Left", "essential-blocks"), value: "left" },
	{ label: __("Center", "essential-blocks"), value: "center" },
	{ label: __("Right", "essential-blocks"), value: "right" },
];

export const HOVER_EFFECT = [
	{ label: __("No Effect", "essential-blocks"), value: "no-effect" },
	{ label: __("Zoom In", "essential-blocks"), value: "zoom-in" },
	{ label: __("Zoom Out", "essential-blocks"), value: "zoom-out" },
	{ label: __("Slide", "essential-blocks"), value: "slide" },
	{ label: __("Blur", "essential-blocks"), value: "blur" },
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
	{ label: __("Rounded", "essential-blocks"), value: "rounded" },
	{ label: __("Square", "essential-blocks"), value: "square" },
	{ label: __("Circle", "essential-blocks"), value: "circle" },
	{ label: __("Octagon", "essential-blocks"), value: "octagon" },
	{ label: __("Rhombus", "essential-blocks"), value: "rhombus" },
	{ label: __("Triangle", "essential-blocks"), value: "triangle" },
];

export const ATTRIBUTION_STYLES = [
	{ label: __("Style 1", "essential-blocks"), value: "attribution-style-1" },
	{ label: __("Style 2", "essential-blocks"), value: "attribution-style-2" },
];

export const FILTER_LICENSES = [
	{ label: __("Public Domain Mark", "essential-blocks"), value: "pdm" },
	{ label: __("CC0", "essential-blocks"), value: "cc0" },
	{ label: __("CC BY", "essential-blocks"), value: "by" },
	{ label: __("CC BY-SA", "essential-blocks"), value: "by-sa" },
	{ label: __("CC BY-ND", "essential-blocks"), value: "by-nd" },
	{ label: __("CC BY-NC", "essential-blocks"), value: "by-nc" },
	{ label: __("CC BY-NC-SA", "essential-blocks"), value: "by-nc-sa" },
	{ label: __("CC BY-NC-ND", "essential-blocks"), value: "by-nc-nd" },
];
export const FILTER_LICENSE_TYPE = [
	{
		label: __("Use commercially", "essential-blocks"),
		value: "commercial",
	},
	{
		label: __("Modify or adapt", "essential-blocks"),
		value: "modification",
	},
];

export const FILTER_CATEGORY = [
	{ label: __("Photographs", "essential-blocks"), value: "photograph" },
	{ label: __("Illustrations", "essential-blocks"), value: "illustration" },
	{
		label: __("Digitized Artworks", "essential-blocks"),
		value: "digitized_artwork",
	},
];
export const FILTER_SIZE = [
	{ label: __("Small", "essential-blocks"), value: "small" },
	{ label: __("Medium", "essential-blocks"), value: "medium" },
	{ label: __("Large", "essential-blocks"), value: "large" },
];
export const FILTER_EXTENSION = [
	{ label: __("JPEG", "essential-blocks"), value: "jpg" },
	{ label: __("SVG", "essential-blocks"), value: "svg" },
	{ label: __("PNG", "essential-blocks"), value: "png" },
	{ label: __("GIF", "essential-blocks"), value: "gif" },
];
export const FILTER_ASPECT_RATIO = [
	{ label: __("Tall", "essential-blocks"), value: "tall" },
	{ label: __("Wide", "essential-blocks"), value: "wide" },
	{ label: __("Square", "essential-blocks"), value: "square" },
];
