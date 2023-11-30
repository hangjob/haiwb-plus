'use strict';

const BaseController = require('./base');

class KeysController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Keys';
        this.idSize = 8;
    }

}

module.exports = KeysController;
