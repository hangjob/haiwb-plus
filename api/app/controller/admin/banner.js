'use strict';

const BaseController = require('./base');

class BannerController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Banner';
        this.idSize = 8;
    }

}

module.exports = BannerController;
