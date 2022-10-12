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
		__("Openverse", "eb-open-verse-block"),
		__("Openverse block", "eb-open-verse-block"),
		__("Openverse image", "eb-open-verse-block"),
		__("EB Openverse block", "eb-open-verse-block"),
		__("eb open verse block", "eb-open-verse-block"),
		__("essential blocks", "eb-open-verse-block"),
	],
	icon: OpenverseIcon,
	attributes,
	edit: Edit,
	save,
	example: Example,
});
