'use strict';

const BaseController = require('./base');

class ReclassifyController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Reclassify';
        this.idSize = 8;
    }

}

module.exports = ReclassifyController;
