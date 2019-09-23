"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const index_1 = require("./index");
const index_2 = require("../controllers/index");
const container = new inversify_1.Container();
exports.container = container;
container.bind(index_1.TYPES.Logger).to(index_1.LoggerConsole);
container.bind(index_1.TYPES.Configuration).to(index_1.Configuration);
container.bind(index_1.TYPES.CustomerController).to(index_2.CustomerController).inSingletonScope();
//# sourceMappingURL=inversify.config.js.map