#!/usr/bin/env node
"use strict";

const devToolsApply = require("./src/dev-tools-apply");

process.env.DEV_TOOL_APPLY_PATH = __dirname;
process.env.DEV_TOOL_APPLY_BIN = __dirname + "/node_modules/.bin/";
process.env.DEV_TOOL_APPLY_MODULES = __dirname + "/src/modules/";

const command = process.argv[2];

devToolsApply.run(command);
