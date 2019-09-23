"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = require("./infrastructure/index");
const inversify_config_1 = require("./infrastructure/inversify.config");
const app = express_1.default();
const router = express_1.default.Router();
// Set middleware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Create Services 
const configuration = inversify_config_1.container.get(index_1.TYPES.Configuration);
// Get controller
const controllers = new Array();
controllers.push(inversify_config_1.container.get(index_1.TYPES.CustomerController));
// // Init all controllers and route
app.get('/', (req, res) => {
    res.json('it works');
});
// controllers.forEach(c => {    
//     app.use(`api/${c.prefix}`,c.initRoutes(router));
// });
console.log(router.stack);
app.set('port', configuration.port);
exports.default = app;
//# sourceMappingURL=app.js.map