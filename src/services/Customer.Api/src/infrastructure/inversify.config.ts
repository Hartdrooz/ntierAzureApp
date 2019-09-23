import { Container } from 'inversify';
import { TYPES,ILogger,LoggerConsole,IConfiguration,Configuration } from './index';
import { CustomerController } from '../controllers/index';

const container = new Container();
container.bind<ILogger>(TYPES.Logger).to(LoggerConsole);
container.bind<IConfiguration>(TYPES.Configuration).to(Configuration)
container.bind<CustomerController>(TYPES.CustomerController).to(CustomerController).inSingletonScope();

export { container }