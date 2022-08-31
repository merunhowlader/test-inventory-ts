import {CommonRoutesConfig} from './../common/common.routes.config';

import express from 'express';

export class UserRouts extends CommonRoutesConfig {
    constructor(app:express.Application) {
        super(app,'UserRoutes');
    }

    configureRoutes() {

        return this.app;
        
    }
}