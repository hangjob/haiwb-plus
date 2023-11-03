'use strict';

const BaseController = require('./base');

class MenuController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Menu';
    }

}

module.exports = MenuController;
