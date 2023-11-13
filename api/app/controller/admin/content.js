'use strict';

const BaseController = require('./base');

class ContentController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Content';
        this.idSize = 8;
    }

}

module.exports = ContentController;
