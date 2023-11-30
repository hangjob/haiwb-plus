'use strict';

const BaseController = require('./base');

class MenuController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Menu';
        this.idSize = 8;
    }

}

module.exports = MenuController;
