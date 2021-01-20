#!/usr/bin/env node
"use strict";
const React = require("react");
const importJsx = require("import-jsx");
const { render } = require("ink");
const meow = require("meow");

const ui = importJsx("./ui");

const cli = meow(`
	Usage
	  $ git-cli

	Examples
	  $ git-cli
			[tab] to highlight the files to add
			[return] to select the files
			highlight ADD and hit return
`);

render(React.createElement(ui, cli.flags));
