const path = require("path");
const fs = require("fs");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

var plugins = defaultConfig.plugins;

//Define Control Name
let controlName = "EBOpenverseControls";
if (fs.existsSync(path.resolve(__dirname, "../config/controlname.json"))) {
	const name = require("../config/controlname.json");
	controlName = name.controlName;
} else {
	controlName = path
		.dirname(__dirname, "../")
		.split("/")
		.pop()
		.replace(/-/g, "");
}

//Entries Path
let entriesPath;
let entriesName = "controls";
let outputPath = "../dist";
if (fs.existsSync(path.resolve(__dirname, "../config/entries.js"))) {
	entriesPath = path.resolve(__dirname, "../config/entries.js");
	plugins = plugins.filter(
		(plugin) => plugin.constructor.name != "CleanWebpackPlugin"
	);
} else {
	entriesPath = path.resolve(__dirname, "src/index.js");
}

let entries = {};

// FOR ALL CONTROLS
entries[entriesName] = {
	import: entriesPath,
	library: {
		name: controlName,
		type: "window",
	},
};

module.exports = {
	...defaultConfig,
	entry: entries,
	output: {
		...defaultConfig.output,
		devtoolNamespace: "wp",
		filename: "[name].js",
		path: path.resolve(__dirname, outputPath),
	},
	plugins,
};
