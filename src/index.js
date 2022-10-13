import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import { OpenverseIcon } from "./icon";
import attributes from "./attributes";
import Example from "./example";
import metadata from "../block.json";
const { ebConditionalRegisterBlockType } = EBOpenverseControls;

const { name, category } = metadata;

ebConditionalRegisterBlockType(metadata, {
	keywords: [
		__("Openverse", "eb-openverse-block"),
		__("Openverse block", "eb-openverse-block"),
		__("Openverse image", "eb-openverse-block"),
		__("EB Openverse block", "eb-openverse-block"),
		__("eb open verse block", "eb-openverse-block"),
		__("essential blocks", "eb-openverse-block"),
	],
	icon: OpenverseIcon,
	attributes,
	edit: Edit,
	save,
	example: Example,
});
