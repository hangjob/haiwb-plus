'use strict';

const BaseController = require('./base');

class TopicController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Topic';
        this.idSize = 8;
    }

}

module.exports = TopicController;
