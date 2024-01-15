'use strict';

const BaseController = require('./base');

class LogsController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Logs';
        this.idSize = 8;
    }

}

module.exports = LogsController;
