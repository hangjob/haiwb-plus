'use strict';

const BaseController = require('./base');

class NavController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Nav';
        this.idSize = 8;
    }

}

module.exports = NavController;
