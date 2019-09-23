import "reflect-metadata";
import express from 'express';
import bodyParser from 'body-parser'
import { CustomerController, BaseController } from './controllers/index';
import { Configuration, TYPES, IConfiguration } from './infrastructure/index';
import { container } from './infrastructure/inversify.config';

const app = express();
const router = express.Router();

// Set middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Create Services 
const configuration = container.get<IConfiguration>(TYPES.Configuration);

// Get controller
const controllers:Array<BaseController> = new Array<BaseController>();
controllers.push(container.get<CustomerController>(TYPES.CustomerController));

// // Init all controllers and route
app.get('/',(req,res) => {
    res.json('it works');
});
// controllers.forEach(c => {    
//     app.use(`api/${c.prefix}`,c.initRoutes(router));
// });

console.log(router.stack);

app.set('port',configuration.port);

export default app;
