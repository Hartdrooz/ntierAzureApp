import { Router } from 'express';

export abstract class BaseController {
    abstract initRoutes():Router;
}