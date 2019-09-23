import { Router,Request,Response } from 'express';
import { BaseController } from '../index';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../infrastructure/index';

@injectable()
export class CustomerController implements BaseController {
    
    get prefix(): string {
        console.log('in prefix');
        return "customer";
    }
    
    constructor(){}

    initRoutes(router:Router): Router {
        console.log('inside init route');
        router.get('/all',(req:Request,res:Response) => {
            console.log('here');
            res.json('done');
        });        
        return router;
    }   

    // Private method
    private getAllCustomers(res:Response) {
        res.json({
            'firstname': 'marc'
        });
    }
}