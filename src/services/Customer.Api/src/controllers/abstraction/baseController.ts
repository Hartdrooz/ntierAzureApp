import { Router } from 'express';

export abstract class BaseController {

    abstract get prefix(): string;

    abstract initRoutes(router:Router):Router;
}