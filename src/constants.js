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
	{ label: __("Top", "eb-openverse-block"), value: "top" },
	{ label: __("Middle", "eb-openverse-block"), value: "middle" },
	{ label: __("Bottom", "eb-openverse-block"), value: "bottom" },
];

export const VERTICAL_ALIGN_CAP_2 = [
	{ label: __("Top", "eb-openverse-block"), value: "top" },
	{ label: __("Bottom", "eb-openverse-block"), value: "bottom" },
];

export const HORIZONTAL_ALIGN = [
	{ label: __("Left", "eb-openverse-block"), value: "left" },
	{ label: __("Center", "eb-openverse-block"), value: "center" },
	{ label: __("Right", "eb-openverse-block"), value: "right" },
];

export const TEXT_ALIGN = [
	{ label: __("Left", "eb-openverse-block"), value: "left" },
	{ label: __("Center", "eb-openverse-block"), value: "center" },
	{ label: __("Right", "eb-openverse-block"), value: "right" },
];

export const HOVER_EFFECT = [
	{ label: __("No Effect", "eb-openverse-block"), value: "no-effect" },
	{ label: __("Zoom In", "eb-openverse-block"), value: "zoom-in" },
	{ label: __("Zoom Out", "eb-openverse-block"), value: "zoom-out" },
	{ label: __("Slide", "eb-openverse-block"), value: "slide" },
	{ label: __("Blur", "eb-openverse-block"), value: "blur" },
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
	{ label: __("Rounded", "eb-openverse-block"), value: "rounded" },
	{ label: __("Square", "eb-openverse-block"), value: "square" },
	{ label: __("Circle", "eb-openverse-block"), value: "circle" },
	{ label: __("Octagon", "eb-openverse-block"), value: "octagon" },
	{ label: __("Rhombus", "eb-openverse-block"), value: "rhombus" },
	{ label: __("Triangle", "eb-openverse-block"), value: "triangle" },
];

export const ATTRIBUTION_STYLES = [
	{ label: __("Style 1", "eb-openverse-block"), value: "attribution-style-1" },
	{ label: __("Style 2", "eb-openverse-block"), value: "attribution-style-2" },
];

export const FILTER_LICENSES = [
	{ label: __("Public Domain Mark", "eb-openverse-block"), value: "pdm" },
	{ label: __("CC0", "eb-openverse-block"), value: "cc0" },
	{ label: __("CC BY", "eb-openverse-block"), value: "by" },
	{ label: __("CC BY-SA", "eb-openverse-block"), value: "by-sa" },
	{ label: __("CC BY-ND", "eb-openverse-block"), value: "by-nd" },
	{ label: __("CC BY-NC", "eb-openverse-block"), value: "by-nc" },
	{ label: __("CC BY-NC-SA", "eb-openverse-block"), value: "by-nc-sa" },
	{ label: __("CC BY-NC-ND", "eb-openverse-block"), value: "by-nc-nd" },
];
export const FILTER_LICENSE_TYPE = [
	{
		label: __("Use commercially", "eb-openverse-block"),
		value: "commercial",
	},
	{
		label: __("Modify or adapt", "eb-openverse-block"),
		value: "modification",
	},
];

export const FILTER_CATEGORY = [
	{ label: __("Photographs", "eb-openverse-block"), value: "photograph" },
	{ label: __("Illustrations", "eb-openverse-block"), value: "illustration" },
	{
		label: __("Digitized Artworks", "eb-openverse-block"),
		value: "digitized_artwork",
	},
];
export const FILTER_SIZE = [
	{ label: __("Small", "eb-openverse-block"), value: "small" },
	{ label: __("Medium", "eb-openverse-block"), value: "medium" },
	{ label: __("Large", "eb-openverse-block"), value: "large" },
];
export const FILTER_EXTENSION = [
	{ label: __("JPEG", "eb-openverse-block"), value: "jpg" },
	{ label: __("SVG", "eb-openverse-block"), value: "svg" },
	{ label: __("PNG", "eb-openverse-block"), value: "png" },
	{ label: __("GIF", "eb-openverse-block"), value: "gif" },
];
export const FILTER_ASPECT_RATIO = [
	{ label: __("Tall", "eb-openverse-block"), value: "tall" },
	{ label: __("Wide", "eb-openverse-block"), value: "wide" },
	{ label: __("Square", "eb-openverse-block"), value: "square" },
];
