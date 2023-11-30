'use strict';

const BaseController = require('./base');

class ContentController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Content';
        this.idSize = 8;
    }

    async list() {
        try {
            const params = this.ctx.request.body;
            const data = await this.ctx.service.base.list(this.modelName, { params });
            this.ctx.body = this.ctx.resultData({ data });
        } catch (err) {
            this.ctx.body = this.ctx.resultData({ msg: err.errors || err.toString() });
        }
    }

}

module.exports = ContentController;
