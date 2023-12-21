'use strict';

const BaseController = require('./base');

class RelevancyController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Relevancy';
        this.idSize = 8;
    }

}

module.exports = RelevancyController;
