import { Router,Request,Response } from 'express';
import { BaseController } from '../index';

export class CustomerController implements BaseController {
    
    constructor(private router:Router){}

    initRoutes(): Router {
        this.router.get('/all',(req:Request,res:Response) => this.getAllCustomers(res));
        return this.router;
    }

    // Private method
    private getAllCustomers(res:Response) {
        res.json({
            'firstname': 'marc'
        });
    }
}