'use strict';

const BaseController = require('./base');

class BannerController extends BaseController {

    constructor(ctx) {
        super(ctx);
        this.modelName = 'Banner';
        this.idSize = 8;
    }

    async list() {
        try {
            const params = this.ctx.request.body;
            const where = {};
            if (params && params.type) {
                where.type = params.type;
            }
            const data = await this.ctx.model[this.modelName].findAll({where, ...params});
            this.ctx.body = this.ctx.resultData({data});
        } catch (err) {
            this.ctx.body = this.ctx.resultData({msg: err.errors || err.toString()});
        }
    }
}

module.exports = BannerController;
