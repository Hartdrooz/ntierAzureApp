import express from 'express';
import bodyParser from 'body-parser'
import { CustomerController } from './controllers/index';
import { Configuration } from './infrastructure/index';

const app = express();
const router = express.Router();

// Set middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Create Services 
const configuration = new Configuration();

// Create controller
const customerController = new CustomerController(router);


app.listen(configuration.port,() => {
    `Server listening on port ${configuration.port}`;
});
