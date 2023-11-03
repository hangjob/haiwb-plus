'use strict';

const BaseController = require('./base');

class ContentController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Content';
    }

}

module.exports = ContentController;
